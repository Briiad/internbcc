import React from 'react';
import Typewriter from 'typewriter-effect';

function Waiting() {
    return (
        <div className="waiting">
            <div className="type__">
                <Typewriter
                    options={{
                        loop: true
                    }}

                    onInit={(typewiter) => {
                        typewiter.typeString("Di Kerjapedia, kamu bisa menjadi ")
                            .typeString("<h1 class = __wanna>Developer </h1>")
                            .pauseFor(2500)
                            .deleteChars(10)
                            .typeString("<h1 class = __wanna>Freelancer </h1>")
                            .pauseFor(2500)
                            .deleteChars(12)
                            .typeString("<h1 class = __wanna>Designer </h1>")
                            .pauseFor(2500)
                            .start();
                    }}
                />
            </div>
        </div>
    )
}

export default Waiting
