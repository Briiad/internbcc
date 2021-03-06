import React, { useEffect } from 'react';
import Aos from 'aos';

import 'aos/dist/aos.css';
import '../css/home.css';
import Cards from '../components/cards';
import Landingpage from '../components/landingpage';
import Carikerja from '../components/landing-carikerja';
import Carimentor from '../components/landing-carimentor';
import Footer from '../components/footer';

function Home(){

    useEffect(() => {
        Aos.init({});
    }, [])

    return(
        <div className = "home">
            <Landingpage/>
            <Cards/>
            <Carikerja/>
            <Carimentor/>
            <Footer/>
        </div>
    );
}

export default Home;