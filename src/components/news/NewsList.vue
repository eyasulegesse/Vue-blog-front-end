<template>
  <Tooltip
    v-show="isVisibleTooltip"
    :title="title"
    :message="message"
    @closeTooltip="isVisibleTooltip = false"
  />
  <Button label="Add New News" @click="isVisibleNew = true" />
  <NewNews v-show="isVisibleNew" @close="isVisibleNew = false" />
  <Card>
    <table>
      <tr>
        <th>Title</th>
        <th>Category</th>
        <th>Action</th>
      </tr>
      <tr v-for="PostList in PostList" :key="PostList.id">
        <NewsItem
          :title="PostList.title"
          :category="PostList.category"
          :id="PostList._id"
          @delete-news="deleteNews"
        />
      </tr>
    </table>
  </Card>
</template>
<script>
import Card from '../ui/Card.vue';
import NewNews from '../news/NewNews.vue';
import Button from '../ui/Button.vue';
import NewsItem from './NewsItem.vue';
import Tooltip from '../ui/Tooltip.vue';
import { ref } from 'vue';
import axios from 'axios';
export default {
  components: {
    Card,
    Button,
    NewNews,
    NewsItem,
    Tooltip,
  },
  data() {
    return {
      PostList: [{}],
      isVisibleTooltip: false,
      title: '',
      message: '',
    };
  },

  methods: {
    deleteNews(id) {
      axios
        .delete(`http://127.0.0.1:5000/api/news/delete-news/${id}`)
        .then((response) => {
          this.title = 'Success';
          this.message = 'The News is Deleted Successfully';
          this.isVisibleTooltip = true;

          this.PostList = this.PostList.filter((post) => post._id != id);
          console.log(response);
        });
    },
  },
  created() {
    axios.get('http://127.0.0.1:5000/api/news').then((response) => {
      this.PostList = response.data.news;
    });
  },
  setup() {
    const isVisibleNew = ref(false);

    return {
      isVisibleNew,
    };
  },
};
</script>
<style scoped>
table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

td,
th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}

tr:nth-child(even) {
  background-color: #dddddd;
}
</style>
