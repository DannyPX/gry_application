<template>
  <div :id="'product_' + id" @click="productClicked" class="product">
    <div :style="'background-image: ' + 'url(' + image + ');'" class="image" />
    <span>{{ name }}</span>
  </div>
</template>

<script>
export default {
  name: "DonationProduct",
  props: {
    name: String,
    image: String
  },
  computed: {
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
      let width = product.offsetWidth;
      let height = product.offsetHeight;

      if (width < 163) {
        product.style.maxWidth = "100vw";
        product.style.maxHeight = "100vh";
        product.style.width = width * 2 + "px";
        product.style.height = height * 2 + "px";
      } else {
        product.style.maxWidth = "163px";
        product.style.maxHeight = "175px";
        product.style.width = width / 2 + "px";
        product.style.height = height / 2 + "px";
      }
    }
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
  transition: all 0.5s ease-in-out;
}

.image {
  width: 40vw;
  height: 40vw;
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
}

span {
  display: block;
  font-size: 1rem;
  font-weight: 600;
}
</style>
