import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import {motion} from 'framer-motion';

import '../css/signup.css';
import * as iconFc from 'react-icons/fc';

//IMPORT ANIMATION FROM ANIMATE.JS
import {form_animate, form_module_animate, transition} from '../animations/animate';

function Signup () {

    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleSignup = async(e) => {
        e.preventDefault();
        const {data, token} = await axios.post("/user/register", {email, username, password, confirmPassword}, {});
        console.log(data);
        console.log(token);
    };

        return(
            <motion.div className = "Signup"
                initial={{
                    x: "100vw",
                    opacity: 0
                }}
                animate={{
                    x: 0,
                    opacity: 1
                }}
                exit={{
                    x: "100vw",
                    opacity: 0

                }}
                transition={{type: 'spring', duration: 0.6}}
            >
                <div className = "landing-signup">
                    <h1>Sign up</h1>
                </div>
                    <motion.div 
                        className = "signup-form"
                        initial="in"
                        animate="out"
                        exit="in"
                        variants= {form_module_animate}
                        transition={{    
                            type: "spring",
                            stiffness: 100,
                            duration: 0.5,
                            delay: 0.5
                        }}
                        >
                        <form onSubmit = {handleSignup}>
                            <div className = "form-container">
                                <motion.div
                                    initial="start"
                                    animate="middle"
                                    exit="start"
                                    variants = {form_animate}
                                    transition={{duration: 0.6, delay:1}}
                                >
                                    <div className = "header-form">Daftar</div>
                                </motion.div>
            
                                <div className = "group-form">
                                        <motion.div
                                            initial="start"
                                            animate="middle"
                                            exit="start"
                                            variants = {form_animate}
                                            transition={{duration: 0.8, delay:1}}
                                        >
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
                                        </motion.div>
                                        
                                        <motion.div
                                            initial="start"
                                            animate="middle"
                                            exit="start"
                                            variants = {form_animate}
                                            transition={{duration: 1, delay:1}}
                                        >
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
                                        </motion.div>

                                        <motion.div
                                            initial="start"
                                            animate="middle"
                                            exit="start"
                                            variants = {form_animate}
                                            transition={{duration: 1.2, delay:1}}
                                        >
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
                                        </motion.div>

                                        <motion.div
                                            initial="start"
                                            animate="middle"
                                            exit="start"
                                            variants = {form_animate}
                                            transition={{duration: 1.4, delay:1}}
                                        >
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
                                        </motion.div>

                                        <motion.div
                                            initial="start"
                                            animate="middle"
                                            exit="start"
                                            variants = {form_animate}
                                            transition={{duration: 1.6, delay:1}}
                                        >
                                            <div className="signup-btn">
                                                
                                                <div className="terms">
                                                    <input type="checkbox" name="terms" id="terms" />
                                                    <label htmlFor="terms">Terms & Service</label>
                                                </div>
                                            
                                                <motion.button type="submit" className="btn-signup" 
                                                    whileTap={{scale:0.8}}
                                                    whileHover={{
                                                        scale: 1.1,
                                                        backgroundColor: "#3F37C9"
                                                    }}
                                                >
                                                    Daftar
                                                </motion.button>
                                            </div>
                                        </motion.div>
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
            
                                <div className="redirect-to-masuk">
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
                    </motion.div>
            </motion.div>
        );
    }

export default Signup;