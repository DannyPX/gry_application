<template>
  <div class="projects">
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
          <div class="button1-outer">
            <div class="button1-inner">See info</div>
          </div>
          <div class="button2">Donate</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProjectCards",
  props: {
    title: String,
    image: String,
    percentage: Number
  }
};
</script>

<style scoped>
.projects {
  position: relative;
  height: calc(100vh - 50px);
}

.project {
  width: auto;
  height: 490px;
  background: #fff;
  border-radius: 24px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.16);
  display: flex;
  flex-flow: column nowrap;
}

.img {
  width: 320px;
  height: 310px;
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
  font-size: 1.4rem;
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
  font-size: 0.95rem;
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
  width: 130px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(180deg, #62d7db 0%, #00afb5 100%);
  border-radius: 30px;
}

.button1-inner {
  position: absolute;
  height: 39px;
  width: 124px;
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
</style>
