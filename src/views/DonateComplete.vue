<template>
  <div class="container">
    <img src="./../assets/thanks.jpg" alt=""/>
    <br />
    <h1>Thank you {{ name }}!</h1>
    <br />
    <p>Your donation is extremely important to our cause and we would like to thank you for your generosity. Your gift will help make dreams come true.</p>
    <br />
    <p> Check our newsfeed to see how all our projects are progressing.</p>
    <div class="buttons">
      <div class="button">
        <Button name="Home" :inner="true" @clicked="btnClicked" />
      </div>
      <div class="button">
        <Button name="Share" @clicked="btnClicked" />
      </div>
    </div>
  </div>
</template>

<script>
import Button from '../components/Universal/Button.vue';

export default {
  components: { Button },
  name: "DonateComplete",
  props: {
    name: String
  },
  methods: {
    btnClicked(e) {
      switch (e) {
        case "Home":
          this.$router.push("/");
          break;
        case "Share":
            // TODO: Sharing
          break;
      }
    }
  }
};
</script>

<style scoped>
.container {
  position: relative;
  display: flex;
  flex-flow: column nowrap;
  height: calc(100vh - 50px);
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 20px;
}

.buttons {
  display: flex;
}

.button {
  padding: 20px;
}
</style>