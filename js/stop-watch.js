let = hr = min = sec = ms ='0'+ 0;
const btnStart = document.getElementById('start')
const btnStop = document.getElementById('stop')
const btnReset = document.getElementById('reset')
btnStart.addEventListener('click', start)
btnStop.addEventListener('click', stop)
btnReset.addEventListener('click', ReStart)
setTimer;

function start(){
    btnStart.setAttribute('disable', true)
    btnStop.removeAttribute('disable', true)
    btnReset.removeAttribute('disable', true)
    setTimer = setInterval(()=>{
        ms++
        ms = ms < 10 ? '0' + ms : ms;

        if(ms == 100){
            sec++
            sec =  sec < 10 ? '0' + sec : sec;
            ms = '0' + 0
        }
        if(sec == 60){
            min++;
            min = min < 10 ? '0' + min : min;
            sec = '0' + 0
        }
        if(min == 60){
            hr++;
            hr = hr < 10 ? '0' + hr : hr;
            min = '0' + 0
        }

        inputValue()
    }, 10)
}

function stop(){
    btnStart.removeAttribute('disable', true)
    btnStop.setAttribute('disable', true)
    btnReset.removeAttribute('disable', true)
    clearInterval(setTimer)
}

function ReStart(){
    btnStart.removeAttribute('disable', true)
    btnStop.removeAttribute('disable', true)
    btnReset.setAttribute('disable', true)
    let = hr = min = sec = ms ='0'+ 0;
    inputValue()
}

function inputValue(){
    document.getElementById('milisec').innerText = ms
    document.getElementById('sec').innerText = sec
    document.getElementById('min').innerText = min
    document.getElementById('hr').innerText = hr
}