import React from 'react'
import * as BsIcon from 'react-icons/bs';
import * as AiIcon from 'react-icons/ai';
import 'aos/dist/aos.css';

import '../css/home.css';

function Cards() {
    return (
        <div className="landing-content">
        <h1 
            data-aos="fade-up" 
        >
            Kenapa Kerjapedia ?
        </h1>

        <div className="card-container">
            <div className="card-box" data-aos="fade-up">
                <div className="ilustration" >
                    <div className="ilust">
                        <BsIcon.BsCardChecklist/>
                    </div>
                </div>
                <div className="features">
                    <h2>Praktis</h2>
                </div>  
            </div>

            <div className="card-box" data-aos="fade-up">
                <div className="ilustration">
                    <div className="ilust">
                        <BsIcon.BsFillChatSquareDotsFill/>
                    </div>
                </div>
                <div className="features">
                    <h2>Mentor</h2>
                </div>  
            </div>

            <div className="card-box" data-aos="fade-up">
                <div className="ilustration">
                    <div className="ilust">
                        <AiIcon.AiOutlineGlobal/>
                    </div>
                </div>
                <div className="features">
                    <h2>Skala Besar</h2>
                </div>  
            </div>
        </div>
    </div>
    )
}

export default Cards;
