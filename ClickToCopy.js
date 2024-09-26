// =======================================================================>
// Click to copy

let titles = document.querySelectorAll('.panel-title');
let codes = document.querySelectorAll('code');

for (const element of [...titles, ...codes]) {
  element.onclick = () => navigator.clipboard.writeText(element.innerText);
  element.style.cursor = 'pointer';
}
