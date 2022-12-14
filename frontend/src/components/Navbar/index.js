import React, { useState } from 'react'
import { Search, Notifications, ArrowDropDown } from '@mui/icons-material'

import './styles.scss'

const Navbar = () => {

  const [isScrolled, setIsScrolled] = useState(false)

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true)
    return () => window.onscroll = null
  }

  return (
    <div className={isScrolled ? 'navbar scrolled' : 'navbar'}>
      <div className='container'>
        <div className='left'>
          <img src='https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg' ></img>
          <span>home</span>
          <span>series</span>
          <span>movies</span>
          <span>new and popular</span>
          <span>my list</span>
        </div>
        <div className='right'>
          <Search className='icon'/>
          <span>KID</span>
          <Notifications className='icon'/>
          <img src='https://images.pexels.com/photos/6899260/pexels-photo-6899260.jpeg?auto=compress&cs=tinysrgb&h=627&fit=crop&w=1200'></img>
          <div className='profile'>
          <ArrowDropDown className='icon'/>
          <div className='options'>
            <span>Settings</span>
            <span>Logout</span>
          </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar;