<template>
 <div>
   <b-container>
       <b-row>
         <b-col cols="12" sm="4" md="6" lg="4" class=" my-5">
           <h1 class="mt-5">About</h1>
         </b-col>
       </b-row>
     </b-container>
   <div  v-for="info in donnees" :key="info.id">
      <div>
        <b-container v-for="about in info.about" :key="about.id" class="cont">
          <b-row class="my-5">  
            <b-col cols="12" sm="7" md="12" lg="7">
              <b-col cols="12" sm="9" md="12" lg="9"  class="part">
                  <h2>{{about.title}}</h2>
                  <p v-for="pr in about.presentation" :key="pr.id">{{pr.text}}</p>
              </b-col>
              
            </b-col>

            <b-col cols="12" sm="5" class="text-center my-4" >
                 <img src="../assets/self.svg" alt="Self illustration" class="img-fluid">
              </b-col>
          </b-row>
        </b-container>

        <b-container v-for="now in info.now" :key="now.id" class="cont">
          <b-row class="my-5">  
            <b-col cols="12" sm="7" md="12" lg="7">
              <b-col cols="12" sm="9" md="12" lg="9"  class="part">
                  <h2>{{now.title}}</h2>
                  <p v-for="pr in now.presentation" :key="pr.id" class="mb-5">{{pr.text}}</p>
                  <router-link to="/contact">
                    <a href="#" class="btn2 my-5">Contact me now</a>
                  </router-link>
              </b-col>
              
            </b-col>

            <b-col cols="12" sm="5" class="text-center my-4" >
                 <img src="../assets/about-now.svg" alt="Self illustration" class="img-fluid">
              </b-col>
          </b-row>
        </b-container>

        <b-container v-for="skill in info.skill" :key="skill.id" class="cont">
          <b-row class="my-5 ml-1">  
            <b-col cols="12" sm="7" md="12" lg="7"  class="part" v-for="pr in skill.presentation" :key="pr.id">
                <h2><i :class="pr.icon"></i>{{pr.title}} </h2>
                <h4 class="mt-5">Notions : </h4>
                <p v-for="notion in pr.notion" :key="notion.id">{{notion.text}}</p>
                <div class="my-5">
                  <h4>Tools : </h4>
                  <p v-for="tool in pr.tool" :key="tool.id" class="cat">{{tool.text}}</p>
                </div>
            </b-col>
          </b-row>
        </b-container>
      </div>
    </div>
    

     <footer class="text-center">
      <router-link to="/terms">
        <p>Terms & Conditions & Policy & Credit  | © 2021 cecile-gaultier.fr</p>
      </router-link>
    </footer>
 </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'About',
  data () {
    return {
      donnees :[]
    }
  },

  created(){
        //lecture json directement avec Axios (json dans static)
        axios.get('static/about.json')
        .then(function(response){
        //succès réponse
        console.log(response.data);
        this.donnees = response.data;
        }.bind(this)) //Zone isolée -> bind pour closure
        .catch(function(error){
        //erreur requete
        console.log(error)
        })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.part{
  margin-bottom: 7rem;
}

.cont{
  margin-bottom: 10rem;
}

.cat{
  display:inline-block; 
}

h4{
  color: black;
}


</style>
