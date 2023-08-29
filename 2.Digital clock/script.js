var clock=document.querySelector('.time')
function runclock(){
    var time=new Date();
    var hours=time.getHours();
    var minutes=time.getMinutes();
    var seconds=time.getSeconds();
    var text="AM"
    if (hours>12){
        hours=hours-12;
        text="PM";
    }
    else if(hours==0){
        hours=12;
        text="AM";
    }
    hours=hours<10 ? "0"+ hours : hours;
    minutes=minutes<10 ? "0"+ minutes : minutes;
    seconds=seconds<10 ? "0"+ seconds : seconds;
    clock.innerHTML=`${hours} : ${minutes} : ${seconds} ${text} `
}
runclock()
setInterval(runclock,1000)