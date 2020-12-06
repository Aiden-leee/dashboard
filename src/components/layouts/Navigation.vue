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
					icon: 'home',
					children: null,
				},
				{
					path: '/component',
					title: 'Component',
					name: 'Component',
					icon: 'cube',
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
					icon: 'map-marked-alt',
					children: null,
				},
				{
					path: '/chart',
					title: 'Chart',
					name: 'Chart',
					icon: 'chart-bar',
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

<style lang="scss">
.navigation {
	position: fixed;
	width: 265px;
	height: 100vh;
	background: #3f4d67;
	box-shadow: 1px 0 20px 0 #3f4d67;
	transition: $layoutTransition;
	z-index: 99;
	@media only screen and (max-width: 980px) {
		margin-left: -265px;
		&.menu-open {
			margin-left: 0;
		}
	}
	.navigation_header {
		height: 70px;
		border-bottom: 1px solid #545c6b;
		.brand {
			padding: 10px 20px;
			> a {
				display: flex;
				align-items: center;
				.brand_title {
					display: inline-block;
					color: #d0d0d0;
					margin-left: 10px;
				}
			}
		}
	}
	.navigation_body {
		height: calc(100vh - 70px);
		color: #fff;
		> ul {
			> li {
				> a {
					position: relative;
					width: 100%;
					display: inline-block;
					align-items: center;
					padding: 10px 20px;
					font-size: 18px;
					color: $navTextColor;
					> * {
						pointer-events: none;
					}
					&:hover {
						background: #212b3c;
						color: #fff;
					}
					& + .sub_menu {
						max-height: 0;
						overflow: hidden;
						transition: all 0.3s linear;
					}
					&.router-link-active {
						background: #7da2a7;
						color: #fff;
					}

					&.active,
					&.expanded {
						background: #7da2a7;
						color: #fff;
						.fold_arrow {
							color: #fff;
							transform: rotate(-180deg) translate(0, 40%);
							line-height: 22px;
						}
					}
					&.expanded + .sub_menu,
					&.active + .sub_menu {
						display: block;
						max-height: 15em;
					}
					> i {
						width: 20px;
						height: 20px;
						margin-right: 8px;
						&.fold_arrow {
							margin-right: 0;
							text-align: center;
							line-height: 20px;
						}
					}
				}

				// .ion{
				//     width: 20px;
				//     height: 20px;
				//     margin-right: 8px;
				// }
				.fold_arrow {
					position: absolute;
					top: 50%;
					right: 20px;
					transform: translate(0, -40%);
					transition: all 0.2s linear;
				}
				> .sub_menu {
					background: #343a46;
					> ul {
						> li {
							.router-link-active {
								color: $navActive;
							}
							> a {
								display: block;
								padding: 15px 0 15px 60px;
							}
							&:hover {
								> a {
									color: $navActive;
								}
							}
						}
					}
				}
			}
		}
	}
}

.ion {
	width: 25px;
	height: 25px;
	visibility: visible;
	// font-size: 30px;
}
</style>
