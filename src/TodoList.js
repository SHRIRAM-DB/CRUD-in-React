import React, { useRef, useState } from 'react'

function TodoList() {

    const [input,setInput] = useState([]);

    function handleSubmit(e){
        e.preventDefault()
        setInput(get.current.value);
        console.log(input)
    }

  return (
    <div>
      <div >
        <form className='form' >
            <input type="text" name='text' id='text' className='input'/>
            <button onClick={handleSubmit} type='submit' className='button'>Add new task</button>
        </form>
      </div>
      <div>
        {/* {input.map((index,vlue) => {
            return {}
        })} */}
      </div>
    </div>
  )
}

export default TodoList
