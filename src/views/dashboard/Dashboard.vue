<template>
	<Layout>
		<template v-slot:content>
			<header>
				<template v-if="isUserLogin">
					<a href="javascript:;" @click="handleLogout">Logout</a>
				</template>
			</header>
		</template>
	</Layout>
</template>

<script>
import Layout from '@/components/layouts/Layout.vue';
import { deleteCookie } from '@/utils/cookies';
export default {
	components: {
		Layout,
	},
	computed: {
		isUserLogin() {
			return this.$store.getters.isLogin;
		},
		// logoLink() {
		// 	return this.$store.getters.isLogin ? '/dashboard' : '/login';
		// },
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
