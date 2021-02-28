import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import axios from 'axios';

import '../css/sign_in.css';
import * as iconFc from 'react-icons/fc';
import * as iconFa from 'react-icons/fa';

function Signin(){
    return(
        <div className = "Signin">
            <div className = "landing-signin">
                <h1>Sign in</h1>
            </div>

            <div className = "form-signin">
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
                            />
                        </div>

                        <div className="forms">
                            <input 
                                type="text" 
                                name="username" 
                                id = "username" 
                                placeholder = "Username" 
                                autoComplete="off" 
                            />
                        </div>

                        <div className="forms">
                            <input 
                                type="password" 
                                name="password" 
                                id = "password" 
                                placeholder = "Password"
                            />
                        </div>

                        <div className="forms">
                            <input 
                                type="password" 
                                name="confirmPassword" 
                                id = "confirmPassword" 
                                placeholder = "Confirm Password"
                            />
                        </div>
                        
                    </div>

                    <div className="signin-btn">
                        <button type="button" className="btn-signin" onClick={insertData} >Daftar</button>
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
                        <div className="sign-fb">
                            <iconFa.FaFacebookF />
                            <p> &nbsp; Facebook</p>
                        </div>
                        <div className="sign-twt">
                            <iconFa.FaTwitter />
                            <p> &nbsp; Twitter</p>
                        </div>
                        <div className="sign-google">
                            <iconFc.FcGoogle />
                            <p> &nbsp; Daftar dengan Google</p>
                        </div>
                    </div>

                    <div className="redirect-to-masuk">
                        <p>
                            Sudah punya Akun? 
                            <Link to="/user_signup">
                                <span>
                                    Masuk
                                </span>
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Signin;