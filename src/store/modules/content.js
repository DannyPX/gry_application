import api from "@/api/api";

export default {
  namespaced: true,
  state: {
    activeProject: {},
    projects: [],
    tempProjects: [
      {
        id: "5IKjIAHEXG9NuwYV7ncAhZ",
        title: "Electricity Rwanda",
        description: "This is the Project From the TU/e.",
        image: require("../../assets/project1.jpg"),
        percentage: 86,
        content:
          "The center comprises of a nursery school, a library and a computer lab. It provides children and local communities with space and resources to access quality education and to allow them to explore the world around them and beyond."
      },
      {
        id: "1cttEBeITS62moTOQqqYFE",
        title: "Project: One dream",
        description:
          "You\u0027ll never guess from who. Click here to find out more.",
        image: require("../../assets/project2.jpeg"),
        percentage: 62,
        content:
          "The center comprises of a nursery school, a library and a computer lab. It provides children and local communities with space and resources to access quality education and to allow them to explore the world around them and beyond."
      },
      {
        id: "1nydkB6h7sfBfD9ilEh1MP",
        title: "Project: One Laptop",
        description: "One laptop for one child policy",
        image: require("../../assets/project3.jpg"),
        percentage: 73,
        content:
          "The center comprises of a nursery school, a library and a computer lab. It provides children and local communities with space and resources to access quality education and to allow them to explore the world around them and beyond."
      }
    ]
  },
  mutations: {
    SET_PROJECTS(state, data) {
      state.projects = data;
      sessionStorage.setItem("projects", JSON.stringify(data));
    },
    SET_ACTIVE_PROJECT(state, data) {
      let index = state.projects.findIndex(x => x.title == data);
      state.activeProject = state.projects[index];
      localStorage.setItem("title", data);
      sessionStorage.setItem(
        "activeProject",
        JSON.stringify(state.projects[index])
      );
    },
    LOAD_ACTIVE_PROJECT(state, dispatch) {
      if (!sessionStorage.getItem("activeProject")) {
        const title = localStorage.getItem("title");
        dispatch(`setActiveProject(${title})`);
      } else {
        state.activeProject = JSON.parse(
          sessionStorage.getItem("activeProject")
        );
      }
    },
    RESET_ACTIVE_PROJECT(state) {
      state.activeProject = {};
      sessionStorage.removeItem("activeProject");
    }
  },
  actions: {
    async fetchProjects({ commit }) {
      if (!sessionStorage.getItem("projects")) {
        await api
          .get("/projects")
          .then(res => {
            if (res.status === 200) {
              commit("SET_PROJECTS", res.data);
            }
          })
          .then(() => {
            return;
          });
      } else {
        let projects = JSON.parse(sessionStorage.getItem("projects"));
        commit("SET_PROJECTS", projects);
      }
    },
    setActiveProject({ commit }, title) {
      commit("SET_ACTIVE_PROJECT", title);
    },
    loadActiveProject({ commit }) {
      commit("LOAD_ACTIVE_PROJECT");
    },
    resetActiveProject({ commit }) {
      commit("RESET_ACTIVE_PROJECT");
    }
  },
  getters: {
    projects: state => {
      return state.projects;
    },
    activeProject: state => {
      return state.activeProject;
    },
    temp: state => {
      return state.tempProjects;
    }
  }
};
