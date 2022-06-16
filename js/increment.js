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