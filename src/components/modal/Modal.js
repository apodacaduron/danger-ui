import React from 'react'

import styles from './Modal.sass'

const Modal = ({ visible = false, header, footer, children, onClickOut }) => {
  return (
    <div
      className={`${styles.DangerModalContainer} ${
        !visible ? styles.DangerHide : ''
      }`}
    >
      <div className={styles.DangerModalCard}>
        <div
          className={`${styles.DangerModalHeader} ${
            !header ? styles.DangerHide : ''
          }`}
        >
          {header}
          <hr />
        </div>
        <div className={styles.DangerModalBody}></div>
        <div
          className={`${styles.DangerModalFooter} ${
            !footer ? styles.DangerHide : ''
          }`}
        >
          <hr />
          {footer}
        </div>
      </div>
      <div onClick={onClickOut} className={styles.DangerModalBackground}></div>
    </div>
  )
}

export default Modal
