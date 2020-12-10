<template>
  <div>
    <Topbar :back="true" title="Donation" />
    <div class="container">
      <DonationTitle title="Project" name="A Dreaming Child Center" />
      <currency-input
        class="input"
        v-model="value"
        :currency="null"
        locale="en"
      />
      <span class="support">Thank you for your support</span>
      <google-pay-button
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
            totalPrice: value.toFixed(2),
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
      <PayPal
        class="paypal"
        :amount="value.toFixed(2)"
        currency="USD"
        :client="credentials"
        env="sandbox"
        :button-style="{
          label: 'paypal',
          size: 'responsive',
          shape: 'rect',
          color: 'blue'
        }"
      >
      </PayPal>
    </div>
  </div>
</template>

<script>
import Topbar from "@/components/Universal/Topbar.vue";
import DonationTitle from "@/components/Donation/DonationTitle.vue";
import PayPal from "vue-paypal-checkout";
import "@google-pay/button-element";

export default {
  name: "Donate",
  data() {
    return {
      value: 1,
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
        sandbox:
          "access_token$sandbox$my2fccxtzh9zsmvq$f61aeb5725980aabcc113ca11038eafa",
        production: "<production client id>"
      }
    };
  },
  methods: {
    onLoadPaymentData: (event) => {
      console.log("load payment data", event.detail);
    },
    onError: (event) => {
      console.error("error", event.error);
    },
    onPaymentDataAuthorized: (paymentData) => {
      console.log("payment authorized", paymentData);

      return {
        transactionState: "SUCCESS"
      };
    },
    onReadyToPayChange: (event) => {
      console.log("ready to pay change", event.detail);
    }
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
  height: calc(100vh - 150px);
  justify-content: center;
  align-items: center;
}

.input {
  margin-top: 40px;
  font-size: 3rem;
  border: none;
  text-align: center;
  font-family: "Montserrat";
  width: calc(100vw - 90px);
}

.support {
  margin: 10px 0 50px 0;
  font-size: 1.05rem;
  font-weight: 300;
}

.paypal {
  overflow: hidden;
  height: 35px;
  box-shadow: 0px 2px 5px rgba(4, 20, 69, 0.1);
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
