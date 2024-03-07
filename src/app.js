/*
* File: app.js
* Author: Bátki Zoltán Krisztián
* Copyright: 2024, Bátki Zoltán Krisztián
* Group: Szoft-1-N
* Date: 2024-03-07
* Github: 
*/

const InputSide_A = document.querySelector("#side_A")
const InputSide_B = document.querySelector("#side_B")
const InputSide_C = document.querySelector("#side_C")
const InputSide_D = document.querySelector("#side_D")

const half_areaOutput = document.querySelector("#half_area")
const areaOutput = document.querySelector("#area")

const calcButton = document.querySelector("#calcButton")
calcButton.addEventListener('click', ()=>{CalcInit()} )


function CalcInit(){
    // const side_A = Number(baseInputA.value)
    // const side_B = Number(baseInputB.value)
    // const side_C = Number(baseInputC.value)
    // const side_D = Number(baseInputD.value)
    const side_A = Number(InputSide_A.value)
    const side_B = Number(InputSide_B.value)
    const side_C = Number(InputSide_C.value)
    const side_D = Number(InputSide_D.value)

    const half_area = CalcH_Area(side_A,side_B,side_C,side_D)
    console.log(half_area)
    half_areaOutput.value = half_area
}

function CalcH_Area(side_A,side_B,side_C,side_D){
    return (side_A + side_B + side_C + side_D)/2
}

const calcButton2 = document.querySelector("#calcButton2")
calcButton2.addEventListener('click', ()=>{CalcInit2()} )

function CalcInit2(){
    const side_A = Number(InputSide_A.value)
    const side_B = Number(InputSide_B.value)
    const side_C = Number(InputSide_C.value)
    const side_D = Number(InputSide_D.value)

    const half_area = CalcH_Area(side_A, side_B, side_C, side_D);
    const area = CalcArea(half_area,side_A,side_B,side_C,side_D)
    console.log(area);
}

function CalcArea(half_area,side_A,side_B,side_C,side_D){
    return Math.sqrt((half_area - side_A) * (half_area - side_B) * (half_area - side_C) * (half_area - side_D));
}
