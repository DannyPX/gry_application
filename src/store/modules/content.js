import api from "@/api/api";

export default {
  namespaced: true,
  state: {
    activeProject: {},
    projects: [],
    project: [],
    about: "",
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
    ],
    tempAbout: {
      id: "18fY5DJyJPYj1xiXV6QPkH",
      title: "About us ",
      content:
        "\u003cdiv\u003e\n  \u003ch1\u003e\n    About us\n  \u003c/h1\u003e\n  \u003cdiv\u003e\n    Global Radiant Youth (GRY) is a nonprofit organisation located in Rwanda. We’re building creativity and endow young people, from all walks of life, to be part of change through capacity building workshops, cultural exchange initiatives and sustainable development programs.\n  \u003c/div\u003e\n  \u003chr/\u003e\n  \u003cdiv\u003e\n    As of January 2020, the organisation has been promoting its mission in The Netherlands and Ruhango district in southern Rwanda through literacy projects and the launch of an educational center for children and youth.\n  \u003c/div\u003e\n  \u003ch2\u003e\n    \n    \n    Meet the Founder\n  \u003c/h2\u003e\n  \u003c!-- no processor accepts \u0027CDARichEmbeddedBlock\u003cCDAAsset\u003e\u0027, found at path \u0027CDARichDocument[0]\u0027. Please add a corresponding renderer using \u0027HtmlRenderer.addRenderer(...)\u0027. --\u003e\n  \u003cdiv\u003e\n  \u003c/div\u003e\n  \u003cdiv\u003e\n    Dieudonné Gakire is a writer, social entrepreneur and a public speaker. As he pursues his studies of International Relations at the Amsterdam University College, he also serves as the Vice-President of The Netherlands’s chapter of IBUKA, a survivor organisation that promotes justice, memory, and peacebuilding.\n  \u003c/div\u003e\n  \u003cdiv\u003e\n    Gakire is the author of ‘A Dreaming Child’, a book about how the 1994 genocide against the Tutsi affected children in Rwanda. He has presented and spoken at various international literary events, including FILBo, an international book fair in Bogota, Colombia, and the Writivism Festival in Kampala, Uganda.\n  \u003c/div\u003e\n  \u003cdiv\u003e\n    He believes in the power of storytelling and continues to speak publicly to encourage young people to join forces in finding solutions to the problems of community development and reconciliation in post-conflict societies.\n  \u003c/div\u003e\n  \u003cul\u003e\n    \u003cli\u003e\n      \u003cdiv\u003e\n        \u003cb\u003ePhone\u003c/b\u003e\n      \u003c/div\u003e\n      \u003cdiv\u003e\n        \u003ci\u003e(+250) 783 076-635)\u003c/i\u003e\n      \u003c/div\u003e\n    \u003c/li\u003e\n  \u003c/ul\u003e\n  \u003cul\u003e\n    \u003cli\u003e\n      \u003cdiv\u003e\n        \u003cb\u003eAddress\u003c/b\u003e\n      \u003c/div\u003e\n      \u003cdiv\u003e\n        \u003ci\u003eKG297ST – Kimironko\u003c/i\u003e\n      \u003c/div\u003e\n      \u003cdiv\u003e\n        \u003ci\u003eKigali, Rwanda\u003c/i\u003e\n      \u003c/div\u003e\n    \u003c/li\u003e\n  \u003c/ul\u003e\n  \u003cdiv\u003e\n  \u003c/div\u003e\n\u003c/div\u003e\n"
    }
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
    },
    SET_ACTIVE_PROJECT(state, data) {
      let index = state.tempProjects.findIndex(x => x.title == data);
      state.activeProject = state.tempProjects[index];
    }
  },
  actions: {
    loadProjects({ commit }) {
      api.get("/projects").then(res => {
        if (res.status === 200) {
          commit("SET_PROJECTS", res.data);
        }
      });
    },
    loadProjectByID({ commit }, id) {
      api.get("/project/" + id).then(res => {
        if (res.status === 200) {
          commit("SET_PROJECT", res.data);
        }
      });
    },
    loadAbout({ commit }) {
      api.get("/about").then(res => {
        if (res.status === 200) {
          commit("SET_ABOUT");
        }
      });
    },
    setActiveProject({ commit }, title) {
      commit("SET_ACTIVE_PROJECT", title);
    }
  },
  getters: {
    projects: state => {
      return state.projects;
    },
    project: state => {
      return state.project;
    },
    about: state => {
      return state.about;
    },
    temp: state => {
      return state.tempProjects;
    },
    activeProject: state => {
      return state.activeProject;
    }
  }
};
