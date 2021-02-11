<template>
  <div id="app">
    <router-link to="/" class="nav-link">Home</router-link>
    <router-link to="/about" class="nav-link">About</router-link>
    <router-link to="/projects" class="nav-link">Projects</router-link>
    <router-link to="/hobbies" class="nav-link">Hobbies</router-link>
    <router-link to="/contact" class="nav-link">Contact</router-link>
    <router-view/>
  </div>
</template>

<script>
export default {
   name: 'App',
   data () {
    return {
      
    }
  },
}
</script>

<style>

</style>
