<template>
  <h2>Latest News</h2>
  <Card>
    <div class="latest">
      <img
        @click="goDetail(id)"
        :src="photo"
        :style="{ width: '500px', borderRadius: '15px' }"
      />

      <div class="newsDetail">
        <p @click="goDetail(id)" class="newstitle">{{ title }}</p>

        <p class="summary">
          {{ summary }}
        </p>
      </div>
    </div>
  </Card>
</template>
<script>
import axios from 'axios';
export default {
  name: 'LatestNews',
  data() {
    return {
      id: '',
      title: '',
      summary: '',
      photo: '',
    };
  },

  created() {
    this.loadLatestNews();
  },
  methods: {
    goDetail(nid) {
      this.$router.push({ name: '/detail', params: { id: nid } });
    },
    async loadLatestNews() {
      axios
        .get('http://127.0.0.1:5000/api/news/latest-news')
        .then((response) => {
          this.title = response.data.title;
          this.id = response.data.id;
          this.summary = response.data.summary;
          this.photo = response.data.photo;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>
<style scoped>
p {
  cursor: pointer;
}
h2 {
  color: #243757;
  padding-left: 20px;
}
.latest {
  display: flex;
  justify-content: space-between;
  background-color: #e8e8e8;
  margin: 20px;
}
.newsDetail {
  text-align: left;

  padding: 50px;
}
.newstitle {
  font-size: 16px;
  font-weight: 600;
  color: #03223f;

  padding-bottom: 30px;
  text-align: justify;
}
.summary {
  font-size: 16px;
  text-align: justify;
  color: #03223f;
}
</style>
