<template>
	<div class="ui-checkbox">
		<input
			ref="input"
			type="checkbox"
			:id="id"
			:name="name"
			:value="val"
			:checked="state"
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

<style></style>
