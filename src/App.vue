<template>
	<div id="app">
		<Layout v-if="!routerCheck">
			<template v-slot:content>
				<router-view></router-view>
			</template>
		</Layout>

		<router-view v-else></router-view>
	</div>
</template>

<script>
import Layout from '@/components/layouts/Layout.vue';
export default {
	components: {
		Layout,
	},
	computed: {
		routerCheck() {
			let path = this.$route.path;
			return path === '/' || path === '/login' || path === '/signup';
		},
	},
};
</script>

<style></style>
