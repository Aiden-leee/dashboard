<template>
	<transition name="popup" appear>
		<div class="ui-popup" :id="id">
			<div class="wrap">
				<div class="popup_header">
					<slot name="header"></slot>
					<Button
						type="button"
						icon="close-outline"
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
</style>
