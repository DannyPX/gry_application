<template>
  <div class="project">
    <div
      :style="'background-image: ' + 'url(' + image + ');'"
      class="img"
    ></div>
    <div class="info">
      <span class="title">{{ title }}</span>
      <div class="progress">
        <div class="bar">
          <div :style="'width: ' + percentage + '%;'" class="inner-bar"></div>
        </div>
        <span class="percentage">{{ percentage }}%</span>
      </div>
      <div class="buttons">
        <Button name="See info" :inner="true" @clicked="btnClicked" />
        <Button name="Donate" :inner="false" @clicked="btnClicked" />
      </div>
    </div>
  </div>
</template>

<script>
import Button from "@/components/Universal/Button.vue";

export default {
  name: "ProjectCards",
  props: {
    title: String,
    image: String,
    percentage: Number
  },
  methods: {
    btnClicked(e) {
      switch (e) {
        case "See info":
          this.$router.push({
            name: "/Project-Details",
            // TODO: Dynamic Title
            params: { title: this.title }
          });
          break;
        case "Donate":
          this.$router.push({
            name: "/Donate-Money",
            // TODO: Dynamic Title
            params: { title: this.title }
          });
          break;
      }
    }
  },
  components: {
    Button
  }
};
</script>

<style scoped>
.project {
  position: relative;
  width: 86vw;
  max-width: 320px;
  height: auto;
  max-height: 490px;
  background: #fff;
  border-radius: 24px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.16);
  display: flex;
  flex-flow: column nowrap;
  margin-bottom: 10px;
}

.img {
  width: auto;
  max-width: 86vw;
  height: calc(40vh);
  background-size: cover;
  background-position: center;
  border-radius: 24px;
}

.info {
  padding: 15px 24px;
}

.title {
  display: block;
  text-align: center;
  color: #000;
  font-size: clamp(1.2rem, 6vw, 1.4rem);
  font-weight: 600;
  padding-bottom: 15px;
  border-bottom: 1.2px solid #000;
}

.progress {
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  margin-top: 20px;
}

.bar {
  position: relative;
  height: 22px;
  width: calc(100% - 35px);
  background: #fff;
  box-shadow: inset 0px 1px 4px rgba(0, 0, 0, 0.19);
  border-radius: 37px;
}

.inner-bar {
  position: absolute;
  height: 16px;
  background: linear-gradient(90.76deg, #62d7db 0%, #00afb5 100%);
  border-radius: 37px;
  top: 50%;
  transform: translateY(-50%);
  margin-left: 3px;
}

.percentage {
  display: block;
  font-family: "Montserrat";
  font-size: 0.9rem;
  font-weight: 400;
  line-height: 22px;
}

.buttons {
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  margin-top: 20px;
}

.button1-outer {
  position: relative;
  height: 45px;
  width: calc(50% - 10px);
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(180deg, #62d7db 0%, #00afb5 100%);
  border-radius: 30px;
}

.button1-inner {
  position: absolute;
  height: 39px;
  width: calc(100% - 6px);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.1rem;
  font-weight: 600;
  background: #fff;
  border-radius: 30px;
}

.button2 {
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 1.1rem;
  font-weight: 600;
  height: 45px;
  width: 130px;
  background: linear-gradient(180deg, #62d7db 0%, #00afb5 100%);
  border-radius: 30px;
}

@media screen and (max-width: 350px) {
  .info {
    padding: 10px;
  }

  .title {
    padding-bottom: 10px;
  }

  .progress {
    margin-top: 10px;
  }

  .buttons {
    margin-top: 10px;
  }
}
</style>
