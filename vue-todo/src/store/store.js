import Vue from 'vue';
import Vuex from 'vuex';
import todoApp from './modules/todoApp';

// use : plugin 사용하는 기능이다.
Vue.use(Vuex);

export const store = new Vuex.Store({
	modules: {
		todoApp
	}
});