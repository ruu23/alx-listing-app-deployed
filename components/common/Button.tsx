import { ButtonProps } from '@/interfaces'
import React from 'react'

const Button :React.FC<ButtonProps> = ({label, onClick}) => {
  return (
    <button onClick={onClick}>
        {label}
    </button>
  )
}

export default Button
