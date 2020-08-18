import Vue from 'vue';
import VueRouter from 'vue-router';
import store from '@/store/';

Vue.use(VueRouter);

const emptyComponent = { template: '<router-view></router-view>' };
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
			beforeEnter: (to, from, next) => {
				if (store.getters.isLogin) {
					next('/dashboard');
				}
			},
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
			component: emptyComponent,
			children: [
				{
					path: 'button',
					name: 'Component',
					component: () => import('@/views/component/ButtonPage.vue'),
				},
				{
					path: 'tab',
					name: 'Component',
					component: () => import('@/views/component/TabPage.vue'),
				},
			],
			meta: { auth: true },
		},
		{
			path: '/formTable',
			name: 'FormTable',
			component: emptyComponent,
			children: [
				{
					path: 'table',
					name: 'FormTable',
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
