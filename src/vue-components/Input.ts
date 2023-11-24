import {ref, defineComponent, onUpdated} from 'vue';

import Input from '../react-components/Input'
import { createReactWrapper } from "../utils/dryExample";
import {ChangeEvent} from "react";

export default defineComponent({
    name: 'Input',
    props: {
        modelValue: String,
    },
    emits: ['update:modelValue'],
    inheritAttrs: false,
    template: `
    <div ref="rootElement">WILL BE REPLACED</div>
  `,
    setup(props, context) {
        const rootElement = ref();

        const { modelValue, ...restProps } = props

        function onChange(event: ChangeEvent<HTMLInputElement>) {
            context.emit('update:modelValue', event.target.value)
            context.attrs.onChange?.(event)
        }

        const { update } = createReactWrapper({
            component: Input,
            props: {...restProps, ...context.attrs, onChange},
            rootElement
        })

        onUpdated(() => update({...restProps, ...context.attrs, onChange}));

        return {rootElement};
    },
})
