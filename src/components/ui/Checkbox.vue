<template>
	<div class="ui-checkbox">
		<input
			ref="input"
			type="checkbox"
			:id="id"
			:name="name"
			:value="val"
			:checked="state"
			:disabled="disabled"
			@change="updateCheckbox"
		/>
		<label :for="id"
			><span>{{ label }}</span></label
		>
	</div>
</template>

<script>
export default {
	model: {
		prop: 'checkModel',
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
			required: true,
		},
		val: {
			type: null,
			requlred: true,
		},
		value: {
			type: null,
		},
		checked: {
			type: Boolean,
			default: false,
		},
		disabled: {
			type: null,
		},
		checkModel: {
			type: null,
		},
	},
	data() {
		return {};
	},
	computed: {
		state() {
			if (this.checkModel === undefined) {
				return this.checked;
			}
			if (Array.isArray(this.checkModel)) {
				return this.checkModel.indexOf(this.val) > -1;
			}
			return this.checked;
		},
	},
	methods: {
		updateCheckbox(e) {
			let newValue = [...this.checkModel];
			if (e.target.checked) {
				newValue.push(this.val);
			} else {
				newValue.splice(newValue.indexOf(this.val), 1);
			}
			this.$emit('change', newValue);
		},
	},
	mounted() {
		if (this.checked) {
			this.$refs.input.click();
		}
	},
};
</script>

<style lang="scss" scoped>
.ui-checkbox {
	> input {
		@include ui_input;
		& + label {
			position: relative;
			display: inline-flex;
			align-items: center;
			cursor: pointer;
			padding: 10px 10px 10px 30px;

			&:before {
				content: '';
				position: absolute;
				display: block;
				left: 0;
				top: 50%;
				transform: translate(0, -50%);
				width: 20px;
				height: 20px;
				left: 0;
				border-radius: $cpRadius;
				border: 1px solid $uiBorderColor;
			}
			&:after {
				content: '';
				position: absolute;
				display: block;
				top: 50%;
				left: 6px;
				width: 8px;
				height: 8px;
				margin-top: -4px;
				transform-origin: 50%;
				transform: rotate(-45deg) scale(0);
				transition: none;
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
				background-color: transparent;
				top: 50%;
				left: 5px;
				width: 11px;
				height: 7px;
				margin-top: -5px;
				border-style: solid;
				border-color: $pointColor;
				border-width: 0 0 3px 3px;
				transform: rotate(-45deg) scale(1);
				transition: transform 0.2s ease-out;
			}
		}
	}
}
</style>
