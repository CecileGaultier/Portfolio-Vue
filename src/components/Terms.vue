<template>
 <div>
   <b-container>
      <b-row>
        <b-col cols="12" sm="6" class=" my-5">
          <h1 class="mt-5">Terms and Conditions</h1>
        </b-col>
      </b-row>
    </b-container>
   <div>
        <b-container class="cont">
          <b-row class="my-5">  
            <b-col cols="12" sm="10" md="12" lg="10">
              <b-col cols="12" sm="10" md="12" lg="10"  class="part">
                  <h2>Terms</h2>
                  <p>By accessing the website at <a href="http://cecile-gaultier.fr">http://cecile-gaultier.fr</a>, you are agreeing to be bound by these terms of service, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws. If you do not agree with any of these terms, you are prohibited from using or accessing this site. The materials contained in this website are protected by applicable copyright and trademark law.</p>
              </b-col>
              <b-col cols="12" sm="10" md="12" lg="10"  class="part">
                  <h2>Use license</h2>
                  <p>Permission is granted to temporarily download one copy of the materials (information or software) on Cecile Gaultier's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:</p>
                  <ul>
                    <li>- modify or copy the materials</li>
                    <li>- use the materials for any commercial purpose, or for any public display (commercial or non-commercial)</li>
                    <li>- attempt to decompile or reverse engineer any software contained on Cecile Gaultier's website</li>
                    <li>- remove any copyright or other proprietary notations from the materials</li>
                    <li>- transfer the materials to another person or "mirror" the materials on any other server</li>
                  </ul>
                  <p>This license shall automatically terminate if you violate any of these restrictions and may be terminated by Cecile Gaultier at any time. Upon terminating your viewing of these materials or upon the termination of this license, you must destroy any downloaded materials in your possession whether in electronic or printed format.</p>
                  <p>Cecile Gaultier does not warrant or make any representations concerning the accuracy, likely results, or reliability of the use of the materials on its website or otherwise relating to such materials or on any sites linked to this site.</p>
              </b-col>
              <b-col cols="12" sm="10" md="12" lg="10"  class="part">
                  <h2>Accuracy of materials</h2>
                  <p>The materials appearing on Cecile Gaultier's website could include technical, typographical, or photographic errors. Cecile Gaultier's website does not warrant that any of the materials on its website are accurate, complete or current. Cecile Gaultier's website may make changes to the materials contained on its website at any time without notice. However Cecile Gaultier's website does not make any commitment to update the materials.</p>
              </b-col>
              <b-col cols="12" sm="10" md="12" lg="10"  class="part">
                  <h2>Links</h2>
                  <p>Cecile Gaultier's website has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by Cecile Gaultier of the site. Use of any such linked website is at the user's own risk.</p>
              </b-col>
               <b-col cols="12" sm="10" md="12" lg="10"  class="part">
                  <h2>Modifications</h2>
                  <p>Cecile Gaultier's website may revise these terms of service for its website at any time without notice. By using this website you are agreeing to be bound by the then current version of these terms of service.</p>
              </b-col>
            </b-col>
          </b-row>
        </b-container>
    </div>


    <b-container>
      <b-row>
        <b-col cols="12" sm="6" class=" my-3">
          <h1 class="mt-5">Privacy</h1>
        </b-col>
      </b-row>
    </b-container>

     <div>
        <b-container class="cont">
          <b-row class="my-5">  
            <b-col cols="12" sm="10" md="12" lg="10">
              <b-col cols="12" sm="10" md="12" lg="10"  class="part">
                  <p>I only retain collected information for as long as necessary to provide you with your requested service. What data I store, I’ll protect within commercially acceptable means to prevent loss and theft, as well as unauthorised access, disclosure, copying, use or modification.</p>
                  <p>I don’t share any personally identifying information publicly or with third-parties, except when required to by law.</p>
                  <p>My website may link to external sites that are not operated by me. Please be aware that I have no control over the content and practices of these sites, and cannot accept responsibility or liability for their respective privacy policies.</p>
                  <p>You are free to refuse my request for your personal information, with the understanding that I may be unable to provide you with some of your desired services.</p>
                  <p>Your continued use of my website will be regarded as acceptance of my practices around privacy and personal information. If you have any questions about how I handle user data and personal information, feel free to contact me.</p>
                  <p class="my-5">This policy is effective as of 01 March 2021.</p>
              </b-col>
            </b-col>
          </b-row>
        </b-container>
    </div>


    <b-container>
      <b-row>
        <b-col cols="12" sm="6" class=" my-3">
          <h1 class="mt-5">Credit</h1>
        </b-col>
      </b-row>
    </b-container>

     <div>
        <b-container class="cont">
          <b-row class="my-5">  
            <b-col cols="12" sm="10">
              <b-col cols="12" sm="10"  class="part">
                  <p>Dance photos : Lucas Schneider</p>
                  <p>MMI Notes : template Ionic Super Blank Template (Modified) and Undraw</p>
                  <p>Francis Ford Coppola : Wikipedia, Google images and Undraw</p>
                  <p>Incamp : Manon Jeanpierre, Ambre Geiss and myself</p>
                  <p>Perfect Room : Google Images</p>
                  <p>Fly New : Google Images</p>
                  <p>DWP Print : DWP Paris</p>
                  <p>Illustration n°2 About : Undraw</p>
                  <p>Contact Background-photo : Julian Hochgesang</p>
                  <p>Icons : Fontawesome</p>
              </b-col>
            </b-col>
          </b-row>
        </b-container>
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



</style>
