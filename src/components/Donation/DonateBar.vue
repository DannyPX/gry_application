<template>
  <div id="donatebar">
    <Button name="Donate" @clicked="toDonate" />
  </div>
</template>

<script>
import Button from "@/components/Universal/Button.vue";

export default {
  name: "DonateBar",
  methods: {
    toDonate() {
      this.$router.push({
        name: "/Donate-Money"
      });
    }
  },
  components: {
    Button
  }
};
</script>

<style scoped>
#donatebar {
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 10vh;
  background: #ffffff;
  bottom: 0;
  box-shadow: 0px -2px 4px rgba(0, 0, 0, 0.1);
}
</style>
