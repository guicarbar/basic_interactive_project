document.addEventListener("DOMContentLoaded", function () {
  // itens
  const itens = document.querySelectorAll('.carousel-item')
  // index set
  let index = 0

  setInterval(() => {
    // Remove classe do item atual
    itens[index].classList.remove('carousel-active')

    // aumenta o index e volta para o começo
    index = (index + 1) % itens.length

    // Adiciona classe no proximo item da lista
    itens[index].classList.add('carousel-active')
  }, 7900)
})