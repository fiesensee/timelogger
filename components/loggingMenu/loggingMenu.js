import $ from "../../vendor/jquery.min";
import {Component} from "../../vendor/noManure";
import {getTimeString} from "../../vendor/helpers";
require("./loggingMenu.css")
var template = require("./loggingMenu.html");
class loggingMenu extends Component {
    constructor(){
        super("loggingMenu");
        this.template = template;
    }
    render(){
        return super.render()
    }
    addListeners(){
        $("#stopLogging").click(() => {
            let props = {
                "start": this.props.start,
                "end": getTimeString(),
                "date": this.props.date,
            }
            this.appInstance.renderComponent("logParameterMenu", props);
        })
    }
}
export var loggingMenuComponent = new loggingMenu();

