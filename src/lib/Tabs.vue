<template>
<div>
  <div v-for="(t,index) in titles" :key="index">{{ t }}</div>
  <component v-for="(c,index) in defaults" :is="c" :key="index" />
</div>
</template>

<script lang="ts">
import Tab from './Tab.vue'
export default {
  setup(props, context) {
    const defaults = context.slots.default()
    defaults.forEach(tag => {
      if (tag.type !== Tab) {
        throw new Error('不是Tab标签组件')
      }
    })
    const titles = defaults.map(tag => {
      console.log(tag.props.title)
      return tag.props.title
    })
    return {
      defaults,
      titles
    }
  }
}
</script>

<style scoped>

</style>
