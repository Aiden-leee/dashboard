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

<style lang="scss">
html {
	width: 100%;
}
body {
	position: relative;
	font-family: NotoSansKR, '맑은 고딕', 'Malgun Gothic', 'Apple Gothic',
		Helvetica, Arial, sans-serif;
	font-size: 16px;
	color: $defaultColor;
	background: #f4f7fa;
	width: 100%;
	min-height: 100vh;
}
</style>
