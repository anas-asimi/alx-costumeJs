// =======================================================================>
// add the remaining hours

console.log('add the remaining hours');
const projectMetadata = document.getElementById('project-metadata')
const projectCalendar = projectMetadata.querySelector('.fa-calendar').parentElement
const projectEndDate = [...projectCalendar.querySelectorAll('.datetime')].pop()
let hours = (new Date(projectEndDate.textContent) - new Date()) / 1000 / 60 / 60
const hoursElement = document.createElement("span")
hoursElement.textContent = `  (${hours.toFixed(0)} hours)`
hoursElement.style.fontWeight = 600
projectCalendar.appendChild(hoursElement)
