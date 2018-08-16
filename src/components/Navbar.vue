<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <span class="navbar-brand mb-0 h1">Dashboard</span>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ml-auto navbar-brand">
          <li class="nav-item align-middle">
            <a class="nav-link" @click="logOffFn">Log off</a>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
import {AUTH_LOGOUT} from '@/modules/auth/store/actions.js'

export default {
  name: 'adminNavbar',
  data () {
    return {

    }
  },
  methods: {
    logOffFn (){
      this.$store.dispatch(AUTH_LOGOUT).then(() => {
        this.$router.push('login');
      });
    }
  }
}
</script>

<style>
nav {
  margin-bottom: 20px;
}

a {
  display: inline-block;
  cursor: pointer;
}
a svg {
  display: inline-block;
  vertical-align: middle;
}
</style>
