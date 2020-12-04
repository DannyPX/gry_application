<template>
  <div id="topbar">
    <img
      v-if="back"
      src="../../assets/back.svg"
      @click="goBack"
      alt="To previous page"
    />
    <div v-else class="placeholder"></div>
    <span>{{ title }}</span>
    <div class="placeholder"></div>
  </div>
</template>

<script>
export default {
  name: "Topbar",
  props: {
    title: String,
    back: Boolean
  },
  methods: {
    goBack() {
      this.$router.back();
    }
  }
};
</script>

<style scoped>
#topbar {
  position: fixed;
  width: 100vw;
  height: 18px;
  margin-top: 57px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  padding: 0 19px;
}

img {
  width: 16px;
  height: 16px;
}

span {
  display: block;
  font-size: 1.1rem;
  font-weight: 600;
}

.placeholder {
  width: 16px;
  height: 16px;
}
</style>
