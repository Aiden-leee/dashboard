import { instance } from './index';

//회원가입 API
const registerUser = userData => {
	return instance.post('signup', userData);
};
// 로그인 API
const loginUser = userData => {
	return instance.post('login', userData);
};

export { registerUser, loginUser };
