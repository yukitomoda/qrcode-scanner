<script>
export default {
  props: {
    result: String
  },
  computed: {
    isUrlForm() {
      try {
        new URL(this.result);
        return true;
      } catch {
        return false;
      }
    }
  }

}
</script>

<template>
  <a v-if="this.isUrlForm" :href="this.result" target="_blank">{{ this.result }}</a>
  <span v-else>{{ this.result }}</span>
</template>

<style scoped></style>
