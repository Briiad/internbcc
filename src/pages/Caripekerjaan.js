import React from 'react';
import Kategori from '../components/kategori';
import Searchfilter from '../components/search-filter';
import Footer from '../components/footer';
import '../css/carikerja.css';
import UserReview from '../components/userReview';

function Caripekerjaan() {
    return (
        <div>
            <Searchfilter/>
            <Kategori/>
            <UserReview/>
            <Footer />
        </div>
    )
}

export default Caripekerjaan;