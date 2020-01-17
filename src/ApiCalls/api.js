import axios from 'axios';
import apiConfig from './apiConfig';


const signIn = async (body) => {
  try {
    const res = await axios.post(apiConfig.loginRoute,body);
    return res;
  } catch (err) {
    throw err.response;
  }
};







export default {
    signIn
}