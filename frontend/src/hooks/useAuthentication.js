import { useState, createContext, useContext } from 'react';
import * as userService from '../services/UserService';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(userService.getUser());

    const login = async (email, password) => {
        try {
            const user = await userService.login(email, password);
            if(user.message === "Login Success!") {
                setUser(user.userName);
                alert("Login Succesfull with user: " + user.userName);
            }
            else {
                alert("Email does not exist or you gave wrong password or email!");
                setUser(null);
            }
            
        }
        catch (error) {
            alert(error.response.data);
        }
    };

    const register = async (data) => {
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