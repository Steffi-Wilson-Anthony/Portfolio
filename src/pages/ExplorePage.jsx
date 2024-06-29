import {Suspense, useState} from 'react';
import { Canvas } from '@react-three/fiber';
import Loader from '../components/Loader';
import Explore from '../models/Explore';

const ExplorePage = () => {
  const [islandAnimation, setIslandAnimation] = useState('Animation')

  return (
    <section className='w-full h-screen relative'>
      <Canvas className='w-full h-screen bg-transparent'
        camera = {{near:0.1, far:1000}}
      >

        <directionalLight intensity={3} />
        <ambientLight intensity = {1}/>
        <hemisphereLight intensity={1}/>
        <pointLight position = {[-0.30, 0.25, 1]} color = {0xff0400} intensity = {7}/>
        <pointLight position = {[-0.30, 0, 1]} color = {0xff7700} intensity = {18}/>
        <pointLight position = {[-0.30, 0.30, 0]} color = {0xffa000} intensity = {7}/>

        <Suspense fallback = {<Loader/>}>
          <Explore
            islandAnimation = {islandAnimation}
          />
        </Suspense>

      </Canvas>
    </section>
  )
}

export default ExplorePage