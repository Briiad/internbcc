import React from 'react'
import RightNav from '../components/rightNav';
import '../css/navbar.css'

function Hamburger() {

   return (
      <>
         <div className="styledBurger" onClick={console.log("Bisa di klik")} >
            <div />
            <div />
            <div />
         </div>

         <RightNav />
      </>

   )
}

export default Hamburger
