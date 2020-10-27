<template>
<div>
  <div>dialog example</div>
  <h1>example-1</h1>
  <Button @click="toggle">toggle</Button>
  <Dialog v-model:visible="x" :closeOnClickOverlay="false" :ok="f1" :cancel="f1">
    <template v-slot:content><strong>粗的</strong></template>
    <template v-slot:header><strong>strong header</strong></template>
  </Dialog>
</div>
</template>

<script>
import Dialog from "../lib/Dialog.vue";
import Button from "../lib/Button.vue";
import {
  ref
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
    return {
      x,
      toggle,
      f1,
      f2,
    };
  },
};
</script>

<style lang="scss" scoped>
</style>
