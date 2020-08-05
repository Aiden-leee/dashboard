import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

export default new VueRouter({
	routes: [
		{
			path: '/login',
			component: () => import('@/views/LoginPage.vue'),
		},
	],
});
