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
 * Generates a random result for the match.
 * 
 * @returns {String} result
 */
function getRandomResult() {
    const result = Math.floor(Math.random() * 3) + 1;
    switch (result) {
        case 1:
            return '1';
        case 2:
            return 'X';
        case 3:
            return '2';
        default:
            return 'X';
    }
}