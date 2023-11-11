"use strict"
/**
 * Returns an array of all the teams.
 * 
 * @returns {Array} teams
 */
async function getTeams() {
    let url = `https://www.balldontlie.io/api/v1/teams`;
    let result = await solicitud(url);
    let json = await result.json();;
    return json.data;
}

