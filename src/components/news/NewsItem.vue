<template>
  <td>{{ title }}</td>
  <td>{{ category }}</td>
  <td><Button label="X" @click="$emit('delete-news', id)" /></td>
</template>
<script>
import Button from '../ui/Button.vue';
export default {
  name: 'NewsItem',
  components: {
    Button,
  },
  props: ['id', 'title', 'category'],
};
</script>
<style scoped>
td,
th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}
</style>
