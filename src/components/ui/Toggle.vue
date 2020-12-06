<template>
	<div class="ui-switch" :class="!mode ? 'basic' : ''">
		<template v-if="label">
			<span class="text">{{ label }}</span>
		</template>
		<input
			type="checkbox"
			:id="id"
			:name="name"
			:value="val"
			@change="updateCheck"
			:checked="checked"
			:disabled="disabled"
		/>
		<label :for="id"><span class="round"></span></label>
	</div>
</template>

<script>
export default {
	model: {
		prop: 'checked',
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
		val: {
			type: Boolean,
		},
		value: {
			type: Boolean,
		},
		mode: {
			type: Boolean,
			required: false,
		},
		label: {
			type: String,
			required: false,
		},
		checked: {
			type: Boolean,
		},
		disabled: {
			type: null,
		},
	},
	methods: {
		updateCheck(e) {
			this.$emit('change', e.target.checked);
		},
	},
};
</script>

<style lang="scss" scoped>
.ui-switch {
	display: inline-block;
	&.basic {
		> input[type='checkbox'] {
			& + label {
				width: 50px;
				&:before {
					content: '';
				}
				&:after {
					content: '';
				}
			}
			&:disabled + label {
				opacity: 0.4;
				pointer-events: none;
			}
			&:not(:disabled):checked + label {
				> .round {
					transform: translate(27px, -50%);
				}
			}
		}
	}
	> .text {
		display: inline-block;
		margin-right: 5px;
		transform: translate(0, -50%);
	}
	> input[type='checkbox'] {
		@include ui_input;
		& + label {
			position: relative;
			display: inline-block;
			cursor: pointer;
			width: 60px;
			height: 26px;
			border-radius: 25px;
			background: $uiBorderColor;
			margin: 0 2px;
			&:before,
			&:after {
				position: absolute;
				color: #fff;
			}
			&:before {
				content: 'OFF';
				top: 6px;
				right: 6px;
			}
			&:after {
				content: 'ON';
				display: none;
				top: 6px;
				left: 10px;
			}
			> .round {
				position: absolute;
				display: block;
				width: 18px;
				height: 18px;
				top: 50%;
				transform: translate(4px, -50%);
				border-radius: 50%;
				background: #fff;
				transition: all 0.2s ease-out;
			}
		}
		&:checked + label {
			background: $pointColor;

			&:before {
				display: none;
			}
			&:after {
				display: block;
			}
			> .round {
				background: #f5f5f5;
				transform: translate(36px, -50%);
			}
		}
	}
}
</style>
