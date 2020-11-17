<template>
  <div>
    <h1>Modifiers</h1>
    <!--.stop-->
    <!--.selv-->
    <!--.capture -->
    <!--.once  -->
    <!--keyboard Modifiers -->
    <!--.enter-->
    <!--.any key-->
    <!---->
    <!---->
    <!---->
    <form v-on:submit.prevent="ModifiersFub">
      <input type="text" class="form-control" />
      <button>Modifiers</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "Modifiers",
  methods: {
    ModifiersFub() {
      alert("ModifiersFun");
    },
  },
};
</script>

<style>
</style>
