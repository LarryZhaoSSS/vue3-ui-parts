declare module '*.vue' {
  import { Component } from 'vue';
  const componentOptions: Component;
  export default componentOptions;
}
declare module '*.md' {
  const str: string;
  export default str;
}
