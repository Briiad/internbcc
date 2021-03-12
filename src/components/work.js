import React, { useEffect, useContext } from 'react'
import { Context } from '../App';

function Work() {

    let { global } = useContext(Context);

    useEffect(() => {
        console.log(global);
    }, []);

    return (
        <div className="Work">
            <h1>Pekerjaan untuk anda</h1>
            {global.length === 0 ? ("Loading") : (
                <div className="Works">
                    {global.map((job) => {
                        return (
                            <div key={job.id}>
                                <h3>{job.jobTitle}</h3>
                                <p>{job.Desc}</p>
                            </div>
                        );
                    })}
                </div>
            )}
        </div>
    )
}

export default Work
