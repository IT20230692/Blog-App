import React from 'react'
import pic1 from '../images/pic1.jpg';
import '../header/header.css';

export default function Header() {
  return (
    <div className='header'>
     <div className='headerTitles'>
      <span className='headerTitleSm'>React & Node</span>
      <span className='headerTitleLm'>Blog</span>
     </div>
     <img
     className='headerImg'
     src={pic1}
     alt='pic'
     />
    </div>
  )
}
