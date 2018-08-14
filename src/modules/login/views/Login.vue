<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-md-6 mx-auto">
          <div class="card">
            <div class="card-header">Login:</div>
            <div class="card-body">
              <form @submit.prevent="login">
                <div class="form-group">
                  <label for="Username">Username:</label>
                  <input type="text" v-model="username" class="form-control" id="UsernameInput" placeholder="Username">
                </div>
                <div class="form-group">
                  <label for="Password">Password:</label>
                  <input type="password" v-model="password" class="form-control" id="PasswordInput" placeholder="Password">
                </div>
              </form>
              <button class="btn btn-primary" type="submit" @click="login">Login</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {AUTH_REQUEST} from '../store/actions.js'

  export default {
    name: 'login',
    data () {
      return {
        username: null,
        password: null
      }
    },
    methods: {
      login: function() {
        const { username, password } = this;
        this.$store.dispatch(AUTH_REQUEST, { username, password }).then(() => {
          this.$router.push('/admin');
        });
      }
    },
  }
</script>

<style>
  .gap-60 {
    margin-top: 30px;
  }
</style>
