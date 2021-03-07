<template>
 <div>
    <div id="art">
     <b-container>
       <b-row>
         <b-col cols="12" sm="4" md="6" lg="4" class="intro my-5">
           <h1 class="my-5">Drawing, Painting, Photo</h1>
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

    <!-- <div class="carrousel">
       <img src="../../assets/mmi-carrousel-1.jpg" style="width:100%" class="mySlides">
        
        <img src="../../assets/mmi-carrousel-2.jpg" style="width:100%" class="mySlides">
        
        <img src="../../assets/mmi-carrousel-3.jpg" style="width:100%" class="mySlides">

        <img src="../../assets/mmi-carrousel-4.jpg" style="width:100%" class="mySlides">
     </div> -->
    
    <div id="art2">

      <b-row class="my-5">
        <b-col cols="12" sm="7" md="12" lg="7">
          <h3>Same Through Years</h3>
          <img src="../../assets/same.jpg" alt="Project Same Through Years" class="img-fluid my-4">
          <p v-for="ref in info.reflection" :key="ref.id">{{ref.text}}</p>
          <div class="my-5">
            <a href="https://www.instagram.com/cecile_gaultier/" class="btn2">Discover</a>
          </div>
        </b-col>
      </b-row>

      <b-row class="my-5">
        <b-col cols="12" sm="7" md="12" lg="7">
          <h3>Three Universes</h3>
          <img src="../../assets/drawing.jpg" alt="Project Three Universes" class="img-fluid my-4">
          <p v-for="ref in info.reflection2" :key="ref.id">{{ref.text}}</p>
        </b-col>
      </b-row>

      <b-row class="my-5">
        <b-col cols="12" sm="7" md="12" lg="7">
          <h3>Snowy Dogs</h3>
          <img src="../../assets/photo.jpg" alt="Project Snowy Dogs" class="img-fluid my-4">
          <p v-for="ref in info.reflection3" :key="ref.id">{{ref.text}}</p>
          <div class="my-5">
            <a href="https://www.instagram.com/cecile_gaultier/" class="btn2">Discover</a>
          </div>
        </b-col>
      </b-row>
      
      <div class="my-5">
        <router-link to="/games">
          <h3 class="next">Suivant : Video Games <i class="far fa-play-circle ml-2"></i></h3>
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
  name: 'Art',
  data () {
   return {
      donnees :[]
    }
  },

  created(){
        //lecture json directement avec Axios (json dans static)
        axios.get('static/art.json')
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

#art{
  background-image: url("../../assets/dessin-front.jpg");
  content: "";
  background-repeat: no-repeat;
  margin-left: .5rem;
  margin: 0;
  background-position-y: center;
}

#art2 h3{
  border-left: #af1f28 3px solid;
  padding-left: .5rem;
  margin-bottom: 3rem;
  font-size: 2.5rem;
  margin-top: 8rem;
}

@media only screen and (max-width:576px){
  #art{
      background-position-x: center;
  }
}



</style>
