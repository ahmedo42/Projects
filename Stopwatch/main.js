var disp = document.getElementById('display') ,  lapsDom = document.getElementById('laps') ,startButton = document.getElementById("startStop");
var seconds = 0 , minutes = 0 ,hours =0;
let lapsList = [];
var dispSeconds = 0 , dispMinutes = 0 ,dispHours = 0 , interval = null , status = "stopped";

function display(){
    ++seconds;
    if(seconds == 60){
        seconds = 0;
        ++minutes;
    }
    if(minutes == 60){
        minutes = 0;
        ++hours;
    }
    if(seconds<10){
        dispSeconds = "0" + seconds.toString();
    }
    else{
        dispSeconds  = seconds.toString();
    }
    if(minutes < 10){
        dispMinutes = "0" + minutes.toString();
    }
    else{
        dispMinutes = minutes.toString();
    }
    if(hours < 10){
        dispHours = "0" + hours.toString();
    }
    else{
        dispHours = hours.toString();
    }

    disp.innerHTML = dispHours + ':' + dispMinutes + ':'  + dispSeconds;

}

function reset(){
    window.clearInterval(interval);
    seconds=0,minutes=0,hours=0;
    disp.innerHTML = "00:00:00";
    status = "stopped";
    startButton.innerHTML = "Start";
}

function clearLaps(){
    while (lapsDom.firstChild) {
        lapsDom.removeChild(lapsDom.lastChild);
    }
    lapsList.length = 0;
}

function record(){
    let lap = dispHours + ':' + dispMinutes + ':'  + dispSeconds;
    let li = document.createElement('li');
    li.appendChild(document.createTextNode(lap));
    lapsDom.appendChild(li);
    lapsList.push(lap);
}

function control(){
    if(status == "stopped"){
        interval = window.setInterval(display,100);
        startButton.innerHTML = "Stop";
        status = "running";
    }
    else{
        window.clearInterval(interval);
        startButton.innerHTML = "Start";
        status = "stopped";
    }
    
}
