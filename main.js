// * strating

console.log("starting the script v2.0");

const PATH = 'https://anas-asimi.github.io/alx-costumeJs/'
const filesNames = ['remainingHours', 'IndexingQA']

for (const fileName of filesNames) {
  import(PATH + fileName + 'js')
}
