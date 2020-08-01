<template>
  <div>
    <top-nav></top-nav>
    <div class="banner">
      <h1>gu-lu</h1>
      <h2>厉害的ui框架</h2>
      <p class="actions">
        <a href="">Github</a>
        <a href="">开始</a>
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import TopNav from '../components/TopNav.vue';
export default {
  components: {
    TopNav,
  },
};
</script>

<style lang="scss" scoped>
.topnav {
  border: 1px solid red;
}
</style>
