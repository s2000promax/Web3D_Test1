import React, {useRef} from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import {IncrementCreator, DecrementCreator} from '../BLL/reducers/globalReducers';
import styles from './WebForm3d.module.css';

import { STLLoader } from "three/examples/jsm/loaders/STLLoader";
import cadModel from "../assets/part1.STL";

import {MeshLambertMaterial, Mesh, Scene, RectAreaLight  } from "three";
import {Canvas, useLoader, useThree, useFrame, extend  } from "react-three-fiber";

import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

import { useDrag } from 'react-use-gesture'
import { useSpring, a } from '@react-spring/three'


const scene = new Scene();

class WebFor3dContainer extends React.Component {


    componentDidMount() {
  
    }


    
    render(){
        
        let modelFromStl = () => {
            debugger;
            let loader = new STLLoader();
            
        
            loader.load(cadModel, function(geometry) {
                let material = new MeshLambertMaterial({color: "red", specular: 0x111111, shininess: 200});
                let mesh = new Mesh(geometry, material);
                scene.add(mesh);
                debugger;
            });
        
            return (<primitive object={scene} position={[0,0,0]}/>);
        }
                       
        

        return(<div>
<header className={styles.headerStyle} >
    <button className={styles.buttonStyle} >Export 2D </button>
    <button className={styles.buttonStyle} >Export 3D </button>
    <input className={styles.buttonStyleRight} type={"file"} />

</header>

<header className={styles.navStyle} >
    {
    <>
    <Canvas style={{ background: 'lightblue' }} shadowMap camera={ {position: [0, 150, -700] } }>

    <ambientLight intensity={0.5} />
          <spotLight 
          intensity={0.6} 
          position={[1000, -500, 1000]} 
          angle={0.2}
          penumbra={1}
          shadow-mapSize-width={748}
          shadow-mapSize-height={748}
          castShadow
          />
          
        <modelFromStl />  
          
       
    </Canvas>
    </>
    }
</header>

        </div>)
    }
 }


const mapStateToProps = (state) => ( { state } );

const MapDispatchToProps = {IncrementCreator, DecrementCreator};


export default compose(
    connect(mapStateToProps, MapDispatchToProps)
)(WebFor3dContainer)