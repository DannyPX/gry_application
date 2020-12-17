<template>
  <div>
    <Topbar :back="true" title="Goods" />
    <div class="container">
      <DonationProduct
        v-for="(product, index) in temp"
        :key="index + ' ' + product.title"
        :name="product.title"
        :image="product.picture"
        :description="product.description"
        @donateClicked="toDonate"
      />
    </div>
  </div>
</template>

<script>
import Topbar from "@/components/Universal/Topbar.vue";
import DonationProduct from "@/components/Donation/DonationProduct.vue";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "DonateGoods",
  computed: {
    ...mapGetters("Goods", ["temp"])
  },
  methods: {
    ...mapActions("Goods", ["setSelectedProduct"]),
    toDonate(name) {
      this.setSelectedProduct(name);
      this.$router.push("/donate-product");
    }
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
