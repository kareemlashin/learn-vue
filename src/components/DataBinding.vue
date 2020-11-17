<template>
  <div>
    <h1>DataBinding</h1>
    <div>{{ name }}</div>
    <div v-text="name"></div>
    <div v-html="htm"></div>
    <div v-bind:id="idDynamic">idDynamic idDynamic</div>
    <div v-bind:class="classDynamic">classDynamic classDynamic</div>

    <div :id="idDynamic">short hand idDynamic idDynamic</div>
    <div :class="classDynamic">short hand classDynamic classDynamic</div>
    <div v-once>{{ num }}</div>
    <div>
      <input type="text" v-model="twoWay" class="form-control" />
      <div>
        {{ twoWay }}
      </div>
    </div>
    <div :class="{ classDynamic: num == 5 }">
      classDynamic classDynamic classDynamic
    </div>
    <div :style="{ 'font-size': num + 'px' }">
      classDynamic classDynamic classDynamic
    </div>
  </div>
</template>

<script>
export default {
  name: "DataBinding",
  data() {
    return {
      name: "binding",
      htm: "<div>html div </div>",
      idDynamic: "idall",
      classDynamic: "classDynamic",
      num: 5,
      twoWay: "",
      name_f: "name_one",
      name_l: "name_last",
      firstName: "Terry",
      lastName: "Ben",
    };
  },
  watch: {
    // used to show any changes
  },
};
</script>

<style>
#idall {
  color: brown;
}

.classDynamic {
  color: cadetblue;
}
</style>
