const barsMenu = document.querySelector('#burg-menu .fas')
const navbar = document.querySelector('.navbar')
// primer grupo
const botnshow = document.querySelector('.show-menu')
const contenedor = document.querySelector('.btn-group')
// segundo grupo
const botnshowdaymenu = document.querySelector('.show-menu1')
const contenedordayMenu = document.querySelector('.btn-group1')
const breakfastcontainer = document.querySelector('#breakfasts')

// tercer grupo
const btnespecials = document.querySelector('.show-menu2')
const contEspecials = document.querySelector('.btn-group2')
const containEspecials =document.querySelector('#Especials')
// cuarto grupo
const btnSencillos = document.querySelector('.show-menu3')
const contSencillos = document.querySelector('.btn-group3')
const containerSencillos = document.querySelector('#Sencillos')

// quinto grupo
const btnBandejas = document.querySelector('.show-menu4')
const contBandejas = document.querySelector('.btn-group4')
const containerBandejas = document.querySelector('#Bandejas')

// sexto grupo 
const btnBebidas = document.querySelector('.show-menu5')
const contBebidas= document.querySelector('.btn-group5')
const containerBebidas= document.querySelector('#Bebidas')

// septimo grupo
const btnPorciones = document.querySelector('.show-menu6')
const contPorciones = document.querySelector('.btn-group6')
const containerPorciones = document.querySelector('#Porciones')

const contain = document.querySelector('.contain')
const containerPrincipal = document.querySelector('.container')
const btnsshoppincart = document.querySelector('.btns')


contain.addEventListener('click',(e)=>{
  if(e.target.classList.contains('fas')){
    contain.removeChild(e.target.parentElement.parentElement)
  }
  
})
// clases 
class Carrito{

