import React, { Ref } from 'react'
import { MyInputProps} from './MyInput.props';

const MyInput = React.forwardRef(({placeholder, ...props}: MyInputProps, ref: Ref<HTMLInputElement>):JSX.Element => {
    return (
        <input {...props} ref={ref} placeholder={placeholder}/>
    )
})
export default MyInput
