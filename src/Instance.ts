import axios from "axios";

export const url = `${process.env.REACT_APP_LOCAL_NETWORK_IP}`

export const instance = axios.create({
	baseURL: `https://${url}/api/`,
});

instance.interceptors.request.use((config) => {
	const token = localStorage.getItem('token');
	if(config && config.headers)
		config.headers.Authorization = token ? token : '';
	return config;
});
