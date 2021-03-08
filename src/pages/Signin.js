import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import {motion} from 'framer-motion';

import '../css/sign_in.css'
import * as iconFc from 'react-icons/fc';

//IMPORT ANIMATION FROM ANIMATE.JS
import {form_module_animate, form_animate, transition} from '../animations/animate'


function Signin(){

    const[username, setUsername] = useState("");
    const[password, setPassword] = useState("");

    const handleLogin = async(e) => {
        e.preventDefault();
        const {data}= await axios.post("/user/login", {username, password}, {});
        console.log(data);
    }

    return(
        <motion.div className = "Signin"
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
            <div className = "landing-signin">
                <h1>Sign in</h1>
            </div>
                <motion.div className = "form-signin"
                    initial="in"
                    animate="out"
                    exit="in"
                    variants={form_module_animate}
                    transition={{
                        type: "spring",
                        stiffness: 100,
                        duration: 0.5,
                        delay: 0.5
                    }}
                    >
                    <form onSubmit={handleLogin}>
                    <div className = "form-container">
                        <motion.div
                            initial="start"
                            animate="middle"
                            exit="start"
                            variants = {form_animate}
                            transition={{duration: 0.6, delay:1}}
                        >
                            <div className = "form-header">Masuk</div>
                        </motion.div>

                        <div className = "form-group">
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
                                    name="username" 
                                    placeholder = "username" 
                                    autoComplete="off" 
                                    value={username}
                                    onChange = {e => setUsername(e.target.value)} 
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
                                    type="password" 
                                    name="password" 
                                    placeholder = "Password" 
                                    value = {password} 
                                    onChange = {e => setPassword(e.target.value)}
                                    />
                                </div>
                            </motion.div>
                            
                        </div>

                        <motion.div className="signin-btn"
                            initial="start"
                            animate="middle"
                            exit="start"
                            variants = {form_animate}
                            transition={{duration: 1.2, delay:1}}
                        >
                            <p><a href = "#">Lupa Password?</a></p>
                            <motion.button type="submit" className="btn-signin" 
                                whileTap={{scale:0.8}}
                                whileHover={{
                                    scale: 1.1,
                                    backgroundColor: "#3F37C9"
                                }}
                            >
                                Masuk
                            </motion.button>
                        </motion.div>

                        <div className="border-sosmed">
                            <svg width="120" height="1" viewBox="0 0 150 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <line y1="0.5" x2="150" y2="0.5" stroke="#251946"/>
                            </svg>
                            <p> atau </p>
                            <svg width="120" height="1" viewBox="0 0 150 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <line y1="0.5" x2="150" y2="0.5" stroke="#251946"/>
                            </svg>
                        </div>

                        <div className="signin-sosmed">
                            <div className="sign-google">
                                <iconFc.FcGoogle />
                                <p> &nbsp; Masuk dengan Google</p>
                            </div>
                        </div>

                        <div className="redirect-to-daftar">
                            <p>
                                Baru di NamaWeb? 
                                <Link to="/usersignup">
                                    <span>
                                        Daftar
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

export default Signin;