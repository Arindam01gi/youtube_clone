import React from 'react'
import Sidebar from './Sidebar'
import MainContainer from './MainContainer'
import { Outlet } from 'react-router-dom'
import Head from './Head'

const Body = () => {
  return (
    <div>
    {/* <div> */}

      <Head/>
      {/* </div> */}
    <div className='grid grid-flow-col'>
      
      <Sidebar/>
      {/* <MainContainer/> */}
      <Outlet/>
    </div>
    </div>
  )
}

export default Body