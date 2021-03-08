<template>
 <div>
    <div id="coppola">
     <b-container>
       <b-row>
         <b-col cols="12" sm="4" md="6" lg="4" class="intro my-5">
           <h1 class="my-5">Francis Ford Coppola</h1>
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
       <b-col cols="12" sm="3" class="presentation">
         <h2>Client</h2>
          <p>{{info.client}}</p>
       </b-col>

       <b-col cols="12" sm="3" class="presentation">
         <h2>Year</h2>
          <p>{{info.year}}</p>
       </b-col>

        <b-col cols="12" sm="6">
          <h3>Brief</h3>
          <p>{{info.brief}}</p>
       </b-col>
     </b-row>

     <b-row class="my-5">
      
     </b-row>

     <h3>Languages / Software</h3>
     <b-row class="my-3 ml-1">
        <p v-for="ls in info.ls" :key="ls.id" class="cat">{{ls.name}}</p>
     </b-row>

     <!-- <div class="carrousel">
       <img src="../../assets/coppola-carrousel-1.jpg" style="width:100%" class="mySlides">
        
        <img src="../../assets/coppola-carrousel-2.jpg" style="width:100%" class="mySlides">
        
        <img src="../../assets/coppola-carrousel-3.jpg" style="width:100%" class="mySlides">

        <img src="../../assets/coppola-carrousel-4.jpg" style="width:100%" class="mySlides">
     </div> -->
             
    
    <div id="coppola2">

      <b-row class="my-5">
        <b-col cols="12" sm="7" md="12" lg="7">
          <h3>Reflection</h3>
          <p v-for="ref in info.reflection" :key="ref.id">{{ref.text}}</p>
        </b-col>
      </b-row>
      
      <div class="my-5">
        <h3>First Page</h3>
        <img src="https://cecile-gaultier.fr/static/img/coppola-accueil.2e9a335.jpg" alt="Mock-up Accueil" class="img-fluid">
      </div>

      <div class="my-5">
        <h3>Responsive</h3>
        <img src="https://cecile-gaultier.fr/static/img/coppola-responsive.e38ad1c.jpg" alt="Mock-up Responsive" class="img-fluid">
      </div>

      <div class="my-5">
        <h3>Resources</h3>
        <b-row >
          <b-col cols="12" sm="6" class="my-5">
            <img src="../../assets/Bio-illu.svg" alt="Ressources" class="img-fluid my-4" style="max-width:300px">
            <p>This illustration was used for the biography page. I played with the common idea that biographies are books, which is not totally true with the Internet. On this page, viewers can learn about Francis Ford Coppola’s life but mainly what is his style when making movies. The design of the website and Coppola’s style are directly linked.</p>
          </b-col>
          <b-col cols="12" sm="6" class="my-5">
            <img src="https://cecile-gaultier.fr/static/img/Prix-illu.3029159.svg" alt="Ressources" class="img-fluid my-4" style="max-width:270px">
            <p>Francis Ford Coppola and his family (daughter Sofia Coppola and nephew Nicolas Cage) are very well-known. They have won many prizes / awards through movies. </p>
          </b-col>
          <b-col cols="12" sm="6" class="my-5">
            <img src="../../assets/upload-illu.svg" alt="Ressources" class="img-fluid my-4" style="max-width:300px">
            <p>One of the necessary pages was the upload page. Users can add films into the database (title, year, image of the movie and description). We only had less than 12h to make the integration, so we only needed to create the request.</p>
          </b-col>
          <b-col cols="12" sm="6" class="my-5">
            <img src="../../assets/Camera-illu.svg" alt="Ressources" class="img-fluid my-4" style="max-width:250px">
            <p>For the filmography page, I used a typical camera to represent film making. I kept the presentation of his movie identical because of the coherence and because of Vue.js (import data via flux.json and v-model).</p>
          </b-col>
          
        </b-row>
      </div>

       <div class="my-5">
        <router-link to="/incamp">
          <h3 class="next">Projet suivant : Incamp <i class="far fa-play-circle ml-2"></i></h3>
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
  name: 'Coppola',
  data () {
   return {
      donnees :[]
    }
  },

  created(){
        //lecture json directement avec Axios (json dans static)
        axios.get('static/coppola.json')
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

#coppola{
  background-image: url("../../assets/coppola-front.jpg");
  content: "";
  background-repeat: no-repeat;
  margin-left: .5rem;
  margin: 0;
  background-position-y: bottom;
}


#coppola2 h3{
  border-left: #af1f28 3px solid;
  padding-left: .5rem;
  margin-bottom: 3rem;
  font-size: 2.5rem;
  margin-top: 12rem;
}

i{
  padding-top: 0;
}


</style>
