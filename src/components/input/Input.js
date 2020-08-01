import React, { useState } from 'react'

import styles from './Input.sass'

const Input = ({
  disabled = false,
  design = 'solid',
  radius = 10,
  animated = false,
  placeholder = '',
  value = '',
  onChange,
  onFocus,
  onBlur,
  ...props
}) => {
  const [focus, setFocus] = useState('')
  const [inputVal, setInputVal] = useState(value)
  const checkType = (_design) => {
    switch (_design) {
      case 'border':
        return styles.ByteInputBorder
      case 'line':
        return styles.ByteInputLine
      case 'solid':
        return styles.ByteInputSolid
      default:
        return styles.ByteInputBorder
    }
  }

  const isFocused = (_focused) => {
    console.log(inputVal)
    if (_focused) {
      setFocus(_focused)
    } else {
      !inputVal && setFocus(_focused)
    }
  }

  const addInputChange = (event) => {
    onChange && onChange(event)
    setInputVal(event.target.value)
  }

  const addInputFocus = (event) => {
    onFocus && onFocus(event)
    isFocused(true)
  }
  const addInputBlur = (event) => {
    onBlur && onBlur(event)
    isFocused(false)
  }

  return (
    <div
      onClick={() => {
        document.getElementsByClassName('ByteInnerInput')[0].focus()
      }}
      className={`${styles.ByteInput} ${checkType(design)} ${
        disabled && styles.ByteInputDisabled
      }`}
      disabled={disabled}
      style={{ borderRadius: `${radius > 50 ? 50 : radius}px` }}
    >
      <span
        className={`${
          focus && animated ? styles.ByteLabel : styles.BytePlaceholder
        } ${styles.ByteInputText} ${!animated && inputVal && styles.ByteHide}`}
      >
        {placeholder}
      </span>
      <input
        {...props}
        value={inputVal}
        onChange={(e) => addInputChange(e)}
        onFocus={(e) => addInputFocus(e)}
        onBlur={(e) => addInputBlur(e)}
        disabled={disabled}
        className='ByteInnerInput'
      />
    </div>
  )
}

export default Input