  compra(e){
    const producto ={}

    
    if(e.target.classList.contains('drink')){
      var check =e.target.parentElement.parentElement
      check.childNodes[9].childNodes[2].disabled=false
    }
    else if (e.target.classList.contains('meat')) {
      e.preventDefault()
      let node = e.target.parentElement.parentElement
      let nodos = node.childNodes
      let plate = nodos[1].textContent
      let price = nodos[3].childNodes[0].childNodes[1].value
      let especification = nodos[5].childNodes[1].value
      let otherDrink =nodos[9].childNodes[2].value
      let meat = nodos[11].childNodes[2].value

      nodos[9].childNodes[2].disabled= true
      nodos[9].childNodes[1].checked = false
      // console.log(nodos[11].childNodes.value)
      if (otherDrink === '' && especification === '') {
        
        producto[4]= 'chocolate sin leche'
        producto[3]= 'el plato como viene'
      }else{
        producto[3]=especification
        producto[4]=otherDrink
  
        nodos[9].childNodes[2].value =""
        nodos[5].childNodes[1].value = ""
      }
      
      if (nodos[7].childNodes[1].checked) {
        producto[4]='chocolate con leche'
        nodos[7].childNodes[1].checked = false
      }
       
      if (meat ==='robalo') {
        const precioFish = Number(price)+ 2000  
        producto[1] = meat
        producto[2] = precioFish
      }else if (meat ==='bagre') {
        console.log(price)
        const precioFish = Number(price)+ 2000  
        producto[1]= meat
        console.log(precioFish)
        producto[2] = precioFish
      }
      else{
        producto[1]=meat
        producto[2] = price
      }
      producto[0]=plate;
      

        this.carritoInsert(producto)
    }
    else if (e.target.classList.contains('esp')){
      e.preventDefault()
      let node = e.target.parentElement.parentElement
      let nodos = node.childNodes
      let plate = nodos[1].textContent
      let price = nodos[3].childNodes[0].childNodes[1].value
      let especification = nodos[5].childNodes[1].value
      let bLimonada = document.getElementById('Limonada')
      let bClaro = document.getElementById('Claro')
      let bMazamorra = document.getElementById('Mazamorra')
      let bJugo = document.getElementById('jugo_Del_dia')
      let otherDrink =nodos[9].childNodes[2].value
      let meat = nodos[11].childNodes[2].value


      if (otherDrink === '' && especification === '') {
              
        producto[4]= ''
        producto[3]= 'el plato como viene'
      }else{
        producto[3]=especification
        producto[4]=otherDrink
  
        nodos[9].childNodes[2].value =""
        nodos[5].childNodes[1].value = ""
      }
      producto[0]=plate;
      producto[2]=price
      producto[1]=meat

      if (bLimonada.checked){
        producto[5]=bLimonada.id
      }else if (bClaro.checked){
        producto[5]=bClaro.id
      }else if (bMazamorra.checked){
        producto[5]=bMazamorra.id
      }else if(bJugo.checked){
        producto[5]=bJugo.id
      }else{
        producto[5]='cualquier bebida'
      }
      this.carritoInsertdontesp(producto)

    }
    else if (e.target.classList.contains('bpaisa')){
      e.preventDefault()
      let node = e.target.parentElement.parentElement
      let nodos = node.childNodes
      let plate = nodos[1].textContent
      let price = nodos[3].childNodes[0].childNodes[1].value
      let especification = nodos[5].childNodes[1].value
      let bLimonada = document.getElementById('LimOnada')
      let bClaro = document.getElementById('claRo')
      let bMazamorra = document.getElementById('mazAmorra')
      let bJugo = document.getElementById('jugOdeldia')
      let otherDrink =nodos[9].childNodes[2].value

      if (otherDrink === '' && especification === '') {
              
        producto[3]= ''
        producto[2]= 'el plato como viene'
      }else{
        producto[2]=especification
        producto[3]=otherDrink
  
        nodos[9].childNodes[2].value =""
        nodos[5].childNodes[1].value = ""
      }
      if (bLimonada.checked){
        producto[4]=bLimonada.id
      }else if (bClaro.checked){
        producto[4]=bClaro.id
      }else if (bMazamorra.checked){
        producto[4]=bMazamorra.id
      }else if(bJugo.checked){
        producto[4]=bJugo.id
      }else{
        producto[4]='cualquier bebida aqui'
      }

      producto[0]=plate;
      producto[1]=price
      this.carritoInsert(producto)
    }
    else if (e.target.classList.contains('sen')){
      e.preventDefault()

      let node = e.target.parentElement.parentElement
      let nodos = node.childNodes
      let plate = nodos[1].textContent
      let price = nodos[3].childNodes[0].childNodes[1].value
      let especification = nodos[5].childNodes[1].value
      let bLimonada = document.getElementById('lImonada')
      let bClaro = document.getElementById('cLaro')
      let bMazamorra = document.getElementById('mAzamorra')
      let bJugo = document.getElementById('jUgodeldia')
      let otherDrink =nodos[9].childNodes[2].value
      let creme = nodos[11].childNodes[2].outerText
      let meat = nodos[13].childNodes[2].value
      let soup = nodos[11].childNodes[5].id
  
      if (otherDrink === '' && especification === '') {
              
        producto[3]= ''
        producto[2]= 'el plato como viene'
      }else{
        producto[2]=especification
        producto[3]=otherDrink
  
        nodos[9].childNodes[2].value =""
        nodos[5].childNodes[1].value = ""
      }
      if (bLimonada.checked){
        producto[4]=bLimonada.id
      }else if (bClaro.checked){
        delete producto[4]
        producto[4]=bClaro.id
      }else if (bMazamorra.checked){
        producto[4]=bMazamorra.id
      }else if(bJugo.checked){
        producto[4]=bJugo.id
      }else{
        producto[4]='cualquier bebida'
      }
      if (nodos[11].childNodes[3].checked) {
        producto[5]=creme
      }else if (nodos[11].childNodes[5].checked){
        producto[5]=soup
      }else{
        producto[5]='cualquier sopa'
      }
      producto[0]=plate;
      producto[1]=price
      producto[6]=meat
      this.carritoInsertdontsen(producto)
    }
    else if (e.target.classList.contains('ban')) {
      e.preventDefault()

      let node = e.target.parentElement.parentElement
      let nodos = node.childNodes
      let plate = nodos[1].textContent
      let price = nodos[3].childNodes[0].childNodes[1].value
      let especification = nodos[5].childNodes[1].value
      let bLimonada = document.getElementById('liMonada')
      let bClaro = document.getElementById('clAro')
      let bMazamorra = document.getElementById('MaZamorra')
      let bJugo = document.getElementById('juGodeldia')
      let otherDrink =nodos[9].childNodes[2].value
      let creme = nodos[11].childNodes[2].outerText
      let meat = nodos[13].childNodes[2].value
      let soup = nodos[11].childNodes[5].id
  
      if (otherDrink === '' && especification === '') {
              
        producto[3]= ''
        producto[2]= 'el plato como viene'
      }else{
        producto[2]=especification
        producto[3]=otherDrink
  
        nodos[9].childNodes[2].value =""
        nodos[5].childNodes[1].value = ""
      }
      if (bLimonada.checked){
        producto[4]=bLimonada.id
      }else if (bClaro.checked){
        delete producto[4]
        producto[4]=bClaro.id
      }else if (bMazamorra.checked){
        producto[4]=bMazamorra.id
      }else if(bJugo.checked){
        producto[4]=bJugo.id
      }else{
        producto[4]='cualquier bebida'
      }
      if (nodos[11].childNodes[3].checked) {
        producto[5]=creme
      }else if (nodos[11].childNodes[5].checked){
        producto[5]=soup
      }else{
        producto[5]='cualquier sopa'
      }
      producto[0]=plate;
      producto[1]=price
      producto[6]=meat
      this.carritoInsertdontsen(producto)
    }
    else if (e.target.classList.contains('shopp')){
      e.preventDefault()
      let element =e.target.parentElement.parentElement
      this.send(element)

    }


  }

