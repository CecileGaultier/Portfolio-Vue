<template>
 <div>    
   <div id="hobbies">
     <b-container>
       <b-row>
         <b-col cols="12" sm="4" class="intro my-5">
           <h1 class="my-5">Hobbies</h1>
           <div class="my-5">
             <p>
               Discover all my passions ! 
             </p>
             <p>
               My hobbies are really important for me because I can explore and learn different subjects. They are often my inspiration for my work.
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

  <div class="case">
    <b-container>
      <b-row class="my-5">  
        <b-col cols="12" sm="7">
          <b-col cols="12" sm="9">
              <h3>Science-fiction, Dystopie,Surnatural …</h3>
              <h2>Cinema</h2>
              <div class="my-5">
                <p>
                  Movies are one of my main passions. They allowed the viewers to discover a new universe and still, they ask questions about our society nowadays.
                </p>
                <div class="my-5">
                  <router-link to="/movie">
                    <a href="#" class="btn2">Discover</a>
                  </router-link>
                </div>
                
              </div>
          </b-col>
          
        </b-col>

        <b-col cols="12" sm="5" class="text-center" >
              <img src="../assets/yoda.svg" alt="Movies" class="img-fluid" style="max-width:250px">
        </b-col>
      </b-row>
    </b-container>
  </div>

  <div class="case">
    <b-container>
      <b-row class="my-5">  
        <b-col cols="12" sm="7">
          <b-col cols="12" sm="9">
              <h3>Characters, Nature …</h3>
              <h2>Drawing, Painting, Photo</h2>
              <div class="my-5">
                <p>
                  I have been drawing since I learned to hold a pen. I never took drawing classes and I have learned all by myself and by practicing through challenges, contests and exercises.
                </p>
                <div class="my-5">
                  <router-link to="/coppola">
                    <a href="#" class="btn2">Discover</a>
                  </router-link>
                </div>
                
              </div>
          </b-col>
          
        </b-col>

        <b-col cols="12" sm="5" class="text-center" >
              <img src="../assets/paint.svg" alt="Painting" class="img-fluid" style="max-width:250px">
        </b-col>
      </b-row>
    </b-container>
  </div>

  <div class="case">
    <b-container>
      <b-row class="my-5">  
        <b-col cols="12" sm="7">
          <b-col cols="12" sm="9">
              <h3>Characters, Nature …</h3>
              <h2>Video Games</h2>
              <div class="my-5">
                <p>
                  Video Games are a great tool for creativity and it combines all the other arts (music, video, storytelling …)
                </p>
                <div class="my-5">
                  <router-link to="/coppola">
                    <a href="#" class="btn2">Discover</a>
                  </router-link>
                </div>
                
              </div>
          </b-col>
          
        </b-col>

        <b-col cols="12" sm="5" class="text-center" >
              <img src="../assets/plumbob.svg" alt="Videos Games" class="img-fluid" style="max-width:250px">
        </b-col>
      </b-row>
    </b-container>
  </div>

  <div class="case">
    <b-container>
      <b-row class="my-5">  
        <b-col cols="12" sm="7">
          <b-col cols="12" sm="9">
              <h3>Modern-Jazz</h3>
              <h2>Dance</h2>
              <div class="my-5">
                <p>
                  I have danced for eight years. It taught me to surpass myself and to be more self-confident. Dancing allows me to express my sensibility.
                </p>
                <div class="my-5">
                  <router-link to="/coppola">
                    <a href="#" class="btn2">Discover</a>
                  </router-link>
                </div>
                
              </div>
          </b-col>
          
        </b-col>

        <b-col cols="12" sm="5" class="text-center" >
              <img src="../assets/music.svg" alt="Videos Games" class="img-fluid" style="max-width:250px">
        </b-col>
      </b-row>
    </b-container>
  </div>

  <div class="case">
    <b-container>
      <b-row class="my-5">  
        <b-col cols="12" sm="7">
          <b-col cols="12" sm="9">
              <h3>Deutschland, England,Russia</h3>
              <h2>Travel</h2>
              <div class="my-5">
                <p>
                  I have always traveled with my family or school. There were great opportunities to think differently and to understand more various cultures.
                </p>
                <div class="my-5">
                  <router-link to="/coppola">
                    <a href="#" class="btn2">Discover</a>
                  </router-link>
                </div>
                
              </div>
          </b-col>
          
        </b-col>

        <b-col cols="12" sm="5" class="text-center" >
              <img src="../assets/map.svg" alt="Videos Games" class="img-fluid" style="max-width:250px">
        </b-col>
      </b-row>
    </b-container>
  </div>

  

    

    <footer class="text-center">
      <p><a href="#">Mentions légales</a> & <a href="#">Crédits</a>  | © 2020 cecile-gaultier.fr</p>
    </footer>
 </div>
</template>

<script>
export default {
  name: 'Hobbies',
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

#hobbies{
  background-image: url("../assets/danse2-front.jpg");
  content: "";
  background-repeat: no-repeat;
  margin-left: .5rem;
  margin: 0;
  background-position-y: center;
}



</style>
