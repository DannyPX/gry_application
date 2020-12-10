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
    <Navbar />
  </div>
</template>

<script>
import { Splide, SplideSlide } from "@splidejs/vue-splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import ProjectCards from "@/components/Home/ProjectCards.vue";
import Topbar from "@/components/Universal/Topbar.vue";
import Navbar from "@/components/Universal/Navbar.vue";

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
  methods: {
    centerProjects() {
      let projectWidth =
        document.querySelector(".project").offsetWidth / 2 + "px";
      let projects = document.querySelectorAll(".splide__slide");

      projects.forEach((project) => {
        project.style.paddingLeft = `calc(50vw - ${projectWidth})`;
      });
    }
  },
  created() {
    window.addEventListener("resize", this.centerProjects);
  },
  mounted() {
    this.centerProjects();
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.centerProjects);
  },
  components: {
    Splide,
    SplideSlide,
    ProjectCards,
    Topbar,
    Navbar
  }
};
</script>

<style scoped>
.projects {
  margin-top: 55px;
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
  opacity: 1;
  border: none;
  box-sizing: border-box;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
}
</style>
