import React, { ChangeEvent, FocusEvent, useState } from 'react'

import './Input.sass'

interface IProps {
  disabled?: boolean
  design?: string
  radius?: number
  animated?: boolean
  placeholder?: string
  value?: string
  onChange?: (value: ChangeEvent<HTMLInputElement>) => void
  onFocus?: (value: FocusEvent<HTMLInputElement>) => void
  onBlur?: (value: FocusEvent<HTMLInputElement>) => void
  block?: boolean
  danger?: boolean
  dangerText?: string
}

const Input = ({
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
}: IProps) => {
  const [focus, setFocus] = useState(false)
  const [inputBox, setInputBox] = useState<HTMLInputElement | null>()
  const checkType = (_design: string) => {
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

  return (
    <div>
      <div
        onClick={() => {
          inputBox && inputBox.focus()
        }}
        className={`${'DangerInput'} ${checkType(design)} ${
          disabled && 'DangerInputDisabled'
        } ${danger && 'DangerInputDanger'} ${block && 'DangerInputBlock'}`}
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
