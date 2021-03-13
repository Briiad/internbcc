import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import 'aos/dist/aos.css';

function Carimentor() {
    return (
        <div className="landing-carimentor" data-aos="fade-left" data-aos-duration="3000">
            <div className="carimentor-desc" >
                <h1>Cari Mentor!</h1>
                <p>
                    Merasa memiliki beberapa kendala dalam memilih pekerjaan? Atau kamu merasa belum yakin dengan skill yang kamu punya untuk mengerjakan pekerjaan baru? Jangan khawatir, konsultasikan keluhanmu bersama mentor ahli pilihan kerjapedia yang akan membantumu memecahkan masalah terkait pekerjaan!
                </p>
                <br />
                <br />
                <div className="carimentor-btn">
                    <motion.button
                        whileHover={{
                            scale: 1.1,
                            backgroundColor: "#480CA8"
                        }}
                        whileTap={{
                            scale: 0.8
                        }}
                    >
                        <Link to="/carimentor" className="btn">
                            Cari Kerja
                        </Link>
                    </motion.button>
                </div>
            </div>
            <div className="person-image">

            </div>
        </div>
    )
}

export default Carimentor;
