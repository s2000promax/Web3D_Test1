
import React, { Suspense, useRef, useState } from "react";


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
 


import "../App.css";
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
      <boxBufferGeometry attach="geometry" args={[0, 0, 0]} />
      <meshStandardMaterial
        attach="material"
        //transparent
        color="red"
        opacity={0.5}
      />
    </mesh>
  );
}

function DrawCAD() {
    return(
        <>
        <Canvas id="nav" camera={{ position: [0, 150, -700] }} >
             {
          <Controls
            autoRotate={camEn} 
            enablePan={true}
            enableZoom={true}
            enableDamping={true}
            dampingFactor={0.5}
            rotateSpeed={0.1}
          />
             }
          <ambientLight intensity={0.5} />
          <spotLight intensity={0.8} position={[1000, -500, 1000]} />
          <spotLight intensity={0.8} position={[-1000, 500, -1000]} />
          
              
            <Model />
            <Model2 />
            <Model3 />
            <Model4 />
            
                      
            
            
        
        
          
          
        </Canvas>
        
        
          </>
    
    )
}

function DrawCAD2() {
  return(
      <>
      <Canvas id="nav2" camera={{ position: [0, 150, -700] }} >
        {/*
        <Controls
          autoRotate={camEn} 
          enablePan={true}
          enableZoom={true}
          enableDamping={true}
          dampingFactor={0.5}
          rotateSpeed={0.1}
        />

*/}
        <ambientLight intensity={0.5} />
        <spotLight intensity={0.8} position={[1000, -500, 1000]} />
        <spotLight intensity={0.8} position={[-1000, 500, -1000]} />
        <Suspense fallback={<Box />}>
            
          
          <Model5 />
          
               
                  
      
      
        </Suspense>
        
      </Canvas>
      
      
        </>
  
  )
}

let camEn=true;
var hh=2;


const handleClick = () => { 
    
         //camEn = false;
         <Canvas id="nav" camera={{ position: [0, 150, -400] }} > 
               {/* <Controls autoRotate={false} />*/}
         </Canvas>
         hh++;
         alert(hh);
                  
    
        }
    
const myButton = (
<button onClick={handleClick}>Stop Animated
  </button>  
)

const myButton2 = (
    <button>Test + '{hh}'
    </button>

)

//const But1 = new Rect.button;
/**
 * Usage:
 *  var exporter = new THREE.STLExporter();
 *
 *  // second argument is a list of options
 *  var data = exporter.parse( mesh, { binary: true } );
 *
 */
var exporter = new STLExporter();

//var data = exporter.parse(mesh, {binary: true});


function WebForm3dFunc() {
    
  return (
     
     

<body>

  <header id="header"> 
  
  <button id="exp1" >Export 2D
  </button>

  <button id="exp2">Export 3D
  </button>
<a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</a>
  
  
  
  </header>
  
  <nav id="nav"> <DrawCAD /> </nav>
  
  
</body>


  );
}

export default WebForm3dFunc;
