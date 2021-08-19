import React from 'react'
import { MyInputProps } from './MyInput.props'

const MyInput = ({placeholder, ...props}: MyInputProps) => {
    return (
        <input {...props} placeholder={placeholder}/>
    )
}
export default MyInput
