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
        <div className = "Signin">
            <div className = "landing-signin">
                <h1>Sign in</h1>
            </div>
                <motion.div className = "form-signin"
                    initial="in"
                    animate="out"
                    exit="in"
                    variants={form_module_animate}
                    transition={transition}
                    >
                    <form onSubmit={handleLogin}>
                    <div className = "form-container">
                        <div className = "form-header">Masuk</div>

                        <div className = "form-group">
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
                            <div className="forms">
                                <input 
                                type="password" 
                                name="password" 
                                placeholder = "Password" 
                                value = {password} 
                                onChange = {e => setPassword(e.target.value)}
                                />
                            </div>
                        </div>

                        <div className="signin-btn">
                            <p><a href = "#">Lupa Password?</a></p>
                            <button type="submit" className="btn-signin" >Masuk</button>
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
        </div>
    );
}

export default Signin;