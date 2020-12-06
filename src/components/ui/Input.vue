<template>
	<div class="ui-input">
		<input
			:type="type"
			:id="id"
			:style="{ background: color }"
			:placeholder="placeholder"
			:value="value"
			:disabled="disabled"
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
		disabled: {
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

<style lang="scss" scoped>
.ui-input {
	display: inline-block;
	width: 100%;
	input[type='text'],
	input[type='email'],
	input[type='password'] {
		display: block;
		width: 100%;
		border: 1px solid $uiBorderColor;
		border-radius: $cpRadius;
		background-color: #fff;
		padding: 10px 20px;
		color: #495057;
		&:disabled {
			opacity: 0.4;
			pointer-events: none;
		}
		&::placeholder {
			color: #90959a;
		}
		&:not(:disabled):focus {
			border: 1px solid #6f8bbb;
		}
	}
}
</style>
