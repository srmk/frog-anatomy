import THREE from "../three";

import CreateRenderer from "./create_renderer";
import CreateTooltip from "./create_tooltip";

class SceneManager extends CreateRenderer {
  constructor(
    canvas,
    screenDimensions,
    humanSystem,
    assetsLoadingTracker,
    organsOfFrog
  ) {
    super(canvas, assetsLoadingTracker);
    this.mousePosition = {
      x: 0,
      y: 0
    };
    this.canvas = canvas;
    this.humanSystem = humanSystem;
    this.organsOfFrog = organsOfFrog;
    this.screenDimensions = screenDimensions;
    this.onWindowResize = this.onWindowResize.bind(this);
    this.scene = super.buildScene();
    this.renderer = super.buildRender(screenDimensions);
    this.camera = super.buildCamera(screenDimensions);
    this.sceneSubjects = super.createSceneSubjects(this.scene);
    const { light, subject } = this.sceneSubjects;
    this.light = light;
    this.subject = subject;

    this.raycaster = new THREE.Raycaster();
    this.INTERSECTED = null;
    this.onMouseMove = this.onMouseMove.bind(this);
    this.onTouchStart = this.onTouchStart.bind(this);

    this.createTooltip = new CreateTooltip();

    window.scene = this.scene;
  }
  update() {
    if (this.scene) {
      this.subject.update(this.humanSystem);
      this.renderer.render(this.scene, this.camera);
    }
  }
  dispose() {
    this.subject = null;
    delete this.subject;
    this.scene = null;
    delete this.scene;
  }
  onWindowResize() {
    let rect = null;
    rect = this.canvas.parentElement.parentElement.getBoundingClientRect();
    const width = rect.width;
    const height = (rect.width * 9) / 16;
    this.screenDimensions.width = width;
    this.screenDimensions.height = height;

    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(width, height);
  }

  onMouseMove(e) {
    e.preventDefault();
    let _X = 0;
    let _Y = 0;
    _X = e.clientX - this.canvas.getBoundingClientRect().left;
    _Y = e.clientY - this.canvas.getBoundingClientRect().top;
    this.mousePosition.x = (_X / this.screenDimensions.width) * 2 - 1;
    this.mousePosition.y = -(_Y / this.screenDimensions.height) * 2 + 1;
    this.exploreParts(_X, _Y);
  }
  onTouchStart(e) {
    let _X = 0;
    let _Y = 0;
    _X = e.changedTouches[0].clientX - this.canvas.getBoundingClientRect().left;
    _Y = e.changedTouches[0].clientY - this.canvas.getBoundingClientRect().top;
    this.mousePosition.x = (_X / this.screenDimensions.width) * 2 - 1;
    this.mousePosition.y = -(_Y / this.screenDimensions.height) * 2 + 1;
    this.exploreParts(_X, _Y);
  }

  exploreParts(x, y) {
    this.raycaster.setFromCamera(this.mousePosition, this.camera);
    this.intersects = this.raycaster.intersectObjects(
      this.subject.intersectingPart
    );
    if (this.intersects.length > 0) {
      if (this.INTERSECTED !== this.intersects[0].object) {
        this.INTERSECTED = this.intersects[0].object;
        this.createTooltip.tooltip(x, y, this.INTERSECTED.displayName);
      }
    } else {
      this.INTERSECTED = null;
      if (this.createTooltip.context1)
        this.createTooltip.context1.clearRect(0, 0, 640, 480);
    }
  }
}

export default SceneManager;
