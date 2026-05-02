export function SceneLighting() {
  return (
    <>
      <ambientLight intensity={0.6} />
      <directionalLight position={[5, 8, 6]} intensity={1.0} color={0xd4b47a} />
      <directionalLight position={[-8, -4, 4]} intensity={0.4} color={0x9fc4aa} />
    </>
  )
}
