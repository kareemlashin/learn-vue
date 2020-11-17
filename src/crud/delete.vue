<template>
  <div>delete</div>
</template>

<script>
import axios from "axios";
export default {
  created: {
    delete(id) {
      axios
        .delete("path" + id)
        .then((res) => {
          console.log(res);
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