#!/usr/bin/node

const request = require('request');
const apiUrl = process.argv[2];
const characterId = '18';

request(apiUrl, (error, response, data) => {
  if (error) {
    console.error(error);
  } else {
    const filmsData = JSON.parse(data);
    const characterIsPresent = filmsData.results.filter(film =>
      film.characters.some(characterUrl => characterUrl.includes(`/${characterId}/`))
    );
    console.log(`${characterIsPresent.length}`);
  }
});
