import classNames from 'classnames'
import useClickOutside from 'hooks/useClickOutside'
import React, { ChangeEvent, FC, FocusEvent, useRef, useState } from 'react'
import { SelectProps } from 'utils/interfaces'

import './Select.sass'

const Select: FC<SelectProps> = ({
  disabled = false,
  radius = 4,
  placeholder = '',
  value = '',
  id = '',
  data = [],
  onChange,
  onFocus,
  onBlur,
  block = false,
  danger = false,
  dangerText,
  ...props
}) => {
  const wrapperRef = useRef<HTMLDivElement>(null)
  useClickOutside(wrapperRef, () => setFocus(false))
  const [focus, setFocus] = useState(false)
  const [selectVal, setSelectVal] = useState(value)

  const isFocused = (_focused: boolean) => {
    if (_focused) {
      setFocus(_focused)
    } else {
      !selectVal && setFocus(_focused)
    }
  }

  const addSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
    if (event.target && event.target.value) {
      onChange && onChange(event)
      setSelectVal(event.target.value)
    }
  }

  const toggleSelectFocus = () => {
    setFocus(!focus)
  }

  const addSelectFocus = (event: FocusEvent<HTMLSelectElement>) => {
    onFocus && onFocus(event)
    isFocused(true)
  }

  const addSelectBlur = (event: FocusEvent<HTMLSelectElement>) => {
    onBlur && onBlur(event)
    isFocused(false)
  }

  const generateOptionsNative = () => {
    return data.map((e, optionIndex) => {
      return (
        <option value={e.value} key={optionIndex}>
          {e.option}
        </option>
      )
    })
  }

  const generateOptionsCustom = () => {
    return data.map((e, optionIndex) => {
      return (
        <li
          onClick={() =>
            addSelectChange({
              target: { value: e.value ?? '' }
            } as ChangeEvent<HTMLSelectElement>)
          }
          key={optionIndex}
          className={classNames({
            'danger-select-custom-menu-item': true,
            'danger-select-custom-menu-item-selected': e.value === selectVal
          })}
        >
          {e.option}
        </li>
      )
    })
  }

  const findValueCustomSelect = () => {
    const foundVal = data.find((e) => e.value === selectVal)
    return foundVal != null ? foundVal.option : ''
  }

  const nativeSelectClasses = classNames({
    'danger-select': true,
    'danger-select-native': true,
    'danger-select-disabled': disabled,
    'danger-select-danger': danger,
    'danger-select-block': block
  })

  const customSelectClasses = classNames({
    'danger-select': true,
    'danger-select-custom': true,
    'danger-select-disabled': disabled,
    'danger-select-danger': danger,
    'danger-select-block': block,
    'danger-select-custom-focus': focus
  })

  const customSelectOptionClasses = classNames({
    'danger-select-custom-menu-container': true,
    'danger-hide': !focus
  })

  const chevronClasses = classNames({
    'danger-select-chevron': true,
    'danger-select-chevron-up': focus
  })

  const errorTextClasses = classNames({
    'danger-danger-text': true,
    'danger-select-event-text': true,
    'danger-hide': !danger
  })

  return (
    <div ref={wrapperRef}>
      <select
        {...props}
        value={selectVal}
        id={id}
        name={selectVal}
        onChange={(e) => addSelectChange(e)}
        onFocus={(e) => addSelectFocus(e)}
        onBlur={(e) => addSelectBlur(e)}
        disabled={disabled}
        className={nativeSelectClasses}
        style={{ borderRadius: `${radius > 50 ? 50 : radius}px` }}
      >
        {generateOptionsNative()}
      </select>
      <div
        {...props}
        onClick={toggleSelectFocus}
        className={customSelectClasses}
        style={{ borderRadius: `${radius > 50 ? 50 : radius}px` }}
      >
        {findValueCustomSelect()}
        <ul className={customSelectOptionClasses}>{generateOptionsCustom()}</ul>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='24'
          height='24'
          viewBox='0 0 24 24'
          fill='none'
          stroke='currentColor'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
          className={chevronClasses}
        >
          <polyline points='6 9 12 15 18 9'></polyline>
        </svg>
      </div>

      <span className={errorTextClasses}>{dangerText}</span>
    </div>
  )
}

export default Select
