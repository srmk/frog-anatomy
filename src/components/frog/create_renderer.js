import THREE from "../three";

import BackgroundImg from "../../media/anatomy/frog_stage.jpg";

import SceneSubject from "./scene_subject";
import GeneralLights from "./general_lights";

class CreateRenderer {
  constructor(canvas, assetsLoadingTracker) {
    this.canvas = canvas;
    this.manager = this.loadAssets();
    this.assetsLoadingTracker = assetsLoadingTracker;
  }
  loadAssets() {
    const manager = new THREE.LoadingManager();
    manager.onProgress = (url, itemsLoaded, itemsTotal) => {
      this.loadedValue = (itemsLoaded / itemsTotal) * 100;
      this.assetsLoadingTracker(this.loadedValue);
    };

    manager.onError = url => {
      console.log("There was an error loading " + url);
    };
    return manager;
  }
  buildScene() {
    const scene = new THREE.Scene();
    scene.background = new THREE.TextureLoader(this.manager).load(
      BackgroundImg
    );

    return scene;
  }

  buildRender({ width, height }) {
    const renderer = new THREE.WebGLRenderer({
      canvas: this.canvas,
      antialias: true,
      alpha: true
    });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(width / 20, height / 20);

    renderer.gammaInput = true;
    renderer.gammaOutput = true;

    return renderer;
  }

  buildCamera({ width, height }) {
    const aspectRatio = width / height;
    const fieldOfView = 25;
    const nearPlane = 0.1;
    const farPlane = 10;
    const camera = new THREE.PerspectiveCamera(
      fieldOfView,
      aspectRatio,
      nearPlane,
      farPlane
    );

    camera.position.z = 5;
    camera.lookAt(new THREE.Vector3());
    this.enableOrbitcontrols(camera);

    return camera;
  }
  enableOrbitcontrols(camera) {
    const controls = new THREE.OrbitControls(camera, this.canvas);
    controls.minPolarAngle = -Math.PI / 2;
    controls.maxPolarAngle = Math.PI / 2 + 0.1;
    controls.minDistance = 5;
    controls.maxDistance = 5;
    controls.enablePan = false;
  }

  createSceneSubjects(scene) {
    const sceneSubjects = {
      subject: new SceneSubject(scene, this.manager),
      light: new GeneralLights(scene)
    };

    return sceneSubjects;
  }
}

export default CreateRenderer;
