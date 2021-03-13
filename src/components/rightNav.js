import React from 'react'
import { Link } from 'react-router-dom';

function RightNav() {
    return (
        <div className="right-nav">
            <ul>
                <Link className="__nav-btn" to="/">
                    <li>
                        <span>
                            Home
                                </span>
                    </li>
                </Link>

                <Link className="__nav-btn" to="/carimentor">
                    <li>
                        <span>
                            Mentor
                                </span>
                    </li>
                </Link>

                <Link className="__nav-btn" to="/carikerja">
                    <li>
                        <span>
                            Kerja!
                                </span>
                    </li>
                </Link>

                <Link className="__signin-btn" to="/usersignin">
                    <li>
                        <span>
                            Masuk
                                </span>
                    </li>
                </Link>

                <Link className="__signup-btn" to="/usersignup">
                    <li>
                        <span>
                            Daftar
                                </span>
                    </li>
                </Link>
            </ul>
        </div>
    )
}

export default RightNav
