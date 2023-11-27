import type { ChangeEvent } from 'react'
import * as React from 'react'
import { useEffect, useState } from 'react'
import { defineControlledVueContext } from '../utils/defineVueContext'
import { Button } from './Button'
import { Input } from './Input'

export interface TodoItem {
  key: string
  title: string
}

interface Props {
  value: TodoItem[]
  onNewItem: (todoItems: TodoItem[]) => void
}

export function Todo(props: Props) {
  const [todoItems, updateTodoItems] = useState<TodoItem[]>([])

  const [newTodoValue, updateNewTodoValue] = useState('')

  useEffect(() => {
    if (props.value && props.value.length)
      updateTodoItems(props.value)
  }, [props.value])

  useEffect(() => {
    props.onNewItem(todoItems)
  }, [todoItems])

  function removeTodo(todoKey: TodoItem['key']) {
    updateTodoItems(prevState =>
      prevState.filter(todoItem =>
        todoItem.key !== todoKey,
      ),
    )

    props.onNewItem(todoItems)
  }

  function addTodo(event: ChangeEvent<HTMLInputElement>) {
    if (event.key === 'Enter' || event.keyCode === 13) {
      updateTodoItems((prevState) => {
        return [...prevState, { key: Date.now(), title: newTodoValue }]
      })

      updateNewTodoValue('')
    }
  }

  return (
    <div>
      {todoItems.map((todoItem) => {
        return (
          <div className="mb-3 border-gray-300 border-b pb-3 flex flex-row justify-between items-center" key={todoItem.key}>
            {todoItem.title}

            <Button variant="destructive" text="Remove" onClick={() => { removeTodo(todoItem.key) }}></Button>
          </div>
        )
      })}

      <div className="flex flex-row justify-between items-center">
        <Input placeholder="Add new todo" value={newTodoValue} onChange={event => updateNewTodoValue(event.target.value)} onKeyDown={addTodo} />
      </div>
    </div>
  )
}

export default defineControlledVueContext({
  component: Todo,
  defineProps(props, attrs, emit) {
    const { modelValue, ...restAttrs } = attrs

    function onNewItem(newItems: TodoItem[]) {
      emit('update:modelValue', newItems)
    }

    return {
      ...props,
      ...restAttrs,
      value: modelValue,
      onNewItem,
    }
  },
})
