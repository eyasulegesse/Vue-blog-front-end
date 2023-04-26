<template>
  <h2>Social News</h2>

  <div class="newsContainer">
    <Card v-for="social in socialNews" :key="social._id" style="width: 33%">
      <img
        @click="goDetail(social._id)"
        :src="social.photo"
        :style="{ width: '100%', borderRadius: '15px' }"
      />
      <h5 @click="goDetail(social._id)">{{ social.title }}</h5>
    </Card>
  </div>
</template>
<script>
import axios from 'axios';
import Card from '../ui/Card.vue';
export default {
  name: 'SocialNews',
  components: {
    Card,
  },
  data() {
    return {
      socialNews: [{}],
    };
  },
  methods: {
    goDetail(nid) {
      this.$router.push({ name: '/detail', params: { id: nid } });
    },
    loadSocialNews() {
      axios
        .get('http://127.0.0.1:5000/api/news/Social News')
        .then((response) => {
          this.socialNews = response.data.news;
        });
    },
  },
  created() {
    this.loadSocialNews();
  },
};
</script>

<style scoped>
h2 {
  color: #243757;
  font-weight: bold;
  /* font-size: 1px; */
  padding: 10px 20px;
}
.newsContainer {
  display: flex;
  justify-content: space-between;
}
</style>
