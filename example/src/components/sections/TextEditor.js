import React from 'react'
import { TextEditor } from 'danger-ui'

const TextEditorComponent = () => {
  return (
    <div>
      <h2>TextEditor</h2>
      <TextEditor
        value={'This is a default value'}
        onChange={(value) => console.log(value)}
      />
    </div>
  )
}

export default TextEditorComponent
