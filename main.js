// * strating

console.log("starting the script v2.0");

const PATH = 'https://anas-asimi.github.io/alx-costumeJs/'
const EXTENSION = '.js'
const filesNames = ['remainingHours', 'IndexingQA', 'ClickToCopy','Add_summary']

const PAGE_URL = document.URL
const PREFIX = 'https://intranet.alxswe.com/projects'

if (PAGE_URL.startsWith(PREFIX)) {
  for (const fileName of filesNames) {
    import(PATH + fileName + EXTENSION)
  }
}
