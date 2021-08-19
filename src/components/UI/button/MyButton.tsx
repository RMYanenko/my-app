import React from 'react'
import { MyButtonProps } from './MyButton.props'

const MyButton = ({children, clickHandler, className, ...props}: MyButtonProps):JSX.Element => {
    return (
        <button onClick={clickHandler} className={className} {...props}>{children}</button>
    )
}
export default MyButton;