<template>
  <div id="topbar">
    <div class="filler"></div>
    <div class="wrap">
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
  width: 100%;
  display: flex;
  flex-flow: column nowrap;
}

.filler {
  width: inherit;
  height: 57px;
}

.wrap {
  width: inherit;
  height: 18px;
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
  cursor: pointer;
}

span {
  display: block;
  font-size: 1.1rem;
  font-weight: 800;
}

.placeholder {
  width: 16px;
  height: 16px;
}
</style>
