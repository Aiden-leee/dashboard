<template>
	<div class="auth_wrapper">
		<ul class="circles">
			<li v-for="n in 10" :key="n"></li>
		</ul>
		<div class="auth_content">
			<div class="card">
				<slot></slot>
			</div>
		</div>
	</div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.auth_wrapper {
	position: relative;
	// display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	min-height: 100vh;
	overflow: hidden;
	.auth_content {
		position: absolute;
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);
		width: 390px;
		padding: 15px;
		animation: fadeIn 0.8s ease-in-out;
		.shape-circle {
			position: absolute;
			z-index: 10;
		}
		.card {
			position: relative;
			z-index: 20;
			border-radius: $layoutRadius;
			background: #fff;
			background-clip: border-box;
			box-shadow: $layoutShadow;
			.content_body {
				padding: 30px 25px;
				h3 {
					font-size: 30px;
					color: #666;
				}
				p {
					font-size: 13px;
					> a {
						color: #333;
					}
				}
			}
		}
	}
}

@keyframes fadeIn {
	from {
		opacity: 0;
		transform: translate(-50%, -30%);
	}
	to {
		opacity: 1;
		transform: translate(-50%, -50%);
	}
}

.circles {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	overflow: hidden;
	li {
		position: absolute;
		display: block;
		list-style: none;
		width: 20px;
		height: 20px;
		background: rgba(255, 255, 255, 0.2);
		animation: animate 25s linear infinite;
		bottom: -150px;

		&:nth-child(1) {
			left: 25%;
			width: 80px;
			height: 80px;
			animation-delay: 0s;
		}
		&:nth-child(2) {
			left: 10%;
			width: 20px;
			height: 20px;
			animation-delay: 2s;
			animation-duration: 12s;
		}
		&:nth-child(3) {
			left: 70%;
			width: 20px;
			height: 20px;
			animation-delay: 4s;
		}
		&:nth-child(4) {
			left: 40%;
			width: 60px;
			height: 60px;
			animation-delay: 0s;
			animation-duration: 18s;
		}
		&:nth-child(5) {
			left: 65%;
			width: 20px;
			height: 20px;
			animation-delay: 0s;
		}
		&:nth-child(6) {
			left: 75%;
			width: 110px;
			height: 110px;
			animation-delay: 3s;
		}
		&:nth-child(7) {
			left: 35%;
			width: 150px;
			height: 150px;
			animation-delay: 7s;
		}
		&:nth-child(8) {
			left: 50%;
			width: 25px;
			height: 25px;
			animation-delay: 15s;
			animation-duration: 45s;
		}
		&:nth-child(9) {
			left: 20%;
			width: 15px;
			height: 15px;
			animation-delay: 2s;
			animation-duration: 35s;
		}
		&:nth-child(10) {
			left: 80%;
			width: 150px;
			height: 150px;
			animation-delay: 0s;
			animation-duration: 11s;
		}
	}
}

@keyframes animate {
	0% {
		transform: translateY(0) rotate(0deg);
		opacity: 0.8;
		border-radius: 0;
		background: #eac8c8;
	}
	10% {
		background: #eac8e9;
	}
	20% {
		background: #dbc8ea;
	}
	30% {
		background: #c8e9e7;
	}
	40% {
		background: #c8e9db;
	}
	50% {
		background: #c8d4e9;
	}
	60% {
		background: #d0c8ea;
	}
	70% {
		background: #c9c8e9;
	}
	80% {
		background: #dbe9c8;
	}
	90% {
		background: #e9e3c8;
	}
	100% {
		transform: translateY(-1000px) rotate(720deg);
		opacity: 0.2;
		border-radius: 50%;
	}
}
</style>
