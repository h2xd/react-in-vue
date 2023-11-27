import { defineComponent, onUpdated, ref } from 'vue'
import { createReactWrapper } from './createReactWrapper'

interface Options {
  component: JSX.Element
  defineProps?: (props, attrs, emit) => Record<string, any>
}

function defaultDefineProps(props, attrs) {
  return {
    ...props,
    ...attrs,
  }
}

export function defineVueContext(component: JSX.Element) {
  return defineControlledVueContext({
    component,
  })
}

export function defineControlledVueContext<Props>({ component, defineProps = defaultDefineProps }: Options<Props>) {
  return defineComponent({
    name: `React${component.name}`,
    emits: ['update:modelValue'],
    inheritAttrs: false,
    template: `
      <span ref="rootElement"></span>
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
