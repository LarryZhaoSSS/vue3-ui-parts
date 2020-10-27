<template>
<div class="dialog-overlay"></div>
<div class="dialog-wrapper">
  <header>标题</header>
  <main>
    <p>line-1</p>
    <p>line-2</p>
  </main>
  <footer>
    <Button>Ok</Button>
    <Button>Cancel</Button>
  </footer>
</div>
</template>

<script lang="ts">
import Button from "./Button.vue";
export default {
  components: {
    Button,
  },
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
</style>
