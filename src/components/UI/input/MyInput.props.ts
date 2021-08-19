import { DetailedHTMLProps, InputHTMLAttributes } from "react";

export interface MyInputProps extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    placeholder?: string;
}

// export type Ref = HTMLInputElement;