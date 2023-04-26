<template>
  <div class="tooltip">
    <div :class="title === 'Error' ? 'headererror' : 'headersuccess'">
      {{ title }}
    </div>
    <div class="content">{{ message }}</div>
    <div class="footer">
      <Button label="Okay" @click="$emit('closeTooltip')" />
    </div>
  </div>
</template>
<script>
import Button from '../ui/Button.vue';
export default {
  components: {
    Button,
  },
  props: {
    title: String,
    message: String,
  },
};
</script>
<style scoped>
.tooltip {
  position: fixed;
  top: 10%;
  left: 40%;
  background: #fff;
  z-index: 100;
  border-radius: 15px;
  box-shadow: 2px 4px 8px;
  width: 450px;
}
.headersuccess {
  background: green;
  width: 100%;

  padding: 10px 0px;
  color: #fff;
  font-weight: bold;
  text-align: center;
}
.headererror {
  background: red;
  width: 100%;

  padding: 5px 0px;
  color: #fff;
  font-weight: bold;
  text-align: center;
}
.content {
  padding: 10px 10px;
  text-align: center;
}
.footer {
  text-align: right;
  padding: 5px;
}
</style>
