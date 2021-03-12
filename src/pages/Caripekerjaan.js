import React, { useState } from 'react';
import Kategori from '../components/kategori';
import Searchfilter from '../components/search-filter';
import Footer from '../components/footer';
import '../css/carikerja.css';
import UserReview from '../components/userReview';
import Work from '../components/work';

function Caripekerjaan() {

    const [category, setCategory] = useState(false);

    return (
        <div>
            <Searchfilter setTampil={setCategory} />
            {!category ? <><Kategori /> <UserReview /> </> : <Work />}
            <Footer />
        </div>
    );
}

export default Caripekerjaan;