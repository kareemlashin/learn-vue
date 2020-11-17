<template>
  <div>
    <h1 ref="reve">rev</h1>
    <button @click="revee()">reve reve reve</button>
  </div>
</template>

<script>
export default {
  name: "rev",
  methods: {
    revee() {
      this.$refs.reve.style.color = "#09c";
    },
  },
};
</script>

<style>
</style>
