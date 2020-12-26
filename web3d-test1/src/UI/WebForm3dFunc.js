
import React, { Suspense, useRef, useState } from "react";
import styles from './WebForm3d.module.css';


import {MeshLambertMaterial, Mesh, Scene, RectAreaLight  } from "three";

import {
  Canvas,
  useLoader,
  useThree,
  useFrame,
  extend,
} from "react-three-fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

import { STLLoader } from "three/examples/jsm/loaders/STLLoader";
//import { STLExporter } from "three/examples/jsm/exporters/STLExporter";


import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
//import model from "../assets/Test_Sketch_5.glb";
import model2 from "../assets/part1.STL";
 


//import "../App.css";
import { findAllInRenderedTree } from "react-dom/test-utils";
import { render } from "react-dom";
import { STLExporter } from "three/examples/jsm/exporters/STLExporter";



extend({ OrbitControls });

const Controls = props => {
  const { gl, camera } = useThree();
  const ref = useRef();
  useFrame(() => ref.current.update());
  return <orbitControls ref={ref} args={[camera, gl.domElement]} {...props} />;
};

 


/*
function Model() {
  const gltf = useLoader(GLTFLoader, model);
  return <primitive object={gltf.scene} position={[0, 0, 0]} />;
}
*/
/*
function Model() {
    const stl = useLoader(STLLoader, model2);
    return <primitive object={stl.scene} position={[0, 0, 0]} />;
  }
*/

/*
// Binary files - STL Import
loader.load( './stl/2.stl', function ( geometry ) {
    var material = new THREE.MeshLambertMaterial( { color: 0xFFFFFF, specular: 0x111111, shininess: 200 } );
    var mesh = new THREE.Mesh( geometry, material );
    mesh.position.set( 0, 20, 0);
    scene.add( mesh );
} );
*/



//==========
// ASCII file - STL Import

const scene = new Scene();
const scene2 = new Scene();
const scene3 = new Scene();
const scene4 = new Scene();
const scene5 = new Scene();

function Model() {
var loader = new STLLoader();
loader.load( model2, function ( geometry ) {
    var material = new MeshLambertMaterial( { color: "red", specular: 0x111111, shininess: 200 } );
    var mesh = new Mesh( geometry, material );
    scene.add(mesh);  
    
} );

return <primitive object={scene} position={[-110, 0, 0]} />;
}

function Model2() {
    var loader2 = new STLLoader();
    loader2.load( model2, function ( geometry ) {
        const material = new MeshLambertMaterial( { color: "green", specular: 0x111111, shininess: 200 } );
        const mesh = new Mesh( geometry, material );
        scene2.add(mesh);  
        
    } );
    
    return <primitive object={scene2} position={[0, 0, 0]} />;
    }

    function Model3() {
        var loader = new STLLoader();
        loader.load( model2, function ( geometry ) {
            var material = new MeshLambertMaterial( { color: "orange", specular: 0x111111, shininess: 200 } );
            var mesh = new Mesh( geometry, material );
            scene3.add(mesh);  
            
        } );
        
        return <primitive object={scene3} position={[110, 0, 0]} />;
        }

        function Model4() {
            var loader = new STLLoader();
            loader.load( model2, function ( geometry ) {
                var material = new MeshLambertMaterial( { color: "blue", specular: 0x111111, shininess: 200 } );
                var mesh = new Mesh( geometry, material );
                scene4.add(mesh);  
                
            } );
            
            return <primitive object={scene4} position={[0, 210, 0]} />;
            }

            function Model5() {
              var loader = new STLLoader();
              loader.load( model2, function ( geometry ) {
                  var material = new MeshLambertMaterial( { color: "black", specular: 0x111111, shininess: 200 } );
                  var mesh = new Mesh( geometry, material );
                  scene5.add(mesh);  
                  
              } );
              
              return <primitive object={scene4} position={[0, 210, 0]} />;
              }
//==========



function Box() {
  return (
    <mesh>
      <boxBufferGeometry attach="geometry" args={[300, 300, 300]} />
      <meshStandardMaterial
        attach="material"
        //transparent
        color="red"
        opacity={1.0}
      />
    </mesh>
  );
}


function DrawCAD() {
    return(
        <>
        <Canvas style={{ background: 'lightblue' }} shadowMap  camera={{ position: [0, 150, -700] }} >
             {
          <Controls
            autoRotate={true} 
            enablePan={false}
            enableZoom={true}
            enableDamping={false}
            dampingFactor={0.5}
            rotateSpeed={0.1}
          />
             }
          <ambientLight intensity={0.5} />
          <spotLight 
          intensity={0.8} 
          position={[1000, -500, 1000]}
          angle={0.15}
          />

          

          <Box />
          <Model4 />
            
        </Canvas>
          </>    
    )
}




    
const OnClickButton2D = () => {
  return alert('Export2D');
}

const OnClickButton3D = () => {
  return alert('Export3D');
}

function WebForm3dFunc(props) {
    
  return ( <body>
<header className={styles.headerStyle} >
    <button className={styles.buttonStyle} onClick = {OnClickButton2D} >Export 2D </button>
    <button className={styles.buttonStyle} onClick = {OnClickButton3D} >Export 3D </button>
    <input className={styles.buttonStyleRight} type={"file"} />

</header>
  
  
<header className={styles.navStyle} >
  
   <DrawCAD />
  
  </header>
</body>
  );
}

export default WebForm3dFunc;
