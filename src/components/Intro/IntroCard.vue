<template>
  <div class="project">
    <div
      :style="'background-image: ' + 'url(' + image + ');'"
      class="img"
    ></div>
    <div class="info">
      <span class="title">{{ title }}</span>
      <span class="text">{{ text }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProjectCards",
  props: {
    title: String,
    image: String,
    text: String
  }
};
</script>

<style scoped>
.project {
  position: relative;
  width: 86vw;
  max-width: 320px;
  background: transparent;
  border-radius: 24px;
  display: flex;
  flex-flow: column nowrap;
  margin-bottom: 10px;
}

.img {
  height: 85vw;
  max-height: 300px;
  position: relative;
  background-size: cover;
  background-position: center;
  border-radius: 50%;
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 85vw;
  max-width: 300px;
  border: 2px solid #2ec3bb;
}

.info {
  padding: 15px 24px;
}

.title {
  display: block;
  text-align: left;
  color: #fff;
  font-size: 1.3rem;
  font-weight: 600;
  padding-bottom: 15px;
}
.text {
  display: block;
  text-align: left;
  color: #fff;
  font-size: 0.9rem;
  font-weight: 400;
  padding-bottom: 15px;
}

@media only screen and (max-height: 700px) {
  .img {
    max-height: 260px;
    max-width: 260px;
  }
}

@media only screen and (max-height: 600px) {
  .img {
    max-height: 180px;
    max-width: 180px;
  }
}
</style>
