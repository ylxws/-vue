<template>
  <div id="app">
    <div class="content">
      <router-view></router-view>
    </div>
    <v-footer></v-footer>
  </div>
</template>

<script>
import VFooter from './components/vfooter'
export default {
  name: 'app',
  components: {
    VFooter
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100vh;
  overflow: hidden;
}
#app .content{
  height: calc( 100% - 80px );
  padding: 8px;
}
</style>
