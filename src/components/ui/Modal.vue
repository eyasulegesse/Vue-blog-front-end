<template>
  <div class="modal">
    <div class="header">
      <h3>{{ title }}</h3>
    </div>
    <div class="content">
      <slot />
    </div>
  </div>
</template>
<script>
export default {
  name: 'Modal',
  props: ['title'],
};
</script>
<style>
.modal {
  border-radius: 15px;
  box-shadow: 2px 4px 6px;
  z-index: 100;
  width: 900px;
  position: fixed;
  top: 100px;
  left: 15%;
  background: #fff;
}
.content {
  padding: 30px;
}
.header {
  width: 100%;
  background: #e8e8e8;
  height: 30px;
  color: #000;
  font-size: 16px;
  text-align: center;
  padding: 5px;
}
</style>
