import axios from "axios";

export const url = `${process.env.REACT_APP_BACKEND_IP}`

export const instance = axios.create({
	baseURL: `http://${url}/api/`,
});

instance.interceptors.request.use((config) => {
	const token = localStorage.getItem('token');
	if(config && config.headers)
		config.headers.Authorization = token ? token : '';
	return config;
});
