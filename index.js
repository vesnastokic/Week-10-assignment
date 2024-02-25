document.getElementById('table-body').classList.add('custom-table');

let button = document.getElementById('button');
button.addEventListener('click', addRow);

let rowNum = 0

function addRow() {
    rowNum += 1;
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let table = document.getElementById('table-body');
    let newRow = table.insertRow();
    let cell1 = newRow.insertCell(0);
    let cell2 = newRow.insertCell(1);
    let cell3 = newRow.insertCell(2);
    cell1.innerHTML = rowNum; // Numbering rows starting from 1
    cell2.innerHTML = name;
    cell3.innerHTML = email;
    document.getElementById('add-form').reset(); // Reset the form after adding row
  }