import { HTMLAttributes } from 'react';

export interface ICard extends HTMLAttributes<HTMLDivElement> {
  shadow?: boolean;
  border?: boolean;
}
