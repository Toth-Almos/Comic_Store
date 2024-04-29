import api from './axiosConfig'

export const getUser = () => 
localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null;



export const login = async (email, password) => {
    const {data} = await api.post('api/v1/user/login', {email, password});
    if(data.message === "Login Success!") {
        localStorage.setItem('user', JSON.stringify(data.userName));
    }
    return data;
};

export const register = async (registerData) => {
    const {data} = await api.post('api/v1/user/register', {
        userName: registerData.username,
        email: registerData.email,
        password: registerData.password,
    });
    console.log(data);
    localStorage.setItem('user', JSON.stringify(data.userName));
    return data;
};

export const logout = () => {
    localStorage.removeItem('user');
};