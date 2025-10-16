import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'

function App(): JSX.Element {
  return (
    <Canvas>
      <OrbitControls />
      <mesh>
        <planeGeometry args={[2, 2]} />
        <meshStandardMaterial color="orange" />
      </mesh>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
    </Canvas>
  )
}

export default App
