<template>
  <div id="home">
    <flickity class="projects" ref="flickity" :options="flickityOptions">
      <ProjectCards
        class="project-item"
        v-for="(project, index) in projects"
        :key="'project: ' + index"
        :title="project.title"
        :image="project.image"
        :percentage="project.percentage"
      />
    </flickity>
  </div>
</template>

<script>
import Flickity from "vue-flickity";
import ProjectCards from "@/components/Home/ProjectCards.vue";

export default {
  name: "Home",
  data() {
    return {
      flickityOptions: {
        initialIndex: 0,
        prevNextButtons: false,
        pageDots: true,
        wrapAround: false,
        selectedAttraction: 0.1,
        friction: 0.4,
        dragThreshold: 5
      },
      projects: [
        {
          title: "A Dreaming Child Center",
          image: require("../assets/project1.jpg"),
          percentage: 86
        },
        {
          title: "Youth Social Exchange",
          image: require("../assets/project2.jpeg"),
          percentage: 62
        },
        {
          title: "Youth Voice Festival",
          image: require("../assets/project3.jpg"),
          percentage: 73
        }
      ]
    };
  },
  components: {
    Flickity,
    ProjectCards
  }
};
</script>

<style>
.flickity-page-dots {
  bottom: 80px;
}

.flickity-page-dots .dot {
  width: 14px;
  height: 14px;
  background: transparent;
  margin: 3px;
  opacity: 1;
  border: 1px solid #787878;
  box-sizing: border-box;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
}

.flickity-page-dots .dot.is-selected {
  border: none;
  background: linear-gradient(180deg, #62d7db 0%, #00afb5 100%);
}
</style>

<style scoped>
.project-item {
  margin-right: 20px;
  display: flex;
  align-items: center;
}
</style>
