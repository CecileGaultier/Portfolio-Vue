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

      <b-col cols="12">
        <div class="carousel" data-ride="carousel" id="monCarousel" data-interval="1500">
            <ol class="carousel-indicators">
                <li data-target="#monCarousel" data-slide-to="0" class="active"></li>
                <li data-target="#monCarousel" data-slide-to="1" class=""></li>
                <li data-target="#monCarousel" data-slide-to="2" class=""></li>
                <li data-target="#monCarousel" data-slide-to="3" class=""></li>
            </ol>
            
            <div class="carousel-inner">  
                <div class="carousel-item active">
                    <img src="../../assets/proom-1.jpg" class="d-block w-100">         
                </div>
                <div class="carousel-item ">
                    <img src="../../assets/proom-2.jpg" class="d-block w-100">
                </div>
                <div class="carousel-item ">
                    <img src="../../assets/proom-3.jpg" class="d-block w-100">
                </div>
               <div class="carousel-item ">
                    <img src="../../assets/proom-4.jpg" class="d-block w-100">
                </div>
            </div>

            <a href="#monCarousel"
                class="carousel-control-prev"
                data-slide="prev">
                <span class="carousel-control-prev-icon"></span>
            </a>
            <a href="#monCarousel"
                class="carousel-control-next"
                data-slide="next">
                <span class="carousel-control-next-icon"></span>
            </a>
        </div>
      </b-col>       
    
    <div id="proom2">

      <b-row class="my-5">
        <b-col cols="12" sm="7">
          <h3>Reflection</h3>
          <p v-for="ref in info.reflection" :key="ref.id">{{ref.text}}</p>
        </b-col>
      </b-row>
      
      <div class="my-5">
        <h3>Ressources</h3>
        <b-row >
          <b-col cols="12" sm="6">
            <img src="../../assets/cake.jpg" alt="Ressources" class="img-fluid my-4" style="max-width:400px">
          </b-col>
          <b-col cols="12" sm="6">
            <img src="../../assets/clavier.jpg" alt="Ressources" class="img-fluid my-4" style="max-width:400px">
          </b-col>
          <b-col cols="12" sm="6">
            <img src="../../assets/canape.jpg" alt="Ressources" class="img-fluid my-4" style="max-width:400px">
          </b-col>
          <b-col cols="12" sm="6">
            <img src="../../assets/arcade.jpg" alt="Ressources" class="img-fluid my-4" style="max-width:400px">
          </b-col>
        </b-row>
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
  name: 'Proom',
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

.carousel-inner{
  margin-top: 10rem;
}


</style>
