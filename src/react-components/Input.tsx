import * as React from 'react'

export type InputProps = React.InputHTMLAttributes<HTMLInputElement>

export default (props: InputProps) => {
  return (
    <input {...props} />
  )
}
