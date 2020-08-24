<template>
	<nav class="navigation" ref="nav" :class="isOpen">
		<div class="navigation_header">
			<div class="brand">
				<router-link to="/dashboard">
					<img
						src="@/assets/logo.png"
						alt="logo"
						style="width:50px;height:50px;"
					/>
					<span class="brand_title">DASHBOARD</span>
				</router-link>
			</div>
		</div>
		<div class="navigation_body">
			<NavList :menu="menu"></NavList>
		</div>
	</nav>
</template>

<script>
import NavList from '@/components/layouts/NavList.vue';
export default {
	components: {
		NavList,
	},
	data() {
		return {
			menu: [
				{
					path: '/dashboard',
					name: 'Dashboard',
					icon: 'home-outline',
					children: null,
				},
				{
					path: '/component',
					title: 'Component',
					name: 'Component',
					icon: 'cube-outline',
					children: [
						{
							path: '/button',
							title: 'Button',
							name: 'Component',
						},
						{
							path: '/tab',
							title: 'Tab',
							name: 'Component',
						},
						{
							path: '/input',
							title: 'Input',
							name: 'Component',
						},
						{
							path: '/table',
							title: 'Table',
							name: 'Component',
						},
						{
							path: '/popup',
							title: 'Popup',
							name: 'Component',
						},
					],
				},
				{
					path: '/map',
					title: 'Map',
					name: 'Map',
					icon: 'map-outline',
					children: null,
				},
				{
					path: '/chart',
					title: 'Chart',
					name: 'Chart',
					icon: 'stats-chart-outline',
					children: null,
				},
			],
		};
	},
	computed: {
		isOpen() {
			return this.$store.state.isWrap ? 'menu-open' : '';
		},
	},
	mounted() {},
};
</script>

<style></style>
