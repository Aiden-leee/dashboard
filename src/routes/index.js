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
				{
					path: 'input',
					name: 'Component',
					component: () => import('@/views/component/InputPage.vue'),
				},
				{
					path: 'table',
					name: 'Component',
					component: () => import('@/views/component/TablePage.vue'),
				},
				{
					path: 'popup',
					name: 'Component',
					component: () => import('@/views/component/PopupPage.vue'),
				},
			],
			meta: { auth: true },
		},
		{
			path: '/map',
			name: 'Map',
			component: () => import('@/views/map/MapPage.vue'),
			meta: { auth: true },
		},
		{
			path: '/chart',
			component: () => import('@/views/chart/ChartPage.vue'),
			meta: { auth: true },
		},
		{
			path: '*',
			component: () => import('@/views/except/404.vue'),
		},
	],
});

router.beforeEach((to, from, next) => {
	if (store.getters.isLogin && to.path === '/login') {
		next('/dashboard');
		return;
	}
	if (to.meta.auth && !store.getters.isLogin) {
		next('/login');
		return;
	}
	next();
});

export default router;
