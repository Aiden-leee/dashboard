<template>
	<div class="ui-radio">
		<input
			type="radio"
			:id="id"
			:name="name"
			:checked="state"
			:value="value"
			:disabled="disabled"
			@change="updateInput"
		/>
		<label :for="id"
			><span>{{ label }}</span></label
		>
	</div>
</template>

<script>
export default {
	model: {
		prop: 'radioModel',
		event: 'change',
	},
	props: {
		id: {
			type: String,
			required: true,
		},
		name: {
			type: String,
			required: true,
		},
		label: {
			type: String,
			required: false,
		},
		value: {
			type: null,
		},
		checked: {
			type: Boolean,
		},
		disabled: {
			type: null,
		},
		radioModel: {
			default: null,
		},
	},
	created() {},
	computed: {
		state() {
			if (this.radioModel === null) {
				return this.checked;
			}
			return this.radioModel === this.value;
		},
	},
	methods: {
		updateInput(e) {
			this.$emit('change', e.target.value);
		},
	},
	mounted() {
		if (this.state && this.checked) {
			this.$emit('change', this.value);
		}
	},
};
</script>

<style lang="scss" scoped>
.ui-radio {
	display: inline-block;
	> input[type='radio'] {
		@include ui_input;

		& + label {
			position: relative;
			display: inline-flex;
			align-items: center;
			cursor: pointer;
			padding: 10px 10px 10px 30px;

			$radioSize: 20px;
			&:before {
				content: '';
				position: absolute;
				top: 50%;
				left: 0;
				transform: translate(0, -50%);
				display: inline-block;
				width: $radioSize;
				height: $radioSize;
				border-radius: 50%;
				background: #f7f7f7;
				border: 1px solid $uiBorderColor;
				transition: all 0.2s linear;
			}
			&:after {
				content: '';
				position: absolute;
				top: 0;
				margin-top: 7px;
				left: 0;
				display: inline-block;
				width: $radioSize;
				height: $radioSize;
				border-radius: 50%;
				transform: scale(0);
				transition: all 0.2s linear;
			}
			span {
				display: inline-block;
			}
		}
		&:disabled + label {
			opacity: 0.4;
			pointer-events: none;
		}
		&:not(:disabled):hover + label {
			&:before {
				border: 1px solid #999;
			}
		}
		&:checked + label {
			&:before {
				border: 1px solid $pointColor;
			}
			&:after {
				transform: scale(0.5);
				background: $pointColor;
			}
		}
	}
}
</style>
