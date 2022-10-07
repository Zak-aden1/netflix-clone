import React from 'react'
import { ArrowBackIosNewOutlined, ArrowForwardIosOutlined } from '@mui/icons-material'

import './styles.scss'
import ListCard from '../ListCard'

const List = () => {
  return (
    <div className='list'>
      <span className='title'>Continue to watch</span>
      <div className='wrapper'>
        <ArrowBackIosNewOutlined/>
        <div className='container'>
          <ListCard/>
        </div>
        <ArrowForwardIosOutlined/>
      </div>
    </div>
  )
}

export default List;