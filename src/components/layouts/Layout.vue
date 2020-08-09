<template>
	<div class="page">
		<Navigation></Navigation>
		<div class="content">
			<slot name="content"></slot>
		</div>
	</div>
</template>

<script>
import Navigation from '@/components/layouts/Navigation.vue';
export default {
	components: {
		Navigation,
	},
};
</script>

<style></style>
