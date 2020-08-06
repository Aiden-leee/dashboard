<template>
	<div class="page">
		<router-link :to="logoLink">Logo</router-link>
		<nav>
			<ul>
				<li>menu</li>
			</ul>
		</nav>
		<div class="content">
			<header>
				<template v-if="isUserLogin">
					<a href="javascript:;" @click="handleLogout">Logout</a>
				</template>
			</header>
		</div>
	</div>
</template>

<script>
import { deleteCookie } from '@/utils/cookies';
export default {
	computed: {
		isUserLogin() {
			return this.$store.getters.isLogin;
		},
		logoLink() {
			return this.$store.getters.isLogin ? '/main' : '/login';
		},
	},
	methods: {
		handleLogout() {
			this.$store.commit('clearUsername');
			this.$store.commit('clearToken');
			deleteCookie('til_auth');
			deleteCookie('til_user');
			this.$router.push('/login');
		},
	},
};
</script>

<style></style>
