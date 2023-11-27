import * as React from 'react'
import { defineVueContext } from '../utils/defineVueContext'

export interface ButtonProps {
  text: string
  type: 'button' | 'submit' | 'reset'
  onClick(): void
}

export function Button({ text, type, ...props }: ButtonProps) {
  return (
    <button type={type} className="bg-yellow-400 hover:bg-yellow-500 cursor-pointer transition-colors py-0.5 px-3 rounded focus:ring-4 ring-blue-400" {...props}>
      {text}
    </button>
  )
}

export default defineVueContext(Button)
