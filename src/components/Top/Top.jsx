import React from 'react'
import './Top.css'
import MySvg from '../../assets/svgs/shikayetVar_Logo.svg'

const Top = () => {
  return (
    <div className='topContainer'>
      <img src={MySvg} alt="Logo" className='logo' style={{ width: '150px', height:'50px' }}/>
      <div className="buttons">
        <button className='button'>Panel</button>
        <button className='button'>Söhbət</button>
      </div>
      <button className='button'>İstifadəçi</button>
    </div>
  )
}

export default Top