import * as THREE from '../../lib/three.js/three.module.js';
import Entity from "../Entity.js";
import Component from "../Component.js";

class CubeGeometry extends Component {
  readonly mesh: THREE.Mesh;
  constructor(readonly parent: Entity) {
    super();
    this.mesh = this.generateMesh();
  }

  generateMesh(): THREE.Mesh {
    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshPhongMaterial( { color: 0x552299 } );
    const cube = new THREE.Mesh( geometry, material );
    this.parent.game.scene.add(cube);
    return cube;
  }
}

export default CubeGeometry;