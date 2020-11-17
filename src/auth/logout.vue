<template>
  <div>
    <div>logout</div>
    <router-link to=""></router-link>
  </div>
</template>

<script>
export default {
  methods: {
    logout() {
      localStorage.removeItem("token");
      this.$router.push("/path");
    },
  },
};
</script>

<style>
</style>