import Vue from 'vue';
import App from './App.vue';
import store from '@/store/';
import router from '@/routes/';
require('@/assets/css/style.min.css');

Vue.config.productionTip = false;
Vue.config.ignoredElements = [/^ion-/];

new Vue({
	render: h => h(App),
	store,
	router,
}).$mount('#app');
