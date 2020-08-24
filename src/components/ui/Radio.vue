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

<style></style>
