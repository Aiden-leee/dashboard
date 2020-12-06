<template>
	<div class="ui-textarea">
		<textarea
			:id="id"
			:name="name"
			:cols="cols"
			:rows="rows"
			:value="value"
			:placeholder="placeholder"
			:disabled="disabled"
			@input="updateInput"
		></textarea>
	</div>
</template>

<script>
export default {
	props: {
		id: {
			type: String,
			required: true,
		},
		name: {
			type: String,
			required: true,
		},
		cols: {
			type: Number,
			default: 30,
		},
		rows: {
			type: Number,
			default: 10,
		},
		value: {
			type: String,
		},
		placeholder: {
			type: String,
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
.ui-textarea {
	> textarea {
		width: 100%;
		padding: 10px 20px;
		border: 1px solid $uiBorderColor;
		height: auto;

		&:disabled {
			opacity: 0.4;
			pointer-events: none;
		}
		&::placeholder {
			color: #90959a;
		}
		&:focus {
			outline: 0;
			border: 1px solid #6f8bbb;
		}
	}
}
</style>
