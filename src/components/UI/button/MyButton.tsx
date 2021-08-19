import React from 'react'
import { MyButtonProps } from './MyButton.props'

const MyButton = ({children, onClick, className, ...props}: MyButtonProps):JSX.Element => {
    return (
        <button onClick={onClick} className={className} {...props}>{children}</button>
    )
}
export default MyButton;