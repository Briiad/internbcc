import React from 'react'
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion'
import 'aos/dist/aos.css';

import '../css/home.css';

function Carikerja() {
    return (
        <div className="landing-carikerja" data-aos="fade-right" data-aos-duration="3000">
            <div className="person-image">

            </div>
            <div className="carikerja-desc">
                <h1>Cari Kerja!</h1>
                <p>Kami akan membantumu untuk menemukan informasi pekerjaan ter-update sesuai dengan bidang skill yang kamu pilih. Tenang saja, kami memiliki ribuan informasi pekerjaan yang bisa kamu coba untuk meningkatkan pengalaman bekerjamu, bahkan menambah nilai baru dalam CV atau portofoliomu!</p>
                <br />
                <br />
                <div className="carikerja-btn">
                    <motion.button
                        whileHover={{
                            scale: 1.1,
                            backgroundColor: "#480CA8"
                        }}
                        whileTap={{
                            scale: 0.8
                        }}
                    >
                        <Link to="/carikerja" className="btn">
                            Cari Kerja
                        </Link>
                    </motion.button>
                </div>
            </div>

        </div>
    )
}

export default Carikerja
