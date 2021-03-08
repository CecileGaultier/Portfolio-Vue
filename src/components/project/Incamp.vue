<template>
 <div>
    <div id="incamp">
     <b-container>
       <b-row>
         <b-col cols="12" sm="4" md="6" lg="4" class="intro my-5">
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
          <p class="mb-5">{{info.client}}</p>
          <a href="https://incamp.agglo-montbeliard.fr/" class="btn2 my-5">Link to Incamp</a>
       </b-col>

       <b-col cols="12" sm="3" class="presentation">
         <h2>Year</h2>
          <p>{{info.year}}</p>
       </b-col>

        <b-col cols="12" sm="6">
          <h3>Brief</h3>
          <p>{{info.brief}}</p>
          <p>I was the project manager and the developer. I had to look very carefully at the safety of the project, date-lines, establish contact with the client during and after the project.</p>
          <p>Made with <a href="http://ambregeiss.fr/">Ambre Geiss</a> (Communication) and <a href="http://manonjeanpierre.fr/">Manon Jeanpierre</a> (Design).</p>
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
            <b-col cols="12" sm="7" md="12" lg="7">
              <h3>Reflection</h3>
              <p v-for="ref in info.reflection" :key="ref.id">{{ref.text}}</p>
            </b-col>
          </b-row>
          
          <div class="my-5">
            <h3>First Page</h3>
            <img src="https://cecile-gaultier.fr/static/img/incamp-accueil.236c98c.jpg" alt="Mock-up Accueil" class="img-fluid">
          </div>

          <div class="my-5">
            <h3>Responsive</h3>
            <img src="https://cecile-gaultier.fr/static/img/incamp-responsive.28c71a2.jpg" alt="Mock-up Responsive" class="img-fluid">
          </div>

          <div class="my-5 ressources">
            <h3>Resources</h3>
            <b-row >
              <b-col cols="12" sm="6" class="my-5">
                <img src="https://cecile-gaultier.fr/static/img/logo-accueil.2a6a33c.jpg" alt="Ressources" class="img-fluid my-5 ">
                <p>Manon Jeanpierre created our logo. The circles represent different departments from our university. It symbolizes their unity. The leaf in the middle means that sustainable development is in the center of the university’s goal.</p>
              </b-col>
              <b-col cols="12" sm="6" class="my-5">
                <img src="https://cecile-gaultier.fr/static/img/watering_plant.89144ef.svg" alt="Ressources" class="img-fluid">
                <p>We used illustrations from a free rights library to create harmony and to break the text intensity. Manon Jeanpierre modified them with our colors.</p>
              </b-col>
              <b-col cols="12" sm="6" class="my-5">
                <img src="https://cecile-gaultier.fr/static/img/incamp-rsn.682d2b7.jpg" alt="Ressources" class="img-fluid my-4 ">
                <p>We created two accounts for Incamp : one on Instagram, the other on Facebook. We used our logo, colors and photos to create unique content. We have quality subscribers like the town of Montbéliard or green associations.</p>
              </b-col>
              <b-col cols="12" sm="6" class="my-5">
                <img src="https://cecile-gaultier.fr/static/img/incamp-mockup.1d55d83.jpg" alt="Ressources" class="img-fluid my-5 ">
                <p>We had to build a complete communication strategy (targeting, competitive analysis, competitive intelligence, mix-marketing ...). We also created visuals for leaflet, print and social posts.</p>
              </b-col>
              <b-col cols="12" sm="6" class="my-5">
                <img src="https://cecile-gaultier.fr/static/img/incamp-wp.13f2252.jpg" alt="Ressources" class="img-fluid my-4 ">
                <p>As the developer on the team, I built the Wordpress theme from our mock-ups. Wordpress was the best solution for our client because they have no knowledge about websites or web articles. So I chose various plugins to make it more user-friendly like Yoast. I also included Goggle service like Analytics and a newsletter (Sendinblue) to analyse users ‘s behaviour (UX and UI). </p>
              </b-col>
              <b-col cols="12" sm="6" class="my-5">
                <img src="https://cecile-gaultier.fr/static/img/incamp-wp2.45532d5.jpg" alt="Ressources" class="img-fluid my-4 ">
                <p>Our client wanted to be able to create quizzes easily. I chose the plugin Quiz and Survey Master and created templates to make it easier. The admins have all the results in a special email address. As the project manager of Incamp, I also created a few videos for our clients. They explain and detail the main tasks.</p>
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
  },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

#incamp{
  background-image: url("https://cecile-gaultier.fr/static/img/incamp-front.f538ad2.jpg");
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
  margin-top: 7rem;
}

.ressources img{
  max-width: 500px;
}

@media only screen and (max-width:536px){
  .ressources img{
    max-width: 350px;
  }
}


@media screen and (max-width: 768px){
  .btn2{
    display: none;
  }

    
  .ressources img{
    max-width: 300px;
  }
}

</style>
