import React from 'react'
import { motion, AnimatePresence } from "framer-motion";

import '../css/navbar.css';

import { logo } from '../animations/animate';
import Hamburger from './Hamburger';

function Navbar() {

    return (
        <AnimatePresence>
            <nav>
                <div className="left-nav">
                    <ul>
                        <li>
                            <svg width="30" height="28" viewBox="0 0 33 28" fill="none" xmlns="http://www.w3.org/2000/svg">

                                <motion.path
                                    d="M1.448 28V29H2.448H8.352H9.352V28V20.8824L10.8906 19.3022L17.3974 28.5744L17.6961 29H18.216H24.984H26.9404L25.7945 27.4143L16.0269 13.8979L25.102 3.0828L26.4805 1.44H24.336H17.712H17.2494L16.9499 1.7925L9.352 10.7347V2.44V1.44H8.352H2.448H1.448V2.44V28Z" stroke="black" stroke-width="2"
                                    variants={logo}
                                    initial="in"
                                    animate="out"
                                    exit="in"
                                    transition={{
                                        duration: 2.4
                                    }}
                                />

                            </svg>
                        </li>
                    </ul>
                </div>

                <Hamburger />
            </nav>
        </AnimatePresence>
    );
}

export default Navbar;
