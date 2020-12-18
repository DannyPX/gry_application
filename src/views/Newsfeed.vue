<template>
  <div>
    <Topbar title="Newsfeed" />

    <Twitter></Twitter>
    <!--<post v-for="post in posts"
          :post="post"
          :key="posts.indexOf(post)">
    </post>-->
    <Navbar />
  </div>
</template>

<script>
import Navbar from "@/components/Universal/Navbar.vue";
import Topbar from "@/components/Universal/Topbar.vue";
/*import Post from "@/components/Newsfeed/Post.vue";*/
import Twitter from "@/components/Newsfeed/Twitter.vue";

export default {
  name: "Newsfeed",
  components: {
    Navbar,
    Topbar,
    Twitter
  },
  data() {
    return {
      posts: [
        {
          username: "Global Radiant Youth",
          userImage: require("../assets/project1.jpg"),
          postImage: require("../assets/project3.jpg"),
          caption:
            "Gakire, a writer, social entrepreneur and public speaker, grew up in the remote village of in Ruhango District."
        },
        {
          username: "Global Radiant Youth",
          userImage: require("../assets/project3.jpg"),
          postImage: require("../assets/project3.jpg"),
          caption: "Caption test"
        }
      ]
    };
  }
};
</script>
