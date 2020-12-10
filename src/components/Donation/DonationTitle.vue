<template>
  <div class="wrap">
    <span class="title">{{ title }}</span>
    <span class="name">{{ name }}</span>
  </div>
</template>

<script>
export default {
  name: "DonationTitle",
  props: {
    title: String,
    name: String
  }
};
</script>

<style scoped>
.wrap {
  display: flex;
  padding: 0 45px;
  flex-flow: column nowrap;
  text-align: center;
}

span {
  display: block;
}

.title {
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 5px;
}

.name {
  font-size: 1.5rem;
  font-weight: 600;
  color: #787878;
  padding-bottom: 10px;
  border-bottom: 1px solid #787878;
}
</style>
