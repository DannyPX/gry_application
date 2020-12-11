<template>
  <div class="project">
    <div id="home" :style="{'background-image': 'url(' + require('@/assets/Intro/backgroundintro.jpg') + ')'}"/>
    <div id="app">
      <img class="imglogo" src="@/assets/Intro/logo.png">
    </div>
    <div
        :style="'background-image: ' + 'url(' + image + ');'"
        class="img"
    ></div>
    <div class="info">
      <span class="title">{{ title }}</span>
      <span class="text">{{ text }}</span>



    </div>
    <button class="button2">
      Start donating now
    </button>
  </div>
</template>

<script>


export default {
  name: "ProjectCards",
  props: {
    title: String,
    image: String,
    text: String
  },
  methods: {
    btnClicked(e) {
      switch (e) {
        case "See info":
          console.log("See info was clicked");
          break;
        case "Donate":
          console.log("Donate was clicked");
          break;
      }
    }
  },
  components: {

  }
};
</script>

<style scoped>
.project {
  position: relative;
  width: 86vw;
  max-width: 320px;
  height: 95%;
  max-height: 600px;
  background: transparent;
  border-radius: 24px;
  display: flex;
  flex-flow: column nowrap;
  margin-bottom: 10px;
}

.img {
  height: 280px;
  position: relative;
  background-size: cover;
  background-position: center;
  border-radius: 10000px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 88%;
  border: 2px solid deepskyblue;
}
.imglogo {
  height: 90px;
  max-height: 1000px;
  background-size: cover;
  background-position: center;
  display: block;
  margin-left: auto;
  margin-right: auto;


}

.info {
  padding: 15px 24px;
}

.title {
  display: block;
  text-align: left;
  color: #FFF;
  font-size: 1.2rem;
  font-weight: 600;
  padding-bottom: 15px;
}
.text {
  display: block;
  text-align: left;
  color: #FFF;
  font-size: 0.8rem;
  font-weight: 400;
  padding-bottom: 15px;
}
.logo {
  display: block;
  text-align: center;
  color: #FFF;
  font-size: 1.4rem;
  font-weight: 600;
  padding-bottom: 15px;
}

.button2 {
  display: flex;
  position:relative;


  width:100px;


  align-items: center;
  justify-content: center;
  color: #FFF;
  vertical-align: bottom;
  font-size: 1.1rem;
  font-weight: 600;
  height: 45px;
  width: 100%;
  background: linear-gradient(180deg, #62d7db 0%, #00afb5 100%);
  border-radius: 15px;
}

@media screen and (max-width: 350px) {
  .info {
    padding: 10px;
  }

  .title {
    padding-bottom: 10px;
  }


  .buttons {
    margin-top: 10px;
  }
}
</style>
