<template>
  <div>
    home
    <h1>{{ text | toLowerCase }}</h1>
    <ul>
      <li v-for="all in news" :key="all">
        {{ all }}
      </li>
    </ul>
    <button @click="filterall">filterall</button>
    <router-view></router-view>
    <DataBinding></DataBinding>
    <event></event>
    <Modifiers></Modifiers>
    <directive></directive>
    <child :x="passsTochild" @all="z = $event"></child>
    <h1>{{ z }}</h1>
    <rev></rev>
    <forms></forms>
    <Slot>
      <div slot="header">
        <h3>header</h3>
      </div>

      <div slot="one">
        <h3>one</h3>
      </div>

      <div slot="two">
        <h3>two</h3>
      </div>

      <div slot="three">
        <h3>three</h3>
      </div>
    </Slot>
  </div>
</template>

<script>
import DataBinding from "./components/DataBinding.vue";
import event from "./components/event.vue";
import Modifiers from "./components/Modifiers.vue";
import directive from "./components/directive.vue";
import child from "./components/child.vue";
import Slot from "./components/Slots.vue";
import forms from "./components/forms.vue";
import rev from "./components/Ref.vue";
import { all } from "./mixin/oneMixin.js";
export default {
  name: "app",

  mixins: [all],
  components: {
    DataBinding,
    event,
    Modifiers,
    directive,
    child,
    Slot,
    forms,
    rev,
  },
};
</script>

<style lang="scss">
</style>
