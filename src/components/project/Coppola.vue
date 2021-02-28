<template>
 <div>
    <div id="coppola">
     <b-container>
       <b-row>
         <b-col cols="12" sm="5" class="intro my-5">
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
        <b-col cols="12" sm="7">
          <h3>Reflection</h3>
          <p v-for="ref in info.reflection" :key="ref.id">{{ref.text}}</p>
        </b-col>
      </b-row>
      
      <div class="my-5">
        <h3>First Page</h3>
        <img src="../../assets/coppola-accueil.jpg" alt="Mock-up Accueil" class="img-fluid">
      </div>

      <div class="my-5">
        <h3>Responsive</h3>
        <img src="../../assets/coppola-responsive.jpg" alt="Mock-up Responsive" class="img-fluid">
      </div>

      <div class="my-5">
        <h3>Ressources</h3>
        <b-row >
          <b-col cols="12" sm="6">
            <img src="../../assets/Bio-illu.svg" alt="Ressources" class="img-fluid my-4" style="max-width:300px">
          </b-col>
          <b-col cols="12" sm="6">
            <img src="../../assets/Ajout-illu.svg" alt="Ressources" class="img-fluid my-4" style="max-width:300px">
          </b-col>
          <b-col cols="12" sm="6">
            <img src="../../assets/Camera-illu.svg" alt="Ressources" class="img-fluid my-4" style="max-width:300px">
          </b-col>
          <b-col cols="12" sm="6">
            <img src="../../assets/upload-illu.svg" alt="Ressources" class="img-fluid my-4" style="max-width:300px">
          </b-col>
          <b-col cols="12" sm="6">
            <img src="../../assets/Prix-illu.svg" alt="Ressources" class="img-fluid my-4" style="max-width:300px">
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

   <footer class="text-center mt-5">
    <p><a href="#">Mentions légales</a> & <a href="#">Crédits</a>  | © 2020 cecile-gaultier.fr</p>
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


        var slideIndex = 0;
        carousel();

        function carousel() {
          var i;
          var x = document.getElementsByClassName("mySlides");
          for (i = 0; i < x.length; i++) {
            x[i].style.display = "none";
          }
          slideIndex++;
          if (slideIndex > x.length) {slideIndex = 1}
          x[slideIndex-1].style.display = "block";
          setTimeout(carousel, 4000); // Change image every 4 seconds
        }
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

.carrousel{
    margin-top: 10rem;
}

i{
  padding-top: 0;
}


</style>
