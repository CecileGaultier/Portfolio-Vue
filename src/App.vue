<template>
  <div id="app">
    <div>
      <b-navbar toggleable="md" type="dark" >
        <b-navbar-brand href="#">
          <router-link to="/">
            <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MC4xNCA2Ny40MSI+PGRlZnM+PHN0eWxlPi5jbHMtMXtmaWxsOiMxZDFkMWI7c3Ryb2tlLXdpZHRoOjNweDt9LmNscy0xLC5jbHMtMntzdHJva2U6I2ZmZjtzdHJva2UtbWl0ZXJsaW1pdDoxMDt9LmNscy0ye2ZpbGw6bm9uZTtzdHJva2Utd2lkdGg6NHB4O308L3N0eWxlPjwvZGVmcz48ZyBpZD0iQ2FscXVlXzIiIGRhdGEtbmFtZT0iQ2FscXVlIDIiPjxnIGlkPSJDYWxxdWVfMi0yIiBkYXRhLW5hbWU9IkNhbHF1ZSAyIj48cmVjdCBjbGFzcz0iY2xzLTEiIHg9IjEuNSIgeT0iMS41IiB3aWR0aD0iNDcuMTQiIGhlaWdodD0iNjQuNDEiLz48bGluZSBjbGFzcz0iY2xzLTIiIHgxPSIzMC44MiIgeTE9IjMzLjcxIiB4Mj0iNDIuNDEiIHkyPSIzMy43MSIvPjxwb2x5Z29uIGNsYXNzPSJjbHMtMiIgcG9pbnRzPSIxMC4wMyAxMC40OCAxMC4wMyA1Ni45MyAyMC42NiA1Ni45MyAyNi45OSAxMC40OCAxMC4wMyAxMC40OCIvPjxwb2x5bGluZSBjbGFzcz0iY2xzLTIiIHBvaW50cz0iNDAuMzkgMjcuNTggNDAuMzkgMTAuNDggMjYuOTkgMTAuNDggMjAuNjYgNTYuOTMgNDAuMzkgNTYuOTMgNDAuMzkgMzEuODYiLz48L2c+PC9nPjwvc3ZnPg==" alt="Logo" class="navbar-brand" style="width: 30px;"> 
          </router-link>
        </b-navbar-brand>


        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav class=" ml-auto">
            <!-- <router-link to="/" class="nav-link">Home</router-link> -->
            <router-link to="/projects" class="nav-link">Projects</router-link>
            <router-link to="/hobbies" class="nav-link">Hobbies</router-link>
            <router-link to="/about" class="nav-link">About</router-link>
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
@import url('https://fonts.googleapis.com/css2?family=Teko:wght@400;700&display=swap');

body{
  font-family: "Jura", sans-serif !important;
  color: #1F1F1F;
  cursor: url("../static/img/cursor-1.svg"),default;
}

h1,h2,h4,h5{
  font-family: "Teko", sans-serif;
}

h1{
  font-weight: bold;
    font-size: 4rem;
}

h2{
  border-bottom: #af1f28 3px solid;
  padding-bottom: .5rem;
  margin-bottom: 1rem;
  font-size: 2.5rem;
}

.presentation{
  border-left: #af1f28 3px solid;
  padding-bottom: .5rem;
}

.presentation h2{
  border: initial;
  margin-left: 0;
}

h3, h4{
  color: #af1f28;
}

a{
  color: #1F1F1F;
  font-family: "Teko", sans-serif;
  font-size: 1.5rem;
  cursor: url("../static/img/cursor-2.svg"),default;
}

a:hover{
  text-decoration: none !important;
  color: #1F1F1F;
}


a.btn{
  color: white;
  border: 1px solid white;
  padding: .2rem 2rem;
  font-family: "Teko",sans-serif;
  font-size: 1.5rem;

}

a.btn:hover{
  color: #ffa4ab;
  border: 1px solid #ffa4ab;
  padding: .2rem 2rem;
  font-family: "Teko",sans-serif;
  font-size: 1.5rem;
  cursor: url("../static/img/cursor-2.svg"),default;

}

a.btn2{
  color: #1f1f1f;
  border: 2px solid #1f1f1f;
  padding: .2rem 2rem;
  font-family: "Teko",sans-serif;
  font-size: 1.5rem;
  cursor: url("../static/img/cursor-2.svg"),default;

}

a.btn2:hover{
  color: #777777;
  border: 2px solid #777777;
  padding: .2rem 2rem;
  font-family: "Teko",sans-serif;
  font-size: 1.5rem;
  cursor: url("../static/img/cursor-2.svg"),default;
}

.btn:not(:disabled):not(.disabled){
  cursor: url("../static/img/cursor-2.svg"),default !important; 
}

.navbar{
  background-color: #1F1F1F;
}

.nav-link{
  margin-left: 5rem;
}

.contact{
  border: 1px grey solid;
  padding: .5rem;
}

.intro{
  background-color:rgba(34, 32, 31, .85);
  color: white;
}


.next{
  color: white;
  background-color:rgba(34, 32, 31, .85);
  padding: 1rem;
}


.case{
  margin-bottom: 15rem;
  margin-top: 10rem;
}

li{
  list-style: none;
}

ul{
  padding-left: 0.5rem;
}

p.cat{
  color: #af1f28;
  border: 2px solid #af1f28;
  padding: .5rem 1rem;
  display: block;
  font-weight: bold;
  margin-right: 1rem;
}

p.cat2{
  color: white;
  border: 2px solid white;
  padding: .5rem 1rem;
  display: block;
  font-weight: bold;
  margin-right: 1rem;
}



footer{
  color: white;
  background-color: #1f1f1f;
  margin-bottom: 0;
  padding-bottom: 3rem; 
  padding-top: 3rem; 
}

footer p{
  padding: 1rem;
}

footer a{
  color: white;
}


footer a:hover{
  color: #ffa4ab;
}

@media only screen and (max-width:536px){
  .navbar-nav .nav-link{
    padding-left: .5rem !important;
  }

  .nav-link{
    margin-left: initial !important;
  }

  .presentation{
    margin-left: 1rem;
    margin-bottom: 1rem;
  }

}
</style>
