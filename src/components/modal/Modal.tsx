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
    'dg-modal-container': true,
    'dg-hide': !visible
  })

  const headerClasses = classNames({
    'dg-modal-header': true,
    'dg-hide': !header
  })

  const footerClasses = classNames({
    'dg-modal-footer': true,
    'dg-hide': !footer
  })

  return (
    <div className={containerClasses}>
      <div className={'dg-modal-card'}>
        <div className={headerClasses}>{header}</div>
        <div className={'dg-modal-body'}>{children}</div>
        <div className={footerClasses}>{footer}</div>
      </div>
      <div onClick={onClickOut} className={'dg-modal-background'}></div>
    </div>
  )
}

export default Modal
