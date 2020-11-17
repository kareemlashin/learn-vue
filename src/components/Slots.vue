<template>
  <div>
    <h1>Slots</h1>
    <slot name="header"></slot>
    <slot name="one"></slot>
    <slot name="two"></slot>
    <slot name="three"></slot>
  </div>
</template>

<script>
export default {
  name: "Slot",
};
</script>

<style>
</style>
