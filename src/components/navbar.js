import React from 'react'
import { Link } from 'react-router-dom';

import '../css/navbar.css';

function Navbar() {

    return(
        <nav>
            <ul>
                <div className = "left-nav">
                    <li>Logo</li>
                    <li>WebName</li>
                </div>

                <div className = "right-nav">
                    <li>Mentor</li>
                    <li>Kerja</li>
                    <li className = "__right-line"></li>
                    <li></li>

                    <Link className = "__signin-btn" to = "/user_signin">
                        <li>
                            <span>
                                Masuk
                            </span>
                        </li>
                    </Link>

                    <Link className = "__signup-btn" to = "/user_signup">
                        <li>
                            <span>
                                Daftar
                            </span>
                        </li>
                    </Link>
                </div>
            </ul>
        </nav>
    );
}

export default Navbar;
