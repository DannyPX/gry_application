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
      this.$emit("productClicked", `product_${this.id}`);
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
  cursor: pointer;
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
  max-width: 100%;
  max-height: 100%;
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
