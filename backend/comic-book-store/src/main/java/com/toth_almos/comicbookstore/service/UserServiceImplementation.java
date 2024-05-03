package com.toth_almos.comicbookstore.service;

import com.toth_almos.comicbookstore.Dto.LoginDTO;
import com.toth_almos.comicbookstore.Dto.UserDTO;
import com.toth_almos.comicbookstore.model.User;
import com.toth_almos.comicbookstore.repository.UserRepository;
import com.toth_almos.comicbookstore.response.LoginResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserServiceImplementation implements UserService {
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private PasswordEncoder passwordEncoder;

    @Override
    public String registerUser(UserDTO userDTO) {
        User newUser = new User(userDTO.getUserName(), userDTO.getEmail(), this.passwordEncoder.encode(userDTO.getPassword()));
        if(newUser.getEmail() == null || newUser.getUserName() == null || newUser.getPassword() == null) {
            return "Registration failed!";
        }
        else {
            userRepository.save(newUser);
            return newUser.getUserName();
        }
    }

    @Override
    public LoginResponse loginUser(LoginDTO loginDTO) {
        User user1 = userRepository.findByEmail(loginDTO.getEmail());
        if(user1 != null) {
            String pwd = loginDTO.getPassword();
            String encodedPassword = user1.getPassword();
            boolean isPwdRight = passwordEncoder.matches(pwd, encodedPassword);
            if(isPwdRight) {
                User user = userRepository.findUserByEmailAndPassword(loginDTO.getEmail(), encodedPassword);
                if(user != null) {
                    return new LoginResponse("Login Success!", true, user.getUserName(), loginDTO.getEmail(), user.getId());
                }
                else {
                    return new LoginResponse("Login Failed!", false, "No user", "No email", 0);
                    //return null;
                }
            }
            else {
                //return null;
                return new LoginResponse("Wrong password!", false, "No user", "No email", 0);
            }
        }
        else {
            //return null;
            return new LoginResponse("Email does not exist!", false, "No user", "No email", 0);
        }
    }
}
