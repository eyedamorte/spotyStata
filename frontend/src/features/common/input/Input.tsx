import React, { FC } from 'react';
import { Input } from 'antd';

interface InputProps {
    onChange: (e: React.FormEvent<HTMLInputElement>) => void,
    style: React.CSSProperties,
    placeholder: string
}

const CustomInput : FC<InputProps> = ({onChange, style, placeholder}) => {

    return(
        <Input placeholder={placeholder} {...{ onChange, style }} />
    )
    
}

export default CustomInput