  send(e){
    const producto = {}
    let nodos=e.childNodes
    
    nodos[9].childNodes[2].disabled= true
    nodos[9].childNodes[1].checked = false
    let plate = nodos[1].textContent
    let price = nodos[3].childNodes[0].childNodes[1].value
    let especification = nodos[5].childNodes[1].value
    let otherDrink =nodos[9].childNodes[2].value
    if (otherDrink === '' && especification === '') {
              
      producto[3]= 'chocolate sin leche'
      producto[2]= 'el plato como viene'
    }else{
      producto[2]=especification
      producto[3]=otherDrink

      nodos[9].childNodes[2].value =""
      nodos[5].childNodes[1].value = ""
    }
    if (nodos[7].childNodes[1].checked) {
      producto[3]='chocolate con leche'
      nodos[7].childNodes[1].checked = false
    }
    producto[0]=plate;
    producto[1]=price
    this.carritoInsertdontmeat(producto)
  }
  carritoInsertdontmeat(tipo){
    const carshopping = document.querySelector('.contain')
    let constructor = document.createElement('div')
    constructor.classList.add('div-shop')
    constructor.innerHTML =`
    <p class="datosagregados">${tipo[0]}</p>
    <p class="datosagregados">${tipo[1]}</p>
    <p class="datosagregados">${tipo[2]}</p>
    <p class="datosagregados">${tipo[3]}</p> 
    <span class="circle-x"><i class="fas fa-times-circle"></i></span>
    <div class="line"></div>
    `
    carshopping.appendChild(constructor)
  }
  carritoInsertdontesp(tipo){
    const carshopping = document.querySelector('.contain')
    let constructor = document.createElement('div')
    constructor.classList.add('div-shop')
    constructor.innerHTML =`
    <p class="datosagregados">${tipo[0]}</p>
    <p class="datosagregados">${tipo[1]}</p>
    <p class="datosagregados">${tipo[2]}</p>
    <p class="datosagregados">${tipo[3]}</p> 
    <p class="datosagregados">${tipo[4]}</p> 
    <p class="datosagregados">${tipo[5]}</p>
    <span class="circle-x"><i class="fas fa-times-circle"></i></span>
    <div class="line"></div>
    `

    carshopping.appendChild(constructor)
  }
  carritoInsertdontsen(tipo){
    const carshopping = document.querySelector('.contain')
    let constructor = document.createElement('div')
    constructor.classList.add('div-shop')
    constructor.innerHTML =`
    <p class="datosagregados">${tipo[0]}</p>
    <p class="datosagregados">${tipo[1]}</p>
    <p class="datosagregados">${tipo[2]}</p>
    <p class="datosagregados">${tipo[3]}</p> 
    <p class="datosagregados">${tipo[4]}</p> 
    <p class="datosagregados">${tipo[5]}</p>
    <p class="datosagregados">${tipo[6]}</p>
    <span class="circle-x"><i class="fas fa-times-circle"></i></span>
    <div class="line"></div>
    `

    carshopping.appendChild(constructor)
  }
  carritoInsert(tipo){
    const carshopping = document.querySelector('.contain')
    let constructor = document.createElement('div')
    constructor.classList.add('div-shop')
    constructor.innerHTML =`
    <p class="datosagregados">${tipo[0]}</p>
    <p class="datosagregados">${tipo[1]}</p>
    <p class="datosagregados">${tipo[2]}</p>
    <p class="datosagregados">${tipo[3]}</p>
    <p class="datosagregados">${tipo[4]}</p>
    <span class="circle-x"><i class="fas fa-times-circle"></i></span>
    <div class="line"></div>
    `
    carshopping.appendChild(constructor)
  }
}

