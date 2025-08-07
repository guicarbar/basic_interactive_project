// pegando a rea do canvas
const canvasBox = document.getElementById('canvas')
// arrumando a largura e altura da div pra se ajustar
canvasBox.width = window.innerWidth * 0.95
canvasBox.height = window.innerHeight * 0.85
// transformando em um canvas
const canvasArea = canvasBox.getContext('2d')


// functional vars
// Verify
let drawing = false
let mouseDown = false
// modify elments
let lineColor = '#ffffff'
let lineWidth = 2


// functions for modify elements
function changeColor (newColor) {lineColor = newColor}


// eventlistener
// in document
document.addEventListener("mousedown", function () {mouseDown = true})
document.addEventListener("mouseup", function () {mouseDown = false})
// in boxCanvas
canvasBox.addEventListener("mousedown", function () {drawing = true})
canvasBox.addEventListener("mouseup", stopDrawing)
canvasBox.addEventListener("mouseover", stopDrawing)
canvasBox.addEventListener("mouseenter", function () {})
canvasBox.addEventListener("mousemove", function (event) {if (!mouseDown) {return} Draw(event)})


// parando de desenhar
function stopDrawing() {drawing = false; canvasArea.beginPath()}

// draw
function Draw(event) {
  // se for falso ele cancela a função
  if(!drawing) {return}

  // calculo da posiçao no canva
  const eventInfo = canvasBox.getBoundingClientRect()
  const x = event.clientX - eventInfo.left - 5 // -5 pra centralizar no crosshair
  const y = event.clientY - eventInfo.top - 5 // -5 pra centralizar no crosshair

  // especifica os valores
  canvasArea.lineWidth = lineWidth
  canvasArea.strokeStyle = lineColor
  canvasArea.lineCap = 'round'

  // criando o rabisco
  canvasArea.lineTo(x, y)
  canvasArea.stroke()
  canvasArea.beginPath()
  canvasArea.moveTo(x, y)
}

