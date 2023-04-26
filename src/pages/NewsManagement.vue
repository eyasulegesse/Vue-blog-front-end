<template>
  <Layout>
    <NewsList />
  </Layout>
</template>
<script>
import NewsList from '../components/news/NewsList.vue';
import Layout from '../components/layout/Layout.vue';
export default {
  components: {
    NewsList,
    Layout,
  },
};
</script>
<style scoped></style>
