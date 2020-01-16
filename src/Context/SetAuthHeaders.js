  
import axios from 'axios';
import jwt from 'jsonwebtoken';

export const getJwtCheckExp = () => {
  const jwtoken = getJwt();
  if (jwtoken) {
    const { exp } = jwt.decode(jwtoken);
    if (exp <= Date.now() / 1000) {
      localStorage.clear();
      return false;
    } else {
      return true;
    }
  } else {
    localStorage.clear();
    return false;
  }
};

export const getJwt = () => {
  const jwt = localStorage.getItem('token');

  if (jwt !== null) {
    return jwt;
  }
  return false;
};

export default function setAuthorizationToken() {
  const token = getJwt();
  if (token) {
    axios.defaults.headers.common['Authorization'] = `Token${" "}${token}`;
  } else {
    delete axios.defaults.headers.common['Authorization'];
  }
}

export function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}