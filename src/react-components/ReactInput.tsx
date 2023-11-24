import * as React from 'react'

export type InputProps = React.InputHTMLAttributes<HTMLInputElement>

export default (props: InputProps) => {
  return (
    <input className="border-2 border-gray-300 rounded py-1 px-2 focus-visible:border-2 focus-visible:border-gray-300 focus:ring-4 ring-blue-400" {...props} />
  )
}
