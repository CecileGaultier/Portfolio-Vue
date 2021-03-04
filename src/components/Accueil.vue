<template>
 <div>
  <b-row class="mx-0">  
    <b-col cols="12" sm="9">
      <b-col cols="12" sm="9">
          <div id="canvas"></div>
      </b-col>
    </b-col>

    <b-col cols="12" sm="3" class="legende" >
          test
    </b-col>
  </b-row>
    
 </div>
</template>

<script>

import * as THREE from '../../three.js-dev/build/three.module.js';
import { OrbitControls } from '../../three.js-dev/examples/jsm/controls/OrbitControls.js';
import { ColladaLoader } from '../../three.js-dev/examples/jsm/loaders/ColladaLoader.js';


export default {
  name: 'Accueil',
   data () {
    return {
      
    }
  },
}

var container = document.getElementById("canvas");
var renderer,camera,scene,controls;
var SCREEN_WIDTH,SCREEN_HEIGHT,SCREEN_LEFT,SCREEN_TOP;


const scene = new THREE.Scene();
			const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

			const renderer = new THREE.WebGLRenderer();
			renderer.setSize( window.innerWidth, window.innerHeight );
			document.body.appendChild( renderer.domElement );

			const geometry = new THREE.BoxGeometry();
			const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
			const cube = new THREE.Mesh( geometry, material );
			scene.add( cube );

			camera.position.z = 5;

			const animate = function () {
				requestAnimationFrame( animate );

				cube.rotation.x += 0.01;
				cube.rotation.y += 0.01;

				renderer.render( scene, camera );
			};

			animate();

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 .legende{
   background-color: cornsilk;
   padding: 0;
 }
</style>
