<template>
  <div>user</div>
</template>

<script>
import axios from "axios";
import UserService from "../auth/UserService";
export default {
  created: {
    user() {
      axios
        .get("path", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        })
        .then((res) => {
          console.log(res);
          localStorage.setItem("token", res);
          this.$router.push("/path");
        })
        .catch((err) => {
          console.log(err);
        });
      UserService.getPublicContent()
        .then((res) => {
          res;
        })
        .catch((err) => {
          err.error;
        });
    },
  },
};
</script>

<style>
</style>