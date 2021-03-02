import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import '../css/signup.css';
import * as iconFc from 'react-icons/fc';

function Signup () {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleSignup = async(e) => {
        e.preventDefault();
        const {data, token} = await axios.post("/register", {name, email, username, password, confirmPassword}, {});
        console.log(data);
        console.log(token);
    };

        return(
            <div className = "Signup">
                <div className = "landing-signup">
                    <h1>Sign up</h1>
                </div>
    
                <div className = "signup-form">
                    <form onSubmit = {handleSignup}>
                        <div className = "form-container">
                            <div className = "header-form">Daftar</div>
        
                            <div className = "group-form">
        
                                <div className="forms">
                                    <input 
                                        type="text" 
                                        name="email"
                                        id = "email" 
                                        placeholder = "Email" 
                                        autoComplete="off"
                                        value = {email}
                                        onChange = {(e) => setEmail(e.target.value)}
                                    />
                                </div>

                                <div className="forms">
                                    <input 
                                        type="text" 
                                        name="name"
                                        id = "name" 
                                        placeholder = "Name" 
                                        autoComplete="off"
                                        value={name}
                                        onChange = {(e) => setName(e.target.value)}
                                    />
                                </div>
        
                                <div className="forms">
                                    <input 
                                        type="text" 
                                        name="username" 
                                        id = "username" 
                                        placeholder = "Username" 
                                        autoComplete="off" 
                                        value = {username}
                                        onChange = {(e) => setUsername(e.target.value)}
                                    />
                                </div>
        
                                <div className="forms">
                                    <input 
                                        type="password" 
                                        name="password" 
                                        id = "password" 
                                        placeholder = "Password"
                                        value = {password}
                                        onChange = {(e) => setPassword(e.target.value)}
                                    />
                                </div>
        
                                <div className="forms">
                                    <input 
                                        type="password" 
                                        name="confirmPassword" 
                                        id = "confirmPassword" 
                                        placeholder = "Confirm Password"
                                        value = {confirmPassword}
                                        onChange = {(e) => setConfirmPassword(e.target.value)}
                                    />
                                </div>
        
                                <div className="signup-btn">
                                    <button type="submit" className="btn-signup" >
                                        Daftar
                                    </button>
                                </div>
                            </div>
        
                            
        
                            <div className="border-sosmed">
                                <svg width="120" height="1" viewBox="0 0 150 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <line y1="0.5" x2="150" y2="0.5" stroke="#251946"/>
                                </svg>
                                <p> atau </p>
                                <svg width="120" height="1" viewBox="0 0 150 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <line y1="0.5" x2="150" y2="0.5" stroke="#251946"/>
                                </svg>
                            </div>
        
                            <div className="signup-sosmed">
                                <div className="sign-google">
                                    <iconFc.FcGoogle />
                                    <p> &nbsp; Daftar dengan Google</p>
                                </div>
                            </div>
        
                            <div className="redirect-to-daftar">
                                <p>
                                    Sudah punya Akun? 
                                    <Link to="/usersignin">
                                        <span>
                                            Masuk
                                        </span>
                                    </Link>
                                </p>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        );
    }

export default Signup;