import React, { ChangeEvent, FocusEvent, useState } from 'react'

import './Select.sass'

interface IProps {
  disabled?: boolean
  radius?: number
  placeholder?: string
  value?: string
  id?: string
  data?: Array<IValues>
  onChange?: (value: ChangeEvent<HTMLSelectElement>) => void
  onFocus?: (value: FocusEvent<HTMLSelectElement>) => void
  onBlur?: (value: FocusEvent<HTMLSelectElement>) => void
  block?: boolean
  danger?: boolean
  dangerText?: string
}

interface IValues {
  value?: string
  option?: string
}

const Select = ({
  disabled = false,
  radius = 10,
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
}: IProps) => {
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
          className={`${'DangerSelectCustomMenuItem'} ${
            e.value === selectVal ? 'DangerSelectCustomMenuItemSelected' : ''
          }`}
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

  return (
    <div>
      <select
        {...props}
        value={selectVal}
        id={id}
        name={selectVal}
        onChange={(e) => addSelectChange(e)}
        onFocus={(e) => addSelectFocus(e)}
        onBlur={(e) => addSelectBlur(e)}
        disabled={disabled}
        className={`${'DangerSelect'} ${'DangerSelectNative'} ${
          disabled ? 'DangerSelectDisabled' : ''
        } ${danger ? 'DangerSelectDanger' : ''} ${
          block ? 'DangerSelectBlock' : ''
        }`}
        style={{ borderRadius: `${radius > 50 ? 50 : radius}px` }}
      >
        {generateOptionsNative()}
      </select>
      <div
        {...props}
        onClick={toggleSelectFocus}
        className={`${'DangerSelect'} ${'DangerSelectCustom'} ${
          disabled ? 'DangerSelectDisabled' : ''
        } ${danger ? 'DangerSelectDanger' : ''} ${
          block ? 'DangerSelectBlock' : ''
        } ${focus ? 'DangerSelectCustomFocus' : ''}`}
        style={{ borderRadius: `${radius > 50 ? 50 : radius}px` }}
      >
        {findValueCustomSelect()}
        <ul
          className={`${'DangerSelectCustomMenuContainer'} ${
            !focus ? 'DangerHide' : ''
          }`}
        >
          {generateOptionsCustom()}
        </ul>
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
          className={`${'DangerSelectChevron'} ${
            focus ? 'DangerSelectChevronUp' : ''
          }`}
        >
          <polyline points='6 9 12 15 18 9'></polyline>
        </svg>
      </div>

      <span
        className={`${'DangerDangerText'} ${'DangerSelectEventText'} ${
          !danger && 'DangerHide'
        }`}
      >
        {dangerText}
      </span>
    </div>
  )
}

export default Select
