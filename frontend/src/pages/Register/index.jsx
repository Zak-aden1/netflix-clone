import React, { useState } from 'react'
import { useRef } from 'react'

import './styles.scss'

const Register = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const emailRef = useRef();
  const passwordRef = useRef();

  const handleStart = () => {
    setEmail(emailRef.current.value)
  }

  const handleFinish = () => {
    setEmail(passwordRef.current.value)
  }

  return (
    <div className='register'>
      <div className='top'>
        <div className="wrapper">
          <img className='logo' alt='netflix logo'  src='https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg'/>
          <button className='loginButton'>Sign In</button>
        </div>
      </div>

      <div className='container'>
        <h1>Unlimited movies, TV shows, and more</h1>
        <h2>Watch anywhere. Cancel anytime.</h2>
        <p>
          Ready to watch? Enter your email to create or update your membership
        </p>
        {!email ? (
        <div className='input'>
          <input type="email" ref={emailRef} placeholder='email address' />
          <button className='regButton' onClick={handleStart}>Get Started</button>
        </div>
       ): (
        <div className='input'>
          <input type="password" ref={passwordRef} placeholder='Password' />
          <button className='regButton' onClick={handleFinish}>Start</button>
        </div>
       )}
      </div>
    </div>
  )
}

export default Register;