// seccion de carrito compras variables
const carrito = new Carrito()
const about = document.querySelector('.about')
const Container = document.querySelector('.contain')

// cart shoping activate
barsMenu.addEventListener('click',()=>{
  if (barsMenu.classList.contains('fa-shopping-cart')){
    barsMenu.classList.remove('fa-shopping-cart')
    barsMenu.classList.add('fa-times')
    navbar.style.display = 'flex'
  }else{
    barsMenu.classList.remove('fa-times')
    barsMenu.classList.add('fa-shopping-cart')
    navbar.style.display = 'none'

  }
})
// end cart shopping function

// function clip

botnshowdaymenu.addEventListener('click',(e)=>{
  e.preventDefault()
  if (contenedordayMenu.classList.contains('btn-group-show1')==false){
    contenedordayMenu.classList.add('btn-group-show1')

    // removiendo la propiedad abierta
    contenedor.classList.remove('btn-group-show')
    contEspecials.classList.remove('btn-group-show2')
    contSencillos.classList.remove('btn-group-show3')
    contBandejas.classList.remove('btn-group-show4')
    contBebidas.classList.remove('btn-group-show5')
    contPorciones.classList.remove('btn-group-show6')
    // agregando la distancia de los contenedores
    breakfastcontainer.style.top ="-2rem"
    containEspecials.style.top = "-130rem"
    containerSencillos.style.top = "-215rem"
    containerBandejas.style.top = "-265rem"
    containerBebidas.style.top = "-335rem"
    containerPorciones.style.top = "-395rem"
    
  }else{
    contenedordayMenu.classList.remove('btn-group-show1')
    containEspecials.style.top = "-165rem"
    breakfastcontainer.style.top ="-40rem"
    containerSencillos.style.top = "-255rem"
    containerBandejas.style.top = "-305rem"
    containerBebidas.style.top = "-375rem"
    containerPorciones.style.top = "-435rem"
  }})

botnshow.addEventListener('click',(e)=>{
  e.preventDefault()
  if (contenedor.classList.contains('btn-group-show')==false){

    contenedor.classList.add('btn-group-show')
// echando el contenedor hacia atras
    if (breakfastcontainer.style.top == "-2rem"){
      breakfastcontainer.style.top = "-40rem"
    }
         // removiendo la propiedad abierta
    contenedordayMenu.classList.remove('btn-group-show1')
    contEspecials.classList.remove('btn-group-show2')
    contSencillos.classList.remove('btn-group-show3')
    contBandejas.classList.remove('btn-group-show4')
    contBebidas.classList.remove('btn-group-show5')
    contPorciones.classList.remove('btn-group-show6')
    // poniendo los espaciados
    contenedor.style.top = "-20rem"
    containEspecials.style.top = "-45rem"
    containerSencillos.style.top = "-135rem"
    containerBandejas.style.top = "-185rem"
    containerBebidas.style.top = "-255rem"
    containerPorciones.style.top = "-310rem"
  }else{
    contenedor.classList.remove('btn-group-show')
    containEspecials.style.top = "-165rem"
    containerSencillos.style.top = "-255rem"
    containerBandejas.style.top = "-300rem"
    containerBebidas.style.top = "-370rem"
    containerPorciones.style.top = "-425rem"
  }})


btnespecials.addEventListener('click',(e)=>{
  e.preventDefault()
  if (contEspecials.classList.contains('btn-group-show2')==false){
    contEspecials.classList.add('btn-group-show2')

    if (containEspecials.style.top == "-45rem") {
      containEspecials.style.top = "-165rem"

    }
     // removiendo la propiedad abierta
    contenedor.classList.remove('btn-group-show')
    contenedordayMenu.classList.remove('btn-group-show1')
    contSencillos.classList.remove('btn-group-show3')
    contBandejas.classList.remove('btn-group-show4')
    contBebidas.classList.remove('btn-group-show5')
    contPorciones.classList.remove('btn-group-show6')

        // poniendo los espaciados
    containerSencillos.style.top = "-175rem"
    containerBandejas.style.top = "-220rem"
    containerBebidas.style.top = "-290rem"
    containerPorciones.style.top = "-345rem"
}else{
  contEspecials.classList.remove('btn-group-show2')
  containerSencillos.style.top = "-255rem"
  containerBandejas.style.top = "-300rem"
  containerBebidas.style.top = "-370rem"
  containerPorciones.style.top = "-430rem"
}})

