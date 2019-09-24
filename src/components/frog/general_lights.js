import THREE from "../three";

class GeneralLight {
  constructor(scene) {
    this.scene = scene;
    this.ambientLight = new THREE.AmbientLight("#fff", 2);
    this.directionalLight = new THREE.DirectionalLight(0x2a2a2a, 3);
    this.directionalLight.position.x = 0;
    this.directionalLight.position.y = 0.3;
    this.directionalLight.position.z = -1;
    this.directionalLight.rotation.x = Math.PI / 4;
    this.directionalLight.position.normalize();

    this.scene.add(this.ambientLight);
    this.scene.add(this.directionalLight);
  }
  update() {
    // If needed
  }
}

export default GeneralLight;
