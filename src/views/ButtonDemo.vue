<template>
<div>
  <h1>示例1</h1>
  <div class="demo">
    <Button @click="onClick">按钮0</Button>
    <Button theme="button" @click="onClick">按钮1</Button>
    <Button theme="link" @click="onClick">按钮2</Button>
    <Button theme="text" @click="onClick">按钮3</Button>
  </div>
</div>
</template>

<script>
import Button from "../lib/Button.vue";
export default {
  components: {
    Button,
  },
  setup() {
    const onClick = () => {
      console.log("333");
    };
    return {
      onClick,
    };
  },
};
</script>

<style lang="scss" scoped>
</style>
