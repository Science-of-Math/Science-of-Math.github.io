// Scale Controller
import { Controller } from "./stimulus.js"

export default class extends Controller {
  static targets = [ "right", "left", "pointer" ]

  connect() {
    this.tip(0);
  }

  tip(deg) {
    const rad = deg * Math.PI / 180;
    const sin = Math.sin(rad);
    const cos = Math.cos(rad);
    const dx = cos * 500 - 500;
    const dy = sin * 500;
    this.rightTarget.setAttribute('transform', `translate(${dx} ${dy})`)
    this.leftTarget.setAttribute('transform', `translate(${-dx} ${-dy})`)
    this.pointerTarget.setAttribute('transform', `rotate(${deg})`)
  }

  move(event) {
    const { x } = event;
    const { clientWidth } = this.element;
    const { left } = this.element.getBoundingClientRect();
    const angle = ((x - left) / (clientWidth / 2.0) - 1.0) * 10;
    this.tip(angle);
  }
}
