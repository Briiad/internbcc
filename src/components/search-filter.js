import React from 'react'
import CostSelect from '../config/selectCost';

function Searchfilter() {
    return (
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
                            <div className="select_cost">
                                <CostSelect/>
                                <button type="submit">Cari Kerja</button>
                            </div>
                            
                        </div>

                    </form>
                </div>
            </div>
    )
}

export default Searchfilter
