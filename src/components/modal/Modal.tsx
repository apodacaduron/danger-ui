import classNames from 'classnames'
import React, { FC } from 'react'
import { ModalProps } from 'utils/interfaces'

import './Modal.sass'

const Modal: FC<ModalProps> = ({
  visible = false,
  header,
  footer,
  children,
  onClickOut
}) => {
  const containerClasses = classNames({
    'danger-modal-container': true,
    'danger-hide': !visible
  })

  const headerClasses = classNames({
    'danger-modal-header': true,
    'danger-hide': !header
  })

  const footerClasses = classNames({
    'danger-modal-footer': true,
    'danger-hide': !footer
  })

  return (
    <div className={containerClasses}>
      <div className={'danger-modal-card'}>
        <div className={headerClasses}>{header}</div>
        <div className={'danger-modal-body'}>{children}</div>
        <div className={footerClasses}>{footer}</div>
      </div>
      <div onClick={onClickOut} className={'danger-modal-background'}></div>
    </div>
  )
}

export default Modal
