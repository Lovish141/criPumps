import React from 'react'
import AwardImg from '../../Assets/1.png'
import PersonsImg from '../../Assets/2.png'
import './Main.css'
const Main = () => {
  return (
    <div className='main'>
    <div className="main_container1">
        <img src={AwardImg} alt="" className="main_img1" />
    </div>
    <div className="main_container2">
        <h5> C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for the 4th time.</h5>
        <ul className="main_list">
            <li>   C.R.I.'s energy efficient products are well recognized by various Government Institutions, as trustworthy products for various projects across the globe to save energy.</li>
            <li>   C.R.I. is the highest contributor in the country for the projects of EESL (Energy Efficiency Services Limited) to replace the old inefficient pumps with 5 Star rated energy efficient smart pumps with IoT enabled control panel. </li>
        </ul>
        <img src={PersonsImg} alt="" className="main_img2" />
        <p className="mian_container2_para">
        Government of India has awarded the <strong>"National Energy Conservation Award 2018"</strong>. Mr. G. Selvaraj, Joint Managing Director of C.R.I. Group received the award from Smt. Sumitra Mahajan, Speaker of Lok Sabha & Shri. Raj Kumar Singh, Honorable Minister of State.
        </p>
    </div>
    </div>
  )
}

export default Main
