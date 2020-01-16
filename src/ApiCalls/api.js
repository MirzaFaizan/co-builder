import axios from 'axios';
import apiConfig from './apiConfig';

const signIn = async () => {
  try {
    const res = await axios.get(apiConfig.getCoinsRoute);
    return res.data;
  } catch (err) {
    throw err.response;
  }
};
export default {
    signIn
}