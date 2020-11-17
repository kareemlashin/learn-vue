<template>
  <div>get</div>
</template>

<script>
import axios from "axios";
export default {
  created: {
    delete() {
      axios
        .get("path" )
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