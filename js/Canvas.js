// pegando a rea do canvas
const canvasBox = document.getElementById('canvas')
// transformando em um canvas
const canvasArea = canvasBox.getContext('2d')


// functional vars
let drawing = false
let mouseDown = false


// eventlistener
// in document
document.addEventListener("mousedown", function () {mouseDown = true})
document.addEventListener("mouseup", function () {mouseDown = false})
// in boxCanvas
canvasBox.addEventListener("mousedown", function () {drawing = true})
canvasBox.addEventListener("mouseup", stopDrawing())
canvasBox.addEventListener("mouseover", stopDrawing())
canvasBox.addEventListener("mouseenter", function () {})


// parando de desenhar
function stopDrawing() {drawing = false; canvasArea.beginPath()}

