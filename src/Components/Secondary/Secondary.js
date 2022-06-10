import React from 'react'
import PumpsImg from '../../Assets/3.png'
import './Secondary.css'

const Secondary = () => {
  return (
    <div className='secondary'>
        <p className='secondary_text'>INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF POWER FOR THE NATION. </p>
        <img src={PumpsImg} alt="" className="secondary_img" />
        <p className='para1'>Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables - Solar Systems - Motors </p>
        <hr/>
        <h5 className='secondary_header'>C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS</h5>
        <div className='products_container'>
        <p className='products'>CHEMICALS & PROCESS <span>|</span> POWER <span>|</span> WATER & WASTE WATER <span>|</span> OILS & GAS <span>|</span> PHARMA <span>|</span> SUGARS & DISTILLERIES <span>|</span> PAPER & PULP <span>|</span> MARINE & DEFENCE <span>|</span> METAL & MINING <span>|</span> FOOD & BEVERAGE</p>
        <p className='products'> PETROCHEMICAL & REFINERIES <span>|</span> SOLAR <span>|</span> BUILDING <span>|</span> HVAC <span>|</span> FIRE <span>|</span> FIGHTING <span>|</span> AGRICULTURE & RESIDENTIAL</p></div>
    </div>
  )
}

export default Secondary