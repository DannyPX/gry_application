<template>
  <div>
    <Topbar :back="true" title="Donation" />
    <div class="container">
      <DonationTitle
        v-if="selectedProduct != null"
        :title="selectedProduct.title"
      />
      <div class="donation-amount">
        <span class="currency">$</span>
        <span v-if="selectedProduct != null" class="input">{{
          selectedProduct.price.toFixed(2)
        }}</span>
        <div class="buttons">
          <img src="./../assets/up.svg" />
          <img src="./../assets/down.svg" />
        </div>
      </div>
      <span class="support">Thank you for your support</span>
      <google-pay-button
        v-if="selectedProduct != null"
        environment="TEST"
        button-type="donate"
        v-bind:button-color="buttonColor"
        v-bind:existing-payment-method-required="existingPaymentMethodRequired"
        v-bind:paymentRequest.prop="{
          apiVersion: paymentRequest.apiVersion,
          apiVersionMinor: paymentRequest.apiVersionMinor,
          allowedPaymentMethods: paymentRequest.allowedPaymentMethods,
          merchantInfo: paymentRequest.merchantInfo,
          transactionInfo: {
            totalPriceStatus: 'FINAL',
            totalPriceLabel: 'Total',
            totalPrice: selectedProduct.price.toFixed(2),
            currencyCode: 'USD',
            countryCode: 'US'
          },
          shippingAddressRequired: true,
          callbackIntents: ['PAYMENT_AUTHORIZATION']
        }"
        v-on:loadpaymentdata="onLoadPaymentData"
        v-on:error="onError"
        v-on:readytopaychange="onReadyToPayChange"
        v-bind:onPaymentAuthorized.prop="onPaymentDataAuthorized"
      ></google-pay-button>
      <div v-if="selectedProduct != null" class="paypal-button">
        <PayPal
          class="paypal"
          :amount="selectedProduct.price.toFixed(2)"
          currency="USD"
          :client="credentials"
          env="sandbox"
          :button-style="{
            label: 'paypal',
            size: 'responsive',
            shape: 'rect',
            color: 'blue'
          }"
          ref="uniqueName"
          v-on:payment-authorized="onPaypalAuthorized"
          v-on:payment-completed="onPaypalCompleted"
          v-on:payment-cancelled="onPaypalCancelled"
        >
        </PayPal>
      </div>
    </div>
  </div>
</template>

<script>
import Topbar from "@/components/Universal/Topbar.vue";
import DonationTitle from "@/components/Donation/DonationTitle.vue";
import PayPal from "vue-paypal-checkout";
import "@google-pay/button-element";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "DonateMoney",
  data() {
    return {
      existingPaymentMethodRequired: false,
      buttonColor: "white",
      buttonType: "buy",
      paymentRequest: {
        apiVersion: 2,
        apiVersionMinor: 0,
        allowedPaymentMethods: [
          {
            type: "CARD",
            parameters: {
              allowedAuthMethods: ["PAN_ONLY", "CRYPTOGRAM_3DS"],
              allowedCardNetworks: ["MASTERCARD", "VISA"]
            },
            tokenizationSpecification: {
              type: "PAYMENT_GATEWAY",
              parameters: {
                gateway: "example",
                gatewayMerchantId: "exampleGatewayMerchantId"
              }
            }
          }
        ],
        merchantInfo: {
          merchantId: "12345678901234567890",
          merchantName: "Demo Merchant"
        }
      },
      credentials: {
        sandbox: "<sandbox client id>",
        production: "<production client id>"
      }
    };
  },
  computed: {
    ...mapGetters("Goods", ["selectedProduct"])
  },
  methods: {
    ...mapActions("Goods", ["loadSelectedProduct"]),
    onLoadPaymentData(event) {
      console.log("load payment data", event.detail);
      this.$store.dispatch("Goods/pushDonate", {
        countryCode: event.detail.shippingAddress.countryCode,
        value: this.value
      });
      this.$router.push({
        name: "Donate-Complete",
        params: { name: event.detail.shippingAddress.name }
      });
    },
    onError: event => {
      console.error("error", event.error);
    },
    onPaymentDataAuthorized: paymentData => {
      console.log("payment authorized", paymentData);
      return {
        transactionState: "SUCCESS"
      };
    },
    onReadyToPayChange: event => {
      console.log("ready to pay change", event.detail);
    },
    loseFocus() {
      document.querySelector(".input").blur();
    },
    onPaypalAuthorized() {
      console.log("Authorized");
    },
    onPaypalCompleted(event) {
      console.log("Completed", event);
      this.$store.dispatch("Goods/pushDonate", {
        countryCode: event.payer.payer_info.country_code,
        value: this.value
      });
      this.$router.push({
        name: "Donate-Complete",
        params: { name: event.payer.payer_info.shipping_address.recipient_name }
      });
    },
    onPaypalCancelled() {
      console.log("Cancelled");
    },
    inputSize() {
      let input = document.querySelector(".input");
      let promise = new Promise(function(resolve) {
        resolve((input.style.width = 0));
      });
      promise.then(function() {
        let width = input.scrollWidth + 10;
        input.style.width = width + "px";
      });
    }
  },
  created() {
    this.loadSelectedProduct();
  },
  mounted() {
    this.inputSize();
  },
  components: {
    Topbar,
    DonationTitle,
    PayPal
  }
};
</script>

<style scoped>
.container {
  position: relative;
  display: flex;
  flex-flow: column nowrap;
  height: calc(100vh - 120px);
  justify-content: center;
  align-items: center;
}

.donation-amount {
  margin-top: 40px;
  height: 58px;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  width: fit-content;
  max-width: calc(100vw - 90px);
}

.currency {
  font-family: "Montserrat";
  font-size: 2.5rem;
  color: #787878;
}

.input {
  font-size: 3rem;
  margin: 0 15px;
  min-width: 0;
  width: 90px;
  border: none;
  text-align: center;
  font-family: "Montserrat";
}

.buttons {
  opacity: 0;
  display: flex;
  height: 100%;
  flex-flow: column nowrap;
  justify-content: space-evenly;
}

.buttons img {
  padding: 5px 0;
}

.support {
  margin: 10px 0 50px 0;
  font-size: 1.05rem;
  font-weight: 400;
}

.paypal {
  position: absolute;
  margin-top: 2px;
}

.paypal-button {
  position: relative;
  overflow: hidden;
  height: 40px;
  background: #009cde;
  border-radius: 5px;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 1px 0px,
    rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
}

.paypal-button:hover {
  background: rgba(0, 156, 222, 0.65);
}

@media only screen and (max-height: 760px) {
  .container {
    height: calc(100vh - 90px);
  }
}

@media only screen and (max-height: 700px) {
  .container {
    height: calc(100vh - 50px);
  }
}
</style>

<style>
.gpay-button,
.paypal {
  width: calc(100vw - 90px) !important;
  max-width: 290px;
  margin-bottom: 10px;
}
</style>
