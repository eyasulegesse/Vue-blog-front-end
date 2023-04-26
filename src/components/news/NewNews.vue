<template>
  <Modal title="Add News">
    <form @submit.prevent="saveNews">
      <div class="form-row">
        <div class="form-col">
          <Input type="text" v-model="title" label="Title" />
        </div>
        <div class="form-col">
          <select v-model="category" class="select">
            <option value="">Select Category</option>
            <option value="Social News">Social News</option>
            <option value="Technology News">Technology News</option>
            <option value="Politics News">Politics News</option>
          </select>
        </div>
      </div>
      <div class="form-row">
        <div class="form-col">
          <Input type="textarea" v-model="summary" label="Summary" />
        </div>
        <div class="form-col">
          <Input type="textarea" v-model="body" label="Body" />
        </div>
      </div>
      <div><label>Choose The Photo</label></div>
      <input type="file" label="Photo" @change="fileChange" />
      <div class="buttonContainer">
        <Button label="Save The Post" />
        <Button label="close" @click="$emit('close')" />
      </div>
    </form>
  </Modal>
</template>
<script>
import Modal from '../ui/Modal.vue';
import Input from '../ui/Input.vue';
import Button from '../ui/Button.vue';
import axios from 'axios';
export default {
  name: 'NewNews',
  components: {
    Modal,
    Input,
    Button,
  },
  data() {
    return {
      title: '',
      summary: '',
      body: '',
      photo: '',
      category: '',
      emits: ['close'],
    };
  },
  methods: {
    fileChange(event) {
      const selectedFile = event.target.files[0];
      this.photo = selectedFile;
    },
    async saveNews() {
      const formData = new FormData();
      formData.append('title', this.title);
      formData.append('summary', this.summary);
      formData.append('body', this.body);
      formData.append('photo', this.photo);
      formData.append('category', this.category);

      await axios
        .post('http://127.0.0.1:5000/api/news/add-news', formData)
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
      this.$emit('close');
    },
  },
};
</script>
<style scoped>
.form-row {
  display: flex;
  justify-content: space-between;
}
.form-col {
  width: 40%;
}
.select {
  width: 300px;
  height: 20px;
  margin-top: 40px;
  border: 2px solid #000;
  height: 30px;
}
.buttonContainer {
  display: flex;
  justify-content: flex-end;
}
</style>
