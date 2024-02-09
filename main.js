countEl = document.getElementById("count-el");
rSaved= document.getElementById("recent-saved");
count=0

function increament() {
    count = count+1;
    countEl.innerText=count
}

function saved(){
    rSaved.innerText = rSaved.innerText + " " + count + " - ";
    count = 0;
    countEl.innerText=0;
}