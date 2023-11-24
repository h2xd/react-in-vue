import { onBeforeUnmount, onMounted, ref } from 'vue'
import { createRoot } from 'react-dom/client'
import React from 'react'

export function createReactWrapper(options: any) {
  const root = ref<ReturnType<typeof createRoot>>()

  function updateReactComponent(props: any) {
    root.value!.render(React.createElement(options.component, props))
  }

  function unmountReactComponent() {
    root.value?.unmount()
  }

  onMounted(() => {
    root.value = createRoot(options.rootElement.value!)
    updateReactComponent(options.props)
  })

  onBeforeUnmount(() => unmountReactComponent)

  return {
    update: (props: any) => {
      updateReactComponent(props)
    },
  }
}
