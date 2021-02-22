<template>
 <div>    
   <div id="projects">
     <b-container>
       <b-row>
         <b-col cols="12" sm="4" class="intro my-5">
           <h1 class="my-5">Projects</h1>
           <div class="my-5">
             <p>
               You can discover my best projects over all the years. If you want to learn more about one or see the whole project you can click on them. If you want a fully detailed list on all my projects, you can click on the link below.
             </p>
             <router-link to="/all">
                <a href="#" class="btn my-5">Discover</a>
             </router-link>
           </div>
         </b-col>
       </b-row>
     </b-container>
   </div>

    <div  v-for="info in donnees" :key="info.id">
      <div class="case" v-for="project in info.projects" :key="project.id">
        <b-container>
          <b-row class="my-5">  
            <b-col cols="12" sm="7">
              <b-col cols="12" sm="9">
                  <h3>{{project.subtitle}}</h3>
                  <h2>{{project.title}}</h2>
                  <div class="my-5">
                    <b-row class="ml-1">
                        <p class="cat" v-for="cat in project.cat" :key="cat.id">{{cat.name}}</p>
                    </b-row>
                    <p>{{project.text}}</p>
                    <div class="my-5">
                      <router-link :to="project.link">
                        <a href="#" class="btn2">Discover</a>
                      </router-link>
                    </div>
                    
                  </div>
              </b-col>
              
            </b-col>

            <b-col cols="12" sm="5" class="text-center" >
                 <img :src="project.icon" :alt=project.alt class="img-fluid" style="max-width:250px">
            </b-col>
          </b-row>
        </b-container>
      </div>
    </div>
    

    <footer class="text-center">
      <p><a href="#">Mentions légales</a> & <a href="#">Crédits</a>  | © 2020 cecile-gaultier.fr</p>
    </footer>
 </div>
</template>

<script>
export default {
  name: 'Projects',
  data () {
    return {
      donnees :[]
    }
  },

  created(){
        //lecture json directement avec Axios (json dans static)
        axios.get('static/project.json')
        .then(function(response){
        //succès réponse
        console.log(response.data);
        this.donnees = response.data;
        }.bind(this)) //Zone isolée -> bind pour closure
        .catch(function(error){
        //erreur requete
        console.log(error)
        })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

#projects{
  background-image: url("../assets/projets.jpg");
  content: "";
  background-repeat: no-repeat;
  margin-left: .5rem;
  margin: 0;
  background-position-y: center;
}

</style>
