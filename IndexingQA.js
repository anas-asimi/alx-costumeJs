// =======================================================================>
// add indexs to tasks QA

let already = false; // boolean to pervert redoing the indexing

// * check if QA is available
if (isQA_available() == false) {
  console.log("QA isn't available");
} else {
  console.log('QA is available');
  console.log('turn on indexing');
  // get the buttons
  let btns = Array(
    ...document.querySelectorAll('[data-toggle="modal"]')
  ).filter((btn) => btn.innerText.includes('QA Review'));
  // add event handler to every button
  btns.forEach((btn) => btn.addEventListener('click', () => {
    console.log('click');
    let taskNumber = getParentNode(btn, 5)
      .getAttribute('data-role')
      .replace(/^\D+/g, '');
    // wait for the specific modal
    waitForElm(`#task-qa-review-${taskNumber}-modal`).then((modal) => {
      console.log('Element is ready');
      // add index to list items
      setTimeout(() => {
        let i = 0;
        modal
          .querySelectorAll('.review-checks.list-group li')
          .forEach(
            (e) => {
              if (e.firstChild.innerHTML.startsWith('<span style="color: black;">')) {
                return; // do nothing
              }
              e.firstChild.innerHTML = `<span style="color: black;">${i++} : </span>` + e.firstChild.innerHTML;
            }
        );
      }, 1000);
    });
  })
  );
}

// * add "check all tasks" button
console.log('add "check all tasks" button');
const myBtn = document.createElement('button');
myBtn.textContent = 'check all tasks';
myBtn.className = 'btn btn-primary';
myBtn.style.position = 'absolute';
myBtn.style.bottom = '14px';
myBtn.style.right = '154px';
myBtn.onclick = () => {
  document.querySelectorAll('button.correction_request_test_send').forEach(btn => btn.click());
};
document.body.appendChild(myBtn);

// * wait for element to render
function waitForElm (selector) {
  return new Promise((resolve) => {
    if (document.querySelector(selector)) {
      return resolve(document.querySelector(selector));
    }
    const observer = new MutationObserver((mutations) => {
      if (document.querySelector(selector)) {
        observer.disconnect();
        resolve(document.querySelector(selector));
      }
    });
    observer.observe(document.body, {
      childList: true,
      subtree: true
    });
  });
}

// * check if QA available
function isQA_available () {
  let buttons = Array(
    ...document.querySelectorAll('#task-num-0 .panel-footer button')
  );
  return buttons.some((btn) => btn.innerText.includes('QA Review'));
}

// * get specific ancestor of element
function getParentNode (element, level = 1) {
  // 1 - default value (if no 'level' parameter is passed to the function)
  while (level-- > 0) {
    element = element.parentNode;
    if (!element) return null; // to avoid a possible "TypeError: Cannot read property 'parentNode' of null" if the requested level is higher than document
  }
  return element;
}
