import React, { useState } from 'react'
import { Input } from 'danger-ui'

const InputComponent = () => {
  const [input, setInput] = useState('johndoe@example.com')
  return (
    <div>
      <h2>Input</h2>
      <Input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder='Email'
      />
    </div>
  )
}

export default InputComponent
