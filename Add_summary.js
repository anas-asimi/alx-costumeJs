// =======================================================================>
// add tasks summary to the intranet navbar

console.log('adding tasks summary');

const navbar = document.querySelector('.header');
const template = `<div style="margin-right: 16px; flex-direction: column; align-items: center; background-color: aliceblue; padding: 8px; border: 1px solid darkgray; border-radius: 4px;">
                <div style="display: flex; justify-content: space-between; width: 100%;">
                    <span>Tasks :</span>
                    <span id="_tasks">20</span>
                </div>
                <div>
                    <span>✅&nbsp;</span>
                    <span id="_done">10</span>
                    <span>&nbsp;</span>
                    <span>❌&nbsp;</span>
                    <span id="_undone">10</span>
                </div>
            </div>`;
navbar.innerHTML += template;

let tasks = document.getElementById('_tasks');
let done = document.getElementById('_done');
let undone = document.getElementById('_undone');

function update_stats () {
  let tasks_count = document.querySelectorAll('.panel-title').length;
  let done_count = document.querySelectorAll('.student_task_done.yes').length;
  let undone_count = tasks_count - done_count;
  tasks.innerHTML = tasks_count;
  done.innerHTML = done_count;
  undone.innerHTML = undone_count;
}

setInterval(update_stats, 1000);
