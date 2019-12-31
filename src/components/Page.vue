<template>
  <div>
    <PageChild :messages="messages" />
  </div>
</template>

<script>
import PageChild from "./PageChild.vue";

export default {
  data() {
    return {
      messages: ["Cat"]
    };
  },
  components: {
    PageChild
  }
};
</script>

<style lang="scss" scoped>
</style>