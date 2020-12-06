import { createWebHashHistory, createRouter } from 'vue-router';
import Home from './views/Home.vue';
import Doc from './views/Doc.vue';
import SwitchDemo from './views/SwitchDemo.vue';
import ButtonDemo from './views/ButtonDemo.vue';
import DialogDemo from './views/DialogDemo.vue';
import TabsDemo from './views/TabsDemo.vue';
import MarkDown from './components/MarkDown.vue';
import intro from './markdown/intro.md';
import getStarted from './markdown/get-started.md';
import install from './markdown/install.md';
import { h } from 'vue';
const md = (str) => h(MarkDown, { content: str, key: str });

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
          path: '',
          redirect: '/doc/intro',
        },
        {
          path: 'intro',
          component: md(intro),
        },
        {
          path: 'get_started',
          component: md(getStarted),
        },
        {
          path: 'install',
          component: md(install),
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
