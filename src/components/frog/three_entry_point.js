import SceneManager from "./scene_manager";

class ThreeEntryPoint {
  constructor(container, humanSystem, assetsLoadingTracker, organsOfFrog) {
    const screenDimensions = {
      width: window.innerWidth,
      height: window.innerHeight
    };

    this.assetsLoadingTracker = assetsLoadingTracker;
    this.humanSystem = humanSystem;

    try {
      this.canvas = this.createCanvas(document, container);
      console.log(this.canvas);

      this.resizeCanvas = this.resizeCanvas.bind(this);

      this.sceneManager = new SceneManager(
        this.canvas,
        screenDimensions,
        this.humanSystem,
        this.assetsLoadingTracker,
        organsOfFrog
      );

      this.render = this.render.bind(this);
      this.mouseMove = this.mouseMove.bind(this);
      this.ontouchStart = this.ontouchStart.bind(this);
      this.bindEventListeners();
      this.render();
    } catch (e) {
      console.log("Out of Anatomy1...");
    }
  }
  upDateSystem(newSystem) {
    this.sceneManager.humanSystem = { ...newSystem };
  }
  createCanvas(document, container) {
    try {
      const canvas = document.createElement("canvas");
      canvas.setAttribute("id", "mainCanvas");
      container.appendChild(canvas);
      return canvas;
    } catch (e) {
      console.log("Out of Anatomy...");
    }
  }
  bindEventListeners() {
    window.addEventListener("resize", this.resizeCanvas);
    window.addEventListener("mousemove", this.mouseMove);
    window.addEventListener("touchstart", this.ontouchStart);
    this.resizeCanvas();
  }
  dispose() {
    window.removeEventListener("resize", this.resizeCanvas);
    window.removeEventListener("mousemove", this.mouseMove);
    window.removeEventListener("touchstart", this.ontouchStart);
    this.sceneManager.dispose();
  }
  resizeCanvas() {
    this.sceneManager.onWindowResize();
  }

  mouseMove(e) {
    this.sceneManager.onMouseMove(e);
  }
  ontouchStart(e) {
    this.sceneManager.onTouchStart(e);
  }
  render(time) {
    requestAnimationFrame(this.render);
    this.sceneManager.update();
  }
}

export default ThreeEntryPoint;
