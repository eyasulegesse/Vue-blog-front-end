<template>
  <Layout>
    <LatestNews />
    <SocialNews />
  </Layout>
</template>

<script>
import Layout from '../components/layout/Layout.vue';
import LatestNews from '../components/news/LatestNew.vue';
import SocialNews from '../components/news/SocialNews.vue';
export default {
  components: {
    Layout,
    LatestNews,
    SocialNews,
  },
};
</script>
