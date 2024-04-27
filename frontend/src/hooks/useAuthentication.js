import { useState, createContext, useContext } from 'react';
import * as userService from '../api/userService';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(userService.getUser());

    const login = async (email, password) => {
        try {
            const user = await userService.login(email, password);
            setUser(user);
            alert("Login Succesfull");
        }
        catch (error) {
            alert(error.response.data);
        }
    };

    const register = async data => {
        try {
            const user = await userService.register(data);
            setUser(user);
            alert('Register Successful');
        } catch (error) {
            alert(error.response.data);
        }
    };

    const logout = () => {
        userService.logout();
        setUser(null);
        alert('Logout Successful');
    };

    return (
        <AuthContext.Provider value={{ user, login, register, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuthentication = () => useContext(AuthContext);