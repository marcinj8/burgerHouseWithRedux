import axios from 'axios';

const instanceAxios = axios.create({
  baseURL: 'https://react-my-burger-51222.firebaseio.com/'
});

export default instanceAxios;