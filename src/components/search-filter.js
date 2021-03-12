import React, { useState, useContext, useEffect } from 'react'
import CostSelect from '../config/selectCost';
import { Context } from '../App';
import axios from 'axios';

function Searchfilter({ setTampil }) {

    const [keyword, setKeyword] = useState("");
    const [location, setLocation] = useState("");
    const [range, setRange] = useState("");

    let { setGlobal } = useContext(Context);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const arrRange = range.split("to");
        const { data } = await axios.post("/job/allFilter", {
            minFee: arrRange[0] * 100000,
            maxFee: arrRange[1] * 100000,
            location,
            key: keyword
        });
        setGlobal(data.data);
        setTampil(true);
    };

    return (
        <div className="carikerja-landing">
            <h1>Cari Pekerjaan apa hari ini?</h1>
            <div className="search-box">
                <form onSubmit={handleSubmit}>

                    <div className="forms">
                        <p> Cari Pekerjaan </p>
                        <input type="text"
                            name="caripekerjaan"
                            placeholder="e.x Web Design"
                            value={keyword}
                            onChange={(e) => setKeyword(e.target.value)}
                        />
                    </div>

                    <div className="forms">
                        <p>Lokasi Pekerjaan</p>
                        <input type="text"
                            name="lokasipekerjaan"
                            placeholder="e.x Indonesia"
                            value={location}
                            onChange={(e) => setLocation(e.target.value)}
                        />
                    </div>

                    <div className="range">
                        <p>Range Gaji</p>
                        <div className="select_cost">
                            <CostSelect setRange={setRange} />
                            <button type="submit">Cari Kerja</button>
                        </div>

                    </div>

                </form>
            </div>
        </div>
    )
}

export default Searchfilter
