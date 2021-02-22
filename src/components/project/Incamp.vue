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

     <b-row>
        <b-col cols="12" sm="3" >
          <h3>Languages / Software</h3>
          <b-row class="ml-1">
            <p v-for="ls in info.ls" :key="ls.id" class="cat">{{ls.name}}</p>
          </b-row>
       </b-col>
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
                    <img src="../../assets/incamp-carrousel-1.jpg" class="d-block w-100">         
                </div>
                <div class="carousel-item ">
                    <img src="../../assets/incamp-carrousel-2.jpg" class="d-block w-100">
                </div>
                <div class="carousel-item ">
                    <img src="../../assets/incamp-carrousel-3.jpg" class="d-block w-100">
                </div>
               <div class="carousel-item ">
                    <img src="../../assets/incamp-carrousel-4.jpg" class="d-block w-100">
                </div>
                <div class="carousel-item ">
                    <img src="../../assets/incamp-carrousel-5.jpg" class="d-block w-100">
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
              <b-col cols="12" sm="6" v-for="res in info.ressources" :key="res.id" class="my-3">
                <img :src=res.img alt="Ressources" class="img-fluid" style="max-width:300px">
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
        })
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
}


</style>
