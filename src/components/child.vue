<template>
  <div>
    <h1>child</h1>
    <div>{{ x }}</div>
    <button @click="toParent()">z z</button>
  </div>
</template>

<script>
export default {
  name: "child",
  props: ["x"],
  data() {
    return {
      cdc: "from child",
    };
  },
  methods: {
    toParent() {
      this.$emit("all", this.cdc);
    },
  },
};
</script>

<style>
</style>
