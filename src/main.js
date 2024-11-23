import * as slint from "slint-ui";

let ui = slint.loadFile("ui/app-window.slint", { style: "material-dark" });
let window = new ui.AppWindow();

await window.run();
