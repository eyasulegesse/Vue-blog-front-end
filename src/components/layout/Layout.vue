<template>
  <Header />
  <div class="container">
    <slot />
  </div>
</template>
<script>
import Header from './Header.vue';
export default {
  name: 'Home',
  components: {
    Header,
  },
};
</script>
<style scoped>
.container {
  width: 1100px;
  margin: auto;
  padding: 20px;
  margin-top: 20px;
}
</style>
