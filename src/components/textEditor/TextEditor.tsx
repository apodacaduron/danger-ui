import React, { FC, useEffect } from 'react'
import BraftEditor from 'braft-editor'
import 'braft-editor/dist/index.css'

interface IProps {}

const TextEditor: FC<IProps> = () => {
  const [editorState, setEditorState] = React.useState({
    editorState: null
  })

  useEffect(() => {
    // Assume here to get the editor content in html format from the server
    // const htmlContent = await fetchEditorContent()
    // Use BraftEditor.createEditorState to convert html strings to editorState data needed by the editor
    // setEditorState({
    //   editorState: BraftEditor.createEditorState()
    // })
  }, [])

  const submitContent = async () => {
    // Pressing ctrl + s when the editor has focus will execute this method
    // Before the editor content is submitted to the server, you can directly call editorState.toHTML () to get the HTML content
    // const htmlContent = this.state.editorState.toHTML()
    // const result = await saveEditorContent(htmlContent)
  }

  const handleEditorChange = (editorState: any) => {
    setEditorState({ editorState })
  }

  return (
    <div>
      <BraftEditor
        language='en'
        value={editorState}
        onChange={handleEditorChange}
        onSave={submitContent}
      />
    </div>
  )
}

export default TextEditor
