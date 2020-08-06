import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const router = new VueRouter({
	mode: 'history',
	routes: [
		{
			path: '/',
			redirect: '/login',
		},
		{
			path: '/login',
			component: () => import('@/views/LoginPage.vue'),
		},
		{
			path: '/signup',
			component: () => import('@/views/SignupPage.vue'),
		},
		{
			path: '/dashboard',
			component: () => import('@/views/Dashboard.vue'),
		},
		{
			path: '*',
			component: () => import('@/views/except/404.vue'),
		},
	],
});

// router.beforeEach((to, from, next) => {});

export default router;
