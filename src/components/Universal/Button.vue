<template>
  <div class="button-outer" @click="clicked(name)">
    <div :class="inner ? 'button-inner' : false">{{ name }}</div>
  </div>
</template>

<script>
export default {
  name: "Button",
  props: {
    name: String,
    inner: Boolean
  },
  methods: {
    clicked(name) {
      this.$emit("clicked", name);
    }
  }
};
</script>

<style scoped>
.button-outer {
  cursor: pointer;
  position: relative;
  height: 45px;
  width: clamp(118px, 35vw, 126px);
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(180deg, #62d7db 0%, #00afb5 100%);
  border-radius: 30px;
  color: #ffffff;
  font-size: 1.1rem;
  font-weight: 600;
  transition: background 0.3s ease-in-out;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
}

.button-outer:hover {
  background: linear-gradient(90deg, #62d7db 0%, #00afb5 100%);
}

.button-inner {
  position: absolute;
  height: 39px;
  width: clamp(112px, 35vw, 120px);
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fff;
  border-radius: 30px;
  color: #000000;
}
</style>
