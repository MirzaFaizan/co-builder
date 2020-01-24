import axios from 'axios';
import apiConfig from './apiConfig';


const signIn = async (body) => {
  try {
    const res = await axios.post(apiConfig.loginRoute, body);
    return res;
  } catch (err) {
    throw err.response;
  }
};
const getDocuments = async () => {
  try {
    const res = await axios.get(`${apiConfig.getDocuments}`);
    return res;
  } catch (err) {
    throw err.response;
  }
};
const newDocuments = async (body) => {
  try {
    const res = await axios.post(`${apiConfig.newDocument}`, body);
    return res;
  } catch (err) {
    throw err.response;
  }
};
const deleteDocumentFolder = async (id, body) => {
  try {
    const res = await axios.delete(`${apiConfig.newDocument}/${id}`, { data: body });

    return res;
  } catch (err) {
    throw err.response;
  }
};








export default {
  signIn,
  deleteDocumentFolder,
  newDocuments,
  getDocuments
}