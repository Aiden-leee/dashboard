import Vue from 'vue';
import App from './App.vue';
import router from '@/routes/';
require('@/assets/css/style.min.css');

Vue.config.productionTip = false;

new Vue({
	render: h => h(App),
	router,
}).$mount('#app');
