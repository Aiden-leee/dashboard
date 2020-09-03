import Vue from 'vue';
import Vuex from 'vuex';
import {
	// saveAuthToCookie,
	saveUserToCookie,
	saveNicknameToCookie,
	// getAuthFromCookie,
	// getUserFromCookie,
	// getNicknameFromCookie,
} from '@/utils/cookies';
// import { loginUser } from '../api/auth';

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		username: '',
		// token: getAuthFromCookie() || '',
		nickname: '',
		isWrap: false,
		isMenuOpen: false,
	},
	getters: {
		isLogin(state) {
			return state.username !== '';
		},
	},
	mutations: {
		setUsername(state, username) {
			state.username = username;
		},
		clearUsername(state) {
			state.username = '';
		},
		setToken(state, token) {
			state.token = token;
		},
		clearToken(state) {
			state.token = '';
		},
		saveNickname(state, nickname) {
			state.nickname = nickname;
		},
		clearNickname(state) {
			state.nickname = '';
		},
		isWrapOpen(state, check) {
			state.isWrap = check;
		},
		isMenuStatus(state, check) {
			state.isMenuOpen = check;
		},
	},
	actions: {
		async LOGIN({ commit }) {
			// const { data } = await loginUser(userData);
			// commit('setToken', data.token);
			// commit('setUsername', data.user.username);
			// commit('saveNickname', data.user.nickname);
			commit('setUsername', 'test01@a.com');
			commit('saveNickname', 'test01');

			saveUserToCookie('test01@a.com');
			saveNicknameToCookie('test01');
			// saveAuthToCookie(data.token);
			// saveUserToCookie(data.user.username);
			// saveNicknameToCookie(data.user.nickname);
			return;
		},
	},
});
