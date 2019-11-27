import { LOGIN, LOGOUT } from '../types/auth';

export const login = (authDatas: any) => {
  return {
    type: LOGIN,
    payload: authDatas
  }
};

export const logout = () => {
  return {
    type: LOGOUT,
    payload: null
  }
};