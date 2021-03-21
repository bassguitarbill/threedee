import * as THREE from '../../lib/three.js/three.module.js';

const CUBE_FACE_PATHS = [
  'up.jpg', 'dn.jpg', 'lf.jpg', 'rt.jpg', 'ft.jpg', 'bk.jpg',
];

class SkyboxTexture {
  texture: THREE.CubeTexture;
  constructor(texturePath: string) {
    this.texture = initializeTexture(texturePath);
  }
}

function initializeTexture(path: string): THREE.CubeTexture{
  return new THREE.CubeTextureLoader()
    .setPath(path)
    .load(CUBE_FACE_PATHS);
}

export default SkyboxTexture;