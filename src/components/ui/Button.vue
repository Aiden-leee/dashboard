<template>
	<button
		:type="type"
		class="ui-btn"
		:class="[icon ? 'icon-btn' : '', getMode]"
		:style="{ background: bg, color: color }"
		@click="$emit('click')"
	>
		<template v-if="icon">
			<i
				class="fas"
				:class="[icon ? `fa-${icon}` : '']"
				style="width:20px;height:20px;line-height:20px;"
			></i>
		</template>
		<template v-else>
			{{ name }}
		</template>
	</button>
</template>

<script>
export default {
	props: {
		type: {
			type: String,
			required: true,
		},
		name: {
			type: String,
			required: false,
		},
		bg: {
			type: String,
		},
		color: {
			type: String,
		},
		mode: {
			type: String,
			required: false,
			validator: function(value) {
				const modeArray = [
					'primary',
					'secondary',
					'info',
					'success',
					'warning',
					'error',
					'light',
					'dark',
				];
				return modeArray.indexOf(value) !== -1;
			},
		},
		icon: {
			type: String,
			required: false,
		},
	},
	computed: {
		getMode() {
			return this.mode ? 'btn-' + this.mode : '';
		},
	},
};
</script>

<style lang="scss" scoped>
.ui-btn {
	display: inline-flex;
	align-items: center;
	min-width: 30px;
	padding: 10px;
	font-size: 14px;
	border: 1px solid transparent;
	background: #fbfbfb;
	margin-bottom: 5px;
	color: #484848;
	vertical-align: middle;
	text-align: center;
	border-radius: $cpRadius;
	box-shadow: $cpShadow;
	transition: $layoutTransition;
	&:disabled {
		opacity: 0.4;
	}
	&:not(:disabled) {
		cursor: pointer;
	}
	&:not(:disabled):hover {
		filter: brightness(1.1);
	}
	&.icon-btn {
		width: 32px;
		height: 30px;
		padding: 2px 5px;
		color: #3f4d66;
	}
	&.btn-primary {
		color: #fff;
		background: #04a9f5;
		// border: 1px solid #04a9f5;
	}
	&.btn-secondary {
		color: #fff;
		background: #ec9b68;
		// border: 1px solid #ec9b68;
	}
	&.btn-info {
		color: #fff;
		background: #5ad4c9;
		// border: 1px solid #5ad4c9;
	}
	&.btn-success {
		color: #fff;
		background: #6681ea;
		// border: 1px solid #6681ea;
	}
	&.btn-warning {
		color: #fff;
		background: #e85b81;
		// border: 1px solid #e85b81;
	}
	&.btn-error {
		color: #fff;
		background: #eabb2d;
		// border: 1px solid #eabb2d;
	}
	&.btn-light {
		color: $defaultColor;
		background: #dadada;
		// border: 1px solid #dadada;
	}
	&.btn-dark {
		color: #fff;
		background: #3f4d66;
		// border: 1px solid #3f4d66;
	}
}
</style>
