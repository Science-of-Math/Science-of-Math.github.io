// site.js.erb
import { Application } from "./stimulus.js"
window.Stimulus = Application.start()

import hello_controller from "./hello_controller.js";
Stimulus.register("hello", hello_controller);
import scale_controller from "./scale_controller.js";
Stimulus.register("scale", scale_controller);

