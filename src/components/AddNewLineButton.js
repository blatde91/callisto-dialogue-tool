import React from 'react'
import { Button } from 'react-materialize'

const AddNewLineButton = (props) => {
  return (
    <Button
      onClick={props.addNewLine}
    >
      Add another line of dialogue
    </Button>
  )
}

export default AddNewLineButton
