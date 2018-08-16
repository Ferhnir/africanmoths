<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}

[class*="row"] {
  margin-right: 0px;
}

[class*="col-"] {
  border: 10px solid transparent;
  padding-right: 0px;
}

.el-button:active,
.el-button:focus {
  outline: none;
}
</style>