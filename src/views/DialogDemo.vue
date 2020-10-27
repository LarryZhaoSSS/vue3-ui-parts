<template>
<div>
  <div>dialog example</div>
  <h1>example-1</h1>
  <Button @click="toggle">toggle</Button>
  <Dialog v-model:visible="x" :closeOnClickOverlay="false" :ok="f1" :cancel="f1">
    <template v-slot:content><strong>粗的</strong></template>
    <template v-slot:title><strong>strong header</strong></template>
  </Dialog>
  <h2>example-2</h2>
  <Button @click="showDialog">点击打开</Button>
</div>
</template>

<script lang="ts">
import Dialog from "../lib/Dialog.vue";
import Button from "../lib/Button.vue";

import {
  openDialog
} from "../lib/openDialog";
import {
  ref,
  h
} from "vue";
export default {
  components: {
    Dialog,
    Button,
  },
  setup() {
    const x = ref(false);
    const toggle = () => {
      x.value = !x.value;
    };
    const f1 = () => {
      return false;
    };
    const f2 = () => {};
    const showDialog = () => {
      openDialog({
        title: h("strong", {}, "标题"),
        content: "你好",
        ok() {
          console.log("ok");
        },
        cancel() {
          console.log("cancel");
        },
      });
    };
    return {
      x,
      toggle,
      f1,
      f2,
      showDialog,
    };
  },
};
</script>

<style lang="scss" scoped>
</style>
