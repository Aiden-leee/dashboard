<template>
	<div v-show="isActive">
		<slot></slot>
	</div>
</template>

<script>
export default {
	props: {
		name: {
			type: String,
			required: true,
		},
		active: {
			type: Boolean,
			default: false,
		},
	},
	data() {
		return {
			isActive: false,
		};
	},
	mounted() {
		this.isActive = this.active;
	},
};
</script>

<style></style>
