function Plane(): JSX.Element {
  return (
    <mesh>
      <planeGeometry args={[2, 2]} />
      <meshStandardMaterial color="orange" />
    </mesh>
  )
}

export default Plane
