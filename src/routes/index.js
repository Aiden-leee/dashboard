import Vue from 'vue';
import VueRouter from 'vue-router';
import store from '@/store/';

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
			component: () => import('@/views/auth/LoginPage.vue'),
		},
		{
			path: '/signup',
			component: () => import('@/views/auth/SignupPage.vue'),
		},
		{
			path: '/dashboard',
			name: 'Dashboard',
			component: () => import('@/views/dashboard/Dashboard.vue'),
			meta: { auth: true },
		},
		{
			path: '/component',
			name: 'Component',
			component: () => import('@/components/layouts/Layout.vue'),
			children: [
				{
					path: 'button',
					name: 'Component',
					component: () => import('@/views/component/ButtonPage.vue'),
				},
			],
			meta: { auth: true },
		},
		{
			path: '/formTable',
			name: 'formTable',
			component: () => import('@/components/layouts/Layout.vue'),
			children: [
				{
					path: 'table',
					name: 'formTable',
					component: () => import('@/views/formTable/TablePage.vue'),
				},
			],
			meta: { auth: true },
		},
		{
			path: '*',
			component: () => import('@/views/except/404.vue'),
		},
	],
});

router.beforeEach((to, from, next) => {
	if (to.meta.auth && !store.getters.isLogin) {
		next('/login');
		return;
	}
	next();
});

export default router;
