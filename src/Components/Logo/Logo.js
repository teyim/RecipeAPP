import React from 'react';
import ClassStyles from './Logo.module.css';
import LogoImage from '../../Assets/Images/icons8_soup_plate_32.png';
const Logo=(props)=>(
       <div className="d-flex align-items-center">
          <img alt="logo"className={ClassStyles.logo} src={LogoImage}></img>
          <h3 style={{fontWeight:800}}>Foodie</h3>
          </div>
);
export default Logo;