<template>
  <div>register</div>
</template>

<script>
import axios from "axios";

export default {
  methods: {
    register(data) {
      axios
        .post("path", data)
        .then((res) => {
          console.log(res);
          localStorage.setItem("token", res);
          this.$router.push("/path");
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