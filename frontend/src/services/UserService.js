import api from './axiosConfig'

export const getUser = () => 
localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null;



export const login = async (email, password) => {
    const {data} = await api.post('api/v1/user/login', {email, password});
    if(data.message === "Login Success!") {
        localStorage.setItem('user', JSON.stringify(data));
    }
    return data;
};

export const register = async (username, email, password) => {
    const {data} = await api.post('api/v1/user/register', {
        userName: username,
        email: email,
        password: password,
    });
    console.log(data);
    localStorage.setItem('user', JSON.stringify(data));
    return data;
};

export const logout = () => {
    localStorage.removeItem('user');
};