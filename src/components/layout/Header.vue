<template>
  <div class="header">
    <router-link to="/"><h2>Ethio News</h2></router-link>
    <ul>
      <router-link to="/">Home</router-link>
      <router-link to="/news/Social News">Social News</router-link>
      <router-link to="/news/Politics News">Political News</router-link>
      <router-link to="/news/Technology News">Technology News</router-link>
      <router-link to="/newsManagement">News Management</router-link>
    </ul>
  </div>
</template>
<script>
export default {};
</script>

<style scoped>
.header {
  background-color: #e8e8e8;
  display: flex;
  justify-content: space-between;
  padding: 20px 20px;
  box-shadow: 2px 4px 8px rgba(0, 0, 0, 0.24);
}
ul {
}
li {
  list-style: none;
  display: inline-block;
}
a {
  padding: 10px;
  color: #243757;
  text-decoration: none;
}
a:hover {
  font-weight: bold;
}
h2 {
  color: #243757;
  padding-left: 40px;
}
</style>
