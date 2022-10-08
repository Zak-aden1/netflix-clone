import { ArrowBackOutlined } from '@mui/icons-material';
import React from 'react'

import './styles.scss'

const Watch = () => {
  return (
    <div className='watch'>
      <div className='back'>
        <ArrowBackOutlined/>
        Home
      </div>
      <video 
        className='video' 
        autoPlay 
        progress 
        controls 
        src="https://www.youtube.com/bac3ea19-f891-41f5-a7e7-0d0164d713cd"/>
    </div>
  )
}

export default Watch;