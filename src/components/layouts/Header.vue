<template>
	<header>
		<template v-if="isUserLogin">
			<span class="nickname">{{ this.$store.state.nickname }} 님</span>
			<a href="javascript:;" class="logout" @click="handleLogout"
				><ion-icon name="log-out-outline" class="ion bold"></ion-icon
			></a>
		</template>
	</header>
</template>

<script>
import { deleteCookie } from '@/utils/cookies';
export default {
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
	},
};
</script>

<style></style>
