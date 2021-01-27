import React, { FC } from 'react'
import {
  ToastContainer as Toaster,
  toast,
  ToastContainerProps
} from 'react-toastify'

import './Alert.sass'

const ToastContainer: FC<ToastContainerProps> = (props) => {
  return <Toaster {...props} />
}

export { ToastContainer, toast }
