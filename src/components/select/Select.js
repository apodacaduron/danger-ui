import React, { useState } from 'react'

import styles from './Select.sass'

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
  danger = false,
  block = false,
  dangerText,
  ...props
}) => {
  const [focus, setFocus] = useState('')
  const [selectVal, setSelectVal] = useState(value)
  const [selectBox, setSelectBox] = useState()

  const isFocused = (_focused) => {
    if (_focused) {
      setFocus(_focused)
    } else {
      !selectVal && setFocus(_focused)
    }
  }

  const addSelectChange = (event) => {
    if (event.target && event.target.value) {
      onChange && onChange(event)
      setSelectVal(event.target.value)
    } else {
      event.target = { value: event.value }
      if (id) event.target.id = id
      onChange && onChange(event)
      setSelectVal(event.value)
    }
  }

  const toggleSelectFocus = () => {
    setFocus(!focus)
  }

  const addSelectFocus = (event) => {
    onFocus && onFocus(event)
    isFocused(true)
  }

  const addSelectBlur = (event) => {
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
          onClick={() => addSelectChange(e)}
          key={optionIndex}
          className={`${styles.DangerSelectCustomMenuItem} ${
            e.value === selectVal
              ? styles.DangerSelectCustomMenuItemSelected
              : ''
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
        ref={(select) => {
          setSelectBox(select)
        }}
        name={selectVal}
        onChange={(e) => addSelectChange(e)}
        onFocus={(e) => addSelectFocus(e)}
        onBlur={(e) => addSelectBlur(e)}
        disabled={disabled}
        className={`${styles.DangerSelect} ${styles.DangerSelectNative} ${
          disabled ? styles.DangerSelectDisabled : ''
        } ${danger ? styles.DangerSelectDanger : ''} ${
          block ? styles.DangerSelectBlock : ''
        }`}
        style={{ borderRadius: `${radius > 50 ? 50 : radius}px` }}
      >
        {generateOptionsNative()}
      </select>
      <div
        {...props}
        onClick={toggleSelectFocus}
        className={`${styles.DangerSelect} ${styles.DangerSelectCustom} ${
          disabled ? styles.DangerSelectDisabled : ''
        } ${danger ? styles.DangerSelectDanger : ''} ${
          block ? styles.DangerSelectBlock : ''
        } ${focus ? styles.DangerSelectCustomFocus : ''}`}
        disabled={disabled}
        style={{ borderRadius: `${radius > 50 ? 50 : radius}px` }}
      >
        {findValueCustomSelect()}
        <ul
          className={`${styles.DangerSelectCustomMenuContainer} ${
            !focus ? styles.DangerHide : ''
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
          className={`${styles.DangerSelectChevron} ${
            focus ? styles.DangerSelectChevronUp : ''
          }`}
        >
          <polyline points='6 9 12 15 18 9'></polyline>
        </svg>
      </div>

      <span
        className={`${styles.DangerDangerText} ${
          styles.DangerSelectEventText
        } ${!danger && styles.DangerHide}`}
      >
        {dangerText}
      </span>
    </div>
  )
}

export default Select
