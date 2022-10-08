import React from 'react'
import { PlayArrow, Add, ThumbsUpDownOutlined } from '@mui/icons-material'
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import './styles.scss'
import { useState } from 'react';

const ListCard = ({index}) => {
  const [isHovered, setIsHovered] = useState(false)
  const trailer =
  "https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761";

  return (
    <div 
    className='card' 
    onMouseEnter={() => setIsHovered(true)} 
    onMouseLeave={() => setIsHovered(false)}
    style={{left: isHovered && index * 225 - 50 + index * 2.5}}
    >
      <img src='https://occ-0-1723-92.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABU7D36jL6KiLG1xI8Xg_cZK-hYQj1L8yRxbQuB0rcLCnAk8AhEK5EM83QI71bRHUm0qOYxonD88gaThgDaPu7NuUfRg.jpg?r=4ee'></img>

      {isHovered && (
      <>
        <video src={trailer} autoPlay={true} loop />
        <div className='itemInfo'>
          <div className='icons'>
            <PlayArrow className='icon'/>
            <Add className='icon'/>
            <ThumbUpOffAltIcon className='icon'/>
            <ThumbDownOffAltIcon className='icon'/>
          </div>
          <div className='itemInfoTop'>
            <span>1 hour 14 mins</span>
            <span className='limit'>+18</span>
            <span>1999</span>
          </div>
          <div className='desc'>
            Lorem ipsum dolor sit amet 
            consectetur adipisicing elit. Consequuntur accusantium magni natus nobis ea, iusto corporis quae corrupti molestias voluptatibus?
          </div>
          <div className='genre'>Action</div>
        </div>
      </>
      )}
    </div>
  )
}

export default ListCard;