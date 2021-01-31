import React, { FC, useEffect } from 'react'
import BraftEditor from 'braft-editor'
import 'braft-editor/dist/index.css'

interface IProps {
  value?: string
  onSubmit?: (value: string) => void
  onChange?: (value: string) => void
}

const TextEditor: FC<IProps> = ({ value = '', onSubmit, onChange }) => {
  const [editorState, setEditorState] = React.useState<any>(null)

  useEffect(() => {
    setEditorState(BraftEditor.createEditorState(value))
  }, [value])

  const submitContent = async () => {
    // Pressing ctrl + s when the editor has focus will execute this method
    onSubmit && onSubmit(editorState.toHTML())
  }

  const handleEditorChange = (editState: any) => {
    setEditorState(editState)
    onChange && onChange(editorState.toHTML())
  }

  return (
    <div>
      <BraftEditor
        excludeControls={[
          'media',
          'subscript',
          'superscript',
          'code',
          'line-height',
          'clear'
        ]}
        language='en'
        value={editorState}
        onChange={handleEditorChange}
        onSave={submitContent}
      />
    </div>
  )
}

export default TextEditor
