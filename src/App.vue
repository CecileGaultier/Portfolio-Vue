<template>
  <div id="app">
    <div>
      <b-navbar toggleable="md" type="dark" >
        <b-navbar-brand href="#">CG</b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav class=" ml-auto">
            <router-link to="/" class="nav-link">Home</router-link>
            <router-link to="/about" class="nav-link">About</router-link>
            <router-link to="/projects" class="nav-link">Projects</router-link>
            <router-link to="/hobbies" class="nav-link">Hobbies</router-link>
            <router-link to="/contact" class="nav-link contact">Contact</router-link>
          </b-navbar-nav>

          
        </b-collapse>

      </b-navbar>
    </div>
    
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
.navbar{
  background-color: #1F1F1F;
}

.contact{
  border: 1px grey solid;
}
</style>
