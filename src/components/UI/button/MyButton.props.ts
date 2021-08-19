import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from "react";

export interface MyButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    children: ReactNode,
    className: string,
    onClick?: () => void;
}