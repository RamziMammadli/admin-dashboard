import React from 'react'
import Top from '../../components/Top/Top'
import './Dashboard.css'
import { Main } from '../../components/Main'

const Dashboard = () => {
  return (
    <div className='dashContainer'>
      <Top/>
      <Main/>
    </div>
  )
}

export default Dashboard