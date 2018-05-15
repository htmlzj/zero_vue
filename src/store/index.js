import Vue from 'vue';
import Vuex from 'vuex';
import * as actions from './actions';
import * as mutations from './mutations';
import * as getters from './getters';
import state from './rootState';
Vue.use(Vuex)
const moduleA = {
  state: state,
  mutations: mutations,
  actions: actions,
  getters:getters
}
const store = new Vuex.Store({
  modules:{
    a:moduleA
  }
})
export default store;
