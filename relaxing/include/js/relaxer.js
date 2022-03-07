const maini= document.querySelector(".maini");
const text = document.querySelector("#text");
const totalTime = 10000;

function Anime () {
    maini.className="maini grow";
    text.innerText= "Breathe In !"

    setTimeout(()=>{
        maini.className="maini stop";
        text.innerText= "Breathe Hold !"
        },4000);

    setTimeout(()=>{
        maini.className="maini shrink";
        text.innerText= "Breathe Out !"
        },6000);
}


Anime();
setInterval(Anime,totalTime)