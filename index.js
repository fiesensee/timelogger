import {App} from "./vendor/noManure";
var $ = require('./vendor/jquery.min');
window.jQuery = $;
window.$ = $;
var kube = require("./vendor/kube.min.js");
import {registerComponents} from "./appManager";

var appInstance = new App("app");
registerComponents(appInstance);

fs.readFile(app.getPath("documents") + "/time.log", (err, data) => {
    if(err){
        console.log(err);
        let emptyLog = {"logs":[]};
        fs.writeFile(app.getPath("documents") + "/time.log", JSON.stringify(emptyLog), (err) => {
            console.log(err);
            appInstance.props = emptyLog;
            appInstance.renderComponent("mainMenu");
        })
    } else {
        appInstance.props = JSON.parse(data);
        console.log(appInstance.props);
        appInstance.renderComponent("mainMenu");
    }
})

