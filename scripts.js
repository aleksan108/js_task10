
const calcButton = document.getElementById('calcButton');
const markaID = document.getElementById('markaID');
const marks = markaID.querySelectorAll('option');
const modelID = document.getElementById('modelID');
const yearID = document.getElementById('yearID');
const distanceID = document.getElementById('distanceID');
const body = document.querySelectorAll('input[type="radio"]');


const resultID = document.getElementById('result');
let modelValue = 0;
let markValue = 0;
let yearValue = 0;
let bodyValue = 0;
let distanceValue = 0;

const arrAcura = ['ILX', 'MDX', 'NSX'];
const arrAudi = ['A1','A2','A3','A4'];
const arrBMW = ['1M', '2 Series', 'M2', 'M3','M4','M5', 'X1','X2', 'X3'];
const arrCitroen = ['C1', 'C2', 'C3', 'C4', 'C1 Picasso','C2 Picasso', 'C3 Picasso', 'C4 Picasso'];
const arrHonda = ['Accord', 'Acty', 'Airwave', 'City','Jazz'];
const arrKia = ['Carnival', 'Ceed', 'Mohave',' X-Line'];


markaID.addEventListener('change', setModelList);
modelID.addEventListener('change', setModelWeight);
yearID.addEventListener('change', setYearWeight);
calcButton.addEventListener('click', calculatePrice);


function setModelList(){
    let mark;
    for (let i=0; i<marks.length; i++){
        if(marks[i].selected){
            mark = marks[i].textContent;
            markValue = marks[i].value;
        }
    }
    switch (mark){
        case 'Acura': createModelList(arrAcura);
            break;
        case 'Audi': createModelList(arrAudi);
            break;
        case 'BMW': createModelList(arrBMW);
            break;
        case 'Citroen': createModelList(arrCitroen);
            break;
        case 'Honda': createModelList(arrHonda);
            break;
        case 'Kia': createModelList(arrKia);
            break;
    }
}

function createModelList(arr){
    for (let i=0; i<arr.length; i++){
        modelID.options[i+1]=new Option(arr[i], (i+1)*2);
    }
}

function setModelWeight(){
    for (let i=0; i<modelID.options.length; i++){
        if(modelID.options[i].selected){
            modelValue = modelID.options[i].value;
        }
    }
}

function setYearWeight(){
    for (let i=0; i<yearID.options.length; i++){
        if(yearID.options[i].selected){
            yearValue = yearID.options[i].value;
        }
    }
}

for(radio in body) {
    body[radio].onclick = function() {
        bodyValue = this.value;
    }
}

function calculatePrice(){
    if (!markValue){
        alert('Выберите марку автомобиля')
    }
    if (!modelValue){
        alert('Выберите модель автомобиля')
    }
    if (!yearValue){
        alert('Выберите год автомобиля')
    }
    if (!bodyValue){
        alert('Выберите тип кузова автомобиля')
    }
    
    if(markValue && modelValue && yearValue && bodyValue){
        resultID.textContent = 10000*(Number(markValue)+Number(modelValue)+Number(yearValue)+Number(bodyValue))+Number(distanceID.textContent)+' RUB';
    }
}