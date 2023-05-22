import { HTMLProps, ReactNode } from "react"
import { QuicksandFont } from "../../app/fonts"

interface CustomButtonProps extends HTMLProps<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
  type?: string;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function CustomButton({ children, className, type = "button", ...rest }: CustomButtonProps) {
  return (
    <button
      className={`${QuicksandFont.className} ${className}`} 
      {...rest}
    >
      { children }
    </button>
  )
}