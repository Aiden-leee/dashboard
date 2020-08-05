<template>
	<div class="login_wrapper">
		<div class="login_content">
			<div class="shape-box">
				<div class="shape-circle circle1"></div>
			</div>
			<div class="card">
				<div class="content_body tx-center">
					<h3 class="mb-2">LOGIN</h3>
					<div class="input-group">
						<input type="email" placeholder="Email" />
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {};
</script>

<style lang="scss">
@import '@/assets/css/scss/common/_variable.scss';
.login_wrapper {
	position: relative;
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	min-height: 100vh;
	.login_content {
		position: relative;
		width: 390px;
		padding: 15px;
		z-index: 5;
		.shape-circle {
			position: absolute;
			&.circle1 {
				width: 100px;
				height: 100px;
				background: #666;
			}
		}
		.card {
			position: relative;
			border-radius: $layoutRadius;
			box-shadow: 0 1px 20px 0 rgba(69, 90, 100, 0.08);
			.content_body {
				padding: 30px 25px;
				h3 {
					font-size: 30px;
					color: #666;
				}
			}
		}
	}
}
</style>
