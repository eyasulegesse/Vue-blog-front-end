<script setup>
const props = defineProps({
  label: String,
});
</script>
<template>
  <div class="buttoncontainer">
    <button>{{ props.label }}</button>
  </div>
</template>

<style>
.buttoncontainer {
  margin: 10px;
}
button {
  background: #243757;
  padding: 4px;
  color: #fff;
  /* min-width: 120px; */
  border-radius: 10px;
  font-size: 16px;
}
</style>
