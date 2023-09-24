<script>
export default {
  props: {
    error: String
  }
}
</script>

<template>
  <span class="error-message">
    {{ error }}
  </span>
</template>

<style scoped>
.error-message {
  color: #930808;
}
</style>
