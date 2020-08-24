<template>
	<div class="page">
		<!-- <div class="popup_wrap"></div> -->
		<div class="wrapper" :class="isWrapOpen" @click="isOff"></div>
		<Navigation></Navigation>
		<div class="content">
			<Header></Header>
			<div class="page_view">
				<div class="page_header mb-2">
					<h3 class="page_title captialize">{{ isCurrentPath }}</h3>
					<p class="page_path captialize">{{ getPath }}</p>
				</div>
				<div class="page_body">
					<div class="page_body_wrap">
						<slot name="content"> </slot>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import Navigation from '@/components/layouts/Navigation.vue';
import Header from '@/components/layouts/Header.vue';
export default {
	data() {
		return {};
	},
	components: {
		Navigation,
		Header,
	},
	computed: {
		isWrapOpen() {
			return this.$store.state.isWrap ? 'on' : '';
		},
		isCurrentPath() {
			const route = this.getRouteArray();
			return route[route.length - 1];
		},
		getPath() {
			const route = this.getRouteArray();
			let output = '';
			if (route.length > 1) {
				output = route[0] + ' / ' + route[1];
			} else {
				output = route[0];
			}
			return output;
		},
	},

	methods: {
		getRouteArray() {
			const arr = this.$route.path.split('/');
			const result = [];
			arr.filter(item => (item !== '' ? result.push(item) : ''));
			return result;
		},
		isOff() {
			this.$store.commit('isWrapOpen', false);
			this.$store.commit('isMenuStatus', false);
		},
	},
};
</script>

<style></style>
