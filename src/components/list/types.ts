import { ReactNode } from 'react';

export interface IListItem {
  leading?: ReactNode;
  trailing?: ReactNode;
  variant?: ListItemVariant;
  onClick?: () => void;
  rounded?: boolean;
  border?: ListItemBorder;
}

export type ListItemVariant = "button" | "none";
export const listItemVariant = ["button", "none"] as const;

export type ListItemBorder = "left" | "right";
export const listItemBorder = ["left", "right"] as const;
