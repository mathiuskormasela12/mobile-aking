// ========== Api
// import all modules
import {API_URL} from '@env';

function http(method, endpoint, token, data) {
	const config = {
		method: method.toUpperCase(),
		body: data,
		headers: {
			Authorization: token,
		},
	};
	return fetch(`${API_URL}${endpoint}`, config)
		.then(response => {
			if (!response.ok) {
				throw new Error(response.statusText);
			}

			return response.json();
		})
		.then(response => response);
}

export default http;
