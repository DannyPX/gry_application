<template>
  <div class="feed" >
    <Timeline id="global_radiant" sourceType="profile"  :options="{ tweetLimit: '15' }"/>
  </div>

</template>

<script>
import { Timeline } from 'vue-tweet-embed'
export default {
  name: "Twitter",
  components: {
    Timeline
  }
}
</script>

<style scoped>
.feed{
  margin: 20px;
  border-radius: 24px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.16);
}
</style>