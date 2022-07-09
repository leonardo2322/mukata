const myInput = document.querySelector('#quantityA')
function stepper(btn) {
  let id = btn.getAttribute("id")
  let min = myInput.getAttribute("min")
  let max = myInput.getAttribute("max")
  let value = myInput.getAttribute("value")
  let step = myInput.getAttribute("step") 
  let calstep = (id == "increment") ? (step * 1):(step * -1)
  let newvalue = parseInt(value)+calstep
  if (newvalue >= min && newvalue <= max){
    myInput.setAttribute("value", newvalue)
  }
}

const myInput1 = document.querySelector('#quantityB')
function stepper1(btn) {
  let id = btn.getAttribute("id")
  let min = myInput1.getAttribute("min")
  let max = myInput1.getAttribute("max")
  let value = myInput1.getAttribute("value")
  let step = myInput1.getAttribute("step") 
  let calstep = (id == "increment") ? (step * 1):(step * -1)
  let newvalue = parseInt(value)+calstep
  if (newvalue >= min && newvalue <= max){
    myInput1.setAttribute("value", newvalue)
  }
}

const myInput2 = document.querySelector('#quantityC')
function stepper2(btn) {
  let id = btn.getAttribute("id")
  let min = myInput2.getAttribute("min")
  let max = myInput2.getAttribute("max")
  let value = myInput2.getAttribute("value")
  let step = myInput2.getAttribute("step") 
  let calstep = (id == "increment") ? (step * 1):(step * -1)
  let newvalue = parseInt(value)+calstep
  if (newvalue >= min && newvalue <= max){
    myInput2.setAttribute("value", newvalue)
  }
}

const myInput3 = document.querySelector('#quantityD')
function stepper3(btn) {
  let id = btn.getAttribute("id")
  let min = myInput3.getAttribute("min")
  let max = myInput3.getAttribute("max")
  let value = myInput3.getAttribute("value")
  let step = myInput3.getAttribute("step") 
  let calstep = (id == "increment") ? (step * 1):(step * -1)
  let newvalue = parseInt(value)+calstep
  if (newvalue >= min && newvalue <= max){
    myInput3.setAttribute("value", newvalue)
  }
}

const myInput4 = document.querySelector('#quantityE')
function stepper4(btn) {
  let id = btn.getAttribute("id")
  let min = myInput4.getAttribute("min")
  let max = myInput4.getAttribute("max")
  let value = myInput4.getAttribute("value")
  let step = myInput4.getAttribute("step") 
  let calstep = (id == "increment") ? (step * 1):(step * -1)
  let newvalue = parseInt(value)+calstep
  if (newvalue >= min && newvalue <= max){
    myInput4.setAttribute("value", newvalue)
  }
}

const myInput5 = document.querySelector('#quantityF')
function stepper5(btn) {
  let id = btn.getAttribute("id")
  let min = myInput5.getAttribute("min")
  let max = myInput5.getAttribute("max")
  let value = myInput5.getAttribute("value")
  let step = myInput5.getAttribute("step") 
  let calstep = (id == "increment") ? (step * 1):(step * -1)
  let newvalue = parseInt(value)+calstep
  if (newvalue >= min && newvalue <= max){
    myInput5.setAttribute("value", newvalue)
  }
}

const myInput6 = document.querySelector('#quantityG')
function stepper6(btn) {
  let id = btn.getAttribute("id")
  let min = myInput6.getAttribute("min")
  let max = myInput6.getAttribute("max")
  let value = myInput6.getAttribute("value")
  let step = myInput6.getAttribute("step") 
  let calstep = (id == "increment") ? (step * 1):(step * -1)
  let newvalue = parseInt(value)+calstep
  if (newvalue >= min && newvalue <= max){
    myInput6.setAttribute("value", newvalue)
  }
}
const myInput7 = document.querySelector('#quantityAA')
function stepper7(btn) {
  let id = btn.getAttribute("id")
  let min = myInput7.getAttribute("min")
  let max = myInput7.getAttribute("max")
  let value = myInput7.getAttribute("value")
  let step = myInput7.getAttribute("step") 
  let calstep = (id == "increment") ? (step * 1):(step * -1)
  let newvalue = parseInt(value)+calstep
  if (newvalue >= min && newvalue <= max){
    myInput7.setAttribute("value", newvalue)
  }
}

const myInput8 = document.querySelector('#quantityBB')
function stepper8(btn) {
  let id = btn.getAttribute("id")
  let min = myInput8.getAttribute("min")
  let max = myInput8.getAttribute("max")
  let value = myInput8.getAttribute("value")
  let step = myInput8.getAttribute("step") 
  let calstep = (id == "increment") ? (step * 1):(step * -1)
  let newvalue = parseInt(value)+calstep
  if (newvalue >= min && newvalue <= max){
    myInput8.setAttribute("value", newvalue)
  }
}

