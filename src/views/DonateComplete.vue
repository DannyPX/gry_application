<template>
  <div>
    <h1>This is the donate thanks page</h1>
    <Navbar />
  </div>
</template>

<script>
import Navbar from "@/components/Universal/Navbar.vue";

export default {
  name: "DonateComplete",
  components: {
    Navbar
  },
  props: {
    name: String
  }
};
</script>
