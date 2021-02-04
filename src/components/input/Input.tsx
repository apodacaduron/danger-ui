import React, { ChangeEvent, FC, FocusEvent, useState, useEffect } from 'react'
import { InputProps } from 'utils/interfaces'
import classNames from 'classnames'

import './Input.sass'

const Input: FC<InputProps> = ({
  disabled = false,
  design = 'solid',
  radius = 4,
  animated = true,
  placeholder = '',
  onChange,
  onFocus,
  onBlur,
  danger = false,
  block = false,
  dangerText,
  ...props
}) => {
  const [focus, setFocus] = useState(() =>
    props.value || props.defaultValue ? true : false
  )
  const [inputBox, setInputBox] = useState<HTMLInputElement | null>()

  useEffect(() => {
    setFocus(props.value || props.defaultValue ? true : false)
  }, [props.value, props.defaultValue])

  const isFocused = (_focused: boolean) => {
    if (_focused) {
      setFocus(_focused)
    } else {
      !(props.value || props.defaultValue) && setFocus(_focused)
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
    'dg-input': true,
    'dg-input-disabled': disabled,
    'dg-input-danger': danger,
    'dg-input-block': block,
    'dg-input-border': design === 'border',
    'dg-input-line': design === 'line',
    'dg-input-solid': design === 'solid'
  })

  const labelClasses = classNames({
    'dg-input-text': true,
    'dg-hide': !animated && (props.value || props.defaultValue),
    'dg-placeholder-danger': danger,
    'dg-label': focus && animated,
    'dg-danger-text': focus && animated && danger,
    'dg-placeholder': !animated
  })

  const dangerTextClasses = classNames({
    'dg-danger-text': true,
    'dg-input-event-text': true,
    'dg-hide': !danger
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
          ref={setInputBox}
          onChange={addInputChange}
          onFocus={addInputFocus}
          onBlur={addInputBlur}
          disabled={disabled}
          className='dg-inner-input'
        />
      </div>
      <span className={dangerTextClasses}>{dangerText}</span>
    </div>
  )
}

export default Input