const myInput9 = document.querySelector('#quantityCC')
function stepper9(btn) {
  let id = btn.getAttribute("id")
  let min = myInput9.getAttribute("min")
  let max = myInput9.getAttribute("max")
  let value = myInput9.getAttribute("value")
  let step = myInput9.getAttribute("step") 
  let calstep = (id == "increment") ? (step * 1):(step * -1)
  let newvalue = parseInt(value)+calstep
  if (newvalue >= min && newvalue <= max){
    myInput9.setAttribute("value", newvalue)
  }
}
const myInput10 = document.querySelector('#quantityDD')
function stepper10(btn) {
  let id = btn.getAttribute("id")
  let min = myInput10.getAttribute("min")
  let max = myInput10.getAttribute("max")
  let value = myInput10.getAttribute("value")
  let step = myInput10.getAttribute("step") 
  let calstep = (id == "increment") ? (step * 1):(step * -1)
  let newvalue = parseInt(value)+calstep
  if (newvalue >= min && newvalue <= max){
    myInput10.setAttribute("value", newvalue)
  }
}
const myInput11 = document.querySelector('#quantityEE')
function stepper11(btn) {
  let id = btn.getAttribute("id")
  let min = myInput11.getAttribute("min")
  let max = myInput11.getAttribute("max")
  let value = myInput11.getAttribute("value")
  let step = myInput11.getAttribute("step") 
  let calstep = (id == "increment") ? (step * 1):(step * -1)
  let newvalue = parseInt(value)+calstep
  if (newvalue >= min && newvalue <= max){
    myInput11.setAttribute("value", newvalue)
  }
}
const myInput12 = document.querySelector('#quantityFF')
function stepper12(btn) {
  let id = btn.getAttribute("id")
  let min = myInput12.getAttribute("min")
  let max = myInput12.getAttribute("max")
  let value = myInput12.getAttribute("value")
  let step = myInput12.getAttribute("step") 
  let calstep = (id == "increment") ? (step * 1):(step * -1)
  let newvalue = parseInt(value)+calstep
  if (newvalue >= min && newvalue <= max){
    myInput12.setAttribute("value", newvalue)
  }
}

const myInput13 = document.querySelector('#quantityGG')
function stepper13(btn) {
  let id = btn.getAttribute("id")
  let min = myInput13.getAttribute("min")
  let max = myInput13.getAttribute("max")
  let value = myInput13.getAttribute("value")
  let step = myInput13.getAttribute("step") 
  let calstep = (id == "increment") ? (step * 1):(step * -1)
  let newvalue = parseInt(value)+calstep
  if (newvalue >= min && newvalue <= max){
    myInput13.setAttribute("value", newvalue)
  }
}

const myInput14 = document.querySelector('#quantityHH')
function stepper14(btn) {
  let id = btn.getAttribute("id")
  let min = myInput14.getAttribute("min")
  let max = myInput14.getAttribute("max")
  let value = myInput14.getAttribute("value")
  let step = myInput14.getAttribute("step") 
  let calstep = (id == "increment") ? (step * 1):(step * -1)
  let newvalue = parseInt(value)+calstep
  if (newvalue >= min && newvalue <= max){
    myInput14.setAttribute("value", newvalue)
  }
}
const myInput15 = document.querySelector('#quantityII')
function stepper15(btn) {
  let id = btn.getAttribute("id")
  let min = myInput15.getAttribute("min")
  let max = myInput15.getAttribute("max")
  let value = myInput15.getAttribute("value")
  let step = myInput15.getAttribute("step") 
  let calstep = (id == "increment") ? (step * 1):(step * -1)
  let newvalue = parseInt(value)+calstep
  if (newvalue >= min && newvalue <= max){
    myInput15.setAttribute("value", newvalue)
  }
}
const myInput16 = document.querySelector('#quantityJJ')
function stepper16(btn) {
  let id = btn.getAttribute("id")
  let min = myInput16.getAttribute("min")
  let max = myInput16.getAttribute("max")
  let value = myInput16.getAttribute("value")
  let step = myInput16.getAttribute("step") 
  let calstep = (id == "increment") ? (step * 1):(step * -1)
  let newvalue = parseInt(value)+calstep
  if (newvalue >= min && newvalue <= max){
    myInput16.setAttribute("value", newvalue)
  }
}

const myInput17 = document.querySelector('#quantityKK')
function stepper17(btn) {
  let id = btn.getAttribute("id")
  let min = myInput17.getAttribute("min")
  let max = myInput17.getAttribute("max")
  let value = myInput17.getAttribute("value")
  let step = myInput17.getAttribute("step") 
  let calstep = (id == "increment") ? (step * 1):(step * -1)
  let newvalue = parseInt(value)+calstep
  if (newvalue >= min && newvalue <= max){
    myInput17.setAttribute("value", newvalue)
  }
}
const myInput18 = document.querySelector('#quantityMM')
function stepper18(btn) {
  let id = btn.getAttribute("id")
  let min = myInput18.getAttribute("min")
  let max = myInput18.getAttribute("max")
  let value = myInput18.getAttribute("value")
  let step = myInput18.getAttribute("step") 
  let calstep = (id == "increment") ? (step * 1):(step * -1)
  let newvalue = parseInt(value)+calstep
  if (newvalue >= min && newvalue <= max){
    myInput18.setAttribute("value", newvalue)
  }
}
const myInput19 = document.querySelector('#quantityNN')
function stepper19(btn) {
  let id = btn.getAttribute("id")
  let min = myInput19.getAttribute("min")
  let max = myInput19.getAttribute("max")
  let value = myInput19.getAttribute("value")
  let step = myInput19.getAttribute("step") 
  let calstep = (id == "increment") ? (step * 1):(step * -1)
  let newvalue = parseInt(value)+calstep
  if (newvalue >= min && newvalue <= max){
    myInput19.setAttribute("value", newvalue)
  }
}