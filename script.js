let [seconds, minutes, hours] = [0, 0, 0]
let displayTime = document.getElementById("displayTime");
let timer = null;
let flags = document.querySelector(".flage");
function stopwatch() {
    seconds++;
    if (seconds == 60) {
        seconds = 0
        minutes++
        if (minutes == 60) {
            minutes = 0;
            hours++;


        }
    }
    let h = hours < 10 ? "0" + hours : hours;
    let s = seconds < 10 ? "0" + seconds : seconds;
    let m = minutes < 10 ? "0" + minutes : minutes;
   time= displayTime.innerHTML = h + ":" + m + ":" + s

}
function watchstart() {
    if (timer != null) {
        clearInterval(timer)
    }
    timer = setInterval(stopwatch, 1000);

}
function stop() {
    clearInterval(timer)
}
function reset() {
    clearInterval(timer)
    seconds = 0;
    minutes = 0;
    hours = 0;
    displayTime.innerHTML = "00:00:00"
flags.remove()

}
function flagtime(){

    let pag = document.createElement("p")

    pag.textContent=time
  pags =  flags.appendChild(pag)

     
}