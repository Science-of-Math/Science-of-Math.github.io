import { Controller } from "./stimulus.js"

export default class extends Controller {
  static targets = [ "name" ]

  connect() {
    console.log("Hello Controller", this.element);
  }
}
