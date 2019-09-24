export default class CreateTooltip {
  constructor() {
    this.canvas1 = document.getElementById("tooltipCanvas");
    this.canvas2 = document.getElementById("mainCanvas");
    this.context1 = this.canvas1.getContext("2d");
    this.tooltip = this.tooltip.bind(this);
  }
  tooltip(x, y, text) {
    this.context1.clearRect(0, 0, 640, 480);
    this.canvas1.style.position = "absolute";
    this.canvas1.style.top = `${y - 140}px`;
    this.canvas1.style.left = `${x - 140}px`;
    this.context1.font = "Bold 17px Arial";
    const cornerRadius = 30;
    const radius = 8;
    var metrics = this.context1.measureText(text);
    var width = metrics.width;
    this.context1.beginPath();
    this.context1.lineJoin = "round";
    this.context1.strokeStyle = "rgba(0,0,0,0.85)";
    this.context1.lineWidth = 3;
    if (x <= this.canvas2.width / 2) {
      this.context1.arc(140, 140, radius, 0, 2 * Math.PI);
      this.context1.stroke();
      this.context1.moveTo(134, 134);
      this.context1.lineTo(55, 55);
      this.context1.stroke();
      this.context1.fillStyle = "rgba(0,0,0,0.85)"; // white filler
      this.context1.lineWidth = cornerRadius;
      this.context1.strokeRect(
        0 + cornerRadius / 2,
        30 + cornerRadius / 2,
        width,
        0
      );
      this.context1.fillStyle = "rgba(255,255,255,0.95)"; // text color
      this.context1.fillText(text, 15, 50);
    } else {
      this.canvas1.style.top = `${y - 140}px`;
      this.canvas1.style.left = `${x - 10}px`;
      this.context1.arc(10, 140, radius, 0, 2 * Math.PI);
      this.context1.stroke();
      this.context1.moveTo(15, 138);
      this.context1.lineTo(85, 65);
      this.context1.stroke();
      this.context1.fillStyle = "rgba(0,0,0,0.85)"; // white filler
      this.context1.lineWidth = cornerRadius;
      this.context1.strokeRect(
        73 + cornerRadius / 2,
        40 + cornerRadius / 2,
        width,
        0
      );
      this.context1.fillStyle = "rgba(255,255,255,0.95)"; // text color
      this.context1.fillText(text, 87, 60);
    }
  }
}
