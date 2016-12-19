import $ from "../../vendor/jquery.min";
import {Component} from "../../vendor/noManure";
require("./redmineIntegration.css")
var template = require("./redmineIntegration.html");
class redmineIntegration extends Component {
    constructor(){
        super("redmineIntegration");
        this.template = template;
    }
    render(){
        return super.render()
    }
    addListeners(){
    }
}
export var redmineIntegrationComponent = new redmineIntegration();

