import { ChangeEvent, FocusEvent, ReactNode } from 'react'

interface InputProps {
  disabled?: boolean
  design?: string
  radius?: number
  animated?: boolean
  placeholder?: string
  value?: string
  onChange?: (value: ChangeEvent<HTMLInputElement>) => void
  onFocus?: (value: FocusEvent<HTMLInputElement>) => void
  onBlur?: (value: FocusEvent<HTMLInputElement>) => void
  block?: boolean
  danger?: boolean
  dangerText?: string
}

interface AlertProps extends ChildrenProps {
  position?: string
  color?: string
  visible?: boolean
  onClick: () => void
}

interface AvatarProps {
  size?: number
  radius?: number
  src?: string
  defaultAvatar?: string
  alt?: string
  color?: string
  text?: string
}

interface ChildrenProps {
  children: ReactNode
}

interface ButtonProps extends ChildrenProps {
  disabled?: boolean
  design?: string
  radius?: number
  loading?: boolean
  onClick: () => void
  block?: boolean
}

interface ModalProps extends ChildrenProps {
  visible?: boolean
  header: ReactNode
  footer: ReactNode
  onClickOut: () => void
}

interface SelectProps {
  disabled?: boolean
  radius?: number
  placeholder?: string
  value?: string
  id?: string
  data?: SelectValues[]
  onChange?: (value: ChangeEvent<HTMLSelectElement>) => void
  onFocus?: (value: FocusEvent<HTMLSelectElement>) => void
  onBlur?: (value: FocusEvent<HTMLSelectElement>) => void
  block?: boolean
  danger?: boolean
  dangerText?: string
}

interface SelectValues {
  value?: string
  option?: string
}

interface SpinnerProps {
  size?: number
  color?: string
  strokeWidth?: string
}

interface TableProps {
  columns: string[]
  body: ReactNode
}

export type {
  InputProps,
  AlertProps,
  AvatarProps,
  ChildrenProps,
  ButtonProps,
  ModalProps,
  SelectProps,
  SpinnerProps,
  TableProps
}
