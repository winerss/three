<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="stylus">
#app
  position: absolute;
  height: 100%;
  width: 100%;
  background: url('assets/img/bg.png');
  background-color: #000;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
</style>
