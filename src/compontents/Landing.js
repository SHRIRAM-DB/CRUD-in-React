import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

function Landing() {
  const navigate = useNavigate()
  return (
    <div>
        <h1 style={{textAlign:'center'}}>List of Indian cities</h1>
        <button onClick={() => navigate('/city')}>Move</button>
        <Outlet/>
    </div>
  )
}

export default Landing
