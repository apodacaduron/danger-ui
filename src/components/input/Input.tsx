import React, { ChangeEvent, FC, FocusEvent, useState } from 'react'
import { InputProps } from 'utils/interfaces'
import classNames from 'classnames'

import './Input.sass'

const Input: FC<InputProps> = ({
  disabled = false,
  design = 'solid',
  radius = 4,
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
  const [focus, setFocus] = useState(false)
  const [inputBox, setInputBox] = useState<HTMLInputElement | null>()

  const isFocused = (_focused: boolean) => {
    if (_focused) {
      setFocus(_focused)
    } else {
      !value && setFocus(_focused)
    }
  }

  const addInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange && onChange(event)
  }

  const addInputFocus = (event: FocusEvent<HTMLInputElement>) => {
    onFocus && onFocus(event)
    isFocused(true)
  }

  const addInputBlur = (event: FocusEvent<HTMLInputElement>) => {
    onBlur && onBlur(event)
    isFocused(false)
  }

  const containerClasses = classNames({
    'danger-input': true,
    'danger-input-disabled': disabled,
    'danger-input-danger': danger,
    'danger-input-block': block,
    'danger-input-border': design === 'border',
    'danger-input-line': design === 'line',
    'danger-input-solid': design === 'solid'
  })

  const labelClasses = classNames({
    'danger-input-text': true,
    'danger-hide': !animated && value,
    'danger-placeholder-danger': danger,
    'danger-label': focus && animated && !danger,
    'danger-label-danger': focus && animated && danger,
    'danger-placeholder': !animated
  })

  const dangerTextClasses = classNames({
    'danger-danger-text': true,
    'danger-input-event-text': true,
    'danger-hide': !danger
  })

  return (
    <div>
      <div
        onClick={() => {
          inputBox && inputBox.focus()
        }}
        className={containerClasses}
        style={{ borderRadius: `${radius > 50 ? 50 : radius}px` }}
      >
        <span className={labelClasses}>{placeholder}</span>
        <input
          {...props}
          value={value}
          ref={setInputBox}
          onChange={addInputChange}
          onFocus={addInputFocus}
          onBlur={addInputBlur}
          disabled={disabled}
          className='danger-inner-input'
        />
      </div>
      <span className={dangerTextClasses}>{dangerText}</span>
    </div>
  )
}

export default Input
