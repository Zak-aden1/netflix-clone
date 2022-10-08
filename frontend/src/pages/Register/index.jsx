import React from 'react'

import './styles.scss'

const Register = () => {
  return (
    <div className='register'>
      <div className='top'>
        <div className="wrapper">
          <img className='logo' alt='netflix logo'  src='https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg'/>
          <button className='login'>Sign In</button>
        </div>
      </div>

      <div className='container'>
        <h1>Unlimited movies, TV shows, and more</h1>
        <h2>Watch anywhere. Cancel anytime.</h2>
        <p>
          Ready to watch? Enter your email to create or update your membership
        </p>
        <div className='input'>
          <input type="email" placeholder='email address' />
          <button className='regButton'>Get Started</button>
        </div>
      </div>
    </div>
  )
}

export default Register;