<template>
	<div class="ui-tab">
		<div class="ui-tab">
			<ul>
				<li
					v-for="(tab, idx) in tabs"
					:key="idx"
					:class="{ active: handleActiveClass(idx) }"
				>
					<a
						href="#"
						:style="{ background: handleActiveClass(idx) ? color : '' }"
						@click.prevent="handleTab(tab, idx)"
						>{{ tab.name }}</a
					>
				</li>
			</ul>
			<div class="tab_content" :style="{ background: color }">
				<slot></slot>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		color: {
			type: String,
			default: '#84d8d1',
		},
	},
	created() {
		this.tabs = this.$children;
	},
	data() {
		return {
			tabIndex: 0,
			tabs: [],
		};
	},
	methods: {
		handleActiveClass(idx) {
			return idx === this.tabIndex;
		},
		handleTab(selected, idx) {
			this.tabIndex = idx;
			this.tabs.forEach(item => {
				item.isActive = item.name === selected.name;
			});
		},
	},
};
</script>

<style></style>
