import React from 'react';
import '../css/carikerja.css';

function Caripekerjaan() {
    return (
        <div>
            <div className="carikerja-landing">
                <h1>Cari Pekerjaan apa hari ini?</h1>
                <div className="search-box">
                    <form>

                        <div className="forms">
                            <p> Cari Pekerjaan </p>
                            <input type="text" name="caripekerjaan" />
                        </div>

                        <div className="forms">
                            <p>Lokasi Pekerjaan</p>
                            <input type="text" name="lokasipekerjaan" />
                        </div>

                        <div className="range">
                            <p>Range Gaji</p>
                            <input type="text"/>
                            <button>Cari Kerja</button>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    )
}

export default Caripekerjaan;