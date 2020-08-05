import { createWebHashHistory, createRouter } from 'vue-router';
import Home from './views/Home.vue';
import Doc from './views/Doc.vue';
import SwitchDemo from './views/SwitchDemo.vue';
import ButtonDemo from './views/ButtonDemo.vue';
const history = createWebHashHistory();
const router = createRouter({
  history,
  routes: [
    { path: '/', component: Home },
    {
      path: '/doc',
      component: Doc,
      children: [
        { path: 'switch', component: SwitchDemo },
        { path: 'button', component: ButtonDemo },
      ],
    },
  ],
});
export { router };
