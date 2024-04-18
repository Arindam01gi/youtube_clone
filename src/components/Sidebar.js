import React from 'react'
import  { useSelector } from "react-redux"

const Sidebar = () => {

  const isMenuOpen  = useSelector((store)=>store.app.isMenuOpen)

  if (!isMenuOpen) return null;




  return  (
    <div className='p-5 shadow-lg  h-screen  w-48 '>
      <h1 className='font-bold border-b border-b-gray-200 pb-3'>Home</h1>
      <h1 className='font-bold pt-3'>Subscriptions</h1>
      <ul className='border-b border-b-gray-200 pb-3'>
        <li className='m-3'> Music</li>
        <li className='m-3'> Sports </li>
        <li className='m-3'> Gaming </li>
        <li className='m-3'> Quiz </li>
      </ul>
      <h1 className='font-bold pt-3'>Explore</h1>
      <ul className='border-b border-b-gray-200 pb-3'>
        <li className='m-3'> Music</li>
        <li className='m-3'> Sports </li>
        <li className='m-3'> Gaming </li>
        <li className='m-3'> Quiz </li>
      </ul>
    </div>
  )
}

export default Sidebar