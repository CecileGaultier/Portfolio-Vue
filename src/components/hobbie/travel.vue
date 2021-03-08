<template>
 <div>
    <div id="travel">
     <b-container>
       <b-row>
         <b-col cols="12" sm="4" md="6" lg="4" class="intro my-5">
           <h1 class="my-5">Travel</h1>
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
          <b-col cols="12" sm="7" md="12" lg="7">
          <h3>Brief</h3>
          <p v-for="ref in info.reflection" :key="ref.id">{{ref.text}}</p> 
       </b-col>
     </b-row>


    <div style="height: 500px; width: 100%" class="my-5">
    <div style="height: 200px overflow: auto;">
    </div>
    <l-map
      v-if="showMap"
      :zoom="zoom"
      :center="center"
      :options="mapOptions"
      @update:center="centerUpdate"
      @update:zoom="zoomUpdate"
    >
      <l-tile-layer
        :url="url"
        :attribution="attribution"
      />
      <l-marker
        v-for="country in countries"
        :key="country.name"
        :lat-lng="country"
      >
        <l-popup :content="country.name" />
      </l-marker>
    </l-map>
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
import { latLng } from "leaflet";
import { LMap, LTileLayer, LMarker, LPopup, LTooltip } from "vue2-leaflet";

export default {
  name: 'Travel',
  components: {
    LMap,
    LTileLayer,
    LMarker,
    LPopup,
    LTooltip
  },
  data () {
   return {
      donnees :[],
      zoom: 2,
      center: latLng(29.69, 11.95),
      url: 'https://stamen-tiles-{s}.a.ssl.fastly.net/toner/{z}/{x}/{y}.png',
      attribution:
        '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      withPopup: latLng(42.5503230086929, 12.513024789287384),
      countries: [
        { name: "München", lng: 10.542709119985323, lat:50.491905393028006 },
        { name: "Roma", lng: 12.513024789287384, lat: 42.5503230086929 },
        { name: "Sydney", lng: 151.09119053104038, lat: -31.61490660765052 },
        { name: "Saint-Petersburg", lng: 30.422326325213316, lat: 60.52868532179961 }, 
        { name: "London", lng: -0.19182604913962495 , lat: 52.07712615295344}, 
        { name: "Dublin", lng: -6.271687842886099, lat: 53.57072536783069 }, 
        { name: "New-York", lng: -75.20968428562654, lat: 42.87611719793301 }, 
        { name: "Brusselles", lng: 4.386155889910565, lat: 50.97526320078684 }, 
      ],
      currentZoom: 11.5,
      currentCenter: latLng(0, 0),
      mapOptions: {
        zoomSnap: 0.5
      },
      showMap: true
    }
  },

  created(){
        //lecture json directement avec Axios (json dans static)
        axios.get('static/travel.json')
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

  methods: {
   zoomUpdate(zoom) {
      this.currentZoom = zoom;
    },
    centerUpdate(center) {
      this.currentCenter = center;
    }
 },


 mounted() {
   this.setupLeafletMap();
 },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

#travel{
  background-image: url("https://cecile-gaultier.fr/static/img/travel-front.7934c59.jpg");
  content: "";
  background-repeat: no-repeat;
  margin-left: .5rem;
  margin: 0;
  background-position-y: top;
}

#travel2 h3{
  border-left: #af1f28 3px solid;
  padding-left: .5rem;
  margin-bottom: 3rem;
  font-size: 2.5rem;
  margin-top: 8rem;
}

#mapContainer {
 width: 80vw;
 height: 100vh;
}

@media only screen and (max-width:576px){
  #travel{
      background-position-x: center;
  }
}

@media only screen and (max-width:768px){
  #travel{
      background-position-x: center;
  }
}
</style>
