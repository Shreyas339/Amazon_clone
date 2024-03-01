function displayDateAndTime(){
    let curDateObj = new Date()

    let curHours = curDateObj.getHours()
    if(curHours<12){
        document.getElementById("slot").innerHTML="AM"
    }else{
        document.getElementById("slot").innerHTML="PM"

    }
    let curMin= curDateObj.getMinutes()
    let curSec = curDateObj.getSeconds()


    let curDate = curDateObj.getDate()
    let curMonth= curDateObj.getMonth()+1
    let curYear = curDateObj.getFullYear()

    let curDay =  curDateObj.getDay()

    document.getElementById("hour").innerText=curHours
    document.getElementById("minute").innerText=curMin
    document.getElementById("second").innerText=curSec


    document.getElementById("date").innerText=curDate
    document.getElementById("month").innerText=curMonth
    document.getElementById("year").innerText=curYear

switch(curDay){
    case 0: curDay = "SUNDAY"
    break;
    case 1: curDay = "MONDAY"
    break; 
    case 2: curDay = "WEDNESDAY"
    break; 
    case 3: curDay = "THRUSDAY"
    break;
     case 4: curDay = "FRIDAY"
    break;
    case 5: curDay = "SATURDAY"
    break;
}
document.getElementById("day").innerText=curDay

}