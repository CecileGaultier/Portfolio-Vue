<template>
 <div>
   <div class="container">
      <h1 class="my-5">All my projects</h1>
      <h3>Brief</h3>
      <p class="brief mb-5">
        Here is a list of all my projects over the years.
      </p>

      <div id="list" v-for="info in donnees" :key="info.id">
        <div>
          <h4 class="mt-5">{{info.title}}</h4>
          <ul>
            <li v-for="pro in info.projects" :key="pro.id">{{pro.text}}</li>
          </ul>
          <p><b>Total : </b>{{info.projects.length}}</p>
        </div>
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
export default {
  name: 'All',
  data () {
   return {
      donnees :[]
    }
  },

  created(){
        //lecture json directement avec Axios (json dans static)
        axios.get('static/all.json')
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

.brief{
  border-bottom: #af1f28 4px solid;
  padding-bottom: 1rem;
  margin-bottom: 1rem;
}
</style>
