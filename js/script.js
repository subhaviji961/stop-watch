var hours = 0;
var minutes =  0;
var seconds =  0;
var startButton = document.createElement('button');
startButton.innerText = 'Start';
startButton.style.background = '#9ccc65';
var stopButton = document.createElement('button');
stopButton.innerText = 'Stop';
stopButton.style.background = '#ef5350';
var resetButton = document.createElement('button');
resetButton.innerText = 'Reset';
resetButton.style.background = '#ffa000';
 
function sanitizeNumbers(num){
return num <= 9 ? '0' + num.toString() : num;
 }
window.onload = function() {
    var h = document.getElementById('hours');
    var m = document.getElementById('minutes');
    var s = document.getElementById('seconds');
    var stopwatch = document.getElementById('stopwatch');
    stopwatch.appendChild(startButton);
    startButton.addEventListener('click', function(){
        startButton.remove();
        resetButton.remove();
        stopwatch.appendChild(stopButton);
        var interval = setInterval(function() {
     seconds += 1;
     s.innerText = sanitizeNumbers(seconds);
     if(seconds == 60) {
        seconds = 0;
        minutes += 1;
        s.innerText = sanitizeNumbers(seconds);
        m.innerText = sanitizeNumbers(minutes);
     }
     if(minutes == 60) {
        minutes = 0;
        hours += 1;
        s.innerText = sanitizeNumbers(minutes);
        h.innerText = sanitizeNumbers(hours);
     }
     
    },1)
    stopButton.addEventListener('click', function() {
     stopButton.remove();
    clearInterval(interval)
    stopwatch.appendChild(startButton);
    stopwatch.appendChild(resetButton);
   })
   resetButton.addEventListener('click', function() {
    resetButton.remove();
    stopButton.remove();
    stopwatch.appendChild(startButton);
    s.innerText = '00';
    m.innerText = '00';
    h.innerText = '00';
    })
    }) 
   
}