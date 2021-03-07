<template>
 <div>    
   <div id="projects">
     <b-container>
       <b-row>
         <b-col cols="12" sm="4" class="intro my-5">
           <h1 class="my-5">Projects</h1>
           <div class="my-5">
             <p>
               You can discover my best projects over all the years. If you want to learn more about one or see the whole project, you can click on them. If you want a fully detailed list on all my projects, you can click on the link below.
             </p>
             <div class="my-5"></div>
             <router-link to="/all">
                <a href="#" class="btn my-5">Discover</a>
             </router-link>
           </div>
         </b-col>
       </b-row>
     </b-container>
   </div>
    <!-- <div  v-for="info in donnees" :key="info.id">
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
                 <img src="../assets/coppola2.jpg" :alt=project.alt class="img-fluid" style="max-width:250px">
            </b-col>
          </b-row>
        </b-container>
      </div>
    </div> -->

    <div>
      <div class="case">
        <b-container>
          <b-row class="my-5">  
            <b-col cols="12" sm="7">
              <b-col cols="12" sm="9">
                  <h3>2021</h3>
                  <h2>Francis Ford Coppola</h2>
                  <div class="my-5">
                    <b-row class="ml-1">
                        <p class="cat">Web</p>
                        <p class="cat">Individual</p>
                        <p class="cat">Scholar</p>
                        <p class="cat">Responsive</p>
                    </b-row>
                    <p>
                      We had to conceive and build a responsive website about an assigned famous movie director. I based all my reflection around Francis Ford Coppola’s world and his movies.
                    </p>
                    <div class="my-5" >
                      <router-link to="/coppola">
                        <a href="#" class="btn2">Discover</a>
                      </router-link>
                    </div>
                    
                  </div>
              </b-col>
              
            </b-col>

            <b-col cols="12" sm="5" class="text-center" >
                 <img src="../assets/coppola2.jpg" alt="Mockup Coppola" class="img-fluid" style="max-width:250px">
            </b-col>
          </b-row>
        </b-container>
      </div>
    </div>
    <div>
      <div class="case">
        <b-container>
          <b-row class="my-5">  
            <b-col cols="12" sm="7">
              <b-col cols="12" sm="9">
                  <h3>2021</h3>
                  <h2>Incamp</h2>
                  <div class="my-5">
                    <b-row class="ml-1">
                        <p class="cat">Web</p>
                        <p class="cat">Developer</p>
                        <p class="cat">Project Leader</p>
                        <p class="cat">Scholar</p>
                        <p class="cat">Responsive</p>
                    </b-row>
                    <p>
                      Pays de Montbéliard Agglomération (PMA) wanted a responsive website that spotlighted different initiatives for the university ’ campus. I was the project leader and also the developer for this project.
                    </p>
                    <div class="my-5">
                      <router-link to="/incamp">
                        <a href="#" class="btn2">Discover</a>
                      </router-link>
                    </div>
                    
                  </div>
              </b-col>
              
            </b-col>

            <b-col cols="12" sm="5" class="text-center" >
                <img src="../assets/incamp3.jpg" alt="Mockup Incamp" class="img-fluid" style="max-width:250px">
            </b-col>
          </b-row>
        </b-container>
      </div>
    </div>
    
    <div>
      <div class="case">
        <b-container>
          <b-row class="my-5">  
            <b-col cols="12" sm="7">
              <b-col cols="12" sm="9">
                  <h3>2021</h3>
                  <h2>MMI Notes</h2>
                  <div class="my-5">
                    <b-row class="ml-1">
                        <p class="cat">Application</p>
                        <p class="cat">Collective</p>
                        <p class="cat">Scholar</p>
                        <p class="cat">Mobile</p>
                    </b-row>
                    <p>
                      We are conceiving an application on android by pairs. Students from MMI can connect to their account in order to see their grades and if they pass their semester. We are using ionic 3.
                    </p>
                    <div class="my-5">
                      <router-link to="/mminotes">
                        <a href="#" class="btn2">Discover</a>
                      </router-link>
                    </div>
                    
                  </div>
              </b-col>
              
            </b-col>

            <b-col cols="12" sm="5" class="text-center" >
                 <img src="../assets/mmi-notes1.jpg" alt="Mockup MMI Notes" class="img-fluid" style="max-width:250px">
            </b-col>
          </b-row>
        </b-container>
      </div>
    </div>

    <div>
      <div class="case">
        <b-container>
          <b-row class="my-5">  
            <b-col cols="12" sm="7">
              <b-col cols="12" sm="9">
                  <h3>2021</h3>
                  <h2>Perfect Room</h2>
                  <div class="my-5">
                    <b-row class="ml-1">
                        <p class="cat">3D</p>
                        <p class="cat">Collective</p>
                        <p class="cat">Scholar</p>
                    </b-row>
                    <p>
                      We are conceiving our perfect room in 3Ds Max by pairs. We build almost every object and lights. Then we import all of them with the library Three.js into an HTML Page. The viewers can interact with the room and the objects.
                    </p>
                    <div class="my-5">
                      <router-link to="/proom">
                        <a href="#" class="btn2">Discover</a>
                      </router-link>
                    </div>
                    
                  </div>
              </b-col>
              
            </b-col>

            <b-col cols="12" sm="5" class="text-center" >
                 <img src="../assets/proom1.jpg" alt="Mockup Perfect Room" class="img-fluid desk">
            </b-col>
          </b-row>
        </b-container>
      </div>
    </div>

    <div>
      <div class="case">
        <b-container>
          <b-row class="my-5">  
            <b-col cols="12" sm="7">
              <b-col cols="12" sm="9">
                  <h3>2019</h3>
                  <h2>Fly New</h2>
                  <div class="my-5">
                   <b-row class="ml-1">
                        <p class="cat">Web</p>
                        <p class="cat">Individual</p>
                        <p class="cat">Scholar</p>
                        <p class="cat">Mobile</p>
                    </b-row>
                    <p>
                      This was my first website as a student in MMI. We had to present a superhero, the pollution they created and one solution. I have based all my reflexion around Iron Man and the air pollution.
                    </p>
                    <div class="my-5">
                      <router-link to="/fly">
                        <a href="#" class="btn2">Discover</a>
                      </router-link>
                    </div>
                    
                  </div>
              </b-col>
              
            </b-col>

            <b-col cols="12" sm="5" class="text-center" >
                 <img src="../assets/fly-new2.jpg" alt="Mockup Fly New" class="img-fluid" style="max-width:250px">
            </b-col>
          </b-row>
        </b-container>
      </div>
    </div>

    

     <footer class="text-center">
      <router-link to="/terms">
        <p>Terms & Conditions & Policy & Credit  | © 2021 cecile-gaultier.fr</p>
      </router-link>
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

.desk{
    max-width: 450px;
  }


@media only screen and (max-width:576px){
  .desk{
    max-width: 300px;
  }

  #projects{
      background-position-x: center;
  }
}

</style>
