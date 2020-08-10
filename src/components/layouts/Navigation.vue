<template>
	<nav class="navigation">
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
			<!-- <li>
					<router-link to="/dashboard" exact>
						<ion-icon name="home-outline" class="ion bold"></ion-icon>
						Dashboard
					</router-link>
				</li>
				<li>
					<router-link to="/component/button" exact>
						<ion-icon name="cube-outline" class="ion bold"></ion-icon
						>Component</router-link
					>
					<div class="sub_menu">
						<ul>
							<li>
								<router-link to="/component/button">Button</router-link>
							</li>
						</ul>
					</div>
				</li>
				<li>
					<router-link to="/formTable" exact>
						<ion-icon name="cube-outline" class="ion bold"></ion-icon>Form &
						Table</router-link
					>
					<div class="sub_menu">
						<ul>
							<li>
								<router-link to="/component/button">Grid</router-link>
							</li>
						</ul>
					</div>
				</li> -->
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
							title: 'button',
							name: 'Component',
						},
					],
				},
				{
					path: '/formTable',
					title: 'Form & Table',
					name: 'FormTable',
					icon: 'document-text-outline',
					children: [
						{
							path: '/table',
							title: 'Table',
							name: 'FormTable',
						},
					],
				},
			],
		};
	},
};
</script>

<style></style>
