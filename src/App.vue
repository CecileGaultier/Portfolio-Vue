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

@import url('https://fonts.googleapis.com/css2?family=Jura:wght@400;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Oswald:wght@400;700&display=swap');

body{
  font-family: "Jura", sans-serif;
  color: #1F1F1F;
}

h1,h2,h4,h5{
  font-family: "Oswald", sans-serif;
  font-weight: bold;
}

h2{
  border-bottom: #af1f28 4px solid;
  padding-bottom: 1rem;
  margin-bottom: 1rem;
  font-size: 2.5rem;
}

h3, h4{
  color: #af1f28;
}

a{
  color: #1F1F1F;
  font-weight: bold;
}

a:hover{
  text-decoration: none;
  color: #1F1F1F;
}

.navbar{
  background-color: #1F1F1F;
}

.contact{
  border: 1px grey solid;
}

.intro{
  background-color:rgba(34, 32, 31, .75);
  color: white;
}

.case{
  margin-bottom: 25rem;
  margin-top: 10rem;
}

li{
  list-style: none;
}

ul{
  padding-left: 0.5rem;
}

footer{
  color: white;
  background-color: #1f1f1f;
  margin-bottom: 0;
  padding-bottom: 3rem; 
  padding-top: 3rem; 
}

footer a{
  color: white;
}

</style>
