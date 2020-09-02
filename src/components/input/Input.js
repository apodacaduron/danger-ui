import React, { useState } from 'react'

import './Input.sass'

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
        return 'DangerInputBorder'
      case 'line':
        return 'DangerInputLine'
      case 'solid':
        return 'DangerInputSolid'
      default:
        return 'DangerInputBorder'
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
        className={`${'DangerInput'} ${checkType(design)} ${
          disabled && 'DangerInputDisabled'
        } ${danger && 'DangerInputDanger'} ${block && 'DangerInputBlock'}`}
        disabled={disabled}
        style={{ borderRadius: `${radius > 50 ? 50 : radius}px` }}
      >
        <span
          className={`${
            focus && animated
              ? !danger
                ? 'DangerLabel'
                : 'DangerLabelDanger'
              : 'DangerPlaceholder'
          } ${'DangerInputText'} ${!animated && value && 'DangerHide'} ${
            danger && 'DangerPlaceholderDanger'
          }`}
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
        className={`${'DangerDangerText'} ${'DangerInputEventText'} ${
          !danger && 'DangerHide'
        }`}
      >
        {dangerText}
      </span>
    </div>
  )
}

export default Input
