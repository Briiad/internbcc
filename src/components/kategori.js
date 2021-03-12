import React from 'react'
import { dataCategory } from '../config/dataCategory';

function Kategori() {
    return (
        <div className="kategori">
            <div className="list-kategori">
                {dataCategory.map((item, index) => {
                    return (
                        <div key={index} className={item.cName}>
                            <img src={item.image} alt="" width="100px" />
                            <p className={item.cNameP}>{item.title}</p>
                        </div>
                    );

                })}
            </div>
        </div>
    )
}

export default Kategori
