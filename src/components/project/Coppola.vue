<template>
 <div>
    <div id="coppola">
     <b-container>
       <b-row>
         <b-col cols="12" sm="4" md="6" lg="4" class="intro my-5">
           <h1 class="my-5">Francis Ford Coppola</h1>
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

     <!-- <div class="carrousel">
       <img src="../../assets/coppola-carrousel-1.jpg" style="width:100%" class="mySlides">
        
        <img src="../../assets/coppola-carrousel-2.jpg" style="width:100%" class="mySlides">
        
        <img src="../../assets/coppola-carrousel-3.jpg" style="width:100%" class="mySlides">

        <img src="../../assets/coppola-carrousel-4.jpg" style="width:100%" class="mySlides">
     </div> -->
             
    
    <div id="coppola2">

      <b-row class="my-5">
        <b-col cols="12" sm="7" md="12" lg="7">
          <h3>Reflection</h3>
          <p v-for="ref in info.reflection" :key="ref.id">{{ref.text}}</p>
        </b-col>
      </b-row>
      
      <div class="my-5">
        <h3>First Page</h3>
        <img src="https://cecile-gaultier.fr/static/img/coppola-accueil.2e9a335.jpg" alt="Mock-up Accueil" class="img-fluid">
      </div>

      <div class="my-5">
        <h3>Responsive</h3>
        <img src="https://cecile-gaultier.fr/static/img/coppola-responsive.e38ad1c.jpg" alt="Mock-up Responsive" class="img-fluid">
      </div>

      <div class="my-5">
        <h3>Resources</h3>
        <b-row >
          <b-col cols="12" sm="6" class="my-5">
            <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2NzQiIGhlaWdodD0iNDI5LjkzIiB2aWV3Qm94PSIwIDAgNjc0IDQyOS45MyI+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTI2LjI4OSAtMzI0LjE1MSkiPjxwYXRoIGQ9Ik00MDcuMTg5LDY2OC41MzYsOTAuNjE1LDY2Ni45OTQsNTkuMTYsNTkzLjIxNGwxMTEuMjI4LTguMDc0TDE1MSw1MDQuMjQ3bDIyMC0yOC41MTVMMTYwLjMzNCw0MDIuNWwxOC42MDktNC40MjEsMzM4Ljc0Myw1NS4yNkw0OTkuMDMxLDU3OS41ODNsLTI2LjY2NSw2OS4zNzNaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNC4yODMgLTI3LjkxNSkiIGZpbGw9IiM3MzE0MTQiLz48cGF0aCBkPSJNMTg3LDY5OC44MTVzMTkuNDIzLTMuMTA4LDMxLjA3NywxMC42MThjMCwwLTguNTQ3LDYuNzM0LTI2LjkzNC0yLjU5WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTk1LjgxMSAtOTAuNjM4KSIgZmlsbD0iIzczMTQxNCIvPjxwYXRoIGQ9Ik0xODQuMTUxLDY5OC41MXMtMTIuMzk0LDE1LjI1MS02LjI4OSwzMi4yMzNjMCwwLDEwLjEtNC4wNDIsMTEuMi0yNC42M1oiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC05NC45OTggLTkwLjYzOCkiIGZpbGw9IiM3MzE0MTQiLz48cGF0aCBkPSJNMTcyLjc2LDY3MXM3Ljc2OS0xNC4yNTIsMzguODQ2LDUuN2MwLDAtNC4xNDQsOS41ODItMTcuODY5LDguOFMxNzYuMzg2LDY3OC41MDksMTcyLjc2LDY3MVoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC05NC43NDEgLTg4LjIwMSkiIGZpbGw9IiM3MzE0MTQiLz48cGF0aCBkPSJNMTY5LjE1NCw2NzAuMjg5cy0xNi4xMjEtMS44NS0xNy42ODQsMzUuMDUzYzAsMCwxMC4yMiwyLjExOCwxNy40OC05LjU1NFMxNzMuMjMzLDY3Ny41NjgsMTY5LjE1NCw2NzAuMjg5WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTkzLjE0MiAtODguNTE3KSIgZmlsbD0iIzczMTQxNCIvPjxwYXRoIGQ9Ik03MDMuNDYsNjcwLjM2cy0yMC45NzEsMjUuNTkyLTQuMzE5LDY0LjI4MWwtMTY3LjQwNiw3Mi42LTE2LjA2NSwzLjM2Ni03LjQtMzIuMzc1LDQuOTQ5LTQwLjg0OVY3MTUuMDZaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTE5Ljk0IC04OC41MjMpIiBmaWxsPSIjZDVkNmRiIi8+PHBhdGggZD0iTTU5LjE2LDYwNS42M2wyMzEuNy00Mi4yNEw1OTcuODg2LDYxMi4zbC0xOTAuNyw2OC42NTVaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNC4yODMgLTQwLjMzMSkiIGZpbGw9IiM3MzE0MTQiLz48cGF0aCBkPSJNNTkuMTYsNjA1LjYzbDIzMS43LTQyLjI0TDU5Ny44ODYsNjEyLjNsLTE5MC43LDY4LjY1NVoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC00LjI4MyAtNDAuMzMxKSIgZmlsbD0iIzczMTQxNCIvPjxwYXRoIGQ9Ik0xNDcuMDMxLDY1Mi40N3MtMjEuNjY3LDQxLjA1NywzLjMsNzguOTc3bDM0My42LDc0LjQ1NHMtMjEuMzI4LTMyLjcsMS4xLTc4LjFaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtOTIuMTU0IC04Ny4xOCkiIGZpbGw9IiM3MzE0MTQiLz48cGF0aCBkPSJNMTQ3LjAzMSw2NTIuNDdzLTIxLjY2Nyw0MS4wNTcsMy4zLDc4Ljk3N2wzNDMuNiw3NC40NTRzLTIxLjMyOC0zMi43LDEuMS03OC4xWiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTkyLjE1NCAtODcuMTgpIiBvcGFjaXR5PSIwLjEiLz48cGF0aCBkPSJNMTU4LjM2Niw2NjcuODZzLTEyLjM4NSwzMC4wNCwwLDQ5LjQ4MiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTkzLjI0NyAtODguMzM2KSIgb3BhY2l0eT0iMC4xIi8+PHBhdGggZD0iTTQ5NC45MDksODExLjcxNGwxOTEuODItODEuODU0czEwLjcyOSwyLjMxMiwzLjc5MiwxMC4xNzNTNDk4LjYsODE5LjU3NCw0OTguNiw4MTkuNTc0TDE1MS4zMSw3MzcuMjU1WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTkzLjEzIC05Mi45OTIpIiBmaWxsPSIjNzMxNDE0Ii8+PHBhdGggZD0iTTQ5NC45MDksODExLjcxNGwxOTEuODItODEuODU0czEwLjcyOSwyLjMxMiwzLjc5MiwxMC4xNzNTNDk4LjYsODE5LjU3NCw0OTguNiw4MTkuNTc0TDE1MS4zMSw3MzcuMjU1WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTkzLjEzIC05Mi45OTIpIiBvcGFjaXR5PSIwLjEiLz48cGF0aCBkPSJNNTA1LjE0Miw3NDIuODZzLTE4LjUsMjIuMiwwLDU1LjQ5NCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTExOS4wODggLTkzLjk2OSkiIG9wYWNpdHk9IjAuMSIvPjxyZWN0IHdpZHRoPSI4Ny40NjciIGhlaWdodD0iMC45MjUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDM5Mi42NCA2NzYuMTk2KSByb3RhdGUoLTE4LjQ1KSIgb3BhY2l0eT0iMC4xIi8+PHJlY3Qgd2lkdGg9IjEwNi41NzUiIGhlaWdodD0iMC45MjUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDM5Mi42MDkgNjgzLjY0Mikgcm90YXRlKC0yMC44MikiIG9wYWNpdHk9IjAuMSIvPjxyZWN0IHdpZHRoPSIxMjMuNTI5IiBoZWlnaHQ9IjAuOTI1IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgzOTMuMTY2IDY5Mi40MTkpIHJvdGF0ZSgtMjIuMjYpIiBvcGFjaXR5PSIwLjEiLz48cmVjdCB3aWR0aD0iMTQyLjE5MyIgaGVpZ2h0PSIwLjkyNSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMzk0LjUgNzAwLjE2KSByb3RhdGUoLTI0LjMxKSIgb3BhY2l0eT0iMC4xIi8+PHJlY3Qgd2lkdGg9IjE1NS41MjEiIGhlaWdodD0iMC45MjUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDM5NS41MjcgNzAzLjkyNikgcm90YXRlKC0yMy42NDMpIiBvcGFjaXR5PSIwLjEiLz48cmVjdCB3aWR0aD0iMTg2LjEwNyIgaGVpZ2h0PSIwLjkyNSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMzk3LjY3OCA3MTAuMjUyKSByb3RhdGUoLTIzLjM2KSIgb3BhY2l0eT0iMC4xIi8+PHBhdGggZD0iTTE1Mi4yMyw2MTEuMTYxLDMxNS4wMTIsNTc2Ljk0bDk5LjE2NywxOC45NkwyODAuNzksNjM4LjkwOFoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xMS4yNzIgLTQxLjM0OCkiIGZpbGw9IiNmZmYiIG9wYWNpdHk9IjAuMyIvPjxwYXRoIGQ9Ik03MTQuNzI3LDY1OS42OXM4LjQxNiwzLjM5NCwzLjQ3OSw4LjYzOVM1MjQsNzI4LjM0NSw1MjQsNzI4LjM0NVoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xMjEuMTIxIC04Ny43MjMpIiBmaWxsPSIjNzMxNDE0Ii8+PHBhdGggZD0iTTgwMi43NSw1NzQuMThzLTIwLjk1OCwyNS41ODMtNC4zMSw2NC4yODFsLTE2Ny40MDUsNzIuNkw2MTQuOTcsNzE0LjQ1bC03LjQtMzIuMzcxLDUuMDIyLTQwLjg0NFY2MTguODhaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTI3LjM5NyAtODEuMykiIGZpbGw9IiNkNWQ2ZGIiLz48cGF0aCBkPSJNMTU4LjQ2LDUwOS40NGwyMzEuNy00Mi4yMywzMDcuMDMsNDguOTA4LTE5MC43LDY4LjY1OVoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xMS43NCAtMzMuMTA4KSIgZmlsbD0iIzMzMzE1MCIvPjxwYXRoIGQ9Ik0yNDYuMjkxLDU1Ni4yOXMtMjEuNjgsNDEuMDU2LDMuMjkzLDc4Ljk3N2wzNDMuNiw3NC40NTRzLTIxLjMxOS0zMi43MzIsMS4xMzgtNzguMTA3WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTk5LjYwOSAtNzkuOTU2KSIgZmlsbD0iIzNhMzc2OCIvPjxwYXRoIGQ9Ik0yNDYuMjkxLDU1Ni4yOXMtMjEuNjgsNDEuMDU2LDMuMjkzLDc4Ljk3N2wzNDMuNiw3NC40NTRzLTIxLjMxOS0zMi43MzIsMS4xMzgtNzguMTA3bC0xMDguNjU2LTIzLjUyWiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTk5LjYwOSAtNzkuOTU2KSIgZmlsbD0iIzBkMGQwZCIgb3BhY2l0eT0iMC41MzkiLz48cGF0aCBkPSJNMjU3LjY1Myw1NzEuNjhzLTEyLjM3NSwzMC4wMzEsMCw0OS40ODIiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xMDAuNzA0IC04MS4xMTIpIiBvcGFjaXR5PSIwLjEiLz48cGF0aCBkPSJNNTk0LjIsNzE1LjUzMyw3ODYuMDMxLDYzMy42OHMxMC43MiwyLjMxMiwzLjc4MywxMC4xNzMtMTkxLjkxOSw3OS41NDEtMTkxLjkxOSw3OS41NDFMMjUwLjYsNjQxLjA3OVoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xMDAuNTg4IC04NS43NjkpIiBmaWxsPSIjM2EzNzY4Ii8+PHBhdGggZD0iTTU5NC4yLDcxNS41MzMsNzg2LjAzMSw2MzMuNjhzMTAuNzIsMi4zMTIsMy43ODMsMTAuMTczLTE5MS45MTksNzkuNTQxLTE5MS45MTksNzkuNTQxTDI1MC42LDY0MS4wNzlaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTAwLjU4OCAtODUuNzY5KSIgb3BhY2l0eT0iMC40NTciLz48cGF0aCBkPSJNNjA0LjQzMiw2NDYuNjhzLTE4LjUsMjIuMiwwLDU1LjQ5NCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTEyNi41NDUgLTg2Ljc0NSkiIG9wYWNpdHk9IjAuMSIvPjxyZWN0IHdpZHRoPSI4Ny40NjciIGhlaWdodD0iMC45MjUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQ4NC40OCA1ODcuMjQ5KSByb3RhdGUoLTE4LjQ1KSIgb3BhY2l0eT0iMC4xIi8+PHJlY3Qgd2lkdGg9IjEwNi41NzUiIGhlaWdodD0iMC45MjUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQ4NC40NjEgNTk0LjY5Mikgcm90YXRlKC0yMC44MikiIG9wYWNpdHk9IjAuMSIvPjxyZWN0IHdpZHRoPSIxMjMuNTI5IiBoZWlnaHQ9IjAuOTI1IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0ODUuMDA0IDYwMy40NTcpIHJvdGF0ZSgtMjIuMjYpIiBvcGFjaXR5PSIwLjEiLz48cmVjdCB3aWR0aD0iMTQyLjE5MyIgaGVpZ2h0PSIwLjkyNSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDg2LjM0OSA2MTEuMTk4KSByb3RhdGUoLTI0LjMxKSIgb3BhY2l0eT0iMC4xIi8+PHJlY3Qgd2lkdGg9IjE1NS41MjEiIGhlaWdodD0iMC45MjUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQ4Ny4zNjMgNjE0Ljk1Mikgcm90YXRlKC0yMy42NDMpIiBvcGFjaXR5PSIwLjEiLz48cmVjdCB3aWR0aD0iMTg2LjEwNyIgaGVpZ2h0PSIwLjkyNSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDg5LjUyMSA2MjEuMjc4KSByb3RhdGUoLTIzLjM2KSIgb3BhY2l0eT0iMC4xIi8+PHBhdGggZD0iTTI1MS41Myw1MTQuOTgyLDQxNC4zMTIsNDgwLjc2bDk5LjE2NywxOC45NkwzODAuMDksNTQyLjcyOFoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xOC43MzEgLTM0LjEyNSkiIGZpbGw9IiNmZmYiIG9wYWNpdHk9IjAuNDUiLz48cGF0aCBkPSJNODE0LjAyNyw1NjMuNTFzOC40MDcsMy4zOTQsMy40NzksOC42MjlTNjIzLjMzLDYzMi4xNTYsNjIzLjMzLDYzMi4xNTZaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTI4LjU4MSAtODAuNDk4KSIgZmlsbD0iIzNhMzc2OCIvPjxwYXRoIGQ9Ik04MTIuMTUzLDQ2NC4xNXMtMjAuOTcxLDQ1LjkzOS00LjMxOSw4NC42MjhMNjQwLjQyOCw2MDEuMDM1LDYyNC40LDYwNC40MjksNjE3LDU3Mi4wNTdsNC45NDktNDAuODQ5VjUwOC44NVoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xMjguMTA2IC03My4wMzYpIiBmaWxsPSIjZDVkNmRiIi8+PHBhdGggZD0iTTE2Ny44OSwzOTkuNDJsMjMxLjctNDIuMjQsMzA3LjAyOCw0OC45MDgtMTkwLjcsNjguNjU2WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTEyLjQ0OSAtMjQuODQzKSIgZmlsbD0iIzczMTQxNCIvPjxwYXRoIGQ9Ik0yNTUuNzU5LDQ0Ni4yNnMtMjEuNzA3LDQxLjA1NiwzLjI2NSw3OC45NzdsMzQzLjYsNzQuNDU0cy0yMS4zMjgtMzIuNzMyLDEuMTI4LTc4LjFaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTAwLjMxOCAtNzEuNjkyKSIgZmlsbD0iIzczMTQxNCIvPjxwYXRoIGQ9Ik0yNTUuNzU5LDQ0Ni4yNnMtMjEuNzA3LDQxLjA1NiwzLjI2NSw3OC45NzdsMzQzLjYsNzQuNDU0cy0yMS4zMjgtMzIuNzMyLDEuMTI4LTc4LjFaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTAwLjMxOCAtNzEuNjkyKSIgb3BhY2l0eT0iMC4xIi8+PHBhdGggZD0iTTI2Ny4wOTMsNDYxLjY1cy0xMi4zODUsMzAuMDQsMCw0OS40ODIiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xMDEuNDEzIC03Mi44NDkpIiBvcGFjaXR5PSIwLjEiLz48cGF0aCBkPSJNNjAzLjYzOSw2MDYuMSw3OTUuNDU5LDU0NC42czEwLjcyOSwyLjMxMiwzLjc5MiwxMC4xNzMtMTkxLjkxOSw1OS4xOTMtMTkxLjkxOSw1OS4xOTNMMjYwLjA0LDUzMS42NVoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xMDEuMjk3IC03OC4xMDYpIiBmaWxsPSIjNzMxNDE0Ii8+PHBhdGggZD0iTTYwMy42MzksNjA2LjEsNzk1LjQ1OSw1NDQuNnMxMC43MjksMi4zMTIsMy43OTIsMTAuMTczLTE5MS45MTksNTkuMTkzLTE5MS45MTksNTkuMTkzTDI2MC4wNCw1MzEuNjVaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTAxLjI5NyAtNzguMTA2KSIgb3BhY2l0eT0iMC4xIi8+PHBhdGggZD0iTTYxMy44NzIsNTM2LjY1cy0xOC41LDIyLjIsMCw1NS40OTQiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xMjcuMjUzIC03OC40ODIpIiBvcGFjaXR5PSIwLjEiLz48cmVjdCB3aWR0aD0iODcuNDY3IiBoZWlnaHQ9IjAuOTI1IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0OTMuMjEzIDQ4NS40ODEpIHJvdGF0ZSgtMTguNDUpIiBvcGFjaXR5PSIwLjEiLz48cmVjdCB3aWR0aD0iMTA2LjU3NSIgaGVpZ2h0PSIwLjkyNSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDkzLjE4OSA0OTIuOTI5KSByb3RhdGUoLTIwLjgyKSIgb3BhY2l0eT0iMC4xIi8+PHJlY3Qgd2lkdGg9IjEyMy41MjkiIGhlaWdodD0iMC45MjUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQ5My43MjIgNTAxLjY5OCkgcm90YXRlKC0yMi4yNikiIG9wYWNpdHk9IjAuMSIvPjxyZWN0IHdpZHRoPSIxNDIuMTkzIiBoZWlnaHQ9IjAuOTI1IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0OTUuMDggNTA5LjQzMSkgcm90YXRlKC0yNC4zMSkiIG9wYWNpdHk9IjAuMSIvPjxyZWN0IHdpZHRoPSIxNTUuNTIxIiBoZWlnaHQ9IjAuOTI1IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0OTYuMSA1MTMuMTk0KSByb3RhdGUoLTIzLjY0MykiIG9wYWNpdHk9IjAuMSIvPjxyZWN0IHdpZHRoPSIxODYuMTA3IiBoZWlnaHQ9IjAuOTI1IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0OTguMjUzIDUxOS41MjYpIHJvdGF0ZSgtMjMuMzYpIiBvcGFjaXR5PSIwLjEiLz48cGF0aCBkPSJNMjYwLjk2LDQwNC45NTEsNDIzLjc0MiwzNzAuNzNsOTkuMTY3LDE4Ljk2TDM4OS41Miw0MzIuN1oiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xOS40MzggLTI1Ljg2KSIgZmlsbD0iI2ZmZiIgb3BhY2l0eT0iMC4zIi8+PHBhdGggZD0iTTgyMy40NTUsNDUzLjQ4czguNDE2LDMuMzk0LDMuNDc5LDguNjM5UzYzMi43Niw1MjIuMTM1LDYzMi43Niw1MjIuMTM1WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTEyOS4yOSAtNzIuMjM1KSIgZmlsbD0iIzczMTQxNCIvPjxlbGxpcHNlIGN4PSIyMS4yNjMiIGN5PSIyLjM3NyIgcng9IjIxLjI2MyIgcnk9IjIuMzc3IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxNjUuNjggNzIyLjQ5NCkiIGZpbGw9IiMwZDBkMGQiIG9wYWNpdHk9IjAuMSIvPjxlbGxpcHNlIGN4PSIyMS4yNjMiIGN5PSIyLjM3NyIgcng9IjIxLjI2MyIgcnk9IjIuMzc3IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyNi4yODkgNjgyLjA5NSkiIGZpbGw9IiMwZDBkMGQiIG9wYWNpdHk9IjAuMSIvPjxlbGxpcHNlIGN4PSIyMS4yNjMiIGN5PSIyLjM3NyIgcng9IjIxLjI2MyIgcnk9IjIuMzc3IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyNzEuOTMyIDc0OS4zMjYpIiBmaWxsPSIjMGQwZDBkIiBvcGFjaXR5PSIwLjEiLz48ZWxsaXBzZSBjeD0iMjEuMjYzIiBjeT0iMi4zNzciIHJ4PSIyMS4yNjMiIHJ5PSIyLjM3NyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNjM5LjQ3NyA2NzkuMzQ4KSIgZmlsbD0iIzBkMGQwZCIgb3BhY2l0eT0iMC4xIi8+PGVsbGlwc2UgY3g9IjI1LjE0OCIgY3k9IjQuMzE5IiByeD0iMjUuMTQ4IiByeT0iNC4zMTkiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDUyMS4xMjcgNzMxLjcxNikiIGZpbGw9IiMwZDBkMGQiIG9wYWNpdHk9IjAuMSIvPjxwYXRoIGQ9Ik02NTUuMjksMzk4LjIyNHMyMS40Mi0yLjc3NSwyNi43MzYtNi40NzQiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xMzAuOTgyIC02Ny41OTkpIiBvcGFjaXR5PSIwLjEiLz48cGF0aCBkPSJNNTg0LjYyLDM5MS43NXMxMi4wMjYsNi43NzksMjAuOTcxLDYuNDc0IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTI1LjY3NCAtNjcuNTk5KSIgb3BhY2l0eT0iMC4xIi8+PHBhdGggZD0iTTUzNi4yNyw0MjcuMzkxYTE3LjY2NSwxNy42NjUsMCwwLDEsMTUuMTU5LDRjNy40LDYuMTY5LDMyLjMsMTguNTU0LDMyLjMsMTguNTU0IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTIyLjA0MyAtNzAuMjQ5KSIgb3BhY2l0eT0iMC4xIi8+PHBhdGggZD0iTTczMy4xMTEsNDI3cy0zMi45OTEsNC45OTQtMzkuMTUxLDExLjc3NCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTEzMy44ODYgLTcwLjI0NikiIG9wYWNpdHk9IjAuMSIvPjxwYXRoIGQ9Ik01NjEuOTMsNTM0LjA0MnM4LjAyOC0xOC4xMSwyOS40NjctNC4zIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTIzLjk3IC03Ny41NzMpIiBmaWxsPSJub25lIiBzdHJva2U9IiMwMDAiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLXdpZHRoPSIxIiBvcGFjaXR5PSIwLjEiLz48cGF0aCBkPSJNNjUwLjUyLDQ2MC44MTRhNzAuODE2LDcwLjgxNiwwLDAsMSwxMC42MTgtNi41OTRjNS41NDktMi42NzMsMTUuNzIzLTkuNjEsMTUuNzIzLTkuNjEiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xMzAuNjI0IC03MS41NjkpIiBvcGFjaXR5PSIwLjEiLz48L2c+PC9zdmc+" alt="Ressources" class="img-fluid my-4" style="max-width:300px">
            <p>This illustration was used for the biography page. I played with the common idea that biographies are books, which is not totally true with the Internet. On this page, viewers can learn about Francis Ford Coppola’s life but mainly what is his style when making movies. The design of the website and Coppola’s style are directly linked.</p>
          </b-col>
          <b-col cols="12" sm="6" class="my-5">
            <img src="https://cecile-gaultier.fr/static/img/Prix-illu.3029159.svg" alt="Ressources" class="img-fluid my-4" style="max-width:270px">
            <p>Francis Ford Coppola and his family (daughter Sofia Coppola and nephew Nicolas Cage) are very well-known. They have won many prizes / awards through movies. </p>
          </b-col>
          <b-col cols="12" sm="6" class="my-5">
            <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4MTIiIGhlaWdodD0iODA3LjExMSIgdmlld0JveD0iMCAwIDgxMiA4MDcuMTExIj48cGF0aCBkPSJNNDY1LjUyNyw2MDguMDc5YTExLjE0LDExLjE0LDAsMCwwLTE2Ljk3Mi0xLjkzMkw0MTMuMzc5LDU4Ny45OWwyLjE4NiwyMC40NTUsMzMuMDcsMTQuMTA1YTExLjIsMTEuMiwwLDAsMCwxNi44OTItMTQuNDcyWiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTIxNC4xMTQgLTMxLjU3MykiIGZpbGw9IiNmZmQzYjgiLz48cGF0aCBkPSJNNDQwLjQ0Niw2MjMuNTM3YTQuOTksNC45OSwwLDAsMS00LjA2NS4wNDNsLTMzLjQxMy0xNC40OTVhNTEuMzcxLDUxLjM3MSwwLDAsMS0yNS45OTEtMjUuMTQzTDM1OS40MSw1NDYuODY1YTE2LjA2LDE2LjA2LDAsMCwxLDI1LjM2OS0xOS43bDMwLjg3Niw1Ny4yODcsMjguNTEsMjEuNTM3YTUsNSwwLDAsMSwxLjc1Nyw1LjQ1MmwtMi44LDkuMDM5YTQuOTkxLDQuOTkxLDAsMCwxLTEuNjg4LDIuNDQ5LDQuOTI3LDQuOTI3LDAsMCwxLS45OTEuNjA4WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTIyMC4yOTQgLTM4Ljc5OCkiIGZpbGw9IiM3MzE0MTQiLz48Y2lyY2xlIGN4PSIyNy4yMDgiIGN5PSIyNy4yMDgiIHI9IjI3LjIwOCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTExLjEzNyA0MTAuMDQ0KSIgZmlsbD0iI2ZmZDNiOCIvPjxwYXRoIGQ9Ik0xMzQuODMzLDcyMmgxMy41ODJsNi40Ni01Mi4zODVIMTM0LjgzMVoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDE0LjUzMSA3Mi4xNykiIGZpbGw9IiNmZmQzYjgiLz48cGF0aCBkPSJNMCwwSDQyLjY4M1YxNi40OTFIMTYuNDkxQTE2LjQ5MSwxNi40OTEsMCwwLDEsMCwwWiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTg5LjEzNSA4MDYuNzg0KSByb3RhdGUoMTc5Ljk5NykiIGZpbGw9IiMwZDBkMGQiLz48cGF0aCBkPSJNOTQuODMzLDcyMmgxMy41ODJsNi40Ni01Mi4zODVIOTQuODMxWiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTAuMjIxIDcyLjE3KSIgZmlsbD0iI2ZmZDNiOCIvPjxwYXRoIGQ9Ik0wLDBINDIuNjgzVjE2LjQ5MUgxNi40OTFBMTYuNDkxLDE2LjQ5MSwwLDAsMSwwLDBaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxNDQuODI0IDgwNi43ODQpIHJvdGF0ZSgxNzkuOTk3KSIgZmlsbD0iIzBkMGQwZCIvPjxwYXRoIGQ9Ik0zMjQuMTczLDgwNi44MTNhNC45ODQsNC45ODQsMCwwLDEtMS4xOS0zLjk0MmwyMy43ODMtMTc4LjMzNiw1OS4wNzcsMTAuMDMyLDYuMy0zLjc4My0xNi4zMTEsMTY5LjJhNSw1LDAsMCwxLTQuNTM4LDQuMzkybC0xNy44ODcsMS40OTRhNC45ODQsNC45ODQsMCwwLDEtNS4zOTEtNS4yNTNsNC42MzItODAuNTgzYS41NTQuNTU0LDAsMCwwLTEuMDg4LS4xNzhsLTIyLjkxMyw4NC45NjhhNC45OTMsNC45OTMsMCwwLDEtNC44MTMsMy42ODhIMzI3LjkyM2E0Ljk4NCw0Ljk4NCwwLDAsMS0zLjc1Mi0xLjdaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMjIzLjg2MSAtMjcuNjM1KSIgZmlsbD0iIzBkMGQwZCIvPjxwYXRoIGQ9Ik0zNjQuOTYsNjQ4Ljk4OWEzLjkxMywzLjkxMywwLDAsMC01LS4yMDlsLTExLjgxMSw5LjE4N2E0Ljk4MSw0Ljk4MSwwLDAsMS03Ljg1MS0yLjU1NWMtNS43OTMtMjAuMjg5LTE4LjkxOS03MS4zNjEtMTUuNjg1LTEwNy4zMDcsMS44MzMtMjAuMzc0LDE5LjQyNy0zNS44NiwzOS4yMjEtMzQuNTYsMTMuNTMzLjksMjIuNDM1LDguNzA5LDI2LjQ2MSwyMy4yLDkuODg1LDM1LjU4NCwyMC43NDcsMTAwLjg1NiwyMi44MjMsMTEzLjU4YTQuOTYzLDQuOTYzLDAsMCwxLTIuMzY2LDUuMDgzLDM2LjQ4OCwzNi40ODgsMCwwLDEtMTguNDkxLDUuMkMzODQuMzcsNjYwLjYxNCwzNzQuOTA5LDY1Ny44NjgsMzY0Ljk2LDY0OC45ODlaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMjIzLjczNSAtMzkuNjA1KSIgZmlsbD0iIzczMTQxNCIvPjxwYXRoIGQ9Ik0zNjguODU0LDY1MS45YTExLjE0LDExLjE0LDAsMCwwLTEyLjE2Mi0xMS45OTRsLTE2LjQ3NC0zNi0xMC45LDE3LjQ0NSwxNy4zMTYsMzEuNTA3YTExLjIsMTEuMiwwLDAsMCwyMi4yMjItLjk2MVoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0yMjMuMTczIC0yOS44NTcpIiBmaWxsPSIjZmZkM2I4Ii8+PHBhdGggZD0iTTM0MC44MjEsNjQ3Ljk1OGE0Ljk5MSw0Ljk5MSwwLDAsMS0zLjIyNS0yLjQ3NGwtMTcuMzQ2LTMyLjAzYTUxLjM3Miw1MS4zNzIsMCwwLDEtNC45MzQtMzUuODI0bDkuMDU5LTQwLjAxNmExNi4wNTksMTYuMDU5LDAsMSwxLDMyLjExNy4xNTdMMzQ1LjQzNCw2MDEuOWw5LjE0MywzNC41NDFhNSw1LDAsMCwxLTEuOTgxLDUuMzc0bC03Ljc4LDUuMzg1YTQuOTg3LDQuOTg3LDAsMCwxLTQsLjc1WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTIyNC44MTkgLTM4LjcyNSkiIGZpbGw9IiM3MzE0MTQiLz48cGF0aCBkPSJNMTE3LjgzOSw0NzQuOTA4bC05Ljk3LDQyLjEsMTQuNCwzNS40NDktOS45Ny0zNC4zNDFaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMS42MjYgNTEuMTg0KSIgb3BhY2l0eT0iMC4yIi8+PHBhdGggZD0iTTM1OC4yLDUxMC44ODRhMjcuMSwyNy4xLDAsMCwxLTI0LjM0Mi0xNS4zMTcsMjkuNywyOS43LDAsMCwxLDIuNjc3LTI5LjYyNywyNi41ODYsMjYuNTg2LDAsMCwxLDI2LjY1Mi0xMC4yNTNjNS40ODgtMy40OTMsMTEuODY5LTUuODQ0LDE4LjI1OC01LjI0NnMxMi43MTksNC41NzgsMTUuMTExLDEwLjgyNC0uMTc4LDE0LjQ3OS02LjEyNiwxNy4wMTdjLTMuODEzLDEuNjI4LTguMTE4Ljg0MS0xMi4xODUuMTgxcy04LjUwNy0xLjA4MS0xMi4wNDcsMS4xMTYtNS4xMzMsOC4xLTEuOTYyLDEwLjg1MmExMS44LDExLjgsMCwwLDEsMy4xMzQsMTIuNTlDMzY1Ljc5MSw1MDcuMzQxLDM2MS40NCw1MTAuODExLDM1OC4yLDUxMC44ODRaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMjIyLjk4MSAtNDYuNDA3KSIgZmlsbD0iIzBkMGQwZCIvPjxwYXRoIGQ9Ik04NjUuMDQ1LDI3Ny4yOTNoLTQuNDNWMTU1Ljk0M0E3MC4yMzYsNzAuMjM2LDAsMCwwLDc5MC4zOCw4NS43MDdINTMzLjI4YTcwLjIzNiw3MC4yMzYsMCwwLDAtNzAuMjM2LDcwLjIzNlY4MjEuNjg3YTcwLjIzNiw3MC4yMzYsMCwwLDAsNzAuMjM2LDcwLjIzNmgyNTcuMWE3MC4yMzYsNzAuMjM2LDAsMCwwLDcwLjIzNS03MC4yMzRWMzYzLjY3Nmg0LjQzWiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTIwOC43NjEgLTg1LjcwNykiIGZpbGw9IiNlNmU2ZTYiLz48cGF0aCBkPSJNODQzLjc4LDE1NC42NTRWODE5LjQyMWE1Mi40NTMsNTIuNDUzLDAsMCwxLTUyLjQ1Miw1Mi40NTNINTMyLjk5M2E1Mi40NTMsNTIuNDUzLDAsMCwxLTUyLjQ1My01Mi40NDdWMTU0LjY1NEE1Mi40NTQsNTIuNDU0LDAsMCwxLDUzMi45OTIsMTAyLjJoMzEuMzQzYTI0LjkzMiwyNC45MzIsMCwwLDAsMjMuMDc1LDM0LjMzSDczNC43YTI0LjkzMywyNC45MzMsMCwwLDAsMjMuMDc1LTM0LjMzaDMzLjU1NWE1Mi40NTQsNTIuNDU0LDAsMCwxLDUyLjQ1Myw1Mi40NTFaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMjA2Ljg3NiAtODMuOTMpIiBmaWxsPSIjZmZmIi8+PHBhdGggZD0iTTgxMC4yNDYsNDM4LjU2NGExMy40MzksMTMuNDM5LDAsMCwwLTEyLjYyLTguODczSDUyMC44ODdBMTMuNCwxMy40LDAsMCwwLDUwNy40NzgsNDQzLjFWNjU1LjQ2OWExMy40MjgsMTMuNDI4LDAsMCwwLDEzLjQwOSwxMy40MDlINzk3LjYyNmExMy40MjgsMTMuNDI4LDAsMCwwLDEzLjQwOS0xMy40MDlWNDQzLjFhMTMuMzEsMTMuMzEsMCwwLDAtLjc4OS00LjUzNloiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0yMDMuOTcyIC00OC42MzQpIiBmaWxsPSIjY2VjZWNlIi8+PHBhdGggZD0iTTgxMC4yNDYsMTk3Ljc2MWExMy40MzksMTMuNDM5LDAsMCwwLTEyLjYyLTguODczSDUyMC44ODdBMTMuNCwxMy40LDAsMCwwLDUwNy40NzgsMjAyLjNWNDE0LjY2NmExMy40MjgsMTMuNDI4LDAsMCwwLDEzLjQwOSwxMy40MDlINzk3LjYyNmExMy40MjgsMTMuNDI4LDAsMCwwLDEzLjQwOS0xMy40MDlWMjAyLjNhMTMuMzA5LDEzLjMwOSwwLDAsMC0uNzg5LTQuNTM2WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTIwMy45NzIgLTc0LjU4NykiIGZpbGw9IiNmZmYiLz48cGF0aCBkPSJNODEwLjI0NiwxOTcuNzYxYTEzLjQzOSwxMy40MzksMCwwLDAtMTIuNjItOC44NzNINTIwLjg4N0ExMy40LDEzLjQsMCwwLDAsNTA3LjQ3OCwyMDIuM1Y0MTQuNjY2YTEzLjQyOCwxMy40MjgsMCwwLDAsMTMuNDA5LDEzLjQwOUg3OTcuNjI2YTEzLjQyOCwxMy40MjgsMCwwLDAsMTMuNDA5LTEzLjQwOVYyMDIuM2ExMy4zMDksMTMuMzA5LDAsMCwwLS43ODktNC41MzZabS0uNzg5LDIxNi45YTExLjg0NiwxMS44NDYsMCwwLDEtMTEuODMyLDExLjgzMkg1MjAuODg3YTExLjg0NiwxMS44NDYsMCwwLDEtMTEuODMyLTExLjgzMlYyMDIuMjkzYTExLjg0NiwxMS44NDYsMCwwLDEsMTEuODMyLTExLjgzMmgyNzYuNzRhMTEuODQ2LDExLjg0NiwwLDAsMSwxMS44MzIsMTEuODMyWiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTIwMy45NzIgLTc0LjU4NykiIGZpbGw9IiMzMTMxMzEiLz48cGF0aCBkPSJNNzg3LjQ1MiwyMTUuMDQ2VjM2My4zMzVhMy43MzIsMy43MzIsMCwwLDEtMy43MzEsMy43MzNINTMxLjk4OWEzLjE0OCwzLjE0OCwwLDAsMS0uNTM0LS4wNDIsMy43MywzLjczLDAsMCwxLTMuMi0zLjY5MVYyMTUuMDQ2YTMuNzMyLDMuNzMyLDAsMCwxLDMuNzMxLTMuNzMzSDc4My43MTlhMy43MzIsMy43MzIsMCwwLDEsMy43MzMsMy43MzFaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMjAxLjczMiAtNzIuMTY5KSIgZmlsbD0iI2U2ZTZlNiIvPjxjaXJjbGUgY3g9IjMyLjc1MyIgY3k9IjMyLjc1MyIgcj0iMzIuNzUzIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgzNTcuMjI1IDE2MS44MDcpIiBmaWxsPSIjNzMxNDE0Ii8+PHBhdGggZD0iTTY5My45NDYsMzY1LjUyNkg1MzMuMjY4YTMuMjczLDMuMjczLDAsMCwxLS42LS4wNDhsNzUuOTkzLTEzMS42M2E1LjMyMSw1LjMyMSwwLDAsMSw5LjI2MiwwbDUxLDg4LjMzNSwyLjQ0Myw0LjIyN1oiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0yMDEuMjU3IC03MC4wMzIpIiBmaWxsPSIjMzEzMTMxIi8+PHBhdGggZD0iTTQ1MC4wODcsMjcwLjk2SDM5NS4yMzNsMjYuOTMxLTM5LjExOCwxLjkzOS0yLjgxNy45NjktMS40MDksMi40NDMsNC4yMjZaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0Mi41OTcgMjQuNTMyKSIgb3BhY2l0eT0iMC4yIiBzdHlsZT0iaXNvbGF0aW9uOmlzb2xhdGUiLz48cGF0aCBkPSJNNzcyLjUzNywzNjEuNzUxSDYzMy41NmwyNi45My0zOS4xMTgsMS45MzgtMi44MTgsMzUuMDkzLTUwLjk3N2MyLjMtMy4zNCw3LjgzNS0zLjU0OSwxMC41NC0uNjMxYTYuMzU3LDYuMzU3LDAsMCwxLC41MDYuNjMxWiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTE5MC4zODMgLTY2LjI1OCkiIGZpbGw9IiMzMTMxMzEiLz48cGF0aCBkPSJNNzQ1LjY2Miw0NDkuNzYxYTEzLjQzOSwxMy40MzksMCwwLDAtMTIuNjItOC44NzNINDU2LjNBMTMuNCwxMy40LDAsMCwwLDQ0Mi44OTQsNDU0LjNWNjY2LjY2NkExMy40MjgsMTMuNDI4LDAsMCwwLDQ1Ni4zLDY4MC4wNzVINzMzLjA0MWExMy40MjgsMTMuNDI4LDAsMCwwLDEzLjQwOS0xMy40MDlWNDU0LjNhMTMuMzA2LDEzLjMwNiwwLDAsMC0uNzg5LTQuNTM2WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTIxMC45MzIgLTQ3LjQyNykiIGZpbGw9IiNmZmYiLz48cGF0aCBkPSJNNzQ1LjY2Miw0NDkuNzYxYTEzLjQzOSwxMy40MzksMCwwLDAtMTIuNjItOC44NzNINDU2LjNBMTMuNCwxMy40LDAsMCwwLDQ0Mi44OTQsNDU0LjNWNjY2LjY2NkExMy40MjgsMTMuNDI4LDAsMCwwLDQ1Ni4zLDY4MC4wNzVINzMzLjA0MWExMy40MjgsMTMuNDI4LDAsMCwwLDEzLjQwOS0xMy40MDlWNDU0LjNhMTMuMzA2LDEzLjMwNiwwLDAsMC0uNzg5LTQuNTM2Wm0tLjc4MywyMTYuOWExMS44NDYsMTEuODQ2LDAsMCwxLTExLjgzMiwxMS44MzJINDU2LjNhMTEuODQ2LDExLjg0NiwwLDAsMS0xMS44MzItMTEuODMyVjQ1NC4yOTNBMTEuODQ2LDExLjg0NiwwLDAsMSw0NTYuMyw0NDIuNDYySDczMy4wNDFhMTEuODQ2LDExLjg0NiwwLDAsMSwxMS44MzIsMTEuODMyWiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTIxMC45MzIgLTQ3LjQyNykiIGZpbGw9IiMzMTMxMzEiLz48cGF0aCBkPSJNNzIyLjg2OCw0NjcuMDQ2VjYxNS4zMzVhMy43MzIsMy43MzIsMCwwLDEtMy43MzEsMy43MzNINDY3LjQwNWEzLjE0OSwzLjE0OSwwLDAsMS0uNTM1LS4wNDIsMy43MywzLjczLDAsMCwxLTMuMi0zLjY5MVY0NjcuMDQ2YTMuNzMyLDMuNzMyLDAsMCwxLDMuNzMxLTMuNzMzSDcxOS4xMzVhMy43MzIsMy43MzIsMCwwLDEsMy43MzMsMy43MzFaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMjA4LjY5MyAtNDUuMDExKSIgZmlsbD0iI2U2ZTZlNiIvPjxjaXJjbGUgY3g9IjMyLjc1MyIgY3k9IjMyLjc1MyIgcj0iMzIuNzUzIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyODUuNjggNDQwLjk2NikiIGZpbGw9IiM3MzE0MTQiLz48cGF0aCBkPSJNNjI5LjM2MSw2MTcuNTI2SDQ2OC42ODRhMy4yNjMsMy4yNjMsMCwwLDEtLjYtLjA0OGw3NS45OTMtMTMxLjYzYTUuMzIxLDUuMzIxLDAsMCwxLDkuMjYyLDBsNTEsODguMzM1LDIuNDQzLDQuMjI3WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTIwOC4yMTggLTQyLjg3MykiIGZpbGw9IiMzMTMxMzEiLz48cGF0aCBkPSJNMzg1LjUwNyw1MjIuOTZIMzMwLjY0OGwyNi45MzEtMzkuMTE4LDEuOTM5LTIuODE3Ljk2OS0xLjQwOSwyLjQ0Myw0LjIyNloiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDM1LjYzNiA1MS42OTEpIiBvcGFjaXR5PSIwLjIiIHN0eWxlPSJpc29sYXRpb246aXNvbGF0ZSIvPjxwYXRoIGQ9Ik03MDcuOTUyLDYxMy43NTFINTY4Ljk3NWwyNi45MzEtMzkuMTE4LDEuOTM3LTIuODE4LDM1LjA5My01MC45NzdjMi4zLTMuMzQsNy44MzUtMy41NDksMTAuNTQtLjYzMWE2LjM1Niw2LjM1NiwwLDAsMSwuNTA2LjYzMVoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xOTcuMzQ0IC0zOS4wOTgpIiBmaWxsPSIjMzEzMTMxIi8+PHBhdGggZD0iTTYxNC4wOTEsNzMzLjI4MUg1MzQuMzMzYTIwLjQ5NCwyMC40OTQsMCwxLDEsMC00MC45ODhoNzkuNzU5YTIwLjQ5NCwyMC40OTQsMCwxLDEsMCw0MC45ODhaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMjAzLjI4NiAtMjAuMzMyKSIgZmlsbD0iIzczMTQxNCIvPjxwYXRoIGQ9Ik03NTcuMTc1LDczMy4yODFINjc3LjQxNmEyMC40OTQsMjAuNDk0LDAsMCwxLDAtNDAuOTg4aDc5Ljc1OWEyMC40OTQsMjAuNDk0LDAsMSwxLDAsNDAuOTg4WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTE4Ny44NjUgLTIwLjMzMikiIGZpbGw9IiNjZWNlY2UiLz48cGF0aCBkPSJNMTA0NC4zOTMsODE0LjUwOUgyMzQuNjA4YTEuMTA3LDEuMTA3LDAsMSwxLDAtMi4yMTVoODA5Ljc4NWExLjEwNywxLjEwNywwLDAsMSwwLDIuMjE1WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTIzMy41IC03LjM5OCkiIGZpbGw9IiMzMTMxMzEiLz48L3N2Zz4=" alt="Ressources" class="img-fluid my-4" style="max-width:300px">
            <p>One of the necessary pages was the upload page. Users can add films into the database (title, year, image of the movie and description). We only had less than 12h to make the integration, so we only needed to create the request.</p>
          </b-col>
          <b-col cols="12" sm="6" class="my-5">
            <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2NjEuMjgiIGhlaWdodD0iNzYyLjg5NyIgdmlld0JveD0iMCAwIDY2MS4yOCA3NjIuODk3Ij48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNDE3LjA1IC0zNC43MSkiPjxlbGxpcHNlIGN4PSIzMzAuNjQiIGN5PSIxMS4yMzIiIHJ4PSIzMzAuNjQiIHJ5PSIxMS4yMzIiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQxNy4wNSA3NzUuMTQzKSIgZmlsbD0iIzJiMTAxMCIgb3BhY2l0eT0iMC4xIi8+PHBhdGggZD0iTTc5OS4zMjIsNzMwLjE3NEg3ODguNDQ1bC03OS41NTgtNDEwLjctMTAuMiw0MTAuN0g2ODcuMTM0TDY3NC4yMSwzMjAuMTYsNTk2LjY4OCw3MzAuMTc0SDU4NC40NWw1Mi42OTEtNDIyLjEyOSwxLjcxNy0xMy43MjFMNzQyLjIxNiwyODIuNzZsMy4yMTMsMjUuMjg1WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMzcuODcgNTYuMTE2KSIgZmlsbD0iIzQ2NDM1MyIvPjxyZWN0IHdpZHRoPSI2NS43ODciIGhlaWdodD0iNDAuNzk3IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg1NTEuODQ5IDI1Ni41NDcpIiBmaWxsPSIjNDY0MzUzIi8+PHBhdGggZD0iTTg2My4wNSwzMTYuMjU0bDM5Ljc3OS0xNi4wNjRoOC43MTlhNC43OTQsNC43OTQsMCwwLDEsNC43OTQsNC43OTVWNDE3LjAxM2E0Ljc5NCw0Ljc5NCwwLDAsMS00Ljc5NCw0Ljc5NWgtOC43MTlMODYzLjA1LDQwNS4yNDFaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg3MC41MTIgLTc3LjU0OCkiIGZpbGw9IiM0NjQzNTMiLz48cmVjdCB3aWR0aD0iODEuMzM2IiBoZWlnaHQ9Ijc4Ljc4NSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoODUyLjIyNiAyNDMuODA2KSIgZmlsbD0iIzQ2NDM1MyIvPjxyZWN0IHdpZHRoPSI1Mi4zNiIgaGVpZ2h0PSI5LjUxNiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNzExLjAzOCA5NS44MjUpIiBmaWxsPSIjMGQwZDBkIi8+PHJlY3Qgd2lkdGg9IjE0Ny4zOCIgaGVpZ2h0PSIxMDcuNjAxIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg2NTEuMjk2IDEwOC4xNDkpIiBmaWxsPSIjMGQwZDBkIi8+PHJlY3Qgd2lkdGg9IjE0Ny4zOCIgaGVpZ2h0PSIxMi43NTMiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDY1MS4yOTYgMjAzLjAxKSIgb3BhY2l0eT0iMC4xIi8+PHJlY3Qgd2lkdGg9IjMuMjk5IiBoZWlnaHQ9Ijc4Ljc4NSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoODUwLjk2MyAyNDMuODA2KSIgb3BhY2l0eT0iMC4xIi8+PHJlY3Qgd2lkdGg9IjIyLjQ0IiBoZWlnaHQ9IjQwLjc5NyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNTk1LjE5NiAyNTYuNTQ3KSIgb3BhY2l0eT0iMC4xIi8+PHBhdGggZD0iTTczNS43MDgsMzA4LjA0NUg2MjcuNDJsMS43MTctMTMuNzIxTDczMi41LDI4Mi43NloiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQ3LjU5MSA1Ni4xMTYpIiBvcGFjaXR5PSIwLjEiLz48cmVjdCB3aWR0aD0iMjU0Ljk4MiIgaGVpZ2h0PSIxNTcuMDY3IiByeD0iMTAuNyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNTk3LjIzMiAyMDUuMDQ1KSIgZmlsbD0iIzBkMGQwZCIvPjxwYXRoIGQ9Ik04MzguODE0LDIwMS4wN2guNzczdjg4Ljk4N2gtLjc3M2E2LjM2NCw2LjM2NCwwLDAsMS02LjM2NC02LjM2NFYyMDcuNDM0QTYuMzY0LDYuMzY0LDAsMCwxLDgzOC44MTQsMjAxLjA3WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoOTMuOTc1IDM3LjYzNSkiIGZpbGw9IiMwZDBkMGQiLz48cGF0aCBkPSJNODcwLjcxLDE4OGg4LjI1MmE1LjI2MSw1LjI2MSwwLDAsMSw1LjI2LDUuMjZWMzA0LjM4MWE1LjI2MSw1LjI2MSwwLDAsMS01LjI2LDUuMjYxSDg3MC43MVoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEwMi42MyAzNC42NzgpIiBmaWxsPSIjMGQwZDBkIi8+PHJlY3Qgd2lkdGg9IjExLjczNSIgaGVpZ2h0PSI0MC43OTciIHRyYW5zZm9ybT0idHJhbnNsYXRlKDU1MS44NDkgMjU2LjU0NykiIG9wYWNpdHk9IjAuMSIvPjxyZWN0IHdpZHRoPSIyMi45NDMiIGhlaWdodD0iNjkuMzU1IiByeD0iNy4yIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg1MzguNTk0IDI0My44MDYpIiBmaWxsPSIjMGQwZDBkIi8+PGNpcmNsZSBjeD0iNzMuNDM5IiBjeT0iNzMuNDM5IiByPSI3My40MzkiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDU3Ny44NTcgMzQuNzEpIiBmaWxsPSIjNDY0MzUzIi8+PGNpcmNsZSBjeD0iNTUuMDgyIiBjeT0iNTUuMDgyIiByPSI1NS4wODIiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDU5Ni4yMTQgNTMuMDY3KSIgZmlsbD0iIzJiMTAxMCIvPjxjaXJjbGUgY3g9IjUzLjU0OSIgY3k9IjUzLjU0OSIgcj0iNTMuNTQ5IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg3MzMuOTA3IDU2LjEzMikiIGZpbGw9IiM0NjQzNTMiLz48Y2lyY2xlIGN4PSI0MC4xNTkiIGN5PSI0MC4xNTkiIHI9IjQwLjE1OSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNzQ3LjI5OCA2OS41MjMpIiBmaWxsPSIjMmIxMDEwIi8+PGNpcmNsZSBjeD0iNy4wNTEiIGN5PSI3LjA1MSIgcj0iNy4wNTEiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDc3Ni4yNDkgMjIxLjM2NikiIGZpbGw9IiMyYjEwMTAiLz48Y2lyY2xlIGN4PSI3LjA1MSIgY3k9IjcuMDUxIiByPSI3LjA1MSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNzk4LjY3NyAyMjEuMzY2KSIgZmlsbD0iIzJiMTAxMCIgb3BhY2l0eT0iMC41Ii8+PHBhdGggZD0iTTY5My40NzcsMzI4LjMxM2MtMTAuOTI2LTMuNDA5LTI3LjY2NC0zLjUwNy0zMC43NTQsMjUuNzUxLTQuNTc0LTEwLjgxNS03LjQ0My0yMC4wMjQtNy40NDMtMjAuMDI0bDMzLjU1LTE0LjJTNjkwLjg5LDMyMy4xMjYsNjkzLjQ3NywzMjguMzEzWiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjMuNTA4IC03My4xMDMpIiBvcGFjaXR5PSIwLjEiLz48cGF0aCBkPSJNNTk3LjM3MSwyOTQuMjZzLTEzLjQ4OCwxNS44NjctMTEuMDM2LDI0LjUyNVoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDcuODQ0IC03OC44OSkiIG9wYWNpdHk9IjAuMSIvPjxwYXRoIGQ9Ik02MjcuMjQyLDMwMC42UzYwNywzMTguNTc3LDYwOS45NjUsMzIwLjYyNFoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEzLjE5IC03Ny40NTYpIiBvcGFjaXR5PSIwLjEiLz48cGF0aCBkPSJNNjM0LjQsMzE4LjYxcy0yLjA0OCwxMS44MjEsMS4yMjYsMTIuMjYyWiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTguNjQxIC03My4zODEpIiBvcGFjaXR5PSIwLjEiLz48ZWxsaXBzZSBjeD0iMzUuOTA0IiBjeT0iNi4wNyIgcng9IjM1LjkwNCIgcnk9IjYuMDciIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQ4NS43NDMgNzUzLjAzNCkiIGZpbGw9IiMyYjEwMTAiIG9wYWNpdHk9IjAuMSIvPjwvZz48L3N2Zz4=" alt="Ressources" class="img-fluid my-4" style="max-width:250px">
            <p>For the filmography page, I used a typical camera to represent film making. I kept the presentation of his movie identical because of the coherence and because of Vue.js (import data via flux.json and v-model).</p>
          </b-col>
          
        </b-row>
      </div>

       
           
      <div class="my-5">
        <router-link to="/fly">
          <h3 class="next">Projet suivant : Fly New <i class="far fa-play-circle ml-2"></i></h3>
        </router-link>
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
  name: 'Coppola',
  data () {
   return {
      donnees :[]
    }
  },

  created(){
        //lecture json directement avec Axios (json dans static)
        axios.get('static/coppola.json')
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

  

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

#coppola{
  background-image: url("https://cecile-gaultier.fr/static/img/coppola-front.418b55d.jpg");
  content: "";
  background-repeat: no-repeat;
  margin-left: .5rem;
  margin: 0;
  background-position-y: bottom;
}


#coppola2 h3{
  border-left: #af1f28 3px solid;
  padding-left: .5rem;
  margin-bottom: 3rem;
  font-size: 2.5rem;
  margin-top: 12rem;
}

i{
  padding-top: 0;
}


</style>
