import axios from 'axios';

axios.defaults.baseURL = 'https://drf-api-first-6085c222ff08.herokuapp.com/'
axios.defaults.headers.post['Content-Type'] = 'multipart/form-data'
axios.defaults.withCredentials = true 