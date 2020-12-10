<template>
  <div>
    <Topbar :back="true" title="Donation" />
    <div class="container">
      <DonationTitle title="Project" name="A Dreaming Child Center" />
    </div>
  </div>
</template>

<script>
import Topbar from "@/components/Universal/Topbar.vue";
import DonationTitle from "@/components/Donation/DonationTitle.vue";

export default {
  name: "Donate",
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
}
</style>
