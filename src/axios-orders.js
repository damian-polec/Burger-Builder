import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://burger-builder-2e9b8.firebaseio.com/'
})

export default instance;