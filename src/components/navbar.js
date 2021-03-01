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
                    <Link className = "__nav-btn" to = "/">
                        <li>
                            <span>
                                Home
                            </span>
                        </li>
                    </Link>

                    <Link className = "__nav-btn" to = "/carimentor">
                        <li>
                            <span>
                                Mentor
                            </span>
                        </li>
                    </Link>

                    <Link className = "__nav-btn" to = "/carikerja">
                        <li>
                            <span>
                                Kerja!
                            </span>
                        </li>
                    </Link>
                    
                    <li className = "__right-line"></li>
                    <li></li>

                    <Link className = "__signin-btn" to = "/usersignin">
                        <li>
                            <span>
                                Masuk
                            </span>
                        </li>
                    </Link>

                    <Link className = "__signup-btn" to = "/usersignup">
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
