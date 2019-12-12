import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

const state = {
  users: []
};

const mutations = {
  setUsers: (state, payload) => {
    state.users = payload;
  }
};

const actions = {
  getUsers({ commit }) {
    return new Promise((resolve, reject) => {
      axios.get("https://jsonplaceholder.typicode.com/users").then(response => {
        const users = response.data;
        commit("setUsers", users);
        resolve();
      });
    });
  }
};

const getters = {
  users: state => state.users
};

const store = new Vuex.Store({
  state,
  mutations,
  actions,
  getters
});

export default store;
