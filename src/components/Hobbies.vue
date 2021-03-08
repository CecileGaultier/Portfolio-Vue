<template>
 <div>    
   <div id="hobbies">
     <b-container>
       <b-row>
         <b-col cols="12" sm="4" md="6" lg="4" class="intro my-5">
           <h1 class="my-5">Hobbies</h1>
           <div class="my-5">
             <p>
               Discover all my passions ! 
             </p>
             <p>
               My hobbies are really important for me because I can explore and learn different subjects. They are often my inspiration for my work.
             </p>
             <div class="my-5"></div>
           </div>
         </b-col>
       </b-row>
     </b-container>
   </div>
    <!-- <div  v-for="info in donnees" :key="info.id">
      <div class="case" v-for="project in info.projects" :key="project.id">
        <b-container>
          <b-row class="my-5">  
            <b-col cols="12" sm="7">
              <b-col cols="12" sm="9">
                  <h3>{{project.subtitle}}</h3>
                  <h2>{{project.title}}</h2>
                  <div class="my-5">
                    <b-row class="ml-1">
                        <p class="cat" v-for="cat in project.cat" :key="cat.id">{{cat.name}}</p>
                    </b-row>
                    <p>{{project.text}}</p>
                    <div class="my-5">
                      <router-link :to="project.link">
                        <a href="#" class="btn2">Discover</a>
                      </router-link>
                    </div>
                    
                  </div>
              </b-col>
              
            </b-col>

            <b-col cols="12" sm="5" class="text-center" >
                 <img src="../assets/coppola2.jpg" :alt=project.alt class="img-fluid" style="max-width:250px">
            </b-col>
          </b-row>
        </b-container>
      </div>
    </div> -->

  <div class="case">
    <b-container>
      <b-row class="my-5">  
        <b-col cols="12" sm="7">
          <b-col cols="12" sm="9">
              <h3>Science-fiction, Dystopie,Surnatural …</h3>
              <h2>Cinema</h2>
              <div class="my-5">
                <p>
                  Movies are one of my main passions. They allowed the viewers to discover a new universe and still, they ask questions about our society nowadays.
                </p>
                <div class="my-5">
                  <router-link to="/movie">
                    <a href="#" class="btn2">Discover</a>
                  </router-link>
                </div>
                
              </div>
          </b-col>
          
        </b-col>

        <b-col cols="12" sm="5" class="text-center" >
              <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzNDEuMDYzIiBoZWlnaHQ9IjM0My43MjMiIHZpZXdCb3g9IjAgMCAzNDEuMDYzIDM0My43MjMiPjxlbGxpcHNlIGN4PSIxNzAuNTMyIiBjeT0iMjQuMTU5IiByeD0iMTcwLjUzMiIgcnk9IjI0LjE1OSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCAyOTUuNDA2KSIgZmlsbD0iI2Q2ZDZkNiIvPjxwYXRoIGQ9Ik0zMzQuNyw1Ny4zNSwzMDAsMTQ1LjY2NnMxMy44NzgsMzEuNTQxLDYxLjgyMSwxMy44NzhMMzcxLjkxNCw3OC44UzM2NC45NzUsMzYuNTMzLDMzNC43LDU3LjM1WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTI1NS4yMTEgNzEuMzM5KSIgZmlsbD0iIzFmMWYxZiIvPjxwYXRoIGQ9Ik0zMTguMjI2LDUyLjI1NHMtMTcuNjYzLDE0Ni45ODMtMTMuODc4LDE4Ni43MjVjMy43ODUsMzkuMTExLDE2NS4yNzcsNDQuNzg5LDE4MS4wNDgsMFM0NDcuNTQ1LDQ5LjEsNDQ3LjU0NSw0OS4xWiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTIzNC45NTcgNTguMTQxKSIgZmlsbD0iIzJmMmYyZiIvPjxwYXRoIGQ9Ik0zNTIuNzg2LDUyLjYyOCw0MTIuNzE0LDEyNS44cy0zLjE1NCwzNC4wNjUtNTQuODgyLDMyLjE3MkwzMjMuNzY4LDg0LjE2OVMzMTcuNDU5LDQyLjUzNCwzNTIuNzg2LDUyLjYyOFoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xMzEuMzY1IDY4LjQ5MSkiIGZpbGw9IiMxZjFmMWYiLz48cGF0aCBkPSJNMzk1LjcyNSw1OC41OTVTMzY0LjE4NCwzOS4wMzksMjkyLjksMzIuMWw2Ny41LDY4Ljc2WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTI5Mi45IC0zMi4xKSIgZmlsbD0iIzk5Y2I5OCIvPjxwYXRoIGQ9Ik00NDYuMDg1LDQ4LjY0OHMtNTguMDM2LTM1Ljk1Ny0xMjEuMTE5LDBjMCwwLTQ4LjU3NCw1Mi4zNTksMCw5Ni41MTcsNDEsMzYuNTg4LDg1LjE2Miw2LjkzOSw4NS4xNjIsNi45MzlTNTE5LjI2MSwxMTQuMjU0LDQ0Ni4wODUsNDguNjQ4WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTIzNy4yODEgLTI5LjA5MikiIGZpbGw9IiM5OWNiOTgiLz48cGF0aCBkPSJNMzI0LjcsNDQuOFMzNTkuNCwzMC4yODgsNDMwLjY3OSwzNC43TDM1My4wODcsOTIuMTA5WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTEyNC4wOTcgLTIyLjcxOCkiIGZpbGw9IiM5OWNiOTgiLz48L3N2Zz4=" alt="Movies" class="img-fluid" style="max-width:250px">
        </b-col>
      </b-row>
    </b-container>
  </div>

  <div class="case">
    <b-container>
      <b-row class="my-5">  
        <b-col cols="12" sm="7">
          <b-col cols="12" sm="9">
              <h3>Characters, Nature …</h3>
              <h2>Drawing, Painting, Photo</h2>
              <div class="my-5">
                <p>
                  I have been drawing since I learned how to hold a pen. I never took drawing classes and I have learned all by myself and by practicing through challenges, contests and exercises.
                </p>
                <div class="my-5">
                  <router-link to="/art">
                    <a href="#" class="btn2">Discover</a>
                  </router-link>
                </div>
                
              </div>
          </b-col>
          
        </b-col>

        <b-col cols="12" sm="5" class="text-center" >
              <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzNzcuNjU1IiBoZWlnaHQ9IjIyNS4yMTQiIHZpZXdCb3g9IjAgMCAzNzcuNjU1IDIyNS4yMTQiPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xMjc0LjA3NCAtMjM0MikiPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEzNDAuMTUyIDIzNDIpIj48cGF0aCBkPSJNNDM4LjM3Nyw4OC4yODJjLTcwLjc1Ny02OC42MjktMTc2LjEtNjYuNS0yMTguNjU2LTYyLjI0NS0xNS40MjgsMS42LTMwLjg1Nyw3LjQ0OC00My4wOTMsMTcuNTU2QzExNC4zODMsOTUuNzMsMjI3LjcsMTg0LjA0NCwzMDAuMDU0LDE5NC4xNTIsNDA2Ljk4OCwyMDkuNTgsNTI5LjM1LDE3Ni42LDQzOC4zNzcsODguMjgyWk0yMDYuOTUzLDk0LjEzNGMtMTYuNDkyLTcuOTgtMjYuNi0yMC4yMTYtMjMuNDA4LTI3LjEzM3MxOS4xNTItNS44NTIsMzUuNjQ1LDIuMTI4LDI2LjYsMjAuMjE2LDIzLjQwOCwyNy4xMzJDMjM5LjQwNSwxMDMuNzEsMjIzLjQ0NSwxMDIuNjQ2LDIwNi45NTMsOTQuMTM0WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTE1OC42MTQgLTI0LjI2NykiIGZpbGw9IiMxZjFmMWYiLz48cGF0aCBkPSJNMTkwLjg1MiwyOS4xODJTMTcxLjcsMjguMTE4LDE3OS42OCwzMi4zNzRjNy45OCw0Ljc4OC0yLjY2LDEwLjEwOCw2LjkxNiwxMi43NjhzMjAuMjE2LTEuMDY0LDI5LjI2MSw1LjMyLDIzLjk0LDMuMTkyLDExLjE3Mi0zLjcyNFMyMDIuMDI0LDI1Ljk5LDE5MC44NTIsMjkuMTgyWiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTc2LjAxMiAtNS4wNjkpIiBmaWxsPSIjZDg5ZTUwIi8+PHBhdGggZD0iTTIwNS4wMjQsMzJzLTE5LjE1Miw1LjMyLTcuNDQ4LDE0LjM2NGMxMi4yMzYsOS4wNDQsNC43ODgsOS4wNDQsMTMuMywxNy4wMjRzMTIuMjM2LDE3LjU1NiwxOC4wODgsMTMuMywyLjEyOC0xMi4yMzYsOS41NzYtMTAuMTA4YzcuOTgsMi4xMjgsOS4wNDQuNTMyLDkuMDQ0LTMuNzI0czMuNzI0LTE1LjQyOC05LjU3Ni0xOC42MmMtMTIuNzY4LTIuNjYtMTcuNTU2LS41MzItMjAuNzQ4LTYuMzg0UzIwNS4wMjQsMzIsMjA1LjAyNCwzMloiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC02LjY1OSA5LjEzOCkiIGZpbGw9IiM3NmJkNzUiLz48cGF0aCBkPSJNMTg3LjEyNCw0MS42cy0xOS4xNTIsNS4zMi03LjQ0OCwxNC4zNjRjMTIuMjM2LDkuMDQ0LDQuNzg4LDkuMDQ0LDEzLjMsMTcuMDI0czEyLjIzNiwxNy41NTYsMTguMDg4LDEzLjMsMi4xMjgtMTIuMjM2LDkuNTc2LTEwLjEwOGM3Ljk4LDIuMTI4LDkuMDQ0LjUzMiw5LjA0NC0zLjcyNHMzLjcyNC0xNS40MjgtOS41NzYtMTguNjItMTcuNTU2LS41MzItMjAuNzQ4LTYuMzg0QzE5Ni43LDQyLjEzMiwxODcuMTI0LDQxLjYsMTg3LjEyNCw0MS42WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTgzLjk4OSA1MC42MTEpIiBmaWxsPSIjYWYxZjI4Ii8+PHBhdGggZD0iTTIwMiw1MC45NTNzMi42Ni0xMy4zLDE0LjktNC43ODhjMTIuNzY4LDguNTEyLDE3LjU1Ni41MzIsMjAuNzQ4LTEuMDY0czEzLjgzMi01LjMyLDEyLjIzNiw2LjM4NCw3Ljk4LDEyLjIzNi0xLjA2NCwyMy40MDgtNy45OCwxLjYtMTguMDg4LDIuMTI4Yy0xNi40OTIuNTMyLTcuNDQ4LTEyLjc2OC0xOC42Mi0xMi4yMzZDMjA1LjcyNCw2NS4zMTcsMjAyLDUwLjk1MywyMDIsNTAuOTUzWiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjguODE4IDU3Ljc1MSkiIGZpbGw9IiNjNmM2YzYiLz48cGF0aCBkPSJNMjAyLjA4NCw2MS4xNjhzLTMuNzI0LTIyLjM0NCwxNS40MjgtMTIuMjM2LDExLjctMi42NiwyMC4yMTYsMy4xOTIsMTcuNTU2LDExLjcsMTAuMTA4LDE4LjA4OC0zLjE5Mi0xLjA2NC0yMS44MTIuNTMyYy0xMS43LDEuMDY0LTE5LjE1Miw4LjUxMi0yOC4yLDIuMTI4QzE3OS4yMDgsNjEuMTY4LDIwMi4wODQsNjEuMTY4LDIwMi4wODQsNjEuMTY4WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTIwLjc0MyA3MC45NDQpIiBmaWxsPSIjZmZmIi8+PC9nPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEyNzQuMDc0IDI0MjMuMDM5KSI+PHBhdGggZD0iTTE1MS42LDYzLjg2czY4LjYyOSw2My4zMDksMTE2LjUxLDgzLjUyNmMwLDAtMzMuNTE3LTUxLjA3My0xMDMuNzQyLTk5LjQ4NloiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xMjIuODM4IC0zLjIxMSkiIGZpbGw9IiM0ZjNjMzMiLz48cGF0aCBkPSJNMTUwLjUsNjEuNTY0LDE2My44LDQ3LjJsNS4zMiwzLjE5MkwxNTYuMzUyLDY2Ljg4NFoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xMjcuNTkgLTYuMjM1KSIgZmlsbD0iIzIyMjAxZiIvPjxwYXRoIGQ9Ik0xNjkuMDExLDk0LjRzLTMxLjkyMS02LjkxNi0yMC4yMTYtMzcuNzczYzAsMCw0LjI1Ni0xMy4zLjUzMi0xNy4wMjQsMCwwLDM0LjU4MSwxNS45NiwzMi40NTMsNDAuNDMzWiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTE0Ni4xMDEgLTM5LjA2OCkiIGZpbGw9IiNiYzlmN2QiLz48cGF0aCBkPSJNMTQ2LjIyNyw3MC4zNTdzLS41MzIsMS4wNjQsNC43ODgsMy43MjQsNS44NTItMi42Niw3LjQ0OC01Ljg1MiwzLjcyNC00Ljc4OCwxMC4xMDguNTMyLDEyLjIzNiw4LjUxMiwxMC4xMDgsMi42Ni00LjI1Ni0xMi43NjgtNC4yNTYtMTIuNzY4LTQuNzg4LTkuNTc2LTI1LTE5LjE1MmMwLDAsMi4xMjgsMTAuNjQtLjUzMiwxNy4wMjRBMzEuOTM1LDMxLjkzNSwwLDAsMCwxNDYuMjI3LDcwLjM1N1oiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xNDYuMTk0IC0zOS41KSIgZmlsbD0iI2FmMWYyOCIvPjwvZz48L2c+PC9zdmc+" alt="Painting" class="img-fluid" style="max-width:250px">
        </b-col>
      </b-row>
    </b-container>
  </div>

  <div class="case">
    <b-container>
      <b-row class="my-5">  
        <b-col cols="12" sm="7">
          <b-col cols="12" sm="9">
              <h3>Characters, Nature …</h3>
              <h2>Video Games</h2>
              <div class="my-5">
                <p>
                  Video Games are a great tool for creativity and it combines all the other arts (music, video, storytelling …)
                </p>
                <div class="my-5">
                  <router-link to="/games">
                    <a href="#" class="btn2">Discover</a>
                  </router-link>
                </div>
                
              </div>
          </b-col>
          
        </b-col>

        <b-col cols="12" sm="5" class="text-center" >
              <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzNjYuOTIiIGhlaWdodD0iNDQ1LjI2NSIgdmlld0JveD0iMCAwIDM2Ni45MiA0NDUuMjY1Ij48ZyB0cmFuc2Zvcm09Im1hdHJpeCgwLjgwOSwgMC41ODgsIC0wLjU4OCwgMC44MDksIDIyNC4yLCAwKSI+PGVsbGlwc2UgY3g9IjE1Ny43MTkiIGN5PSIzNy42NTkiIHJ4PSIxNTcuNzE5IiByeT0iMzcuNjU5IiB0cmFuc2Zvcm09Im1hdHJpeCgwLjgwOSwgLTAuNTg4LCAwLjU4OCwgMC44MDksIDU0LjI5MywgNDE3LjgzNSkiIGZpbGw9IiNkNmQ2ZDYiLz48cGF0aCBkPSJNOS41MzYsMCwwLDI0My4xNjMsMTY4LjQ2NiwzODEuNDMybDcuOTQ2LTIwNS44MTRaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwIDApIiBmaWxsPSIjN2FjMzc5Ii8+PHBhdGggZD0iTTkuNTM2LDAsMzYuNTU0LDIyNC44ODYsMTY4LjQ2NiwzODEuNDMyLDAsMjQzLjE2M1oiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgMCkiIGZpbGw9IiM2OWE0NjYiLz48cGF0aCBkPSJNNTMuMjQxLDAsMCwxNi42ODgsNDUuMjk1LDIwNS44MTRaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMjMuMTcxIDE3NS42MTgpIiBmaWxsPSIjODVjYzgzIi8+PHBhdGggZD0iTTM2LjU1NCwwLDAsMTguMjc3LDE2OC40NjYsMTU2LjU0NloiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgMjI0Ljg4NikiIGZpbGw9IiM1OTliNTgiLz48cGF0aCBkPSJNODYuNjE3LDAsMCwzMi41ODEsMTMxLjkxMiwxODkuMTI3WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMzYuNTU0IDE5Mi4zMDUpIiBmaWxsPSIjNmRiOTZjIi8+PHBhdGggZD0iTTExMy42MzUsMTkyLjMwNSwwLDAsMTY2Ljg3NiwxNzUuNjE4WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoOS41MzYgMCkiIGZpbGw9IiNhMmRkYTEiLz48L2c+PC9zdmc+" alt="Videos Games" class="img-fluid" style="max-width:250px">
        </b-col>
      </b-row>
    </b-container>
  </div>

  <div class="case">
    <b-container>
      <b-row class="my-5">  
        <b-col cols="12" sm="7">
          <b-col cols="12" sm="9">
              <h3>Modern-Jazz</h3>
              <h2>Dance</h2>
              <div class="my-5">
                <p>
                  I have danced for eight years. It taught me to surpass myself and to be more self-confident. Dancing allows me to express my sensibility.
                </p>
                <div class="my-5">
                  <router-link to="/danse">
                    <a href="#" class="btn2">Discover</a>
                  </router-link>
                </div>
                
              </div>
          </b-col>
          
        </b-col>

        <b-col cols="12" sm="5" class="text-center" >
              <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyOTIuNzY5IiBoZWlnaHQ9IjM1MS44MjIiIHZpZXdCb3g9IjAgMCAyOTIuNzY5IDM1MS44MjIiPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xMjcyLjk2MSAtNDE3Mi44MjYpIj48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMjcyLjk2MSA0MTcyLjgyNikiPjxlbGxpcHNlIGN4PSIzMi40MyIgY3k9IjMyLjQzIiByeD0iMzIuNDMiIHJ5PSIzMi40MyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCA5My4yODQpIiBmaWxsPSIjMWYxZjFmIi8+PGVsbGlwc2UgY3g9IjMyLjQzIiBjeT0iMzIuNDMiIHJ4PSIzMi40MyIgcnk9IjMyLjQzIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg5NC41ODcgMTExLjMpIiBmaWxsPSIjMWYxZjFmIi8+PHJlY3Qgd2lkdGg9IjEwMS43OTQiIGhlaWdodD0iMTguOTE3IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0NS4yNDkgMTI4LjkwMSkgcm90YXRlKC03Ni43NDUpIiBmaWxsPSIjMWYxZjFmIi8+PHJlY3Qgd2lkdGg9IjEwMS43OTQiIGhlaWdodD0iMTguOTE3IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMzkuNCAxNTEuMTA5KSByb3RhdGUoLTc2Ljc0NSkiIGZpbGw9IiMxZjFmMWYiLz48cmVjdCB3aWR0aD0iMTE1LjMwNiIgaGVpZ2h0PSI2MS4yNTciIHRyYW5zZm9ybT0idHJhbnNsYXRlKDc2LjIxOSAwKSByb3RhdGUoMTMuMjU1KSIgZmlsbD0iIzFmMWYxZiIvPjwvZz48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxNDM2LjkxMSA0MzYwLjY5NykiPjxlbGxpcHNlIGN4PSIzMi40MyIgY3k9IjMyLjQzIiByeD0iMzIuNDMiIHJ5PSIzMi40MyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCA5OS4wOTEpIiBmaWxsPSIjMWYxZjFmIi8+PHJlY3Qgd2lkdGg9IjE4LjkxNyIgaGVpZ2h0PSIxMDEuNzk0IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0NS45NDIgMzAuNjI4KSIgZmlsbD0iIzFmMWYxZiIvPjxyZWN0IHdpZHRoPSI4Mi44NzYiIGhlaWdodD0iNjEuMjU3IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0NS45NDIpIiBmaWxsPSIjMWYxZjFmIi8+PC9nPjwvZz48L3N2Zz4=" alt="Videos Games" class="img-fluid" style="max-width:250px">
        </b-col>
      </b-row>
    </b-container>
  </div>

  <div class="case">
    <b-container>
      <b-row class="my-5">  
        <b-col cols="12" sm="7">
          <b-col cols="12" sm="9">
              <h3>Deutschland, England,Russia</h3>
              <h2>Travel</h2>
              <div class="my-5">
                <p>
                  I have always traveled with my family or school. There were great opportunities to think differently and to understand more various cultures.
                </p>
                <div class="my-5">
                  <router-link to="/travel">
                    <a href="#" class="btn2">Discover</a>
                  </router-link>
                </div>
                
              </div>
          </b-col>
          
        </b-col>

        <b-col cols="12" sm="5" class="text-center" >
              <img src="https://cecile-gaultier.fr/static/img/map.4e6c82c.svg" alt="Videos Games" class="img-fluid" style="max-width:250px">
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
export default {
  name: 'Hobbies',
  data () {
    return {
      donnees :[]
    }
  },

  created(){
        //lecture json directement avec Axios (json dans static)
        axios.get('static/project.json')
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

#hobbies{
  background-image: url("https://cecile-gaultier.fr/static/img/danse2-front.9e3281b.jpg");
  content: "";
  background-repeat: no-repeat;
  margin-left: .5rem;
  margin: 0;
  background-position-y: center;
}

@media only screen and (max-width:576px){
  #hobbies{
      background-position-x: center;
  }
}

@media only screen and (max-width:768px){
  #hobbies{
      background-position-x: center;
  }
}


</style>
