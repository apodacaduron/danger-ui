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
  block = false,
  dangerText,
  ...props
}) => {
  const [focus, setFocus] = useState('')
  const [inputBox, setInputBox] = useState()
  const checkType = (_design) => {
    switch (_design) {
      case 'border':
        return styles.DangerInputBorder
      case 'line':
        return styles.DangerInputLine
      case 'solid':
        return styles.DangerInputSolid
      default:
        return styles.DangerInputBorder
    }
  }

  const isFocused = (_focused) => {
    if (_focused) {
      setFocus(_focused)
    } else {
      !value && setFocus(_focused)
    }
  }

  const addInputChange = (event) => {
    onChange && onChange(event)
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
        className={`${styles.DangerInput} ${checkType(design)} ${
          disabled && styles.DangerInputDisabled
        } ${danger && styles.DangerInputDanger} ${
          block && styles.DangerInputBlock
        }`}
        disabled={disabled}
        style={{ borderRadius: `${radius > 50 ? 50 : radius}px` }}
      >
        <span
          className={`${
            focus && animated
              ? !danger
                ? styles.DangerLabel
                : styles.DangerLabelDanger
              : styles.DangerPlaceholder
          } ${styles.DangerInputText} ${
            !animated && value && styles.DangerHide
          } ${danger && styles.DangerPlaceholderDanger}`}
        >
          {placeholder}
        </span>
        <input
          {...props}
          value={value}
          ref={(input) => {
            setInputBox(input)
          }}
          onChange={(e) => addInputChange(e)}
          onFocus={(e) => addInputFocus(e)}
          onBlur={(e) => addInputBlur(e)}
          disabled={disabled}
          className='DangerInnerInput'
        />
      </div>
      <span
        className={`${styles.DangerDangerText} ${styles.DangerInputEventText} ${
          !danger && styles.DangerHide
        }`}
      >
        {dangerText}
      </span>
    </div>
  )
}

export default Input
