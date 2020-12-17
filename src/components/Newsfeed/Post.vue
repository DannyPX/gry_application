<template>
  <div class="vuegram-post">
    <div class="header level">
      <div class="level-left">
        <figure class="avatar">
          <img class="avatar" src="@/assets/project1.jpg" />
        </figure>
        <i class="fas fa-heart mr-3"></i>
        <span class="username">{{post.username}}</span>

      </div>
    </div>
    <div class="content">
      <p class="caption"> {{post.caption}}</p>
    </div>
    <div class="img"
         :style="'background-image: ' + 'url(' + post.userImage + ');'">
    </div>
    <div class="socialbuttons">
    <img src="../../assets/share.svg" />
    </div>



  </div>
</template>

<script>

export default {
  name: "Post",
  props: {
    post: Object,
  },
  components: {

  }

};
</script>

<style scoped>
.vuegram-post {
  vertical-align: middle;
  position: relative;
  justify-content: center;
  margin: 0 auto;
  width: 86vw;
  max-width: 320px;
  height: auto;
  max-height: 490px;
  background: #fff;
  border-radius: 24px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.16);
  display: flex;
  flex-flow: column nowrap;
  margin-top: 10px;

}
.username{
  font-weight: 600;
  line-height: 80px;
  margin-left: 10px;

}
.level-left{
  text-align: left;
}
.socialbuttons{
  text-align: right;
  margin-right: 10px;
}
.img {
  object-fit: contain;
  width: auto;
  height: 200px;
  background-size: contain;
  margin:5px;
  border-radius: 15px;
  background-position: center;
}
.avatar{
  margin:5px;
  max-width: 64px;
  height: 64px;
  position: relative;
  float: left;
  background-size: cover;
  background-position: center;
  border-radius: 50%;
}
.content{
  margin: 10px;
}
</style>
