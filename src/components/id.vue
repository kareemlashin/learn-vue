<template>
  <div>
    {{ $route.params.id }}
  </div>
</template>

<script>
export default {
  name: "id",
  data() {
    return {
      data: this.$route.params.id,
    };
  },
  beforeCreate() {},
  created() {
    alert(this.$route.params.id);
    alert(this.data);
  },
};
</script>

<style>
</style>
