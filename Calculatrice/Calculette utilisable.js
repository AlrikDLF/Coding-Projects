'use strict';

let input = '';
let orange = document.getElementsByClassName('orange');

function ShowValue(btn){
    input = input + btn.value;
    console.log(input);
    document.getElementById('output').innerHTML = input;

    if (btn.value===orange){
        orange.style.display = 'none';
    } else {
        orange.style.display = 'block';
    }
}


function letsCalculate(){
    document.getElementById('output').innerHTML = eval(input);
}

function reset(btn){
    document.getElementById('output').innerHTML = '0';
    input = '';
}

function rem1(btn){
    input = input.replace(input.slice(-1), '');
    document.getElementById('output').innerHTML = input;
}

/* console.clear() */