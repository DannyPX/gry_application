import api from "@/api/api";

export default {
  namespaced: true,
  state: {
    projects: [],
    project: [],
    about: "",
  },
  mutations: {
    SET_PROJECTS(state, data) {
      state.projects = data;
    },
    SET_ABOUT(state, data) {
      state.about = data;
    },
    SET_PROJECT(state, data) {
      state.project = data;
    }
  },
  actions: {
    loadProjects({ commit }) {
      api.get("/projects").then(res => {
        if(res.status === 200) {
          commit("SET_PROJECTS", res.data)
        }
      });
    },
    loadProjectByID({ commit }, id) {
      api.get("/project/" + id).then(res => {
        if(res.status === 200) {
          commit("SET_PROJECT", res.data)
        }
      });
    },
    loadAbout({ commit }) {
      api.get("/about").then(res => {
        if(res.status === 200) {
          commit("SET_ABOUT")
        }
      })
    },
  },
  getters: {
    projects: state => {
      return state.projects;
    },
    project: state => {
      return state.project;
    },
    about: state => {
      return state.about
    }
  }
};
