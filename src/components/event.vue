<template>
  <div>
    <h1>event</h1>
    <button v-on:click="now()">now</button>
    <button @click="now()">now</button>
  </div>
</template>

<script>
export default {
  name: "event",
  methods: {
    now() {
      alert("ok");
    },
  },
};
</script>

<style>
</style>
