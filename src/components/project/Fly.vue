<template>
 <div>
    <div id="fly">
     <b-container>
       <b-row>
         <b-col cols="12" sm="4" md="6" lg="4" class="intro my-5">
           <h1 class="my-5">Fly New</h1>
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

    <b-row class="my-5">
       <b-col cols="12" sm="6">
          <img src="https://cecile-gaultier.fr/static/img/fly-new2.487945e.jpg" alt="Mock-up" class="img-fluid my-4" style="max-width:350px">
        </b-col>
        <b-col cols="12" sm="6">
          <img src="https://cecile-gaultier.fr/static/img/fly-new3.9ef2a2e.jpg" alt="Mock-up" class="img-fluid my-4" style="max-width:350px">
        </b-col>
     </b-row>
      
    <div id="fly2">

      <b-row class="my-5">
        <b-col cols="12" sm="7" md="12" lg="7">
          <h3>Reflection</h3>
          <p v-for="ref in info.reflection" :key="ref.id">{{ref.text}}</p>
        </b-col>
      </b-row>
      
      <div class="my-5">
        <h3>Resources</h3>
        <b-row >
          <b-col cols="12">
            <img src="https://cecile-gaultier.fr/static/img/fly-color.b591dcb.jpg" alt="Ressources" class="img-fluid my-4" >
          </b-col>
          <b-col cols="12">
            <img src="https://cecile-gaultier.fr/static/img/fly-icon.6fcd688.jpg" alt="Ressources" class="img-fluid my-4" >
          </b-col>
        </b-row>
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
  name: 'Fly',
  data () {
   return {
      donnees :[]
    }
  },

  created(){
        //lecture json directement avec Axios (json dans static)
        axios.get('static/fly.json')
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

#fly{
  background-image: url("https://cecile-gaultier.fr/static/img/fly-new-front.a213c74.jpg");
  content: "";
  background-repeat: no-repeat;
  margin-left: .5rem;
  margin: 0;
  background-position-y: top;
  background-size: 100%;
}

#fly2 h3{
  border-left: #af1f28 3px solid;
  padding-left: .5rem;
  margin-bottom: 3rem;
  font-size: 2.5rem;
  margin-top: 12rem;
}


</style>
