import React, { useEffect, useContext } from 'react'
import { Context } from '../App';

function Work() {

   let { global } = useContext(Context);

   return (
      <div className="Work">
         <h1>Pekerjaan untuk anda</h1>
         {global.length === 0 ? ("Tidak ada data untuk ditampilkan") : (
            <div className="Works-list">
               {global.map((job) => {
                  return (
                     <div key={job.id} className="job">
                        <div className="job-img">
                           <img src={job.picture} alt="gambar" />
                        </div>
                        <div className="job-about">
                           <h3>{job.jobTitle}</h3>
                           <p>{job.jobDesc}</p>
                           <p>{job.location}</p>
                           <p>Rp.{job.fee}</p>
                        </div>

                        <button>Lihat Detail</button>
                     </div>
                  );
               })}
            </div>
         )}
      </div>
   )
}

export default Work
