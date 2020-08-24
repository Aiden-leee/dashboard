import Vue from 'vue';
import Vuex from 'vuex';
import {
	saveAuthToCookie,
	saveUserToCookie,
	saveNicknameToCookie,
	getAuthFromCookie,
	getUserFromCookie,
	getNicknameFromCookie,
} from '@/utils/cookies';
import { loginUser } from '../api/auth';

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		username: getUserFromCookie() || '',
		token: getAuthFromCookie() || '',
		nickname: getNicknameFromCookie() || '',
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
		async LOGIN({ commit }, userData) {
			const { data } = await loginUser(userData);
			commit('setToken', data.token);
			commit('setUsername', data.user.username);
			commit('saveNickname', data.user.nickname);
			saveAuthToCookie(data.token);
			saveUserToCookie(data.user.username);
			saveNicknameToCookie(data.user.nickname);
			return data;
		},
	},
});
