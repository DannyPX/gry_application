<template>
  <div>
    <Topbar :back="true" title="Goods" />
    <div class="container">
      <DonationProduct
        v-for="(product, index) in goods"
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
    ...mapGetters("Goods", ["goods"])
  },
  methods: {
    ...mapActions("Goods", ["setSelectedProduct", "loadGoods"]),
    toDonate(name) {
      this.setSelectedProduct(name);
      this.$router.push("/donate-product");
    },
    showDetails(id) {
      if (this.active == null) {
        this.editBox(
          id,
          -1,
          "100vw",
          "100vh",
          "*",
          "60vw",
          "0 10px",
          "flex",
          "increase"
        );
      } else if (this.active == id) {
        this.editBox(
          this.active,
          "initial",
          "163px",
          "175px",
          "/",
          "40vw",
          "0",
          "none",
          "decrease"
        );
      } else {
        this.editBox(
          this.active,
          "initial",
          "163px",
          "175px",
          "/",
          "40vw",
          "0",
          "none",
          "decrease"
        );
        this.editBox(
          id,
          -1,
          "100vw",
          "100vh",
          "*",
          "60vw",
          "0 10px",
          "flex",
          "increase"
        );
      }
    },
    editBox(id, order, maxW, maxH, operator, imgSize, padding, display, type) {
      let product = document.getElementById(id);
      let image = product.querySelector(".image");
      let wrap = product.querySelector(".wrap");
      let details = product.querySelectorAll(".details");
      let width = product.offsetWidth;
      let height = product.offsetHeight;

      product.style.order = order;
      this.changeMax(product, maxW, maxH);
      this.changeSize(product, width, height, operator);
      this.changeSize(image, imgSize, imgSize);
      wrap.style.padding = padding;
      this.changeDetails(details, display);

      switch (type) {
        case "increase":
          window.scroll({ top: 0, behavior: "smooth" });
          this.active = id;
          break;
        case "decrease":
          this.active = null;
          break;
      }
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
  mounted() {
    this.loadGoods();
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
