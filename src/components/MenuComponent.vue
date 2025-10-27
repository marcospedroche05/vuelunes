<template>
  <div>
    <ul id="menu">
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/collatz">Collatz</router-link></li>
    </ul>
  </div>
  <hr />
  <router-view></router-view>
</template>

<script>
export default {
  name: "MenuComponent",
};
</script>

<style>
@import "../assets/css/estilos.css";
</style>
