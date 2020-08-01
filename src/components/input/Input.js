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
  danger = false,
  dangerText,
  ...props
}) => {
  const [focus, setFocus] = useState('')
  const [inputVal, setInputVal] = useState(value)
  const [inputBox, setInputBox] = useState()
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
    <div>
      <div
        onClick={() => {
          inputBox.focus()
        }}
        className={`${styles.ByteInput} ${checkType(design)} ${
          disabled && styles.ByteInputDisabled
        } ${danger && styles.ByteInputDanger}`}
        disabled={disabled}
        style={{ borderRadius: `${radius > 50 ? 50 : radius}px` }}
      >
        <span
          className={`${
            focus && animated
              ? !danger
                ? styles.ByteLabel
                : styles.ByteLabelDanger
              : styles.BytePlaceholder
          } ${styles.ByteInputText} ${
            !animated && inputVal && styles.ByteHide
          } ${danger && styles.BytePlaceholderDanger}`}
        >
          {placeholder}
        </span>
        <input
          {...props}
          value={inputVal}
          ref={(input) => {
            setInputBox(input)
          }}
          onChange={(e) => addInputChange(e)}
          onFocus={(e) => addInputFocus(e)}
          onBlur={(e) => addInputBlur(e)}
          disabled={disabled}
          className='ByteInnerInput'
        />
      </div>
      <span
        className={`${styles.ByteDangerText} ${styles.ByteInputEventText} ${
          !danger && styles.ByteHide
        }`}
      >
        {dangerText}
      </span>
    </div>
  )
}

export default Input
