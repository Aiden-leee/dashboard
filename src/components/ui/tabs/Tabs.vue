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
		tabIndex: {
			type: Number,
		},
	},
	created() {
		this.tabs = this.$children;
	},
	data() {
		return {
			tabs: [],
		};
	},
	methods: {
		handleActiveClass(idx) {
			return idx === this.tabIndex;
		},
		handleTab(selected, idx) {
			this.$emit('update:tabIndex', idx);
			this.tabs.forEach(item => {
				item.isActive = item.name === selected.name;
			});
		},
	},
};
</script>

<style lang="scss" scoped>
.ui-tab {
	> ul {
		display: flex;
		> li {
			&.active {
				> a {
					border-radius: 5px 5px 0 0;
					background: $pointColor;
					color: #fff;
				}
			}
			> a {
				display: block;
				padding: 10px 20px;
				height: 100%;
			}
		}
	}
	> .tab_content {
		padding: 20px;
		background: $pointColor;
		color: #fff;
		// border: 2px solid $pointColor;
		min-height: 150px;
		.title {
			font-size: 18px;
		}
	}
}
</style>
