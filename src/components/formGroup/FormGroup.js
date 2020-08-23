import React from 'react'

import styles from './FormGroup.sass'

const FormGroup = ({ children }) => {
  return <div className={styles.DangerFormGroup}>{children}</div>
}

export default FormGroup
