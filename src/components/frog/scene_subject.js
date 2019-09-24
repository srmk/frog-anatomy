import THREE from "../three";

import frogAnatomy from "../../media/models/frog_nervous_web_internal_v2_06.fbx";

import { anatomyConfig, partNames } from "../anatomy_config";

class SceneSubject {
  constructor(scene, manager) {
    this.canvas = document.getElementById("mainCanvas");
    this.scene = scene;
    this.mesh = null;
    this.groundMirror = null;
    this.manager = manager;
    this.loadedValue = 0;
    this.intersectingPart = [];
    this.createRotatingDisk();
    this.createMesh();
  }
  createMesh() {
    new THREE.FBXLoader(this.manager).load(frogAnatomy, object => {
      this.mesh = object;
      this.mesh.position.y = -0.7;
      this.mesh.scale.set(0.02, 0.02, 0.02);
      this.scene.add(this.mesh);
      this.mesh.traverse(child => {
        if (child.isMesh) {
          child.displayName = partNames[child.name];
          this.intersectingPart.push(child);
        }
      });
    });
  }
  createRotatingDisk() {
    var geometry = new THREE.CylinderGeometry(1.3, 1.3, 0.03, 64);
    var material = new THREE.MeshPhongMaterial({
      color: 0x2a2a2a,
      shininess: 100
    });
    this.groundMirror = new THREE.Mesh(geometry, material);
    this.groundMirror.name = "RotatingDisk";
    this.groundMirror.position.y = -0.73;
    this.scene.add(this.groundMirror);
  }
  update(humanSystem) {
    if (this.mesh !== null) {
      this.intersectingPart = [];
      let selectName = [];
      Object.keys(humanSystem).map(organ => {
        anatomyConfig.map(org => {
          if (org.id === organ) {
            selectName = org.asName;
          }
        });
        selectName.map(selected => {
          const selectedObject = this.scene.getObjectByName(selected);
          if (selectedObject !== undefined) {
            if (selectedObject.name === "frog_skin") {
              if (!humanSystem[organ]) {
                selectedObject.material.transparent = true;
                selectedObject.material.opacity = 0.25;
              } else {
                selectedObject.material.transparent = false;
                selectedObject.material.opacity = 1;
              }
            } else {
              selectedObject.visible = humanSystem[organ];
            }
          }
        });
      });
      this.mesh.traverse(child => {
        if (child.isMesh && child.visible && !child.material.transparent) {
          this.intersectingPart.push(child);
        }
      });
    }
  }
}

export default SceneSubject;
