<template>
	<div class="page">
		<!-- <div class="popup_wrap"></div> -->
		<div class="wrapper" :class="isWrapOpen" @click="isOff"></div>
		<Navigation></Navigation>
		<div class="content">
			<Header></Header>
			<div class="page_view">
				<div class="page_header mb-2">
					<h3 class="page_title captialize">{{ isCurrentPath }}</h3>
					<p class="page_path captialize">{{ getPath }}</p>
				</div>
				<div class="page_body">
					<div class="page_body_wrap">
						<slot name="content"> </slot>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import Navigation from '@/components/layouts/Navigation.vue';
import Header from '@/components/layouts/Header.vue';
export default {
	data() {
		return {};
	},
	components: {
		Navigation,
		Header,
	},
	computed: {
		isWrapOpen() {
			return this.$store.state.isWrap ? 'on' : '';
		},
		isCurrentPath() {
			const route = this.getRouteArray();
			return route[route.length - 1];
		},
		getPath() {
			const route = this.getRouteArray();
			let output = '';
			if (route.length > 1) {
				output = route[0] + ' / ' + route[1];
			} else {
				output = route[0];
			}
			return output;
		},
	},

	methods: {
		getRouteArray() {
			const arr = this.$route.path.split('/');
			const result = [];
			arr.filter(item => (item !== '' ? result.push(item) : ''));
			return result;
		},
		isOff() {
			this.$store.commit('isWrapOpen', false);
			this.$store.commit('isMenuStatus', false);
		},
	},
};
</script>

<style lang="scss">
// page content
.page {
	.wrapper {
		display: none;
		position: fixed;
		width: 100%;
		height: 100%;
		background-color: rgba(0, 0, 0, 0.2);
		z-index: 90;
		&.on {
			display: block;
		}
	}
	> .content {
		width: calc(100% - 265px);
		margin-left: 265px;
		min-height: 100vh;
		transition: $layoutTransition;
		> header {
			display: flex;
			align-items: center;
			justify-content: flex-end;
			height: 70px;
			padding: 10px 30px;
			border-bottom: 1px solid #ececec;
			.logout {
				justify-content: flex-end;
			}

			.mobile_header {
				display: none;
			}
			.utils {
				display: flex;
				align-items: center;
			}
			.nickname {
				display: inline-block;
				color: $navColor;
				margin-right: 10px;
			}
		}
	}
}
.page_view {
	width: 100%;
	min-height: calc(100vh - 70px);
	padding: 30px;
	.page_header {
		.page_title {
			font-size: 25px;
			color: #505050;
		}
		.page_path {
			margin-top: 10px;
		}
	}
}
@media only screen and (max-width: 980px) {
	.page {
		> .content {
			width: 100%;
			margin-left: 0;
			> header {
				position: fixed;
				width: 100%;
				flex-direction: column;
				height: auto;
				background: $navColor;
				z-index: 89;
				.mobile_header {
					display: block;
					width: 100%;
					display: flex;
					align-items: center;
					justify-content: center;
					> a {
						display: flex;
						align-items: center;
						.brand_title {
							color: #d0d0d0;
						}
					}
					.m_menu {
						position: absolute;
						right: 30px;
						display: flex;
						justify-content: center;
						width: 50px;
						height: 50px;
						padding: 0 15px;

						> .toggle {
							position: relative;
							display: inline-block;
							width: 100%;
							height: 2.5px;
							background: #fff;
							backface-visibility: hidden;
							pointer-events: none;
							&:before {
								content: '';
								position: absolute;
								bottom: 5px;
								display: block;
								width: 45%;
								height: 2.5px;
								background: #fff;
								transition: $layoutTransition;
							}
							&:after {
								content: '';
								display: block;
								position: absolute;
								top: 5px;
								width: 70%;
								height: 2.5px;
								background: #fff;
								transition: $layoutTransition;
							}
						}
						&.on {
							> .toggle {
								background-color: transparent;
								&:before {
									width: 100%;
									height: 2px;
									transform: rotate(45deg) translate(4px, 4px);
								}
								&:after {
									width: 100%;
									height: 2px;
									transform: rotate(-45deg) translate(3px, -3px);
								}
							}
						}
					}
				}
				.utils {
					width: 100%;
					justify-content: flex-end;
					border-top: 1px solid #5f6979;
					padding: 5px 10px;
					* {
						color: #fff;
					}
				}
			}
		}
	}
	.page_view {
		min-height: calc(100vh - 150px);
		padding: 150px 30px 30px;
	}
}
// row column
.row {
	display: flex;
	flex-wrap: wrap;
	margin-left: -15px;
	margin-right: -15px;
	.col {
		position: relative;
		width: 100%;
		padding-right: 15px;
		padding-left: 15px;

		$columns: 12;
		@for $i from 1 through $columns {
			&.col-#{$i} {
				width: (100% / $i);
			}
		}
		@media only screen and (max-width: 680px) {
			&.col-2 {
				width: 100%;
			}
		}
		.card {
			display: flex;
			flex-direction: column;
			margin-bottom: 30px;
			min-height: 200px;
			background: #fff;
			border-radius: $layoutRadius;
			box-shadow: $layoutShadow;
			transition: $layoutTransition;
			.card_header {
				min-height: 57px;
				padding: 20px 25px;
				border-bottom: 1px solid #e5e5e5;
				> h4 {
					position: relative;
					color: $cardTitleColor;
					&:after {
						content: '';
						position: absolute;
						top: 0;
						left: -25px;
						display: inline-block;
						width: 4px;
						height: 20px;
						background: $pointColor;
					}
				}
			}
			.card_body {
				width: 100%;
				padding: 20px 25px;
				font-size: 14px;
				flex: 1 1 auto;

				> .text {
					margin-bottom: 10px;
					a {
						&:hover {
							color: #000;
						}
					}
					&.explain {
						> strong {
							display: inline-block;
							color: #bf4d28;
							background: #ddd;
							padding: 5px;
							border-radius: $cpRadius;
						}
					}
				}
				.box {
					&.career {
						border-bottom: 1px dashed #eaeaea;
						&:last-child {
							border-bottom: 0;
						}
						> .title {
							position: relative;
							font-size: 18px;
							color: #000;
							&:after {
								content: '';
								position: absolute;
								left: -12px;
								top: 50%;
								width: 6px;
								height: 6px;
								margin-top: -3px;
								border-radius: 2px;
								background: $pointColor;
							}
							> span {
								font-size: 14px;
								color: $defaultColor;
							}
						}
						> .range {
							display: inline-block;
							padding: 5px 0;
						}
						> .content {
							padding: 10px 0;
							line-height: 1.5;
							.link {
								display: block;
							}
						}
					}
				}
			}
		}
	}
}
</style>
