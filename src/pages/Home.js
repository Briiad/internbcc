import React from 'react';
import { motion } from "framer-motion";

import '../css/home.css';

import {transition} from '../animations/animate'

function Home(){
    return(
        <motion.div className = "home"
            initial={{
                x: "-100%",
                opacity: 0
            }}
            animate={{
                x: 0,
                opacity: 1
            }}
            exit={{
                x : "-100%",
                opacity: 0
            }}
            transition={transition}
        >
            <div className = "landing">
                <div className="header">
                    <h1>Keeerja.io</h1>
                </div>
            </div>

            <div className="landing-content">
                <h1>Kenapa Keeerja.io?</h1>
            </div>
        </motion.div>
    );
}

export default Home;