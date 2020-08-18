<template>
	<header>
		<div class="mobile_header mb-1">
			<router-link to="/dashboard">
				<img
					src="@/assets/logo.png"
					alt="logo"
					style="width:50px;height:50px;"
				/>
				<span class="brand_title ml-1">DASHBOARD</span>
			</router-link>
			<a
				href="#"
				class="m_menu"
				:class="isMenuOpen"
				@click.self="handleMobileMenu"
				><span class="toggle"></span
			></a>
		</div>
		<template v-if="isUserLogin">
			<div class="utils">
				<span class="nickname">{{ this.$store.state.nickname }} 님</span>
				<a href="javascript:;" class="logout" @click="handleLogout"
					><ion-icon name="log-out-outline" class="ion bold"></ion-icon
				></a>
			</div>
		</template>
	</header>
</template>

<script>
import { deleteCookie } from '@/utils/cookies';
export default {
	computed: {
		isMenuOpen() {
			return this.$store.state.isMenuOpen ? 'on' : '';
		},
	},
	methods: {
		isUserLogin() {
			return this.$store.getters.isLogin;
		},
		handleLogout() {
			this.$store.commit('clearUsername');
			this.$store.commit('clearToken');
			this.$store.commit('clearNickname');
			deleteCookie('til_auth');
			deleteCookie('til_user');
			deleteCookie('til_nickname');
			this.$router.push('/login');
		},

		handleMobileMenu() {
			this.$store.commit('isWrapOpen', true);
			this.$store.commit('isMenuStatus', true);
		},
	},
};
</script>

<style></style>
