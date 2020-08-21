<template>
	<div class="ui-input">
		<input
			:type="type"
			:id="id"
			:style="{ background: color }"
			:placeholder="placeholder"
			@input="updateInput"
		/>
		<label :for="id"></label>
	</div>
</template>

<script>
export default {
	props: {
		id: {
			type: String,
			required: true,
		},
		type: {
			type: String,
			default: 'text',
		},
		placeholder: {
			type: String,
			required: false,
		},
		color: {
			type: String,
			required: false,
		},
		value: {
			type: null,
		},
	},
	methods: {
		updateInput(e) {
			this.$emit('input', e.target.value);
		},
	},
};
</script>

<style></style>
