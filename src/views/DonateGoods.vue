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
        @productClicked="showDetails"
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
  data() {
    return {
      active: null
    };
  },
  computed: {
    ...mapGetters("Goods", ["temp"])
  },
  methods: {
    ...mapActions("Goods", ["setSelectedProduct"]),
    toDonate(name) {
      this.setSelectedProduct(name);
      this.$router.push("/donate-product");
    },
    showDetails(id) {
      if (this.active == null) {
        console.log("1");
        this.expandBox(id);
      } else if (this.active == id) {
        console.log("2");
        this.simplifyBox(this.active);
      } else {
        console.log("3");
        this.simplifyBox(this.active);
        this.expandBox(id);
      }
    },
    expandBox(id) {
      let product = document.getElementById(id);
      let image = product.querySelector(".image");
      let wrap = product.querySelector(".wrap");
      let details = product.querySelectorAll(".details");
      let width = product.offsetWidth;
      let height = product.offsetHeight;

      product.style.order = -1;
      this.changeMax(product, "100vw", "100vh");
      this.changeSize(product, width, height, "*");
      this.changeSize(image, "60vw", "60vw");
      wrap.style.padding = "0 10px";
      this.changeDetails(details, "flex");
      window.scroll({ top: 0, behavior: "smooth" });
      this.active = id;
    },
    simplifyBox(id) {
      let product = document.getElementById(id);
      let image = product.querySelector(".image");
      let wrap = product.querySelector(".wrap");
      let details = product.querySelectorAll(".details");
      let width = product.offsetWidth;
      let height = product.offsetHeight;

      product.style.order = "initial";
      this.changeMax(product, "163px", "175px");
      this.changeSize(product, width, height, "/");
      this.changeSize(image, "40vw", "40vw");
      wrap.style.padding = "0";
      this.changeDetails(details, "none");
      this.active = null;
    },
    changeMax(element, valueW, valueH) {
      element.style.maxWidth = valueW;
      element.style.maxHeight = valueH;
    },
    changeSize(element, ogWidth, ogHeight, operator) {
      let operators = {
        "*": function(a, b) {
          return a * b + "px";
        },
        "/": function(a, b) {
          return a / b + "px";
        }
      };
      element.style.width =
        operator != null ? operators[operator](ogWidth, 2) : ogWidth;
      element.style.height =
        operator != null ? operators[operator](ogHeight, 2) : ogHeight;
    },
    changeDetails(element, value) {
      element.forEach(item => {
        item.style.display = value;
      });
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
