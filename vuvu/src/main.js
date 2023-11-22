import { createApp } from "vue";
import SuspenseWithErrors from "./SuspenseWithErrors";
import App from "./App.vue"

// const App = {
//   components: {
//     layout: Layout,
//     SuspenseWithErrors,
//   },
//   template: `
//     <h1>React in Vue</h1>
//     <div class="app">
//       <SuspenseWithErrors>
//         <template #error="props">
//           <p class="center error space-up">
//            {{ props.error }}
//           </p>
//         </template>
//         <template #default>
//           <layout />
//         </template>
//         <template #fallback>
//           <div class="space-up">
//             Loading please wait ...
//           </div>
//         </template>
//       </SuspenseWithErrors>
//     </div>
//     `,
// };

createApp(App).mount("#app");
