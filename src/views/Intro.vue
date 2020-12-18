<template>
  <div
    class="intro"
    :style="{
      'background-image':
        'url(' + require('../assets/Intro/backgroundintro.jpg') + ')'
    }"
  >
    <img class="imglogo" src="@/assets/Intro/logo.png" />
    <splide :options="options" class="projects">
      <splide-slide
        v-for="(project, index) in projects"
        :key="'project: ' + index"
      >
        <IntroCard
          :title="project.title"
          :image="project.image"
          :text="project.text"
        />
      </splide-slide>
    </splide>
    <button @click="toHome" class="button">
      Start to help
    </button>
  </div>
</template>

<script>
import { Splide, SplideSlide } from "@splidejs/vue-splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import IntroCard from "@/components/Intro/IntroCard.vue";

export default {
  name: "Intro",
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
          title: "Genocide in Rwanda killed\n" + "800.000 people",
          image: require("../assets/Intro/genocide.jpg"),
          text:
            "In order to let it never happen again we want to develop a culture where everybody can connect with eachother."
        },
        {
          title: "A brighter future for Rwanda \n" + "thanks to you",
          image: require("../assets/Intro/school.jpg"),
          text:
            "Together we build schools and community facilities where people can come together. This way the communication improves alot."
        },
        {
          title: "Global Radiant Youth",
          image: require("../assets/Intro/schools.jpeg"),
          text:
            "Global Radiant Youth (GRY) is a nonprofit organisation located in Rwanda that provides support for the next generation in different ways."
        }
      ]
    };
  },
  methods: {
    centerProjects() {
      let projectWidth =
        document.querySelector(".project").offsetWidth / 2 + "px";
      let projects = document.querySelectorAll(".splide__slide");

      projects.forEach(project => {
        project.style.paddingLeft = `calc(50vw - ${projectWidth})`;
      });
    },
    toHome() {
      localStorage.setItem("intro", "seen");
      this.$router.push("/home");
    }
  },
  created() {
    window.addEventListener("resize", this.centerProjects);
  },
  mounted() {
    if (localStorage.getItem("intro") == "seen") {
      this.$router.push("/home");
    }
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
.intro {
  position: absolute;
  top: 0;
  bottom: 0;
  width: 100%;
}

.imglogo {
  position: fixed;
  height: 15%;
  max-height: 100px;
  width: auto;
  left: 50%;
  transform: translateX(-50%);
  top: 20px;
}

.projects {
  top: 50%;
  transform: translateY(-50%);
}

.button {
  cursor: pointer;
  position: fixed;
  bottom: 20px;
  color: #fff;
  left: 50%;
  transform: translateX(-50%);
  font-size: 1.4rem;
  border: none;
  font-weight: 600;
  height: 55px;
  width: 90%;
  max-width: 345px;
  background: #2ec3bb;
  border-radius: 14px;
  outline: none;
  transition: background 0.3s ease-in-out;
}

.button:hover {
  background: #35ddd5;
}

@media only screen and (max-height: 700px) {
  .imglogo {
    top: 10px;
  }

  .button {
    height: 45px;
    bottom: 10px;
  }
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
