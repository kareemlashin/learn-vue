<template>
<div>
          <h1>about</h1>
          <button class="btn btn-dark" @click="login()">login</button>
</div>
</template>

<script>
export default {
          name: 'about',
          methods: {
                    login() {

                              localStorage.setItem('token', "token")
                              localStorage.setItem('role', 'one');
                              this.$router.push('/')
                    }
          }
}
</script>
