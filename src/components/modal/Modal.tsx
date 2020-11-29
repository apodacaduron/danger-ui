import React from 'react'

import './Modal.sass'

interface IProps {
  visible?: boolean
  header: JSX.Element
  footer: JSX.Element
  children: JSX.Element
  onClickOut: () => void
}

const Modal = ({
  visible = false,
  header,
  footer,
  children,
  onClickOut
}: IProps) => {
  return (
    <div
      className={`${'DangerModalContainer'} ${!visible ? 'DangerHide' : ''}`}
    >
      <div className={'DangerModalCard'}>
        <div
          className={`${'DangerModalHeader'} ${!header ? 'DangerHide' : ''}`}
        >
          {header}
        </div>
        <div className={'DangerModalBody'}>{children}</div>
        <div
          className={`${'DangerModalFooter'} ${!footer ? 'DangerHide' : ''}`}
        >
          {footer}
        </div>
      </div>
      <div onClick={onClickOut} className={'DangerModalBackground'}></div>
    </div>
  )
}

export default Modal
