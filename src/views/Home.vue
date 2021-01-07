<template>
  <div id="home">
    <Topbar title="Projects" />
    <splide v-if="showProjects" :options="options" class="projects">
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
import { mapGetters, mapActions } from "vuex";

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
      showProjects: false
    };
  },
  computed: {
    ...mapGetters("Content", ["temp", "projects"])
  },
  methods: {
    ...mapActions("Content", ["resetActiveProject", "checkSession"]),
    centerProjects() {
      let projectWidth =
        document.querySelector(".project").offsetWidth / 2 + "px";
      let projects = document.querySelectorAll(".splide__slide");

      projects.forEach(project => {
        project.style.paddingLeft = `calc(50vw - ${projectWidth})`;
      });
    }
  },
  created() {
    this.checkSession();
    this.resetActiveProject();
    window.addEventListener("resize", this.centerProjects);
  },
  mounted() {
    let promise = new Promise(function(resolve) {
      resolve(sessionStorage.getItem("projects") !== null);
    });

    promise.then(function() {
      this.showProjects = true;
    });
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

@media only screen and (max-height: 800px) {
  .projects {
    margin-top: 30px;
  }
}

@media only screen and (max-height: 700px) {
  .projects {
    margin-top: 20px;
  }
}
</style>
