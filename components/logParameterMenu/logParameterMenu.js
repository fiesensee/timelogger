import $ from "../../vendor/jquery.min";
import {Component} from "../../vendor/noManure";
require("./logParameterMenu.css")
var template = require("./logParameterMenu.html");
class logParameterMenu extends Component {
    constructor(){
        super("logParameterMenu");
        this.template = template;
    }
    render(){
        this.data = this.props;
        return super.render()
    }
    addListeners(){
        $("#back").click(() => {
            this.appInstance.renderComponent("mainMenu");
        });
        $("#save").click(() => {
            let log = {
                "date": $("#date").val(),
                "activities": [
                    {
                        "from": $("#from").val(),
                        "till": $("#till").val(),
                        "activity": $("#activity").val(),
                        "issue": $("#issue").val()
                    }
                ]
            }
            this.appInstance.props.logs.push(log);
            fs.writeFile(app.getPath("documents") + "/time.log", JSON.stringify(this.appInstance.props), (err) => {
                let props = {"date": $("#date").val()};
                this.appInstance.renderComponent("logOverview", props);
            })
            //in case of testing to not pollute the log
            // let props = {"date": $("#date").val()};
            // this.appInstance.renderComponent("logOverview", props);
        })
    }
}
export var logParameterMenuComponent = new logParameterMenu();

