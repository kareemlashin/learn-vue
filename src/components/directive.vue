<template>
  <div>
    <h1>directive</h1>
    <div v-if="active">active</div>
    <div v-if="!active">!active</div>
    <div v-else-if="active">active if else</div>
    <div v-else>active else</div>
    <div v-show="active2">active2 show</div>
    <div v-show="!active2">!active2</div>
    <ul>
      <li v-for="(js, index) in jso" :key="js">{{ js }} => index{{ index }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "directive",
  data() {
    return {
      active: true,
      active2: true,
      jso: ["we", "et", "or"],
    };
  },
};
</script>

<style>
</style>
