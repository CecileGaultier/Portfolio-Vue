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
          <h4>{{info.title}}</h4>
          <ul>
            <li v-for="pro in info.projects" :key="pro.id">{{pro.text}}</li>
          </ul>
        </div>

        <h4 class="mt-5">2020</h4>
        <ul>
          <li>- Clone Wars | After Effect</li>
          <li>- MMI | After Effect</li>
          <li>- Portfolio | Bootstrap web site</li>
          <li>- Incamp social network | Community management</li>
          <li>- Incamp strategic communication | Communication</li>
          <li>- Incamp SEO and concurrents analysis | SEO</li>
          <li>- Prototype MMI sweat | Illustrator</li>
          <li>- Incamp prior study | Project leader</li>
          <li>- Website Exercices | Gulp</li>
          <li>- Website Exercices | Less</li>
          <li>- Website Exercices | Stencil</li>
          <li>- Website Exercices | Webpack</li>
          <li>- Print Art Nouveau style | Illustrator, Clip Studio Paint</li>
          <li>- Print Mackintosh style | Illustrator</li>
          <li>- Print Bauhaus style | Illustrator</li>
          <li>- Print Roycroft style | Illustrator</li>
          <li>- Birthday Boy | Transmedia, Premiere Pro - Project leader</li>
          <li>- Muy Bad Reise | Virtual Escape Game Multilanguage</li>
          <li>- After University | Google Data Studio</li>
          <li>- Clean Walk | Communication</li>
          <li>- Incamp presentation | Communication, English</li>
          <li>- Print advertising Babysitter.de | Deutsch</li>
          <li>- Volkswagen Presentation | Deutsch</li>
          <li>- Hiking | Wordpress website</li>
          <li>- EA Presentation | English</li>
          <li>- Indiglu | Adobe XD, Photoshop, Indesign</li>
          <li>- Salem Witches | Wordpress website</li>
          <li>- Défi 24h | HTML,CSS website</li>
          <li>- Uncensored Library | Communication, Yoast</li>
          <li>- Draw your TP | Illustrator</li>
          <li>- Movie website | Php, JSON</li>
          <li>- Stretchy | Php, JSON, MySQL - Project leader</li>
          <li>- Sunset | Illustrator</li>
          <li>- Random words | Adobe XD</li>
          <li>- Gossip TV | Premiere, English</li>
          <li>- Inktober 2020</li>
          <li>- Fantasy Cupcakes | Adobe XD</li>
        </ul>

        <h4 class="mt-5">2019</h4>
        <ul>
          <li>- FLy New | HTML, CSS, JS</li>
          <li>- Plastic Pollution | English</li>
          <li>- Meeting illustration | Illustrator</li>
          <li>- Searchers interview | Premiere</li>
          <li>- Moon | Illustrator, JS</li>
          <li>- Escape Game | Python, Pixel</li>
          <li>- Inktober 2019</li>
          <li>- Mermay 2019</li>
          <li>- Infography DUT MMI</li>
          <li>- Infography IMAC</li>
          <li>- Озеро Байкал | Russian</li>
          <li>- САНКТ-ПЕТЕРБУРГ | Russian</li>
          <li>- Другой Гагарин | Russian</li>
          <li>- Illustration 01 | High School Newspaper</li>
          <li>- Illustration 02 | High School Newspaper</li>
          <li>- Illustration 03 | High School Newspaper</li>
          <li>- Leonardo Fibonacci Presentation</li>
        </ul>

        <h4 class="mt-5">2018</h4>
        <ul>
          <li>- Brighton Booklet | English</li>
          <li>- Le monde d’Ampère</li>
          <li>- Mermay 2019</li>
          <li>- Travel Book</li>
          <li>- Das Reisebuch</li>
          <li>- Factory act</li>
          <li>- Audio testimony of WWI</li>
          <li>- The Austro-Hungarian Empire</li>
          <li>- The RAF in the WW2</li>
          <li>- Trip to England</li>
          <li>- Пётр Ильич Чайковский</li>
        </ul>

        <h4 class="mt-5">2017</h4>
        <ul>
          <li>- Humanitarian Mission Leaflet</li>
          <li>- Labyrinth | Python</li>
          <li>- High School Video Presentation</li>
          <li>- Die Welt Paper</li>
          <li>- RAF WWII</li>
          <li>- Doping control</li>
        </ul>

        <h4 class="mt-5">2016</h4>
        <ul>
          <li>- Superheroes in art</li>
          <li>- Maliki’s Contest</li>
          <li>- The main presidents of the USA</li>
          <li>- The new school project</li>
          <li>- RAF WWII</li>
          <li>- The emigrate situation in Europe | IEP Science-Po Lille</li>
        </ul>

        <h4 class="mt-5">2015</h4>
        <ul>
          <li>- Comics in English</li>
          <li>- Comics in Deutsch</li>
          <li>- Radio Emission in Latin</li>
        </ul>

        <h4 class="mt-5">2014</h4>
        <ul>
          <li>- First Wordpress website</li>
          <li>- Articles Middle School Newspaper</li>
          <li>- Poems with Middle School Club</li>
        </ul>
      </div>
   </div>

   <footer class="text-center mt-5">
    <p><a href="#">Mentions légales</a> & <a href="#">Crédits</a>  | © 2020 cecile-gaultier.fr</p>
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
