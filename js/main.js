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

const direction = document.querySelector('.direction')

contain.addEventListener('click',(e)=>{
  if (e.target.classList.contains('fas-')){
    const total = document.querySelector('.totalCompra')

    let elemento =e.target.parentElement.parentElement.childNodes[7].innerText
    console.log(elemento)
    let descont = Number(total.childNodes[2].textContent) - Number(elemento)
    total.childNodes[2].remove()
    total.append(descont)
    contain.removeChild(e.target.parentElement.parentElement)
  }
  else if(e.target.classList.contains('fas')){
    const total = document.querySelector('.totalCompra')

    let elemento =e.target.parentElement.parentElement.childNodes[3].textContent
    console.log(elemento)
    let descont = Number(total.childNodes[2].textContent) - Number(elemento)
    total.childNodes[2].remove()
    total.append(descont)
    contain.removeChild(e.target.parentElement.parentElement)
  }
  
})

// clases 
class Carrito{

  compra(e){
    const producto ={}
    const productoPortion = {}
    
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
        producto[2] = meat
        producto[1] = precioFish
      }else if (meat ==='bagre') {
        console.log(price)
        const precioFish = Number(price)+ 2000  
        producto[2]= meat
        console.log(precioFish)
        producto[1] = precioFish
      }
      else{
        producto[2]=meat
        producto[1] = price
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
      if (meat ==='Especial de Robalo') {
        const precioFish = Number(price)+ 2000  
        producto[2] = meat
        producto[1] = precioFish
      }else if (meat ==='Especial de Chuleta de cerdo' || meat==='Especial de Filete') {
        console.log(price)
        const precioFish = Number(price)- 5000  
        producto[2]= meat
        console.log(precioFish)
        producto[1] = precioFish
      }
      else{
        producto[2]=meat
        producto[1] = price
      }
      producto[0]=plate;
      producto[2]=meat

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
      let bLimonada = document.getElementById('limonadA')
      let bClaro = document.getElementById('claRo')
      let bMazamorra = document.getElementById('mazamorrA')
      let bJugo = document.getElementById('jugo_del_dIa')
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
      console.log(bClaro.checked)
      if (bLimonada.checked){
        producto[4]=bLimonada.id
      }else if (bClaro.checked){
        producto[4]=bClaro.id
      }else if (bMazamorra.checked){
        producto[4]=bMazamorra.id
      }else if(bJugo.checked){
        producto[4]=bJugo.id
      }else{
        producto[4]='cualquier bebida'
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
    else if (e.target.classList.contains('dy')) {
      e.preventDefault()
      let node = e.target.parentElement.parentElement
      let nodos = node.childNodes
      let plate = nodos[1].textContent
      let price = nodos[3].childNodes[0].childNodes[1].value
      let especification = nodos[5].childNodes[1].value
      if (document.getElementById('limoNada')){
        var bLimonada = document.getElementById('limoNada')
      }else if (document.getElementById('limOnAda')) {
        var bLimonada = document.getElementById('limOnAda')
      }else if (document.getElementById('limoNaDA')) {
        var bLimonada = document.getElementById('limoNaDA')
      }
      
      if (document.getElementById('claRO')) {
        var bClaro = document.getElementById('claRO')
      }else if (document.getElementById('cLarO')) {
        var bClaro = document.getElementById('cLarO')
      }else if (document.getElementById('CLARO')) {
        var bClaro = document.getElementById('CLARO')
      }
      let bMazamorra = document.getElementById('Mazamorra')
      let bJugo = document.getElementById('jugo_Del_dia')

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
      producto[0]=plate;
      producto[1]=price

      if (bLimonada.checked){
        producto[4]=bLimonada.id
      }else if (bClaro.checked){
        producto[4]=bClaro.id
      }else if (bMazamorra.checked){
        producto[4]=bMazamorra.id
      }else if(bJugo.checked){
        producto[4]=bJugo.id
      }else{
        producto[4]='cualquier bebida'
      }
      this.carritoInsert(producto)
    }
    else if (e.target.classList.contains('portions')) {
      e.preventDefault()
      const contenedorPorciones = document.querySelector('#porciones')
      contenedorPorciones.childNodes.forEach((e)=>{
        if (e.nodeName != '#text'){
          e.childNodes.forEach((e)=>{
            if(e.checked){
              if(e.id == "PorcionDeCarne" && e.checked){
                console.log(e.id, e.parentElement.childNodes)
                productoPortion[0]= e.id
                productoPortion[1]= e.parentElement.childNodes[4].value
                productoPortion[2]= 1
                productoPortion[3]= e.parentElement.childNodes[2].value
                this.portionAddEag(productoPortion)

              }else if ( e.id == "CarneYpapas" && e.checked){
                productoPortion[0]= e.id
                productoPortion[1]= e.parentElement.childNodes[3].value
                productoPortion[2]= 1
                productoPortion[3]= e.parentElement.childNodes[2].value
                this.portionAddEag(productoPortion)
              }else if (e.id == "carneYEnsalada" && e.checked){
                productoPortion[0]= e.id
                productoPortion[1]= e.parentElement.childNodes[3].value
                productoPortion[2]= 1
                productoPortion[3]= e.parentElement.childNodes[2].value
                this.portionAddEag(productoPortion)
              }
              else{
                
                let Cant = e.parentElement.childNodes[3].childNodes[1].value 
                let price = e.parentElement.childNodes[2].value
                let nameP = e.parentElement.childNodes[0].textContent
                let valor = Number(Cant) * Number(price)

                productoPortion[0]= 'Porcion de: '
                productoPortion[1]= nameP
                productoPortion[2]= Cant
                productoPortion[3]= valor
                this.portionAddEag(productoPortion)
              }
              
            }
          })

        }
      })
      
    }
    else if (e.target.classList.contains('bebidas')){
      e.preventDefault()
      const contenedorbebidas = document.querySelector('#bebidas')
      contenedorbebidas.childNodes.forEach((e)=>{
        if (e.nodeName != '#text'){
          e.childNodes.forEach((e)=>{
            if(e.checked){
              if (e.id == "Cerveza") {
                let re = /\s[0-9]/g
                let re2 = /([a-z])/g
                let price = e.parentElement.childNodes[2].value
                let textCont = e.parentElement.childNodes[3].value
                if (textCont.length < 0) {
                  productoPortion[0] = 'cualquier cerveza'
                }else{
                  let nombre = textCont.match(re2)
                  productoPortion[0] = nombre
                }
                let tecto =textCont.match(re)
                productoPortion[1] = 'cantidad'
                productoPortion[2] = tecto[0]
                productoPortion[3] = price
                alert('el precio de la cerveza se dara en whatzapp')
                this.portionAddEag(productoPortion)
                
              }else{
                let Cant = e.parentElement.childNodes[3].childNodes[1].value 
                let price = e.parentElement.childNodes[2].value
                let nameP = e.parentElement.childNodes[0].textContent
                let valor = Number(Cant) * Number(price)
  
                productoPortion[0]= 'bebida: '
                productoPortion[1]= nameP
                productoPortion[2]= Cant
                productoPortion[3]= valor
                this.portionAddEag(productoPortion)
              }

            }
          })

        }
      })
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
  portionAddEag(tipo){
    const carshopping = document.querySelector('.contain')
    const total = document.querySelector('.totalCompra')
    let constructor = document.createElement('div')
    constructor.classList.add('div-shop')
    constructor.innerHTML =`
    <p class="datosagregados">${tipo[0]}</p>
    <p class="datosagregados">${tipo[1]}</p>
    <p class="datosagregados">${tipo[2]}</p>
    <p class="datosagregados">${tipo[3]}</p>
    <span class="circle-x"><i class="fas- fas fa-times-circle"></i></span>
    <div class="line"></div>
    `
    if (total.childNodes.length == 3) {
      // let nuevo = Number(total.childNodes[2].textContent)
      // nuevo=Number(tipo[1])
      let nuevo = Number(total.childNodes[2].textContent)
      total.childNodes[2].remove()
      let valorag = nuevo += Number(tipo[3])
      total.append(valorag)
      
    }else{
      total.append(Number(tipo[3]))
    }
    carshopping.appendChild(constructor)
  }
  carritoInsertdontmeat(tipo){
    const carshopping = document.querySelector('.contain')
    const total = document.querySelector('.totalCompra')
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
    if (total.childNodes.length == 3) {
      // let nuevo = Number(total.childNodes[2].textContent)
      // nuevo=Number(tipo[1])
      let nuevo = Number(total.childNodes[2].textContent)
      total.childNodes[2].remove()
      let valorag = nuevo += Number(tipo[1])
      total.append(valorag)
      
    }else{
      total.append(tipo[1])
    }
    carshopping.appendChild(constructor)
  }
  carritoInsertdontesp(tipo){
    const carshopping = document.querySelector('.contain')
    const total = document.querySelector('.totalCompra')
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
    if (total.childNodes.length == 3) {
      // let nuevo = Number(total.childNodes[2].textContent)
      // nuevo=Number(tipo[1])
      let nuevo = Number(total.childNodes[2].textContent)
      total.childNodes[2].remove()
      let valorag = nuevo += Number(tipo[1])
      total.append(valorag)
      
    }else{
      total.append(tipo[1])
    }
    carshopping.appendChild(constructor)
  }
  carritoInsertdontsen(tipo){
    const carshopping = document.querySelector('.contain')
    const total = document.querySelector('.totalCompra')
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
    if (total.childNodes.length == 3) {
      // let nuevo = Number(total.childNodes[2].textContent)
      // nuevo=Number(tipo[1])
      let nuevo = Number(total.childNodes[2].textContent)
      total.childNodes[2].remove()
      let valorag = nuevo += Number(tipo[1])
      total.append(valorag)
      
    }else{
      total.append(tipo[1])
    }
    carshopping.appendChild(constructor)
  }
  carritoInsert(tipo){
    const carshopping = document.querySelector('.contain')
    const total = document.querySelector('.totalCompra')
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
    if (total.childNodes.length == 3) {
      // let nuevo = Number(total.childNodes[2].textContent)
      // nuevo=Number(tipo[1])
      let nuevo = Number(total.childNodes[2].textContent)
      total.childNodes[2].remove()
      let valorag = nuevo += Number(tipo[1])
      total.append(valorag)
      
    }else{
      total.append(tipo[1])
    }
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
    containEspecials.style.top = "-260rem"
    containerSencillos.style.top = "-425rem"
    containerBandejas.style.top = "-510rem"
    containerBebidas.style.top = "-665rem"
    containerPorciones.style.top = "-800rem"
    direction.style.top = "-530rem"
    
  }else{
    contenedordayMenu.classList.remove('btn-group-show1')
    containEspecials.style.top = "-555rem"
    breakfastcontainer.style.top ="-300rem"
    containerSencillos.style.top = "-720rem"
    containerBandejas.style.top = "-805rem"
    containerBebidas.style.top = "-955rem"
    containerPorciones.style.top = "-1085rem"
    direction.style.top = "-810rem"
  }})

botnshow.addEventListener('click',(e)=>{
  e.preventDefault()
  if (contenedor.classList.contains('btn-group-show')==false){

    contenedor.classList.add('btn-group-show')
// echando el contenedor hacia atras
    if (breakfastcontainer.style.top == "-2rem"){
      breakfastcontainer.style.top = "-300rem"
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
    containEspecials.style.top = "-300rem"
    containerSencillos.style.top = "-460rem"
    containerBandejas.style.top = "-545rem"
    containerBebidas.style.top = "-700rem"
    containerPorciones.style.top = "-830rem"
    direction.style.top = "-540rem"
  }else{
    contenedor.classList.remove('btn-group-show')
    containEspecials.style.top = "-555rem"
    breakfastcontainer.style.top ="-300rem"
    containerSencillos.style.top = "-720rem"
    containerBandejas.style.top = "-805rem"
    containerBebidas.style.top = "-955rem"
    containerPorciones.style.top = "-1085rem"
    direction.style.top = "-810rem"
  }})


btnespecials.addEventListener('click',(e)=>{
  e.preventDefault()
  if (contEspecials.classList.contains('btn-group-show2')==false){
    contEspecials.classList.add('btn-group-show2')

    if (containEspecials.style.top == "-300rem") {
      containEspecials.style.top = "-550rem"

    }
     // removiendo la propiedad abierta
    contenedor.classList.remove('btn-group-show')
    contenedordayMenu.classList.remove('btn-group-show1')
    contSencillos.classList.remove('btn-group-show3')
    contBandejas.classList.remove('btn-group-show4')
    contBebidas.classList.remove('btn-group-show5')
    contPorciones.classList.remove('btn-group-show6')

        // poniendo los espaciados
    containerSencillos.style.top = "-560rem"
    containerBandejas.style.top = "-650rem"
    containerBebidas.style.top = "-805rem"
    containerPorciones.style.top = "-940rem"
    direction.style.top = "-660rem"
}else{
  contEspecials.classList.remove('btn-group-show2')
  containerSencillos.style.top = "-720rem"
  containerBandejas.style.top = "-805rem"
  containerBebidas.style.top = "-955rem"
  containerPorciones.style.top = "-1085rem"
  direction.style.top = "-810rem"
}})

btnSencillos.addEventListener('click',(e)=>{
  e.preventDefault()
  if (contSencillos.classList.contains('btn-group-show3')==false){
    contSencillos.classList.add('btn-group-show3')

    if (containerSencillos.style.top == "-560rem") {
      containerSencillos.style.top = "-710rem"

    }
     // removiendo la propiedad abierta
    contenedor.classList.remove('btn-group-show')
    contenedordayMenu.classList.remove('btn-group-show1')
    contEspecials.classList.remove('btn-group-show2')
    contBandejas.classList.remove('btn-group-show4')
    contBebidas.classList.remove('btn-group-show5')
    contPorciones.classList.remove('btn-group-show6')

    containerBandejas.style.top = "-720rem"
    containerBebidas.style.top = "-875rem"
    containerPorciones.style.top = "-1010rem"
    direction.style.top = "-730rem"
}else{
  contSencillos.classList.remove('btn-group-show3')
  containerBandejas.style.top = "-805rem"
  containerBebidas.style.top = "-955rem"
  containerPorciones.style.top = "-1085rem"
  direction.style.top = "-810rem"
}})

btnBandejas.addEventListener('click',(e)=>{
  e.preventDefault()
  if (contBandejas.classList.contains('btn-group-show4')==false){
    contBandejas.classList.add('btn-group-show4')
    if (containerBandejas.style.top == "-720rem") {
      containerBandejas.style.top = "-800rem"
    }
         // removiendo la propiedad abierta
    contenedor.classList.remove('btn-group-show')
    contenedordayMenu.classList.remove('btn-group-show1')
    contEspecials.classList.remove('btn-group-show2')
    contSencillos.classList.remove('btn-group-show3')
    contBebidas.classList.remove('btn-group-show5')
    contPorciones.classList.remove('btn-group-show6')

    containerBebidas.style.top = "-810rem"
    containerPorciones.style.top = "-950rem"
    direction.style.top = "-670rem"

}else{
  contBandejas.classList.remove('btn-group-show4')
  containerBebidas.style.top = "-955rem"
  containerPorciones.style.top = "-1085rem"
  direction.style.top = "-810rem"
}})

btnBebidas.addEventListener('click',(e)=>{
  e.preventDefault()
  if (contBebidas.classList.contains('btn-group-show5')==false){
    contBebidas.classList.add('btn-group-show5')

    if (containerBebidas.style.top == "-810rem") {
      containerBebidas.style.top = "-960rem"
    }
         // removiendo la propiedad abierta
    contenedor.classList.remove('btn-group-show')
    contenedordayMenu.classList.remove('btn-group-show1')
    contEspecials.classList.remove('btn-group-show2')
    contSencillos.classList.remove('btn-group-show3')
    contBandejas.classList.remove('btn-group-show4')
    contPorciones.classList.remove('btn-group-show6')

    containerPorciones.style.top = "-960rem"
    direction.style.top = "-700rem"
}else{
  contBebidas.classList.remove('btn-group-show5')
  containerPorciones.style.top = "-1085rem"
  direction.style.top = "-810rem"
}})

btnPorciones.addEventListener('click',(e)=>{
  e.preventDefault()
  if (contPorciones.classList.contains('btn-group-show6')==false){
    contPorciones.classList.add('btn-group-show6')

    if (containerPorciones.style.top == "-960rem") {
      containerPorciones.style.top = "-1090rem"
    }
    // removiendo la propiedad abierta
    contenedor.classList.remove('btn-group-show')
    contenedordayMenu.classList.remove('btn-group-show1')
    contEspecials.classList.remove('btn-group-show2')
    contSencillos.classList.remove('btn-group-show3')
    contBandejas.classList.remove('btn-group-show4')
    contBebidas.classList.remove('btn-group-show5')
    direction.style.top = "-700rem"
}else{
  contPorciones.classList.remove('btn-group-show6')
  direction.style.top = "-800rem"
}})

  
  
// function end
const carshopping = document.querySelector('.contain')
const btnCompra = document.querySelector('#comprar')
const btnVaciarCarro = document.querySelector('#vaciar')

btnVaciarCarro.addEventListener('click',()=>{while (carshopping.firstChild)
  {carshopping.removeChild(carshopping.firstChild)
    const total = document.querySelector('.totalCompra')
  if (total.childNodes[2]){
    
    total.childNodes[2].remove()
  }}
})
btnCompra.addEventListener('click',()=>{
  if (carshopping.childNodes.length == 0){
    alert('debes agregar productos a tu compra dirigete a las secciones y preciona agregar')
  }else{
    let compraARealizar = ""
    let reg =  /\\n/
    let nuevomensaje
    carshopping.childNodes.forEach((e)=>{
      compraARealizar  = " hola ⏱ te hablamos https://leonardo2322.github.io/Mukata/ colombia \n tipo de servicio: {validar Con nuestro equipo} \n Estado del Pago: {no pagado} \n costos de los productos: {} \n Pedido ✍: x1 agua $15000 envia este mensaje te atenderemos enseguida"
      nuevomensaje = compraARealizar + e.textContent + "\t" 
      //  compraARealizar += e.textContent + '|'
    })
    // let newtext = compraARealizar.replace(/(\r\n|\n|\r)/gm, "_")
    // let totalDeLaCompra = document.querySelector('#compratotal').textContent
    // let textdontSpace = newtext.replace(/\s+/g, " ") + totalDeLaCompra
       let textdontSpace = nuevomensaje
    let what =`https://api.whatsapp.com/send?phone=+573502117928&text=${nuevomensaje}`
    btnCompra.setAttribute('href',`${what}`)
    
  }

})
contenedor.addEventListener('click', (e)=>{carrito.compra(e)})
contenedordayMenu.addEventListener('click',(e)=>{carrito.compra(e)})
containEspecials.addEventListener('click',(e)=>{carrito.compra(e)})
containerSencillos.addEventListener('click',(e)=>{carrito.compra(e)})
containerBandejas.addEventListener('click',(e)=>{carrito.compra(e)})
containerPorciones.addEventListener('click',(e)=>{carrito.compra(e)})
containerBebidas.addEventListener('click',(e)=>{carrito.compra(e)})