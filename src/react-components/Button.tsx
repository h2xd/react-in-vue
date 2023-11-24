import * as React from 'react'

export interface ButtonProps {
  text: string
  type: 'button' | 'submit' | 'reset'
  onClick(): void
}

export default ({ text, type, ...props }: ButtonProps) => (
  <button type={type} style={{ border: '5px solid green' }} {...props}>
    {text}
  </button>
)
