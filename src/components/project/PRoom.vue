<template>
 <div>
    <div id="proom">
     <b-container>
       <b-row>
         <b-col cols="12" sm="5" class="intro my-5">
           <h1 class="my-5">Perfect Room</h1>
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
          <a href="https://perfect-room.cecile-gaultier.fr/" class="btn2 my-5">Link to Perfect Room</a>
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

     <b-row class="my-5">
      
     </b-row>

     <h3>Languages / Software</h3>
     <b-row class="my-3 ml-1">
        <p v-for="ls in info.ls" :key="ls.id" class="cat">{{ls.name}}</p>
     </b-row>

      <b-col cols="12" class="my-5">
        <img src="../../assets/proom-1.jpg" class="d-block w-100">         
      </b-col>       
    
    <div id="proom2">

      <b-row class="my-5">
        <b-col cols="12" sm="7">
          <h3>Reflection</h3>
          <p v-for="ref in info.reflection" :key="ref.id">{{ref.text}}</p>
        </b-col>
      </b-row>
      
      <div class="my-5">
        <h3>Resources</h3>
        <b-row >
          <b-col cols="12" sm="6" class="my-5">
            <img src="../../assets/cake.jpg" alt="Ressources" class="img-fluid my-4" style="max-width:350px">
            <p>The goal of the game is to find a secret code behind a canva. On the canva, there is the cake from Portal (video-games from Valve). This cake is very famous because it is known as “The cake is a lie”. It is a reference to Portal’s main character who was promised a cake but never got it until the end of Portal 2. It means that the canva is a fake and hides the secret vault. But when we open it, we find the real cake like the main character in Portal 2.</p>
          </b-col>
          <b-col cols="12" sm="6" class="my-5">
            <img src="../../assets/arcade.jpg" alt="Ressources" class="img-fluid my-4" style="max-width:350px">
            <p>One of the keys to find the real secret code is to click on the arcade. At first, it shows a game over screen with “Click on the button A to continue”. If the player clicks on the button A, it shows a screen with a high score. The high score is the key to open the vault.</p>
          </b-col>
          <b-col cols="12" sm="6" class="my-5">
            <img src="../../assets/clavier.jpg" alt="Ressources" class="img-fluid my-4" style="max-width:350px">
            <p>Every perfect room needs a computer with two screens and a keyboard. How else are we gonna play all night ?</p>
          </b-col>
          <b-col cols="12" sm="6" class="my-5">
            <img src="../../assets/canape.jpg" alt="Ressources" class="img-fluid my-4" style="max-width:350px">
            <p>This is just a regular couch … Or is it ?</p>
          </b-col>
        </b-row>
      </div>
      
      <div class="my-5">
        <router-link to="/fly">
          <h3 class="next">Projet suivant : Fly New <i class="far fa-play-circle ml-2"></i></h3>
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
  name: 'Proom',
  data () {
   return {
      donnees :[]
    }
  },

  created(){
        //lecture json directement avec Axios (json dans static)
        axios.get('static/proom.json')
        .then(function(response){
        //succès réponse
        console.log(response.data);
        this.donnees = response.data;
        }.bind(this)) //Zone isolée -> bind pour closure
        .catch(function(error){
        //erreur requete
        console.log(error)
        })
  },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

#proom{
  background-image: url("../../assets/proom-front.jpg");
  content: "";
  background-repeat: no-repeat;
  margin-left: .5rem;
  margin: 0;
  background-position-y: bottom;
}

#proom2 h3{
  border-left: #af1f28 3px solid;
  padding-left: .5rem;
  margin-bottom: 3rem;
  font-size: 2.5rem;
  margin-top: 12rem;
}


</style>
