import Vue from 'vue';
import Vuex from 'vuex';
import { loginUser } from '../api/auth';

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		username: '',
		token: '',
	},
	actions: {
		async LOGIN({ commit }, userData) {
			const { data } = await loginUser(userData);
			return data;
		},
	},
});
