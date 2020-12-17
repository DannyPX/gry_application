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
      <div class="button" v-if="ifMobile">
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
    name: String,
    ifMobile: {
      default: /Mobi|Android/i.test(navigator.userAgent)
    }
  },
  methods: {
    async btnClicked(e) {
      const shareData = {
        title: 'Global Radiant Youth',
        text: 'Look! I\u0027ve donated to Global Radiant Youth. Go check it out!',
        url: window.location.origin,
      }

      switch (e) {
        case "Home":
          this.$router.push("/");
          break;
        case "Share":
          try {
            await navigator.share(shareData)
            console.log("successfully shared")
          } catch(err) {
            console.error("Error: " + err)
          }
          break;
      }
    },
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