import axios from 'axios';
import { setInterceptors } from './common/interceptors';

const createInstance = () => {
	return axios.create({
		baseURL: process.env.VUE_APP_API_URL,
	});
};

export const createInstanceWithAuth = url => {
	const instance = axios.create({
		baseURL: `${process.env.VUE_APP_API_URL}${url}`,
	});
	return setInterceptors(instance);
};

export const instance = createInstance();
