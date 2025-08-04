// commum Functions for my project
// redirect function
function redirect(pageValue) {
  switch (pageValue) {
    case 1:
      window.location.href = "index.html"
      break
    case 2:
      window.location.href = ""
      break
    case 3:
      window.location.href = ""
      break
    default:
      window.location.reload()
      break
  }
}

