import React, { useState } from 'react'

function Form() {

const [data,setData] = useState({
    city:'',
    state:''
})

    function handleSubmit(e){
        e.preventDefault();
        console.log(data)
    }

  return (
    <div >
      <form onSubmit={handleSubmit} style={{display:'flex',flexDirection:'column', maxWidth: "15%",margin: "0 auto",marginTop: "150px",border: "1px solid black",padding: "20px"}}>
        <label>City name</label>
        <input name='city' id='city' required onChange={(e) => setData((pre) => {
            return {...pre,city:e.target.value}
        })}/>
        <label>State name</label>
        <input name='state' id='state' required onChange={(e) => setData((pre) => {
            return {...pre,state:e.target.value}
        })}/>
        <button>submit</button>
      </form>
    </div>
  )
}

export default Form
