import React, { useState } from 'react'

import arrow from '../../assets/chevron.svg'
import styles from './Select.sass'

const Select = ({
  disabled = false,
  radius = 10,
  placeholder = '',
  value = '',
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
      onChange && onChange(event.target.value)
      setSelectVal(event.target.value)
    } else {
      onChange && onChange(event.value)
      setSelectVal(event.value)
    }
  }

  const toggleSelectFocus = (event) => {
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
    return data.map((e, optionIndex) => { return <option value={e.value} key={optionIndex}>{e.option}</option> })
  }

  const generateOptionsCustom = () => {
    return data.map((e, optionIndex) => { return <li onClick={() => addSelectChange(e)} key={optionIndex} className={`${styles.DangerSelectCustomMenuItem} ${e.value === selectVal ? styles.DangerSelectCustomMenuItemSelected : ''}`}>{e.option}</li> })
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
        <ul className={`${styles.DangerSelectCustomMenuContainer} ${!focus ? styles.DangerHide : ''}`}>
          {generateOptionsCustom()}
        </ul>
        <img className={`${styles.DangerSelectChevron} ${focus ? styles.DangerSelectChevronUp : ''}`} src={arrow} alt="chevron down" />
      </div>

      <span
        className={`${styles.DangerDangerText} ${styles.DangerSelectEventText} ${
          !danger && styles.DangerHide
          }`}
      >
        {dangerText}
      </span>
    </div>
  )
}

export default Select
