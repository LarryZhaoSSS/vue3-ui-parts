import { createWebHashHistory, createRouter } from 'vue-router';
import Home from './views/Home.vue';
import Doc from './views/Doc.vue';
import SwitchDemo from './views/SwitchDemo.vue';
import ButtonDemo from './views/ButtonDemo.vue';
import DialogDemo from './views/DialogDemo.vue';
import TabsDemo from './views/TabsDemo.vue';

import MarkDown from './components/MarkDown.vue';
import { h } from 'vue';
const md = (filename) =>
  h(MarkDown, { path: `../markdown/${filename}.md`, key: filename });
const history = createWebHashHistory();
const router = createRouter({
  history,
  routes: [
    { path: '/', component: Home },

    {
      path: '/doc',
      component: Doc,
      children: [
        {
          path: 'intro',
          component: md('intro'),
        },
        {
          path: 'get_started',
          component: md('get-started'),
        },
        {
          path: 'install',
          component: md('install'),
        },
        { path: 'switch', component: SwitchDemo },
        { path: 'button', component: ButtonDemo },
        {
          path: 'dialog',
          component: DialogDemo,
        },
        {
          path: 'tabs',
          component: TabsDemo,
        },
      ],
    },
  ],
});
export { router };
