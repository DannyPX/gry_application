<template>
  <div>
    <Topbar :back="true" title="Goods" />
    <div class="container">
      <DonationProduct
        v-for="(product, index) in temp"
        :key="index + ' ' + product.title"
        :name="product.title"
        :image="product.picture"
      />
    </div>
  </div>
</template>

<script>
import Topbar from "@/components/Universal/Topbar.vue";
import DonationProduct from "@/components/Donation/DonationProduct.vue";
import { mapGetters } from "vuex";

export default {
  name: "DonateGoods",
  computed: {
    ...mapGetters("Goods", ["temp"])
  },
  components: {
    Topbar,
    DonationProduct
  }
};
</script>

<style scoped>
.container {
  margin-top: 25px;
  display: flex;
  flex-flow: row wrap;
  padding: -10px 10px;
  justify-content: center;
}
</style>
