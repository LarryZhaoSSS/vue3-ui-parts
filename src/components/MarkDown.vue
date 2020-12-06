<template>
  <article class="markdown-body" v-html="content"></article>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  props: {
    path: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const content = ref<string>(null);
    import(props.path).then((result) => {
      content.value = result.default;
    });
    return {
      content,
    };
  },
});
</script>

<style scoped></style>
