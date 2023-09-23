#!/usr/bin/node

const request = require('request');
const apiUrl = 'https://swapi-api.hbtn.io/api/films/';
const characterId = '18';

request(apiUrl, (error, response, data) => {
  if (error) {
    console.error(error);
  } else {
    const filmsData = JSON.parse(data);
    const character_is_present = filmsData.results.filter(film =>
      film.characters.includes(`https://swapi-api.hbtn.io/api/people/${characterId}/`)
    );
    console.log(`${character_is_present.length}`);
  }
});
