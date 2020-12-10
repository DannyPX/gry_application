<template>
  <div>
    <Topbar :back="true" title="Donation" />
    <div class="container">
      <DonationTitle title="Project" name="A Dreaming Child Center" />
      <currency-input
        class="input"
        v-model="value"
        currency="USD"
        locale="en"
      />
      <div>
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
              countryCode: 'US',
            },
            shippingAddressRequired: true,
            callbackIntents: ['PAYMENT_AUTHORIZATION'],
          }"
          v-on:loadpaymentdata="onLoadPaymentData"
          v-on:error="onError"
          v-on:readytopaychange="onReadyToPayChange"
          v-bind:onPaymentAuthorized.prop="onPaymentDataAuthorized"
        ></google-pay-button>
      </div>
    </div>
  </div>
</template>

<script>
import Topbar from "@/components/Universal/Topbar.vue";
import DonationTitle from "@/components/Donation/DonationTitle.vue";
import '@google-pay/button-element'

export default {
  name: "Donate",
  data() {
    return {
      value: 1,
      existingPaymentMethodRequired: false,
      buttonColor: 'default',
      buttonType: 'buy',
      paymentRequest: {
        apiVersion: 2,
        apiVersionMinor: 0,
        allowedPaymentMethods: [
          {
            type: 'CARD',
            parameters: {
              allowedAuthMethods: ['PAN_ONLY', 'CRYPTOGRAM_3DS'],
              allowedCardNetworks: ['MASTERCARD', 'VISA'],
            },
            tokenizationSpecification: {
              type: 'PAYMENT_GATEWAY',
              parameters: {
                gateway: 'example',
                gatewayMerchantId: 'exampleGatewayMerchantId',
              },
            },
          },
        ],
        merchantInfo: {
          merchantId: '12345678901234567890',
          merchantName: 'Demo Merchant',
        },
      },
    };
  },
  methods: {
    onLoadPaymentData: event => {
      console.log('load payment data', event.detail);
    },
    onError: event => {
      console.error('error', event.error);
    },
    onPaymentDataAuthorized: paymentData => {
      console.log('payment authorized', paymentData);

      return {
        transactionState: 'SUCCESS',
      };
    },
    onReadyToPayChange: event => {
      console.log('ready to pay change', event.detail);
    },
  },
  components: {
    Topbar,
    DonationTitle
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
  margin-top: 50px;
  height: 30px;
  font-size: 1.2rem;
  border: none;
  text-align: center;
}
</style>
