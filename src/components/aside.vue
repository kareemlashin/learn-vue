<template>
  <div class="clearfix" :dir="dire">
    <aside :class="big ? 'small-aside' : ''">
      <div>1<span>one</span></div>
    </aside>
    <main :class="big ? 'big-main' : ''">
      two
      <button @click="changeBig()">changeBig</button><br />
      <button @click="changeDir()">changeDir</button>
    </main>
  </div>
</template>

<script>
export default {
  data() {
    return {
      big: true,
      dire: "rtl",
    };
  },
  methods: {
    changeBig() {
      this.big = this.big === true ? false : true;
    },
    changeDir() {
      this.dire = this.dire === "rtl" ? "ltr" : "rtl";
    },
  },
};
</script>

<style lang="scss">
[dir="rtl"] {
  direction: rtl;
  text-align: right;
  background: red;

  aside {
    float: right;
    transition: 1s all;
    border-left: 10px solid #19c;
    border-right: none;
  }

  main {
    transition: 1s all;

    float: right;
  }

  .small-aside {
    text-align: center;

    span {
      display: none;
    }

    transition: 1s all;
    width: 5% !important;
  }

  .big-main {
    width: 95%;
    background: #753;
    transition: 1s all;
  }
}

* {
  color: #fff;
}

aside {
  width: 25%;
  height: 100vh;
  transition: 1s all;
}

main {
  width: 75%;
}

[dir="ltr"] {
  background: #a4a;
  direction: ltr;
  text-align: left;

  aside {
    float: left;
    transition: 1s all;
    border-right: 10px solid #19c;
    border-left: none;
  }

  main {
    transition: 1s all;

    float: left;
  }

  .small-aside {
    text-align: center;

    span {
      display: none;
    }

    transition: 1s all;
    width: 5% !important;
  }

  .big-main {
    width: 95%;
    background: #753;
    transition: 1s all;
  }
}
</style>
