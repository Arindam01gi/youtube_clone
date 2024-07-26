import React from 'react';
import ButtonList from './ButtonList';
import VideoContainer from './VideoContainer';


const MainContainer = () => {
  return (
    <div className='col-span-10 relative overflow-x-hidden'>
        <ButtonList/>
        <VideoContainer/>
    </div>
  )
}

export default MainContainer