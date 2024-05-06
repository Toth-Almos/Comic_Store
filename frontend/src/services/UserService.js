import api from './axiosConfig'

export const getUser = () => {
    return localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null;
}


export const login = async (email, password) => {
    const {data} = await api.post('api/v1/user/login', {email, password});
    if(data.message === "Login Success!") {
        localStorage.setItem('user', JSON.stringify(data.userName));
        localStorage.setItem('userId', JSON.stringify(data.userId));
        localStorage.setItem('isAdmin', JSON.stringify(data.admin));
    }
    return data;
};

export const register = async (registerData) => {
    const {data} = await api.post('api/v1/user/register', {
        userName: registerData.username,
        email: registerData.email,
        password: registerData.password,
    });
    //localStorage.setItem('user', JSON.stringify(data.userName));
    //localStorage.setItem('userId', JSON.stringify(data.userId));
    return data;
};

export const logout = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('userId');
    localStorage.removeItem('isAdmin');
};