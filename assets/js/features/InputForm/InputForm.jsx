import React, { useState } from 'react'

const InputForm = ({ onSubmit, submit, className = '', validate = false }) => {
  const [ input, setInput ] = useState('')
  const [ error, setError ] = useState(false)

  const handleChange = event => {
    setInput(event.target.value)
    setError(false)
  }

  const handleSubmit = event => {
    event.preventDefault()
    if (validate) {
      setError(input === '')
    }
    if (!error) {
      onSubmit(input)
      setInput('')
    }
  }

  return (
    <form className={`flex ${className}`}>
      <div className="m-2 flex flex-grow">
        <input
          type="text"
          value={input}
          onChange={handleChange}
          className="flex-grow bg-gray-800 py-1 px-2 border border-gray-800 focus:border-gray-500"
        />
        {error && <span className="text-red-500 text-xs italic">Please, fill this field.</span>}
      </div>
      <button
        className="bg-gray-800 py-1 px-4 m-2 transition duration-300 ease-in hover:bg-gray-500 hover:text-gray-900 font-semibold"
        onClick={handleSubmit}
      >
        {submit}
      </button>
    </form>
  )
}

export default InputForm
