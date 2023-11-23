import {ref, onMounted, onBeforeUnmount, onUpdated, defineComponent} from 'vue';
import {createRoot} from 'react-dom/client';
import React from 'react';

import Button from '../react-components/Button'

export default defineComponent({
  name: 'ReactButton',
  props: {
    text: String,
    type: String,
  },
  template: `
    <div ref="rootElement">WILL BE REPLACED</div>
  `,
  setup(props, context) {
    const rootElement = ref();
    const root = ref<ReturnType<typeof createRoot>>()

    function updateReactComponent() {
      root.value!.render(React.createElement(Button, {...props, ...context.attrs}));
    }

    function unmountReactComponent() {
      root.value?.unmount()
    }

    onMounted(() => {
      console.log(rootElement.value)

      root.value = createRoot(rootElement.value!)
      updateReactComponent()
    });

    onUpdated(() => updateReactComponent());
    onBeforeUnmount(() => unmountReactComponent);

    return {rootElement};
  },
})
