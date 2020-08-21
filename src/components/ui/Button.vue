<template>
	<button
		:type="type"
		class="ui-btn"
		:class="[icon ? 'icon-btn' : '', getMode]"
	>
		<template v-if="icon">
			<ion-icon
				:name="icon"
				style="width:20px;height: 20px;"
				class="icon"
			></ion-icon>
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

<style></style>