btnSencillos.addEventListener('click',(e)=>{
  e.preventDefault()
  if (contSencillos.classList.contains('btn-group-show3')==false){
    contSencillos.classList.add('btn-group-show3')

    if (containerSencillos.style.top == "-175rem") {
      containerSencillos.style.top = "-235rem"

    }
     // removiendo la propiedad abierta
    contenedor.classList.remove('btn-group-show')
    contenedordayMenu.classList.remove('btn-group-show1')
    contEspecials.classList.remove('btn-group-show2')
    contBandejas.classList.remove('btn-group-show4')
    contBebidas.classList.remove('btn-group-show5')
    contPorciones.classList.remove('btn-group-show6')

    containerBandejas.style.top = "-245rem"
    containerBebidas.style.top = "-370rem"
    containerPorciones.style.top = "-390rem"
}else{
  contSencillos.classList.remove('btn-group-show3')
  containerBandejas.style.top = "-295rem"
  containerBebidas.style.top = "-365rem"
  containerPorciones.style.top = "-420rem"
}})

btnBandejas.addEventListener('click',(e)=>{
  e.preventDefault()
  if (contBandejas.classList.contains('btn-group-show4')==false){
    contBandejas.classList.add('btn-group-show4')
    if (containerBandejas.style.top == "-240rem") {
      containerBandejas.style.top = "-300rem"
    }
         // removiendo la propiedad abierta
    contenedor.classList.remove('btn-group-show')
    contenedordayMenu.classList.remove('btn-group-show1')
    contEspecials.classList.remove('btn-group-show2')
    contSencillos.classList.remove('btn-group-show3')
    contBebidas.classList.remove('btn-group-show5')
    contPorciones.classList.remove('btn-group-show6')

    containerBebidas.style.top = "-310rem"
    containerPorciones.style.top = "-365rem"

}else{
  contBandejas.classList.remove('btn-group-show4')
  containerBebidas.style.top = "-370rem"
  containerPorciones.style.top ="-420rem"
}})

btnBebidas.addEventListener('click',(e)=>{
  e.preventDefault()
  if (contBebidas.classList.contains('btn-group-show5')==false){
    contBebidas.classList.add('btn-group-show5')

    if (containerBebidas.style.top == "-310rem") {
      containerBebidas.style.top = "-365rem"
    }
         // removiendo la propiedad abierta
    contenedor.classList.remove('btn-group-show')
    contenedordayMenu.classList.remove('btn-group-show1')
    contEspecials.classList.remove('btn-group-show2')
    contSencillos.classList.remove('btn-group-show3')
    contBandejas.classList.remove('btn-group-show4')
    contPorciones.classList.remove('btn-group-show6')

    containerPorciones.style.top = "-305rem"
}else{
  contBebidas.classList.remove('btn-group-show5')
  
}})

btnPorciones.addEventListener('click',(e)=>{
  e.preventDefault()
  if (contPorciones.classList.contains('btn-group-show6')==false){
    contPorciones.classList.add('btn-group-show6')

    if (containerPorciones.style.top == "-365rem") {
      containerPorciones.style.top = "-420rem"
    }
    // removiendo la propiedad abierta
    contenedor.classList.remove('btn-group-show')
    contenedordayMenu.classList.remove('btn-group-show1')
    contEspecials.classList.remove('btn-group-show2')
    contSencillos.classList.remove('btn-group-show3')
    contBandejas.classList.remove('btn-group-show4')
    contBebidas.classList.remove('btn-group-show5')
}else{
  contPorciones.classList.remove('btn-group-show6')
  
}})

  
  
// function end
const carshopping = document.querySelector('.contain')
const btnCompra = document.querySelector('#comprar')

btnCompra.addEventListener('click',()=>{
  if (carshopping.childNodes.length == 0){
    alert('debes agregar productos a tu compra dirigete a las secciones y preciona agregar')
  }else{
    let compraARealizar = ""
    let reg =  /\\n/
    carshopping.childNodes.forEach((e)=>{
     
     compraARealizar += e.textContent
    })
    let newtext = compraARealizar.replace(/(\r\n|\n|\r)/gm, "+")
    let what =`https://api.whatsapp.com/send?phone=+573017109150&text=${newtext}`
    btnCompra.setAttribute('href',`${what}`)
    
  }

})
contenedor.addEventListener('click', (e)=>{carrito.compra(e)})
contenedordayMenu.addEventListener('click',(e)=>{carrito.compra(e)})
containEspecials.addEventListener('click',(e)=>{carrito.compra(e)})
containerSencillos.addEventListener('click',(e)=>{carrito.compra(e)})
containerBandejas.addEventListener('click',(e)=>{carrito.compra(e)})
