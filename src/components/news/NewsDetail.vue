<template>
  <Layout>
    <div class="newsDetailContainer">
      <img
        :style="{ width: '500px', borderRadius: '15px' }"
        :src="photo"
        alt=""
      />
      <div class="newsDetail">
        <h3 class="title">{{ title }}</h3>
        <p>{{ summary }}</p>
        <p>{{ body }}</p>
      </div>
    </div>
  </Layout>
</template>
<script>
import axios from 'axios';
import Layout from '../layout/Layout.vue';
export default {
  name: 'NewsDetail',
  props: ['id'],
  components: {
    Layout,
  },

  data() {
    return {
      title: '',
      summary: '',
      body: '',
      photo: '',
    };
  },
  created() {
    axios
      .get(`http://127.0.0.1:5000/api/news/newsDetail/${this.$route.params.id}`)
      .then((response) => {
        this.title = response.data.title;
        this.photo = response.data.photo;
        this.summary = response.data.summary;
        this.body = response.data.body;
      });
  },
};
</script>
<style scoped>
.newsDetailContainer {
  display: flex;
  justify-content: space-evenly;
}
.newsDetail {
  margin: 0px 40px;
}
.title {
  margin: 20px 0px;
}
</style>
