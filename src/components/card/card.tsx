import './card.scss';

import classnames from 'classnames';
import { FC } from 'react';

import { ICard } from './types';

const Button: FC<ICard> = ({ shadow = true, border = false, ...props }) => {
  const cardClasses = classnames({
    card: true,
    "card--shadow": shadow,
    "card--border": border,
  });

  return (
    <div className={cardClasses} {...props}>
      {props.children}
    </div>
  );
};

export default Button;
