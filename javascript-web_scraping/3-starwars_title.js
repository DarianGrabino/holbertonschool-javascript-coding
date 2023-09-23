#!/usr/bin/node

const request = require('request');

request('https://swapi-api.hbtn.io/api/films/' + process.argv[2], (error, responde, data) => {
  if (error) {
    console.error(error);
  } else {
    console.log(JSON.parse(data).title);
  }
});
