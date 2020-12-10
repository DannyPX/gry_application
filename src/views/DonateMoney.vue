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
      <button @click="test">klik</button>
    </div>
  </div>
</template>

<script>
import Topbar from "@/components/Universal/Topbar.vue";
import DonationTitle from "@/components/Donation/DonationTitle.vue";

export default {
  name: "Donate",
  data() {
    return {
      value: 1
    };
  },
  methods: {
    test() {
      console.log(this.value.toFixed(2));
    }
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
