let titles = document.querySelectorAll(".panel-title")
let codes = document.querySelectorAll(".task-card .list-group code")


for (const element of [...titles, ...codes]) {
  element.onclick = () => navigator.clipboard.writeText(element.innerText)
  element.style.cursor = 'pointer'
}
