<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  color: #FFF;
}
html {
    background-color: #001629;
    color: #FFF;
}
body {
    background-color: #001629;
    margin: 0;
    font-size: 100px;
}
html, body{
  font-size: 62.5%;
}
@media screen and (min-width: 768px) {
  html, body{
    font-size: calc(62.5% * 2);
  }
}
@media screen and (min-width: 1024px) {
  html, body{
    font-size: calc(62.5% * 2.5);
  }
}
@media screen and (min-width: 1366px) {
  html, body{
    font-size: calc(62.5% * 3);
  }
}
@media screen and (min-width: 1600px) {
  html, body{
    font-size: calc(62.5% * 4);
  }
}
</style>
