import React from 'react'
import './custom-button-style.scss'

const CustomButton = ({ children, isGoogleSignIn, ...otherProps }) => (
    <button class={`${isGoogleSignIn ? 'google-sign-in' : '' } custom-button`} 
    {...otherProps}
    >
        {children}
    </button>

)

export default CustomButton