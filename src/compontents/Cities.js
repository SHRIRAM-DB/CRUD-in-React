import React, { useState } from 'react'
import city from '../helpers/City.json'
import { Link, Outlet, useNavigate } from 'react-router-dom'

function Cities(){
    const [state,setState] = useState(city)
    const navigate = useNavigate()
  return (
    <div>
      <ul style={{listStyleType:'none',display:'flex',gap:'10px',border:'1px solid black',padding:'10px',width:'fit-content',margin:'0 auto'}}>
        {state.map((city) => {
            return <li key={city.id} style={{border:'1px solid black',padding:'10px'}}>{city.name}</li>
        })}
      </ul>
      <button style={{marginTop:'10px',marginLeft:'720px'}} onClick={() => navigate('/form')}>Add</button>
    </div>
  )
}

export default Cities;
