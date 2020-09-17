import React, { useState } from 'react'

const InputForm = ({ onSubmit, submit, className = '' }) => {
  const [ input, setInput ] = useState('')

  const handleChange = event => {
    setInput(event.target.value)
  }

  const handleSubmit = event => {
    event.preventDefault()
    onSubmit(input)
    setInput('')
  }

  return (
    <form className={`flex ${className}`}>
      <input type="text" value={input} onChange={handleChange} className="flex-grow" />
      <button onClick={handleSubmit}>{submit}</button>
    </form>
  )
}

export default InputForm
