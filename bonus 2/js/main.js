//Definisco una costante array con le immagini

console.log('ok java');

const imageArray = ["img/01.jpg",
    "img/02.jpg",
    "img/03.jpg",
    "img/04.jpg",
    "img/05.jpg"
]

//creiamo delle costanti che implementino con JS le foto ed i circles

const listDom = document.querySelector('.list');

const allCircleDom = document.querySelector('.allCircle');

//grazie al ciclo for e all'implementazione tramite backtick
// creiamo i contenitori oscurati nell HTML

for (let i = 0; i < imageArray.length; i++){
    listDom.innerHTML +=    `<div class="imgContainer">
                                <img class="image" src="${imageArray[i]}">
                            </div>`;
    allCircleDom.innerHTML += ` <div class="circle">
                                    <img class="image2" src="${imageArray[i]}">
                                </div>`;
}

//creo una costante in cui rivado a prendere tutti i contenitori delle foto
//aggiungo la classe show e la classe active
let imageActive = 0;
const imgContainer = document.querySelectorAll('.imgContainer');
const circle = document.querySelectorAll('.circle');

imgContainer[imageActive].classList.add('show');
circle[imageActive].classList.add('active');


//facciamo in modo che al click della freccia, la foto cambi

const arrowUp = document.querySelector('.arrowUp');
const arrowDown = document.querySelector('.arrowDown');

arrowDown.addEventListener('click', 
    function(){
        imgContainer[imageActive].classList.remove('show');
        circle[imageActive].classList.remove('active');
        imageActive++;
        imgContainer[imageActive].classList.add('show');
        circle[imageActive].classList.add('active');

        arrowUp.classList.remove('none');

        if(imageActive == imageArray.length - 1){
            
        }
    }
);

arrowUp.addEventListener('click', 
    function(){
        imgContainer[imageActive].classList.remove('show');
        circle[imageActive].classList.remove('active');
        imageActive--;
        imgContainer[imageActive].classList.add('show');
        circle[imageActive].classList.add('active');

        arrowDown.classList.remove('none');

        if(imageActive == 0){
        }
    }
);







