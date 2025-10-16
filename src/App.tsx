import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import Plane from './components/Plane'

function App(): JSX.Element {
  return (
    <Canvas>
      <OrbitControls />
      <Plane />
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
    </Canvas>
  )
}

export default App
