import $ from "../../vendor/jquery.min";
import {Component} from "../../vendor/noManure";
import {getTimeString} from "../../vendor/helpers";
require("./logOverview.css")
var template = require("./logOverview.html");
class logOverview extends Component {
    constructor(){
        super("logOverview");
        this.template = template;
    }
    getDates(){
        let dates = []
        for (var i = 0; i < this.appInstance.props.logs.length; i++) {
            var log = this.appInstance.props.logs[i];
            let dateData = {"date": log.date};
            if(dates.find((date) => {
                return date.date = log.date;
            }) === undefined){
                dates.push(dateData);
            }
        }
        return dates;
    }
    getLogs(date){
        let logs = this.appInstance.props.logs.filter((log) => {
            return log.date === date;
        });
        return logs;
    }
    render(){
        this.data =  {"dates": [], "logs": [], "totalHours": 0};
        this.data.dates = this.getDates();

        let logs = this.getLogs(this.props.date);
        for (var i = 0; i < logs.length; i++) {
            var log = logs[i].activities[0];
            let startTime = log.from.split(":")
            let startDate = new Date(2000, 1, 0, startTime[0], startTime[1], 0, 0);
            let endTime = log.till.split(":");
            let endDate = new Date(2000, 1, 0, endTime[0], endTime[1], 0, 0);
            if (endDate < startDate) {
                endDate.setDate(endDate.getDate() + 1);
            }
            let diffDate = endDate - startDate;
            log.hours = (diffDate / 1000 / 60 / 60);
            log.hours = (Math.floor(log.hours * 1000) / 1000);
            this.data.totalHours += log.hours;
            this.data.logs.push(log)
        }
        return super.render()
    }

    addListeners(){
        $("#back").click(() => {
            this.appInstance.renderComponent("mainMenu");
        })
        $("#send").click(() => {
            this.appInstance.renderComponent("redmineIntegration");
        })
    }
}
export var logOverviewComponent = new logOverview();

