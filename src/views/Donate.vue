<template>
  <div>
    <Topbar title="Donations" />
    <div class="container">
      <span class="subtitle">About our options</span>
      <span class="text">
        First and foremost, we appreciate any kind of donation and we will do
        our best to help all of those in need.
      </span>
      <span class="text">
        Below we have two options that allow you to donate to our organisation,
        financial and products.
      </span>
      <span class="text">
        <b>Financial</b> will help us in general and allows us to choose what to
        do with the contribution.
      </span>
      <span class="text">
        <b>Products</b> will help us with obtaining particular items that we
        need, for example school supplies.
      </span>
      <span class="subtitle option">Donate options</span>
      <div class="btn-wrap">
        <div @click="navigateTo('/donate-money')" class="btn">
          <img src=".././assets/financial.svg" alt="Donate financially" />
        </div>
        <div @click="navigateTo('/donate-product')" class="btn">
          <img src=".././assets/products.svg" alt="Donate products" />
        </div>
      </div>
    </div>
    <Navbar />
  </div>
</template>

<script>
import Topbar from "@/components/Universal/Topbar.vue";
import Navbar from "@/components/Universal/Navbar.vue";

export default {
  name: "Donate",
  methods: {
    navigateTo(page) {
      this.$router.push(page);
    }
  },
  components: {
    Topbar,
    Navbar
  }
};
</script>

<style scoped>
.container {
  position: relative;
  display: flex;
  flex-flow: column nowrap;
  height: calc(100vh - 165px);
  padding: 0 37px;
  justify-content: center;
  align-items: center;
}

.subtitle {
  font-size: 1.1rem;
  font-weight: 600;
}

.option {
  margin-top: 25px;
}

.text {
  text-align: center;
  font-weight: 400;
  margin-top: 10px;
}

.text:not(:last-child) {
  margin-bottom: 5px;
}

.btn-wrap {
  display: flex;
  flex-flow: row nowrap;
}

.btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 85px;
  height: 85px;
  border-radius: 50%;
  background: linear-gradient(180deg, #62d7db 0%, #00afb5 100%);
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
  margin: 10px;
}

@media only screen and (max-height: 760px) {
  .container {
    height: calc(100vh - 145px);
  }
}

@media only screen and (max-height: 700px) {
  .container {
    height: calc(100vh - 125px);
  }
}

@media only screen and (max-height: 600px) {
  .container {
    height: calc(100vh - 115px);
    padding: 0 15px;
  }

  .option {
    margin-top: 10px;
  }

  .text {
    margin-top: 5px;
  }

  .text:not(:last-child) {
    margin-bottom: 2px;
  }
}
</style>
