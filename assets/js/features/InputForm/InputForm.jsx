import React, { useState } from 'react'

const InputForm = ({ onSubmit, submit }) => {
  const [ input, setInput ] = useState('')

  const handleChange = event => {
    setInput(event.target.value)
  }

  return (
    <form className="flex">
      <input type="text" value={input} onChange={handleChange} className="flex-grow" />
      <button onClick={() => onSubmit(input)}>{submit}</button>
    </form>
  )
}

export default InputForm
