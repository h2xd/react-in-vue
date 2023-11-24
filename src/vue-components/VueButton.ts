import { defineComponent, onUpdated, ref } from 'vue'

import Button from '../react-components/ReactButton'
import { createReactWrapper } from '../utils/dryExample'

export default defineComponent({
  name: 'VueButton',
  props: {
    text: String,
    type: String,
  },
  inheritAttrs: false,
  template: `
    <div ref="rootElement">WILL BE REPLACED</div>
  `,
  setup(props, context) {
    const rootElement = ref()

    const { update } = createReactWrapper({
      component: Button,
      props: { ...props, ...context.attrs },
      rootElement,
    })

    onUpdated(() => update({ ...props, ...context.attrs }))

    return { rootElement }
  },
})