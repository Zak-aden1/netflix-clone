import React from 'react'
import { ArrowBackIosNewOutlined, ArrowForwardIosOutlined } from '@mui/icons-material'

import './styles.scss'
import ListCard from '../ListCard'

const List = () => {
  const abc = [1, 2, 3, 4, 5, ,6 ,7 ,8, 9, 0, 2, 34, 4, 4, 4, 3, 4,5 ]
  return (
    <div className='list'>
      <h2 className='title'>Continue to watch</h2>
      <div className='wrapper'>
        <ArrowBackIosNewOutlined className='slider left'/>
        <div className='container'>
          {abc.map(() => (
            <ListCard/>
          ))}
          <ListCard/>
          <ListCard/>
          <ListCard/>
          <ListCard/>
          <ListCard/>
          <ListCard/>
          <ListCard/>
          <ListCard/>
          <ListCard/>
          <ListCard/>
          <ListCard/>
          <ListCard/>
          <ListCard/>
          <ListCard/>
        </div>
        <ArrowForwardIosOutlined className='slider right'/>
      </div>
    </div>
  )
}

export default List;