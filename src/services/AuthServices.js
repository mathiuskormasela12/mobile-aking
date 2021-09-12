// ========== Auth Services
// import http
import http from '../helpers/http';

class AuthServices {
	static register(token, data) {
		return http('POST', '/auth/register', token, data);
	}
}

export default AuthServices;
