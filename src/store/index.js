import Vue from 'vue'
import Vuex from 'vuex'
import dashboard from "./modules/dashboard"
import lists from "./modules/lists"
import apiData from "./modules/APIData"

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    apiData,
    dashboard,
    lists
  }
})