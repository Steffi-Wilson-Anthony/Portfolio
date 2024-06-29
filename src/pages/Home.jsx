import { useState, Suspense, useEffect } from 'react'
import { Canvas } from '@react-three/fiber'
import Loader from '../components/Loader'
import Robot from '../models/Robot';
import HomeInfo from '../components/HomeInfo';
import Capsule from '../models/Capsule';
import Somerobot from '../models/Somerobot';
import Monitor from '../models/Monitor';
import Lab from '../components/Lab';
import Popup from '../components/Popup';

const Home = () => {
  const [isRotating, setIsRotating] = useState(false);
  const [currentAnimation, setCurrentAnimation] = useState('Experiment');
  const [capsuleAnimation, setCapsuleAnimation] = useState('Open_Capsule');
  const [robotAnimation, setRobotAnimation] = useState('Open_Capsule');
  const [monitorAnimation, setMonitorAnimation] = useState('Take 001');
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if(isOpen && window.innerWidth < 768){
      document.body.classList.add("overflow-y-hidden");
    }else{
      document.body.classList.remove("overflow-y-hidden");
    }
  })

  const adjustRobotForScreenSize = () => {
    let screenScale = null;
    let screenPosition = null;
    let rotation = [0, 0, 0];

    if(window.innerWidth < 768){
      screenScale = [1.125, 1.125, 1.125];
      screenPosition = [0, -2, 0];
    }
    else{
      screenScale = [1.8, 1.8, 1.8];
      screenPosition = [0, -3, -3];
    }

    return [screenScale, screenPosition, rotation]
  }

  const adjustRightForScreenSize = () => {
    let capsuleScale, capsulePosition;
    let someRobotPosition, someRobotScale;
    let monitorScale, monitorPosition;

    if(window.innerWidth < 768){
      capsuleScale = [0.022, 0.022, 0.022];
      capsulePosition = [2, -5, -10];

      someRobotPosition = [2, -0.9, -10.2];
      someRobotScale = [3, 3, 3];

      monitorScale = [168, 168, 168];
      monitorPosition = [-5, 1.5, -35];
    }else{
      capsuleScale = [0.022, 0.022, 0.022];
      capsulePosition = [2, -5, -10];

      someRobotPosition = [2, -0.9, -10.2];
      someRobotScale = [3, 3, 3];

      monitorScale = [185, 185, 185];
      monitorPosition = [-5, 1.5, -35];
    }

    return [capsuleScale, capsulePosition, someRobotPosition, someRobotScale, monitorPosition, monitorScale]
  }

  const [robotScale, robotPosition, robotRotation] = adjustRobotForScreenSize();
  const [capsuleScale, capsulePosition, someRobotPosition, someRobotScale, monitorPosition, monitorScale] = adjustRightForScreenSize();

  return (
    <section className='w-full h-screen relative flex lg:flex-row flex-col'>

      <div>
        { isOpen 
          ? <Popup
            isOpen = {isOpen}
           setIsOpen = {setIsOpen}
          />
          : null
        }
      </div>

      <div className='flex-1 min-w-[50%] min-h-screen flex flex-col'>

        <div className='flex items-center justify-center'>
          <div className='absolute top-28 z-10 bg-blue-500
          hologram-bg hologram-glow animate-hologram rounded-lg p-5 text-center'>
            <HomeInfo
              isOpen = {isOpen}
              setIsOpen = {setIsOpen}
            />
          </div>
        </div>

      

        <Canvas 
          className={`absolute w-full h-screen bg-black ${isRotating
          ? 'cursor-grabbing' : 'cursor-grab'} `}
          camera = {{near: 0.1, far: 1000}}
        >
          <Suspense fallback = {< Loader />}>
            <Robot 
              isRotating = {isRotating}
              setIsRotating = {setIsRotating}
              position = {robotPosition}
              scale = {robotScale}
              currentAnimation={currentAnimation}
              rotation = {robotRotation}
            />
          </Suspense>

        </Canvas>

      </div>

      <div className='flex-1 min-w-[50%] min-h-screen flex flex-col'>

        <Canvas
          className={`absolute w-full h-screen bg-black ${isRotating
            ? 'cursor-grabbing' : 'cursor-grab'} `}
            camera = {{near: 0.1, far: 1000}}
        >

          <directionalLight color = {0x0000ff} intensity = {1.5} position = {[0, 0, 1]}/>
          <ambientLight intensity={0.5} />
          <hemisphereLight color = {0x0000ff} />

            <Suspense fallback = {<Loader/>}>
            <Capsule
              isRotating = {isRotating}
              setIsRotating = {setIsRotating}
              capsuleAnimation = {capsuleAnimation}
              position = {capsulePosition}
              rotation = {[0.2, -0.9, 0]}
              scale = {capsuleScale}
            />
            <Somerobot
              isRotating = {isRotating}
              setIsRotating={setIsRotating}
              position = {someRobotPosition}
              rotation = {[0, -0.6, 0]}
              scale = {someRobotScale}
            />

            <Monitor
              monitorAnimation = {monitorAnimation}
              scale = {monitorScale}
              position = {monitorPosition}
            />
            </Suspense>
        </Canvas>

        <div>
          <div className='absolute custom-margin z-10 bg-blue-500
          lab-bg lab-glow animate-lab rounded-lg p-5 text-center'>
            <Lab/>
          </div>
        </div>

        
      </div>

    </section>
  )
}

export default Home