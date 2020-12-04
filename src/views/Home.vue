<template>
  <div id="home">
    <Topbar title="Projects" />
    <splide :options="options" class="projects">
      <splide-slide
        v-for="(project, index) in projects"
        :key="'project: ' + index"
      >
        <ProjectCards
          :title="project.title"
          :image="project.image"
          :percentage="project.percentage"
        />
      </splide-slide>
    </splide>
  </div>
</template>

<script>
import { Splide, SplideSlide } from "@splidejs/vue-splide";
import ProjectCards from "@/components/Home/ProjectCards.vue";
import Topbar from "@/components/Universal/Topbar.vue";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";

export default {
  name: "Home",
  data() {
    return {
      options: {
        perPage: 1,
        pagination: true,
        gap: "2rem",
        autoHeight: true,
        arrows: false
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
    Splide,
    SplideSlide,
    ProjectCards,
    Topbar
  }
};
</script>

<style scoped>
.projects {
  margin-top: 5vh;
}
</style>

<style>
.splide__pagination {
  bottom: -5vh;
}

.splide__pagination__page {
  width: 14px;
  height: 14px;
  background: transparent;
  border: 1px solid #787878;
  box-sizing: border-box;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
}

.splide__pagination__page.is-active {
  transform: scale(1.2);
  background: linear-gradient(180deg, #62d7db 0%, #00afb5 100%);
  border: none;
  box-sizing: border-box;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
}

.splide__slide {
  padding-left: calc((100vw - 320px) / 2);
}
</style>
