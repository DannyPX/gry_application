<template>
  <div>
    <Topbar :back="true" title="Donation" />
    <div class="container">
      <DonationTitle title="Project" name="A Dreaming Child Center" />
      <currency-input
        class="input"
        v-model="value"
        :currency="null"
        locale="en"
      />
      <span class="support">Thank you for your support</span>
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
  font-size: 3rem;
  border: none;
  text-align: center;
  font-family: "Montserrat";
}

.support {
  margin: 10px 0 50px 0;
  font-size: 1.05rem;
}
</style>
