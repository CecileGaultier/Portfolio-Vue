<template>
 <div>
   <div id="contact">
     <b-container>
       <b-row>
         <b-col cols="12" sm="4" md="6" lg="4" class="intro my-5">
           <h1 class="my-5">Contact</h1>
           <div class="my-5">
             <p class="my-5">
               You will find down below my coordinates and you can download my resumes , certifications and attestations.
             </p>
             <a href="mailto:gaulph@gmail.com" class="btn my-5">Send me an email now</a>
           </div>
         </b-col>
       </b-row>
     </b-container>
   </div>
   
   <div  v-for="info in donnees" :key="info.id">
      <div class="case" v-for="mail in info.mail" :key="mail.id">
        <b-container>
          <b-row class="my-5">  
            <b-col cols="12" sm="7">
              <b-col cols="12" sm="9">
                  <h3>{{mail.subtitle}}</h3>
                  <h2>{{mail.title}}</h2>
                  <p>{{mail.text}}</p>
              </b-col>
              
            </b-col>

            <b-col cols="12" sm="5" class="text-center my-4" >
                 <img :src=mail.icon :alt=mail.alt class="img-fluid">

                <div class="my-3">
                  <p>{{mail.info}}</p>
                </div>

              </b-col>
          </b-row>
        </b-container>
      </div>

      <div class="case">
        <b-container>
          <b-row class="my-5">  
            <b-col cols="12" sm="5">
                  <h3>Links</h3>
                  <h2>Social Network</h2> 
                  <div id="links">

                    <a href="https://www.linkedin.com/in/c%C3%A9cile-gaultier-8967a319a/">
                      <svg xmlns="http://www.w3.org/2000/svg" width="122" height="122" viewBox="0 0 122 122">
                        <path d="M113.286,2.25H8.687A8.752,8.752,0,0,0,0,11.046V115.454a8.752,8.752,0,0,0,8.687,8.8h104.6a8.775,8.775,0,0,0,8.714-8.8V11.046A8.775,8.775,0,0,0,113.286,2.25ZM36.872,106.821H18.79V48.6H36.9v58.222ZM27.831,40.647A10.484,10.484,0,1,1,38.316,30.163,10.489,10.489,0,0,1,27.831,40.647Zm76.822,66.174H86.571V78.5c0-6.754-.136-15.441-9.4-15.441-9.422,0-10.866,7.353-10.866,14.95v28.812H48.228V48.6H65.575v7.952h.245c2.424-4.575,8.333-9.4,17.129-9.4,18.3,0,21.7,12.064,21.7,27.75Z" transform="translate(0 -2.25)" fill="#32302f"/>
                      </svg>
                    </a>

                    <a href="https://github.com/CecileGaultier">
                      <svg xmlns="http://www.w3.org/2000/svg" width="122" height="122" viewBox="0 0 122 122">
                        <path d="M108.929,2.25H13.071A13.075,13.075,0,0,0,0,15.321v95.857A13.075,13.075,0,0,0,13.071,124.25h95.857A13.075,13.075,0,0,0,122,111.179V15.321A13.075,13.075,0,0,0,108.929,2.25ZM75.515,106.74c-2.288.408-3.132-1.008-3.132-2.179,0-1.471.054-8.987.054-15.059,0-4.248-1.416-6.944-3.077-8.36,10.076-1.117,20.7-2.505,20.7-19.907,0-4.956-1.77-7.434-4.657-10.621a17.032,17.032,0,0,0-.463-12.254c-3.785-1.171-12.445,4.875-12.445,4.875a42.84,42.84,0,0,0-22.657,0s-8.66-6.046-12.445-4.875a16.9,16.9,0,0,0-.463,12.254c-2.887,3.186-4.248,5.664-4.248,10.621,0,17.32,10.158,18.79,20.233,19.907a9.87,9.87,0,0,0-2.887,6.073c-2.587,1.171-9.2,3.186-13.153-3.785a9.487,9.487,0,0,0-6.944-4.657c-4.412-.054-.3,2.778-.3,2.778,2.941,1.362,5.011,6.59,5.011,6.59C37.281,96.228,49.917,93.5,49.917,93.5c0,3.785.054,9.94.054,11.056,0,1.171-.817,2.587-3.132,2.179A45.179,45.179,0,0,1,16.285,63.631c0-25,19.117-43.98,44.116-43.98s45.26,18.981,45.26,43.98C105.688,83.62,93.488,100.749,75.515,106.74ZM48.8,90.1c-.517.109-1.008-.109-1.062-.463-.054-.408.3-.762.817-.871.517-.054,1.008.163,1.062.517C49.7,89.638,49.345,89.992,48.8,90.1Zm-2.587-.245c0,.354-.408.654-.953.654-.6.054-1.008-.245-1.008-.654,0-.354.408-.654.953-.654C45.723,89.148,46.213,89.447,46.213,89.856Zm-3.731-.3c-.109.354-.654.517-1.117.354-.517-.109-.871-.517-.762-.871s.654-.517,1.117-.408C42.264,88.794,42.618,89.2,42.482,89.556Zm-3.35-1.471c-.245.3-.762.245-1.171-.163-.408-.354-.517-.871-.245-1.117.245-.3.762-.245,1.171.163C39.242,87.323,39.378,87.868,39.133,88.086Zm-2.478-2.478c-.245.163-.708,0-1.008-.408s-.3-.871,0-1.062c.3-.245.762-.054,1.008.354a.8.8,0,0,1,0,1.117Zm-1.77-2.642c-.245.245-.654.109-.953-.163-.3-.354-.354-.762-.109-.953.245-.245.654-.109.953.163C35.075,82.367,35.129,82.775,34.884,82.966ZM33.06,80.951a.513.513,0,0,1-.762.109c-.354-.163-.517-.463-.408-.708a.641.641,0,0,1,.762-.109C33.005,80.433,33.169,80.733,33.06,80.951Z" transform="translate(0 -2.25)" fill="#32302f"/>
                      </svg>
                    </a>


                    <a href="https://www.facebook.com/profile.php?id=100009892541662">
                      <svg xmlns="http://www.w3.org/2000/svg" width="122" height="122" viewBox="0 0 122 122">
                        <path d="M119.765,4.5H11.235A6.739,6.739,0,0,0,4.5,11.235V119.765a6.739,6.739,0,0,0,6.735,6.735H65.5V78.208H50.917V60.417H65.5V47.264c0-15.758,10.929-24.336,25-24.336,6.735,0,13.979.508,15.663.731V40.115H94.952c-7.657,0-9.118,3.622-9.118,8.959V60.417H104.07l-2.383,17.792H85.833V126.5h33.931a6.739,6.739,0,0,0,6.735-6.735V11.235A6.739,6.739,0,0,0,119.765,4.5Z" transform="translate(-4.5 -4.5)" fill="#32302f"/>
                      </svg>
                    </a>


                    <a href="https://www.pinterest.fr/gaulph/">
                      <svg xmlns="http://www.w3.org/2000/svg" width="119.937" height="119.937" viewBox="0 0 119.937 119.937">
                        <path d="M119.937,15.1v94.236a12.854,12.854,0,0,1-12.85,12.85H41.335c2.624-4.391,6-10.709,7.335-15.876.8-3.079,4.1-15.635,4.1-15.635,2.142,4.1,8.406,7.55,15.072,7.55,19.838,0,34.107-18.231,34.107-40.88,0-21.712-17.723-37.962-40.532-37.962-28.378,0-43.423,19.035-43.423,39.783,0,9.638,5.14,21.631,13.332,25.46,1.258.589,1.9.321,2.2-.883.214-.91,1.339-5.381,1.82-7.442a1.939,1.939,0,0,0-.455-1.874c-2.7-3.293-4.9-9.343-4.9-14.992,0-14.51,10.976-28.538,29.69-28.538,16.143,0,27.468,11,27.468,26.745,0,17.776-8.968,30.091-20.668,30.091-6.452,0-11.271-5.328-9.745-11.887,1.847-7.817,5.435-16.25,5.435-21.9,0-14.189-20.213-12.235-20.213,6.693a24.022,24.022,0,0,0,1.954,9.772c-8.406,35.553-9.665,36.008-7.924,51.562l.589.214H12.85A12.854,12.854,0,0,1,0,109.336V15.1A12.854,12.854,0,0,1,12.85,2.25h94.236A12.854,12.854,0,0,1,119.937,15.1Z" transform="translate(0 -2.25)" fill="#32302f"/>
                      </svg>   
                    </a>
                    

                    <a href="https://dribbble.com/skyla_thann">
                      <svg xmlns="http://www.w3.org/2000/svg" width="119.937" height="119.937" viewBox="0 0 119.937 119.937">
                        <path d="M24.148,54.776a36.7,36.7,0,0,1,20.266-25.62A236.157,236.157,0,0,1,57.987,50.3a136.381,136.381,0,0,1-33.839,4.471ZM84.223,34.911A36.457,36.457,0,0,0,51.4,26.719,196.923,196.923,0,0,1,65.055,48.136C78.066,43.237,83.554,35.848,84.223,34.911ZM37.507,91.132A36.519,36.519,0,0,0,74.264,95.95a151.044,151.044,0,0,0-7.817-27.735C51.7,73.248,41.335,83.314,37.507,91.132Zm26.45-28.967c-.91-2.088-1.928-4.15-2.972-6.211A133.97,133.97,0,0,1,23.4,61.147c0,.375-.027.75-.027,1.124a36.521,36.521,0,0,0,9.4,24.469C38.712,76.595,50.732,65.886,63.957,62.165ZM73.3,66.528A156.444,156.444,0,0,1,80.395,92.6,36.626,36.626,0,0,0,96.083,68.081,53.383,53.383,0,0,0,73.3,66.528ZM67.866,53.571c1.285,2.624,2.222,4.765,3.213,7.175a85.269,85.269,0,0,1,25.487,1.178,36.238,36.238,0,0,0-8.272-22.783C87.516,40.185,81.386,48.029,67.866,53.571ZM119.937,15.1v94.236a12.854,12.854,0,0,1-12.85,12.85H12.85A12.854,12.854,0,0,1,0,109.336V15.1A12.854,12.854,0,0,1,12.85,2.25h94.236A12.854,12.854,0,0,1,119.937,15.1ZM102.8,62.218a42.834,42.834,0,1,0-42.834,42.834A42.891,42.891,0,0,0,102.8,62.218Z" transform="translate(0 -2.25)" fill="#32302f"/>
                      </svg>
                    </a>
                    

                    <a href="https://www.instagram.com/cecile_gaultier/">
                      <svg xmlns="http://www.w3.org/2000/svg" width="119.963" height="119.936" viewBox="0 0 119.963 119.936">
                        <path d="M59.99,31.456a30.75,30.75,0,1,0,30.75,30.75A30.7,30.7,0,0,0,59.99,31.456Zm0,50.742A19.992,19.992,0,1,1,79.981,62.206,20.028,20.028,0,0,1,59.99,82.2Zm39.18-52A7.172,7.172,0,1,1,92,23.025,7.156,7.156,0,0,1,99.17,30.2Zm20.366,7.279c-.455-9.608-2.649-18.118-9.688-25.13-7.012-7.012-15.522-9.206-25.13-9.688-9.9-.562-39.582-.562-49.484,0-9.581.455-18.091,2.649-25.13,9.661S.9,27.843.416,37.451c-.562,9.9-.562,39.582,0,49.484.455,9.608,2.649,18.118,9.688,25.13s15.522,9.206,25.13,9.688c9.9.562,39.582.562,49.484,0,9.608-.455,18.118-2.649,25.13-9.688,7.012-7.012,9.206-15.522,9.688-25.13.562-9.9.562-39.555,0-49.457ZM106.744,97.559a20.24,20.24,0,0,1-11.4,11.4c-7.895,3.131-26.629,2.409-35.353,2.409s-27.485.7-35.353-2.409a20.24,20.24,0,0,1-11.4-11.4C10.1,89.664,10.827,70.93,10.827,62.206s-.7-27.485,2.409-35.353a20.24,20.24,0,0,1,11.4-11.4c7.895-3.131,26.629-2.409,35.353-2.409s27.485-.7,35.353,2.409a20.24,20.24,0,0,1,11.4,11.4c3.131,7.895,2.409,26.629,2.409,35.353S109.875,89.691,106.744,97.559Z" transform="translate(0.005 -2.238)" fill="#32302f"/>
                      </svg>
                    </a>
                    
                  </div>
                  
            </b-col>

          </b-row>
        </b-container>
      </div>

      
      <div class="case">
        <b-container>
          <b-row class="my-5">  
            <b-col cols="12" sm="7">
              <b-col cols="12" sm="9">
                  <h3>Download</h3>
                  <h2>Documents</h2>
                  <div class="text-center"> 
                    <div class="download my-3">
                        <a href="https://cecile-gaultier.fr/static/img/download/CV-Design.jpg">Resume </a>
                    </div>
                    <div class="download my-3">
                        <a href="https://cecile-gaultier.fr/static/img/download/rgpd.jpg">RGPD - Attestation</a>
                    </div>
                    <div class="download my-3">
                        <a href="https://cecile-gaultier.fr/static/img/download/cambridge.jpg">Cambridge - Certification</a>
                    </div>
                  </div>
              </b-col>         
            </b-col>

            <b-col cols="12" sm="5" class="text-center my-4" >
              <img src="https://cecile-gaultier.fr/static/img/dream.8a1f236.svg" alt="Illustration enfant" class="img-fluid">
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
  name: 'Contact',
  data () {
    return {
      donnees :[]
    }
  },

  created(){
        //lecture json directement avec Axios (json dans static)
        axios.get('static/contact.json')
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

  // methods: {
  //   forceFileDownload(response, title) {
  //     console.log(title)
  //     const url = window.URL.createObjectURL(new Blob([response.data]))
  //     const link = document.createElement('a')
  //     link.href = url
  //     link.setAttribute('download', title)
  //     document.body.appendChild(link)
  //     link.click()
  //   },
  //   downloadWithAxios(url, title) {
  //     axios({
  //       method: 'get',
  //       url,
  //       responseType: 'arraybuffer',
  //     })
  //       .then((response) => {
  //         this.forceFileDownload(response, title)
  //       })
  //       .catch(() => console.log('error occured'))
  //   }
  //   }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

#contact{
  background-image: url("https://cecile-gaultier.fr/static/img/contact.752441c.jpg");
  content: "";
  background-repeat: no-repeat;
  margin-left: .5rem;
  margin: 0;
  background-position-y: center;
}

#links svg{
  width: 70px;
}

.download{
  border: 2px solid #1f1f1f;
  cursor:pointer;
}

.download p{
  font-size: 1.4rem;
}

@media only screen and (max-width:576px){
  #contact{
      background-position-x: right;
  }
}
</style>
