import api from './axiosConfig'

export const getUser = () => 
localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null;


export const login = async (email, password) => {
    const {data} = await api.post('api/v1/user/login', {email, password});
    localStorage.setItem('user', JSON.stringify(data));
    return data;
};

export const register = async (registerData) => {
    const {data} = await api.post('api/v1/user/register', registerData);
    localStorage.setItem('user', JSON.stringify(data));
    return data;
};

export const logout = () => {
    localStorage.removeItem('user');
};