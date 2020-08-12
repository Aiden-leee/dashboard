const saveAuthToCookie = value => {
	document.cookie = `til_auth=${value}`;
};

const saveUserToCookie = value => {
	document.cookie = `til_user=${value}`;
};

const saveNicknameToCookie = value => {
	document.cookie = `til_nickname=${value}`;
};

const getAuthFromCookie = () => {
	return document.cookie.replace(
		/(?:(?:^|.*;\s*)til_auth\s*=\s*([^;]*).*$)|^.*$/,
		'$1',
	);
};

const getUserFromCookie = () => {
	return document.cookie.replace(
		/(?:(?:^|.*;\s*)til_user\s*=\s*([^;]*).*$)|^.*$/,
		'$1',
	);
};

const getNicknameFromCookie = () => {
	return document.cookie.replace(
		/(?:(?:^|.*;\s*)til_nickname\s*=\s*([^;]*).*$)|^.*$/,
		'$1',
	);
};

const deleteCookie = value => {
	document.cookie = `${value}=; expires=Thu, 01 Jan 1970 00:00:01 GMT;`;
};

export {
	saveAuthToCookie,
	saveUserToCookie,
	getAuthFromCookie,
	getUserFromCookie,
	saveNicknameToCookie,
	getNicknameFromCookie,
	deleteCookie,
};
