import React, { useState } from 'react'
import { ArrowBackIosNewOutlined, ArrowForwardIosOutlined } from '@mui/icons-material'

import './styles.scss'
import ListCard from '../ListCard'
import { useRef } from 'react'

const List = () => {
  const [isMoved, setIsMoved] = useState(false)
  const abc = [1, 2, 3, 4, 5, ,6 ,7 ,8, 9, 0, 2, 34, 4, 4, 4, 3, 4,5 ]

  const listRef = useRef()

  const handleClick = (direction) => {
    setIsMoved(true)
    let distance = listRef.current.getBoundingClientRect().x - 50
    if(direction === 'left') {
      listRef.current.style.transform = `translateX(${distance + 230}px)`
    }
    if(direction === 'right') {
      listRef.current.style.transform = `translateX(${distance - 230}px)`
    }
  }
  return (
    <div className='list'>
      <h2 className='title'>Continue to watch</h2>
      <div className='wrapper'>
        <ArrowBackIosNewOutlined style={{display: !isMoved && 'none'}} className='slider left' onClick={() => handleClick('left')}/>
        <div className='container' ref={listRef}>
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
        <ArrowForwardIosOutlined className='slider right'  onClick={() => handleClick('right')}/>
      </div>
    </div>
  )
}

export default List;