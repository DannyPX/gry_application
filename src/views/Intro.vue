<template>
  <div class="home" :style="{'background-image': 'url(' + require('../assets/Intro/backgroundintro.jpg') + ')'}">

    <splide :options="options" class="projects">
      <splide-slide v-for="(project, index) in projects" :key="'project: ' + index"
      >
        <IntroCard
            :title="project.title"
            :image="project.image"
            :text="project.text"
        />
      </splide-slide>
    </splide>
    <button class="button2">
      Start donating now
    </button>
  </div>
</template>

<script>
import { Splide, SplideSlide } from "@splidejs/vue-splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import IntroCard from "@/components/Intro/IntroCard.vue";


export default {
  name: "Home",
  data() {
    return {
      options: {
        perPage: 1,
        pagination: true,
        gap: "2rem",
        autoHeight: true,
        arrows: false,

      },
      projects: [
        {
          title: "Genocide in Rwanda killed\n" +
              "800.000 people",
          image: require("../assets/Intro/genocide.jpg"),
          text: "In order to let it never happen again we want to develop a culture where everybody can connect with eachother."
        },
        {
          title: "A brighter future for Rwanda \n" +
              "thanks to you",
          image: require("../assets/Intro/school.jpg"),
          text: "Together we build schools and community facilities where people can come together. This way the communication improves alot"
        },
        {
          title: "Global Radiant Youth",
          image: require("../assets/Intro/schools.jpeg"),
          text: "Global Radiant Youth (GRY) is a nonprofit organisation located in Rwanda that provides support for the next generation in different ways."
        }
      ]
    };
  },
  methods: {
    centerProjects() {
      let projectWidth = document.querySelector(".project").offsetWidth / 2 + "px";
      let projects = document.querySelectorAll(".splide__slide");

      projects.forEach(project => {
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
    IntroCard
  }
};
</script>

<style scoped>
.home{

  position: absolute;
  top: 0px; /* Header Height */
  bottom: 0px; /* Footer Height */
  width: 100%;
}
.projects {

}
.splide__pagination {
  bottom: -5vh;
}

.title {
  display: block;
  text-align: center;
  color: #000;
  font-size: clamp(1.2rem, 6vw, 1.4rem);
  font-weight: 700;
}
.button2 {
  position: fixed;
  bottom: 0;
  align-items: center;
  justify-content: center;
  color: #FFF;
  margin-left: 5%;
  margin-right: 5%;
  vertical-align: bottom;
  font-size: 1.1rem;

  font-weight: 600;
  height: 45px;
  width: 90%;
  background: linear-gradient(180deg, #62d7db 0%, #00afb5 100%);
  border-radius: 15px;
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

