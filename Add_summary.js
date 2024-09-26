// =======================================================================>
// add tasks summary to the intranet navbar

const navbar = document.querySelector('.header');
const template = `<div style="margin-right: 16px; flex-direction: column; align-items: center; background-color: aliceblue; padding: 8px; border: 1px solid darkgray; border-radius: 4px;">
                <div style="display: flex; justify-content: space-between; width: 100%;">
                    <span>Tasks:</span>
                    <span>20</span>
                </div>
                <p style="margin: 0;">✅ 10 ❌ 10</p>
            </div>`;
navbar.innerHTML += template;
