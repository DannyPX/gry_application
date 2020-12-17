<template>
  <div :id="'product_' + id" @click="productClicked" class="product">
    <div :style="'background-image: ' + 'url(' + image + ');'" class="image" />
    <div class="wrap">
      <span class="name">{{ name }}</span>
      <span class="description details">{{ description }}</span>
      <Button @clicked="btnClicked" class="button details" name="Donate" />
    </div>
  </div>
</template>

<script>
import Button from "@/components/Universal/Button.vue";
import { mapGetters } from "vuex";

export default {
  name: "DonationProduct",
  props: {
    name: String,
    description: String,
    image: String
  },
  computed: {
    ...mapGetters("Goods", ["selectedProduct"]),
    id() {
      return this.name
        .split(" ")
        .join("")
        .toLowerCase();
    }
  },
  methods: {
    productClicked() {
      let product = document.getElementById("product_" + this.id);
      let image = product.querySelector(".image");
      let wrap = product.querySelector(".wrap");
      let details = product.querySelectorAll(".details");
      let width = product.offsetWidth;
      let height = product.offsetHeight;

      if (width < 166) {
        product.style.order = -1;
        this.changeMax(product, "100vw", "100vh");
        this.changeSize(product, width, height, "*");
        this.changeSize(image, "60vw", "60vw");
        wrap.style.padding = "0 10px";
        this.changeDetails(details, "flex");
        window.scroll({ top: 0, behavior: "smooth" });
      } else {
        product.style.order = "initial";
        this.changeMax(product, "163px", "175px");
        this.changeSize(product, width, height, "/");
        this.changeSize(image, "40vw", "40vw");
        wrap.style.padding = "0";
        this.changeDetails(details, "none");
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
    },
    btnClicked() {
      this.$emit("donateClicked", this.name);
    }
  },
  mounted() {
    let details = document
      .getElementById("product_" + this.id)
      .querySelectorAll(".details");
    this.changeDetails(details, "none");
  },
  components: {
    Button
  }
};
</script>

<style scoped>
.product {
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  width: 42vw;
  max-width: 163px;
  height: auto;
  max-height: 175px;
  background: #fff;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.16);
  border-radius: 20px;
  margin: 5px;
  padding: 10px;
  box-sizing: border-box;
}

.image {
  width: 40vw;
  height: 40vw;
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
}

.wrap {
  margin-top: auto;
}

span {
  display: block;
}

.name {
  font-size: 1rem;
  font-weight: 700;
}

.description {
  font-size: 0.95rem;
  font-weight: 500;
  margin-bottom: 10px;
}

.button {
  margin-bottom: 5px;
  left: 50%;
  transform: translateX(-50%);
}
</style>
