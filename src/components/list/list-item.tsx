import './list-item.scss';

import classnames from 'classnames';
import { FC } from 'react';

import { IListItem } from './types';

const ListItem: FC<IListItem> = ({
  variant = "none",
  rounded = false,
  ...props
}) => {
  const listItemChildren = (
    <>
      {props.leading}
      {props.children}
      {props.trailing}
    </>
  );

  const listItemContent = () => {
    if (variant === "button") {
      return (
        <button
          className="list-item-container__button"
          onClick={() => props.onClick && props.onClick()}
        >
          {listItemChildren}
        </button>
      );
    }
    return listItemChildren;
  };

  const listItemClasses = classnames({
    "list-item-container": true,
    [`list-item-container--border-${props.border}`]: Boolean(props.border),
    "list-item-container--rounded": rounded,
  });

  return <div className={listItemClasses}>{listItemContent()}</div>;
};

export default ListItem;
