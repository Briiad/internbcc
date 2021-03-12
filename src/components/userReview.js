import React from 'react'

function UserReview() {
    return (
        <div className = "user-review">
            <h1>Kata Mereka</h1>
            <div className="review">
                <div className="user">
                    <div className="review-img">

                    </div>
                    <div className="review_user">
                        <h3>Sasha</h3>
                        <p>Setelah mencoba terjun dalam kerjapedia, aku sudah berhasil mendapatkan 3 kali pengalaman bekerja dalam bidang grafis desain yang meningkatkan kualitas portofolioku!</p>
                    </div>
                </div>
                <div className="user">
                    <div className="review-img">

                    </div>
                    <div className="review_user">   
                        <h3>Alvin</h3>
                        <p>Bertemu kerjapedia secara kebetulan, namun tawaran pekerjaan yang ditawarkan sangat beragam dan luas dan membuat saya untuk mencoba terjun dalam bekerja. Sampai saat ini saya sudah menjalani 5 project menjadi translator bahasa inggris melalui platform ini.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserReview
