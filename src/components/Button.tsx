import * as React from 'react'
import { defineVueContext } from '../utils/defineVueContext'

export interface ButtonProps {
  text: string
  type?: 'button' | 'submit' | 'reset'
  variant?: 'primary' | 'secondary' | 'destructive'
  onClick(): void
}

export function Button({ text, type = 'button', variant = 'primary', ...props }: ButtonProps) {
  const className = ['cursor-pointer transition py-0.5 px-3 rounded focus:ring-2 ring-blue-400 border-2 active:scale-[0.95]']

  switch (variant) {
    case 'primary':
      className.push('bg-emerald-200 hover:bg-emerald-300 border-emerald-300 hover:border-emerald-400 text-emerald-900')
      break
    case 'secondary':
      className.push('bg-gray-200 hover:bg-gray-300 border-gray-300 hover:border-gray-400 text-gray-900')
      break
    case 'destructive':
      className.push('bg-rose-200 hover:bg-rose-300 border-rose-300 hover:border-rose-400 text-red-900')
      break
  }

  return (
    <button type={type} className={className.join(' ')} {...props}>
      {text}
    </button>
  )
}

export default defineVueContext(Button)
