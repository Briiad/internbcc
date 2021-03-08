import React from 'react';
import { motion } from "framer-motion";
import '../css/home.css';

function Landingpage() {
    return (
        <motion.div className = "landing"
        initial={{
            x: "-100vw",
            opacity: 0
        }}
        animate={{
            x: 0,
            opacity: 1
        }}
        exit={{
            x : "-100vw",
            opacity: 0
        }}
        transition={{
            type: "spring",
            duration: 0.5
        }}
    >
        <div className="header">
            <motion.div className="header-title"
                initial={{y:-200, opacity:0}}
                animate={{
                    y: [-200, 150],
                    scale: [1, 1.5],
                    opacity:1
                }}
                transition={{delay: 1}}
            >
                <h1>Kerjapedia</h1>
            </motion.div>
            <div className="header-logo">

                <svg width="300" height="300" viewBox="0 0 26 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <motion.path d="M0.947998 27V27.5H1.448H7.352H7.852V27V19.6792L9.95331 17.5211L16.8067 27.2872L16.956 27.5H17.216H23.984H24.9622L24.3893 26.7071L14.3935 12.8749L23.719 1.7614L24.4083 0.940002H23.336H16.712H16.4807L16.331 1.11625L7.852 11.0953V1.44V0.940002H7.352H1.448H0.947998V1.44V27Z" stroke="white"
                        initial={{
                            opacity:0,
                            pathLength: 0,
                            fill: "rgba(255, 255, 255, 0)"
                        }}
                        animate={{
                            opacity:1,
                            pathLength: 1,
                            fill: ["rgba(255, 255, 255, 0)", "rgba(255, 255, 255, 1)"]
                        }}
                        transition={{
                            delay: 1.5,
                            duration: 3
                        }}
                    />
                </svg>

            </div>
        </div>
    </motion.div>
    )
}

export default Landingpage
