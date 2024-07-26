import React, { useState } from 'react'
import { useSelector } from "react-redux"
import { Link } from 'react-router-dom';

const Sidebar = () => {

  const [selected,setSelected] = useState("")

  const isMenuOpen = useSelector((store) => store.app.isMenuOpen)

  if (!isMenuOpen) return null;

  const handleClick = (name) =>{
    // console.log("name",name)
    setSelected(name)
  }




  return (
    <div className='px-5 shadow-lg  h-screen  w-48 top-10 sticky'>
      <Link to  = '/'>
      <h1 className={`p-3 mb-1  ${selected === 'Home'? 'bg-gray-200  rounded-md':''}`} onClick={() =>handleClick("Home")}>
        <i className='fas fa-house mr-4'></i>
        Home
      </h1>
      </Link>
      <Link  to='/results?search_query=trending'>
      <h1 className={`p-3 mb-1 ${selected === 'Trending'? 'bg-gray-200  rounded-md':''}`} onClick={() =>handleClick("Trending")}>
        <i className='fas fa-arrow-trend-up mr-4'></i>
        Trending
      </h1>
      </Link>
      <Link to='/results?search_query=flims'>
      <h1 className={`p-3 mb-1 ${selected === 'Flims'? 'bg-gray-200  rounded-md':''}`}  onClick={() =>handleClick("Flims")}>
        <i className='fas fa-clapperboard mr-4'></i>
        Flims
      </h1>
      </Link>
      <Link to='/results?search_query=music'>
      <h1 className={`p-3 mb-1 ${selected === 'Music'? 'bg-gray-200  rounded-md':''}`}  onClick={() =>handleClick("Music")}>
        <i className='fas fa-music mr-4'></i>
        Music
      </h1>
      </Link>
      <Link to='/results?search_query=sport'>
      <h1 className={`p-3 mb-1 ${selected === 'Sports'? 'bg-gray-200  rounded-md':''}`}  onClick={() =>handleClick("Sports")}>
        <i className='fas fa-person-skiing mr-4'></i>
        Sports
      </h1>
      </Link>

      <Link to='/results?search_query=gaming'>
      <h1 className={`p-3 mb-1 ${selected === 'Gaming'? 'bg-gray-200  rounded-md':''}`}  onClick={() =>handleClick("Gaming")}>
        <i className='fas fa-gamepad mr-4'></i>
        Gaming
      </h1>
      </Link>
      <Link to='/results?search_query=news'>
      <h1 className={`p-3 mb-1 ${selected === 'News'? 'bg-gray-200  rounded-md':''}`}  onClick={() =>handleClick("News")}>
        <i className='fas fa-newspaper mr-4'></i>
        News
      </h1>
      </Link>
      <Link to='/results?search_query=shopping'>
      <h1 className={`p-3 mb-1 ${selected === 'Shopping'? 'bg-gray-200  rounded-md':''}`}  onClick={() =>handleClick("Shopping")}>
        <i className='fas fa-bag-shopping mr-4'></i>
        Shopping
      </h1>
      </Link>
      <Link to='/results?search_query=podcast'>
      
      <h1 className={`p-3 mb-1 ${selected === 'Podcast'? 'bg-gray-200  rounded-md':''}`}  onClick={() =>handleClick("Podcast")}>
        <i className='fas fa-podcast mr-4'></i>
        Podcast
      </h1>
      </Link>
     
    </div>
  )
}

export default Sidebar