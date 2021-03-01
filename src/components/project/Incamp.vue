<template>
 <div>
    <div id="incamp">
     <b-container>
       <b-row>
         <b-col cols="12" sm="5" class="intro my-5">
           <h1 class="my-5">Incamp</h1>
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
          <p>Made with <a href="http://ambregeiss.fr/">Ambre Geiss</a> and <a href="http://manonjeanpierre.fr/">Manon Jeanpierre</a></p>
       </b-col>
     </b-row>

     <b-row class="my-5">
      
     </b-row>

    <h3>Languages / Software</h3>
    <b-row class="my-3 ml-1">
      <p v-for="ls in info.ls" :key="ls.id" class="cat">{{ls.name}}</p>
    </b-row>
      
    <!-- <div class="carrousel">
      <img src="../../assets/incamp-carrousel-1.jpg" style="width:100%" class="mySlides">
      
      <img src="../../assets/incamp-carrousel-2.jpg" style="width:100%" class="mySlides">
      
      <img src="../../assets/incamp-carrousel-3.jpg" style="width:100%" class="mySlides">

      <img src="../../assets/incamp-carrousel-4.jpg" style="width:100%" class="mySlides">

      <img src="../../assets/incamp-carrousel-5.jpg" style="width:100%" class="mySlides">
    </div> -->
   

      <div id="incamp2">

          <b-row class="my-5">
            <b-col cols="12" sm="7">
              <h3>Reflection</h3>
              <p v-for="ref in info.reflection" :key="ref.id">{{ref.text}}</p>
            </b-col>
          </b-row>
          
          <div class="my-5">
            <h3>First Page</h3>
            <img src="../../assets/incamp-accueil.jpg" alt="Mock-up Accueil" class="img-fluid">
          </div>

          <div class="my-5">
            <h3>Responsive</h3>
            <img src="../../assets/incamp-responsive.jpg" alt="Mock-up Responsive" class="img-fluid">
          </div>

          <div class="my-5">
            <h3>Ressources</h3>
            <b-row >
              <b-col cols="12" sm="6">
                <img src="../../assets/label-tepcv.jpg" alt="Ressources" class="img-fluid my-4" style="max-width:300px">
              </b-col>
              <b-col cols="12" sm="6">
                <img src="../../assets/logo-footer.jpg" alt="Ressources" class="img-fluid my-4" style="max-width:300px">
              </b-col>
              <b-col cols="12" sm="6">
                <img src="../../assets/logo-accueil.jpg" alt="Ressources" class="img-fluid my-4" style="max-width:300px">
              </b-col>
              <b-col cols="12" sm="6">
                <img src="../../assets/logo-sans-texte.jpg" alt="Ressources" class="img-fluid my-4" style="max-width:100px">
              </b-col>
              <b-col cols="12" sm="6">
                <img src="../../assets/question.svg" alt="Ressources" class="img-fluid my-4" style="max-width:300px">
              </b-col>
              <b-col cols="12" sm="6">
                <img src="../../assets/recycling.svg" alt="Ressources" class="img-fluid my-4" style="max-width:300px">
              </b-col>
              <b-col cols="12" sm="6">
                <img src="../../assets/people.svg" alt="Ressources" class="img-fluid my-4" style="max-width:300px">
              </b-col>
              <b-col cols="12" sm="6">
                <img src="../../assets/watering_plant.svg" alt="Ressources" class="img-fluid my-4" style="max-width:300px">
              </b-col>
            </b-row>
          </div>

           <div class="my-5">
            <router-link to="/mminotes">
              <h3 class="next">Projet suivant : MMI Notes <i class="far fa-play-circle ml-2"></i></h3>
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
  name: 'Incamp',
  data () {
   return {
      donnees :[]
    }
  },

  created(){
        //lecture json directement avec Axios (json dans static)
        axios.get('static/incamp.json')
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

#incamp{
  background-image: url("../../assets/incamp-front.jpg");
  content: "";
  background-repeat: no-repeat;
  margin-left: .5rem;
  margin: 0;
  background-position-y: center;
}

#incamp2 h3{
  border-left: #af1f28 3px solid;
  padding-left: .5rem;
  margin-bottom: 1rem;
  font-size: 2.5rem;
  margin-top: 12rem;
}

.carrousel{
    margin-top: 10rem;
}

</style>
