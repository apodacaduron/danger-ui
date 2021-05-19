import './button.scss';

import classnames from 'classnames';
import { FC } from 'react';

import { buttonVariant, IButton } from './types';

const Button: FC<IButton> = ({
  customClass = "",
  variant = "solid",
  ...props
}) => {
  const buttonClasses = classnames({
    button: true,
    [customClass]: Boolean(customClass),
    [`button--${variant}`]: buttonVariant.includes(variant),
  });

  return (
    <button className={buttonClasses} {...props}>
      {props.children}
    </button>
  );
};

export default Button;
