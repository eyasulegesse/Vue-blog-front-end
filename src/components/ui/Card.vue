<template>
  <div class="card">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'Card',
};
</script>
<style scoped>
.card {
  box-shadow: 2px 4px 8px rgba(0, 0, 0, 0.24);
  border-radius: 10px;
  background: #fff;
  padding: 20px;
  margin: 20px;
}
.card:hover {
  box-shadow: 4px 6px 8px rgba(0, 0, 0, 0.24);
}
</style>
