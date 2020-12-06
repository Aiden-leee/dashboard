<template>
	<transition name="popup" appear>
		<div class="ui-popup" :id="id">
			<div class="wrap">
				<div class="popup_header">
					<slot name="header"></slot>
					<Button
						type="button"
						icon="times"
						class="mb-0"
						@click="$emit('close')"
					></Button>
				</div>
				<div class="popup_body">
					<slot></slot>
				</div>
				<div class="popup_foot">
					<Button
						type="button"
						name="확인"
						mode="secondary"
						class="mb-0"
						@click="$emit('complete')"
					></Button>
					<Button
						type="button"
						name="취소"
						mode="light"
						class="mb-0 ml-1"
						@click="$emit('close')"
					></Button>
				</div>
			</div>
		</div>
	</transition>
</template>

<script>
import Button from '@/components/ui/Button.vue';
export default {
	props: {
		id: {
			type: String,
		},
	},
	components: {
		Button,
	},
};
</script>

<style lang="scss">
.popup-enter,
.popup-enter-active {
	.wrap {
		animation: slide-in 0.3s ease-in-out;
	}
}
.popup-leave-active {
	opacity: 0;
	.wrap {
		transition: all 0.3s ease-in;
		animation: slide-out 0.3s ease-in-out;
	}
}
@keyframes slide-in {
	from {
		opacity: 0;
		transform: translate(0, -20%);
	}
	to {
		opacity: 1;
		transform: translate(0, 0);
	}
}
@keyframes slide-out {
	from {
		transform: translate(0, 0);
	}
	to {
		transform: translate(0, -20%);
	}
}

.ui-popup {
	display: flex;
	position: fixed;
	left: 0;
	top: 0;
	align-items: center;
	justify-content: center;
	width: calc(100% - -265px);
	height: 100%;
	background-color: rgba(0, 0, 0, 0.4);
	transition: $layoutTransition;
	z-index: 101;
	@media only screen and (max-width: 980px) {
		width: 100%;
	}
	.wrap {
		display: flex;
		flex-direction: column;
		width: 500px;
		min-height: 250px;
		transform: translate(0, 0);
		background: #fff;
		border-radius: $layoutRadius;
		overflow: hidden;

		.popup_header {
			display: flex;
			align-items: center;
			justify-content: space-between;
			height: 60px;
			padding: 20px;
			font-size: 18px;
			background: $pointColor;
			// border-radius: 10px 10px 0 0;
			> h4 {
				color: #fff;
			}
		}
		.popup_body {
			flex: 1 1 auto;
			padding: 20px;
		}
		.popup_foot {
			display: flex;
			justify-content: center;
			padding: 10px;
			text-align: center;
		}
	}
}
</style>
