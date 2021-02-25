<template>
 <div>
    <div id="danse">
     <b-container>
       <b-row>
         <b-col cols="12" sm="5" class="intro my-5">
           <h1 class="my-5">Dance</h1>
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
          <b-col cols="12" sm="6">
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
    
    <div id="danse2">

      <b-row class="my-5">
        <b-col cols="12" sm="7">
          <h3>Million Eyes</h3>
          <img src="../../assets/danse3.jpg" alt="Project Same Through Years" class="img-fluid my-4">
          <p v-for="ref in info.reflection" :key="ref.id">{{ref.text}}</p> 
        </b-col>
      </b-row>

      <b-row class="my-5">
        <b-col cols="12" sm="7">
          <h3>DWP Paris - International Internship</h3>
          <img src="../../assets/dwp-paris.jpg" alt="Project Clone Wars" class="img-fluid my-4">
          <p v-for="ref in info.reflection2" :key="ref.id">{{ref.text}}</p>
        </b-col>
      </b-row>
           
    </div>

   </b-container>

   <footer class="text-center mt-5">
    <p><a href="#">Mentions légales</a> & <a href="#">Crédits</a>  | © 2020 cecile-gaultier.fr</p>
  </footer>

 </div>
</template>

<script>
export default {
  name: 'Danse',
  data () {
   return {
      donnees :[]
    }
  },

  created(){
        //lecture json directement avec Axios (json dans static)
        axios.get('static/danse.json')
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

#danse{
  background-image: url("../../assets/danse-front.jpg");
  content: "";
  background-repeat: no-repeat;
  margin-left: .5rem;
  margin: 0;
  background-position-y: top;
}

#danse2 h3{
  border-left: #af1f28 3px solid;
  padding-left: .5rem;
  margin-bottom: 3rem;
  font-size: 2.5rem;
  margin-top: 8rem;
}

</style>
