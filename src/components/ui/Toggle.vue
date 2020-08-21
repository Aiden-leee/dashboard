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
	},
	methods: {
		updateCheck(e) {
			this.$emit('change', e.target.checked);
		},
	},
};
</script>

<style></style>
