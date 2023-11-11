const weight1 = document.getElementById("weight1");
const weight2 = document.getElementById("weight2");
const weightX = document.getElementById("weightX");
let totalWeight = 0;

let teamNames = [];
let match;
let matches = [];

/**
 * Generates a quiniela and displays it in the result element.
 */
function generateQuiniela() {
    // Clear the arrays
    matches = [];
    teamNames = [];

    getTeams().then(data => {
        let teams = data;
        getTeamNames(teams);
        for (let i = 0; i < 15; i++) {
            match = generateMatch();
            matches.push(match);
        };
        displayQuiniela(matches);
    });
}


/**
 * Gets the names of the teams from the given array and stores them in the teamNames array.
 * 
 * @param {Array} teams 
 */
function getTeamNames(teams) {
    teams.forEach(team => {
        teamNames.push(team.name);
    });
}

/**
 * Generates a match with a random result.
 * 
 * @returns {Array} match
 */
function generateMatch() {
    let home = teamNames[Math.floor(Math.random() * teamNames.length)];
    let away = teamNames[Math.floor(Math.random() * teamNames.length)];
    while (home == away) {
        away = teamNames[Math.floor(Math.random() * teamNames.length)];
    }

    return [home, away, getRandomResult()];
}

/**
 * Generates a random result for the match given the weights.
 * 
 * @returns {String} result
 */
function getRandomResult() {
    totalWeight = parseInt(weight1.value) + parseInt(weight2.value) + parseInt(weightX.value);
    console.log(totalWeight);
    const result = Math.floor(Math.random() * totalWeight) + 1;
    if (result <= parseInt(weight1.value)) {
        return '1';
    } else if (result <= parseInt(weight1.value) + parseInt(weight2.value)) {
        return '2';
    } else {
        return 'X';
    }
}