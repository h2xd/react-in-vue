import * as React from 'react'
import type { ChangeEvent } from 'react'
import { defineControlledVueContext } from '../utils/defineVueContext'

export type InputProps = React.InputHTMLAttributes<HTMLInputElement>

export function Input(props: InputProps) {
  return (
    <input className="border-2 border-gray-300 rounded py-1 px-2 focus-visible:border-2 focus-visible:border-gray-300 focus:ring-4 ring-blue-400 dark:bg-gray-950 dark:border-gray-700 dark:focus-visible:border-gray-700" {...props} />
  )
}

export default defineControlledVueContext({
  component: Input,
  defineProps(props, attrs, emit) {
    // eslint-disable-next-line unused-imports/no-unused-vars
    const { value, ...restProps } = props
    const { modelValue, ...restAttrs } = attrs

    function onChange(event: ChangeEvent<HTMLInputElement>) {
      emit('update:modelValue', event.target.value)
      attrs.onChange?.(event)
    }

    return { ...restProps, ...restAttrs, value: modelValue, onChange }
  },
})
