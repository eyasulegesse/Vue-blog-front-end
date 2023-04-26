<template>
  <div class="form-group">
    <div class="label">
      <label v-if="type === 'text'" for="label">{{ label }}</label>
    </div>
    <div>
      <input
        v-if="type === 'text'"
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
        class="input"
        id="label"
      />
    </div>
  </div>

  <div class="form-group">
    <div class="label">
      <label v-if="type === 'textarea'">{{ label }}</label>
    </div>
    <div>
      <textarea
        v-if="type === 'textarea'"
        class="textarea"
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
      />
    </div>
  </div>
</template>
<script>
export default {
  name: 'Input',
  props: {
    modelValue: String,
    type: String,
    label: String,
  },
};
</script>
<style>
.input {
  width: 300px;
  border: 2px solid #243757;
  border-radius: 10px;
  background: transparent;
  padding: 5px 15px;
}
.textarea {
  width: 300px;
  border: 2px solid #243757;
  border-radius: 10px;
  background: transparent;
  height: 100px;
  padding: 10px;
}
.label {
  margin: 6px;
  font-weight: bold;
  font-size: 16px;
}
.form-group {
  margin: 10px;
}
</style>
