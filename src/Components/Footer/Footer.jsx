import React from 'react'
import CallIcon from '@mui/icons-material/Call';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import LanguageRoundedIcon from '@mui/icons-material/LanguageRounded';


import './Footer.css'

const Footer = () => {
  return (
    <div className='Footer'>
    <ul className="footer_list">
        <li><CallIcon/> Toll Free 18002001234</li>
        <li><FacebookRoundedIcon/> www.facebook.com/cripumps</li>
        <li><LanguageRoundedIcon/> www.crigroups.com</li>
    </ul>
    </div>
  )
}

export default Footer