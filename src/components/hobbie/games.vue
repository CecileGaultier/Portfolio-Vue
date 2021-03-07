<template>
 <div>
    <div id="games">
     <b-container>
       <b-row>
         <b-col cols="12" sm="4" md="6" lg="4" class="intro my-5">
           <h1 class="my-5">Video Games</h1>
           <div class="my-5"  v-for="info in donnees" :key="info.id">
             <div class="my-5">
                <b-row class="ml-1">
                    <p class="cat2" v-for="cat in info.cat" :key="cat.id">{{cat.name}}</p>
                </b-row>
              </div>
           </div>
         </b-col>
       </b-row>
     </b-container>
   </div>
   <b-container v-for="info in donnees" :key="info.id" class="my-5">
     <b-row>
          <b-col cols="12" sm="7" md="12" lg="7">
          <h3>Brief</h3>
          <p>{{info.brief}}</p>
       </b-col>
     </b-row>


    <!-- <div class="carrousel">
       <img src="../../assets/mmi-carrousel-1.jpg" style="width:100%" class="mySlides">
        
        <img src="../../assets/mmi-carrousel-2.jpg" style="width:100%" class="mySlides">
        
        <img src="../../assets/mmi-carrousel-3.jpg" style="width:100%" class="mySlides">

        <img src="../../assets/mmi-carrousel-4.jpg" style="width:100%" class="mySlides">
     </div> -->
    
    <div id="games2">

      <b-row class="my-5">
        <b-col cols="12" sm="7" md="12" lg="7">
          <h3>MMI - Sims 4</h3>
          <img src="../../assets/sims2-2.jpg" alt="Project Same Through Years" class="img-fluid my-4">
          <p v-for="ref in info.reflection" :key="ref.id">{{ref.text}}</p>
          <div class="my-5">
            <a href="https://www.instagram.com/cecile_gaultier/" class="btn2">Discover</a>
            <a href="https://www.youtube.com/channel/UCqUm2Ej_iWgJebyyGzKj7QA" class="btn2"><i class="fas fa-play"></i></a>
          </div>
        </b-col>
      </b-row>

      <b-row class="my-5">
        <b-col cols="12" sm="7" md="12" lg="7">
          <h3>Escape Game -Python</h3>
          <img src="../../assets/escape-game.jpg" alt="Project Clone Wars" class="img-fluid my-4">
          <p v-for="ref in info.reflection2" :key="ref.id">{{ref.text}}</p>
        </b-col>
      </b-row>
      
      <div class="my-5">
        <router-link to="/danse">
          <h3 class="next">Suivant : Dance <i class="far fa-play-circle ml-2"></i></h3>
        </router-link>
      </div>


    </div>

   </b-container>

    <footer class="text-center">
      <router-link to="/terms">
        <p>Terms & Conditions & Policy & Credit  | © 2021 cecile-gaultier.fr</p>
      </router-link>
    </footer>

 </div>
</template>

<script>
export default {
  name: 'Games',
  data () {
   return {
      donnees :[]
    }
  },

  created(){
        //lecture json directement avec Axios (json dans static)
        axios.get('static/games.json')
        .then(function(response){
        //succès réponse
        console.log(response.data);
        this.donnees = response.data;
        }.bind(this)) //Zone isolée -> bind pour closure
        .catch(function(error){
        //erreur requete
        console.log(error)
        });
  },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

#games{
  background-image: url("../../assets/sims2-front.jpg");
  content: "";
  background-repeat: no-repeat;
  margin-left: .5rem;
  margin: 0;
  background-position-y: center;
}

#games2 h3{
  border-left: #af1f28 3px solid;
  padding-left: .5rem;
  margin-bottom: 3rem;
  font-size: 2.5rem;
  margin-top: 8rem;
}

@media only screen and (max-width:768px){
  #games{
      background-position-x: center;
  }
}

@media only screen and (max-width:576px){
  #games{
      background-position-x: center;
  }
}

</style>
