<template>
  <div>
    <button @click="request">请求</button>
  </div>
</template>

<script>
import axios from "axios";
export default {
  methods: {
    request() {
      const URL = "https://yesno.wtf/api";
      return axios
        .post(URL)
        .then(result => {
          if (result && result.data) {
            this.answer = result.data.answer;
            this.src = result.data.image;
            return result;
          }
        })
        .catch(() => {});
    }
  }
};
</script>

<style lang="scss" scoped>
</style>