const formEl = document.querySelector("form");
const tbodyEl = document.querySelector("tbody");
const tableEl = document.querySelector("table");
function onAddSample(e) {
  e.preventDefault();
  const sample = document.getElementById("sample").value;
  tbodyEl.innerHTML += `
            <tr>
           
                <td>${sample}
                <button class="deleteBtn">X</button></td> 
         
            </tr>
        `;
}

function onDeleteRow(e) {
  if (!e.target.classList.contains("deleteBtn")) {
    return;
  }

  const btn = e.target;
  btn.closest("tr").remove();
}

formEl.addEventListener("submit", onAddSample);
tableEl.addEventListener("click", onDeleteRow);
