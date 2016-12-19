export function getTimeString(date=new Date()){
    var hours = date.getHours();
    if(hours < 10){
        hours = "0" + hours;
    }
    var minutes = Math.floor(date.getMinutes() / 10);
    return hours + ":" + minutes + 0;
}

export function getDateString() {
    var today = new Date();
    var month = today.getMonth() + 1;
    if(month < 10){
        month = "0" + month;
    }
    var day = today.getDate();
    if(day < 10){
        day = "0" + day;
    }
    return today.getFullYear() + "-" + month + "-" + day;
}