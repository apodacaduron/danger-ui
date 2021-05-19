import { ButtonHTMLAttributes } from 'react';

export type ButtonVariant = "solid" | "outline" | "icon" | "flat" | "round";

export const buttonVariant = [
  "solid",
  "outline",
  "icon",
  "flat",
  "round",
] as const;
export interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  customClass?: string;
  variant?: ButtonVariant;
}
