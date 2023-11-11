/**
 * Display the plates in the result element
 */
function displayPlates() {
    let platesFiled = document.createElement("div");
    plates.forEach(matricula => {
        let plateField = document.createElement("p");
        plateField.classList.add("matricula");
        plateField.innerHTML = matricula;
        platesFiled.appendChild(plateField);
    });
    result.replaceChildren(platesFiled);
}

