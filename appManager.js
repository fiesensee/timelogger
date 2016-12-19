import {mainMenuComponent} from "./components/mainMenu/mainMenu";
import {loggingMenuComponent} from "./components/loggingMenu/loggingMenu";
import {logParameterMenuComponent} from "./components/logParameterMenu/logParameterMenu";
import {logOverviewComponent} from "./components/logOverview/logOverview";
import {redmineIntegrationComponent} from "./components/redmineIntegration/redmineIntegration";
export function registerComponents(appInstance){
    appInstance.registerComponent(mainMenuComponent);
    appInstance.registerComponent(loggingMenuComponent);
    appInstance.registerComponent(logParameterMenuComponent);
    appInstance.registerComponent(logOverviewComponent);
    appInstance.registerComponent(redmineIntegrationComponent);
 }