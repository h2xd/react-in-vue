import { defineComponent, onUpdated, ref } from 'vue'
import { createReactWrapper } from './dryExample'

interface Options {
  name: string
  component: JSX.Element
  defineProps: (props, attrs, emit) => Record<string, any>
}

export function defineVueContext({ name, component, defineProps }: Options) {
  return defineComponent({
    name,
    emits: ['update:modelValue'],
    inheritAttrs: false,
    template: `
      <div ref="rootElement">WILL BE REPLACED</div>
    `,
    setup(props, context) {
      const rootElement = ref()

      const { update } = createReactWrapper({
        component,
        props: defineProps(props, context.attrs, context.emit),
        rootElement,
      })

      onUpdated(() => update(defineProps(props, context.attrs, context.emit)))

      return { rootElement }
    },
  })
}
