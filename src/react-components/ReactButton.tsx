import * as React from 'react'

export interface ButtonProps {
  text: string
  type: 'button' | 'submit' | 'reset'
  onClick(): void
}

export default ({ text, type, ...props }: ButtonProps) => (
  <button type={type} className="bg-yellow-400 hover:bg-yellow-500 cursor-pointer transition-colors py-0.5 px-3 rounded focus:ring-4 ring-blue-400" {...props}>
    {text}
  </button>
)
