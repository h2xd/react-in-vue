import { defineComponent, onUpdated, ref } from 'vue'

import type { TodoItem } from '../react-components/ReactTodo'
import ReactTodo from '../react-components/ReactTodo'
import { createReactWrapper } from '../utils/dryExample'

export default defineComponent({
  name: 'VueTodo',
  props: {
    modelValue: String,
  },
  emits: ['update:modelValue'],
  inheritAttrs: false,
  template: `
    <div ref="rootElement">WILL BE REPLACED</div>
  `,
  setup(props, context) {
    const rootElement = ref()

    const { modelValue, ...restProps } = props

    function onNewItem(newItems: TodoItem[]) {
      context.emit('update:modelValue', newItems)
    }

    const { update } = createReactWrapper({
      component: ReactTodo,
      props: { ...restProps, ...context.attrs, onNewItem },
      rootElement,
    })

    onUpdated(() => update({ ...restProps, ...context.attrs, onNewItem }))

    return { rootElement }
  },
})
