import * as THREE from '../../lib/three.js/three.module.js';

function cartesianFromSpherical(radius: number, altitude: number, azimuth: number): THREE.Vector3 {
  const cylRadius = radius * Math.sin(altitude);
  const cylHeight = radius * Math.cos(altitude);
  const cylRotation = azimuth;

  const x = cylRadius * Math.cos(cylRotation);
  const y = cylRadius * Math.sin(cylRotation);
  const z = cylHeight;

  return new THREE.Vector3(x, y, z);
}

function sphericalFromCartesian(coords: THREE.Vector3) {
  const cylRadius = radius * Math.sin(altitude);
  const cylHeight = radius * Math.cos(altitude);
  const cylRotation = azimuth;
}

export { cartesianFromSpherical };