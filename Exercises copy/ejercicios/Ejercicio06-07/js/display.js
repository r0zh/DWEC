/**
 * Display the quiniela in the result element.
 * 
 * @param {Array} matches 
 */
function displayQuiniela(matches) {
    let table = document.createElement("table");
    let thead = document.createElement("thead");
    let tbody = document.createElement("tbody");
    let tr = document.createElement("tr");
    tr.classList.add("head");
    let th = document.createElement("th");
    th.innerHTML = "Local";
    tr.appendChild(th);
    th = document.createElement("th");
    th.innerHTML = "Visitante";
    tr.appendChild(th);
    th = document.createElement("th");
    th.innerHTML = "Resultado";
    tr.appendChild(th);
    thead.appendChild(tr);
    table.appendChild(thead);
    matches.forEach(match => {
        tr = document.createElement("tr");
        let td = document.createElement("td");
        td.innerHTML = match[0];
        tr.appendChild(td);
        td = document.createElement("td");
        td.innerHTML = match[1];
        tr.appendChild(td);
        td = document.createElement("td");
        td.innerHTML = match[2];
        tr.appendChild(td);
        tbody.appendChild(tr);
    });
    table.appendChild(tbody);
    result.replaceChildren(table);
}

