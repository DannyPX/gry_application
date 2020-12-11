<template>
  <div>
    <Topbar :back="true" :detailed="true" />
    <div class="container">
      <div
        :style="'background-image: ' + 'url(' + image + ');'"
        class="header"
      />
      <div class="info">
        <span class="title">{{ title }}</span>
        <div class="progress">
          <div class="bar">
            <div :style="'width: ' + percentage + '%;'" class="inner-bar" />
          </div>
          <span class="percentage">{{ percentage }}%</span>
        </div>
        <span class="subtitle">Overview</span>
        <span class="description">
          The center comprises of a nursery school, a library and a computer
          lab. It provides children and local communities with space and
          resources to access quality education and to allow them to explore the
          world around them and beyond.
        </span>
        <span class="more">- Click to read more -</span>
        <span class="subtitle last">Image Gallery</span>
      </div>
    </div>
    <DonateBar />
  </div>
</template>

<script>
import Topbar from "@/components/Universal/Topbar.vue";
import DonateBar from "@/components/Donation/DonateBar.vue";

export default {
  name: "ProjectDetails",
  data() {
    return {
      image: require("../assets/project1.jpg"),
      title: "A Dreaming Child Center",
      percentage: 86
    };
  },
  components: {
    Topbar,
    DonateBar
  }
};
</script>

<style scoped>
.container {
  position: absolute;
  top: 0;
  width: 100vw;
  height: auto;
  z-index: -1;
}

.header {
  width: 100%;
  height: 35vh;
  background-size: cover;
  background-position: center;
  border-radius: 0 0 24px 24px;
}

.info {
  padding: 0 15px;
}

span {
  display: block;
}

.title {
  font-size: 1.5rem;
  margin-top: 10px;
  font-weight: 600;
  padding-bottom: 10px;
  border-bottom: 1px solid black;
}

.progress {
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  margin-top: 15px;
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

.subtitle {
  font-size: 1.2rem;
  font-weight: 600;
  margin: 10px 0 5px 0;
}

.more {
  margin-top: 5px;
  text-align: center;
  color: #00afb5;
}

.last {
  margin-bottom: 20vh;
}
</style>
