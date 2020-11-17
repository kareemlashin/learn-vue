<template>
  <div>login</div>
</template>

<script>
import axios from "axios";

export default {
  methods: {
    login(data) {
      axios
        .post("path", data)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style>
</style>