import React from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

import '../css/signup.css'
import * as iconFc from 'react-icons/fc';
import * as iconFa from 'react-icons/fa';

function Signup(){
    return(
        <div className = "Signup">
            <div className = "landing-signup">
                <h1>Sign up</h1>
            </div>

            <div className = "signup-form">
                <div className = "form-container">
                    <div className = "form-header">Masuk</div>

                    <div className = "form-group">
                        <div className="forms">
                            <input type="text" name="email" placeholder = "Email" autoComplete="off" />
                        </div>
                        <div className="forms">
                            <input type="password" name="password" placeholder = "Password" />
                        </div>
                    </div>

                    <div className="signup-btn">
                        <p><a href = "#">Lupa Password?</a></p>
                        <button type="button" className="btn-signup" >Masuk</button>
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
                            <p> &nbsp; Masuk dengan Google</p>
                        </div>
                    </div>

                    <div className="redirect-to-daftar">
                        <p>
                            Baru di NamaWeb? 
                            <Link to="/user_signin">
                                <span>
                                    Daftar
                                </span>
                            </Link>
                        </p>
                    </div>
                </div>              
            </div>
        </div>
    );
}

export default Signup;