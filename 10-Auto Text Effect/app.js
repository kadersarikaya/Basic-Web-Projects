const text = document.getElementById("text");
const prog= "we love programming";
let idx = 1;

setInterval(writeText, 500);

function writeText() {
    text.innerText = prog.slice(0,idx);
    idx++;
    if(idx > prog.length) {
        idx=0;
    }
}