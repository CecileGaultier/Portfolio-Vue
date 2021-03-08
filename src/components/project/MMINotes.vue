<template>
 <div>
    <div id="mminotes">
     <b-container>
       <b-row>
         <b-col cols="12" sm="4" md="6" lg="4" class="intro my-5">
           <h1 class="my-5">MMI Notes</h1>
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
          <p>Made with <a href="http://timotheedurand.fr/">Timothée Durand</a>.</p>
       </b-col>
     </b-row>

      <b-row class="my-5"></b-row>
     

     <h3>Languages / Software</h3>
     <b-row class="my-3 ml-1">
        <p v-for="ls in info.ls" :key="ls.id" class="cat">{{ls.name}}</p>
     </b-row>

    <!-- <div class="carrousel">
       <img src="../../assets/mmi-carrousel-1.jpg" style="width:100%" class="mySlides">
        
        <img src="../../assets/mmi-carrousel-2.jpg" style="width:100%" class="mySlides">
        
        <img src="../../assets/mmi-carrousel-3.jpg" style="width:100%" class="mySlides">

        <img src="../../assets/mmi-carrousel-4.jpg" style="width:100%" class="mySlides">
     </div> -->
    <b-row  class="my-5">
      <b-col cols="12" sm="4" class="my-5">
        <img src="https://cecile-gaultier.fr/static/img/mmi-carrousel-1.fa1b73a.jpg" alt="Ressources" class="img-fluid my-4">
      </b-col>
      <b-col cols="12" sm="4" class="my-5">
        <img src="https://cecile-gaultier.fr/static/img/mmi-carrousel-2.9f652e7.jpg" alt="Ressources" class="img-fluid my-4">
      </b-col>
      <b-col cols="12" sm="4" class="my-5">
        <img src="https://cecile-gaultier.fr/static/img/mmi-notes4.86d1a2d.jpg" alt="Ressources" class="img-fluid my-4">
      </b-col>
    </b-row>

    <div id="mminotes2">

      <b-row class="my-5">
        <b-col cols="12" sm="7" md="12" lg="7">
          <h3>Reflection</h3>
          <p v-for="ref in info.reflection" :key="ref.id">{{ref.text}}</p>
        </b-col>
      </b-row>
      
      <div class="my-5">
        <h3>Resources</h3>
        <b-row >
          <b-col cols="12" sm="6" class="my-5">
            <img src="https://cecile-gaultier.fr/static/img/mmi-synch.2faf152.jpg" alt="Ressources" class="img-fluid my-4" style="max-width:300px">
            <p>This illustration is on the welcoming page. We explain the various functionalities like the possibility to download marks in pdf, to know precisely if the student can pass, to allow the student to evaluate himself with the lowest and higher grades and to hear motivational speech from the phone.</p>
          </b-col>
          <b-col cols="12" sm="6" class="my-5">
            <img src="https://cecile-gaultier.fr/static/img/mmi-phone.4b14df9.jpg" alt="Ressources" class="img-fluid my-4" style="max-width:300px">
            <p>We use Ionic and Cordova to create the main content for Android. But we also add some other functionalities like the PDF Reader, the Text to Speech and I18n. The data are stoked on Airtable and we use JSON to get them.</p>
          </b-col>
          <b-col cols="12" sm="6" class="my-5">
            <img src="https://cecile-gaultier.fr/static/img/mmi-welcome.e4e6ff0.jpg" alt="Ressources" class="img-fluid my-4" style="max-width:300px">
            <p>Students connect to their account with their student number (given by the university). They can access to their grades, their GPA … Unfortunately, some functionalities work only on Android and virtual devices can’t use them. It limits the use of the app.</p>
          </b-col>
          <b-col cols="12" sm="6" class="my-5">
            <img src="https://cecile-gaultier.fr/static/img/mmi-connexion.f5f7058.jpg" alt="Ressources" class="img-fluid my-4" style="max-width:300px">
            <p>Timothée Durand worked on the PDF Reader and the Text to Speech because the AVD couldn’t support it. He also worked on the connexion and the creation of special components (back-end). I worked on I18n, the front-end, the illustration and the student’s profile (photo, grades …).</p>
          </b-col>
        </b-row>
      </div>
      
      <div class="my-5">
        <router-link to="/proom">
          <h3 class="next">Projet suivant : Perfect Room <i class="far fa-play-circle ml-2"></i></h3>
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
  name: 'MMINotes',
  data () {
   return {
      donnees :[]
    }
  },

  created(){
        //lecture json directement avec Axios (json dans static)
        axios.get('static/mmi.json')
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

#mminotes{
  background-image: url("https://cecile-gaultier.fr/static/img/mmi-front.eac6ca9.jpg");
  content: "";
  background-repeat: no-repeat;
  margin-left: .5rem;
  margin: 0;
  background-position-y: top;
}

#mminotes2 h3{
  border-left: #af1f28 3px solid;
  padding-left: .5rem;
  margin-bottom: 3rem;
  font-size: 2.5rem;
  margin-top: 12rem;
}

</style>
