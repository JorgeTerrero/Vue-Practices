<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <Header></Header>
   <router-view></router-view>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld';
import Header from './components/Header';

export default {
  name: 'app',
  components: {
   Header: Header,
   HelloWorld: HelloWorld
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
  margin-top: 60px;
}
</style>
