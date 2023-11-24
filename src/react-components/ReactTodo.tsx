import type { ChangeEvent } from 'react'
import * as React from 'react'
import { useEffect, useState } from 'react'

import ReactButton from './ReactButton'
import ReactInput from './ReactInput'

export interface TodoItem {
  key: string
  title: string
}

interface Props {
  value: TodoItem[]
  onNewItem: () => TodoItem[]
}

export default function ReactTodo(props: Props) {
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

            <ReactButton text="Remove" onClick={() => { removeTodo(todoItem.key) }}></ReactButton>
          </div>
        )
      })}

      <div className="flex flex-row justify-between items-center">
        <ReactInput placeholder="Add new todo" value={newTodoValue} onChange={event => updateNewTodoValue(event.target.value)} onKeyDown={addTodo} />

        {todoItems.length > 0 && <ReactButton text="Remove All" onClick={() => { updateTodoItems([]) }}></ReactButton>}
      </div>
    </div>
  )
}
