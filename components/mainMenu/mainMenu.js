import $ from "../../vendor/jquery.min";
import {Component} from "../../vendor/noManure";
import {getTimeString, getDateString} from "../../vendor/helpers";
require("./mainMenu.css")
var template = require("./mainMenu.html");
class mainMenu extends Component {
    constructor(){
        super("mainMenu");
        this.template = template;
    }
    render(){
        return super.render()
    }
    addListeners(){
        $("#startLogging").click(() => {
            let props = {
                "start": getTimeString(),
                "date": getDateString(),
            };
            this.appInstance.renderComponent("loggingMenu", props);
        })
        $("#showLogs").click(() => {
            let props = {"date": getDateString()};
            this.appInstance.renderComponent("logOverview", props);
        })
    }
}
export var mainMenuComponent = new mainMenu();

