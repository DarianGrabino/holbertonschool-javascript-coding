#!/usr/bin/node

const request = require('request');
const dict = {};

request(process.argv[2], (error, response, data) => {
  if (error) {
    console.error(error);
    return;
  }
  const tasks = JSON.parse(data);
  tasks.forEach((task) => {
    dict[task.userId] = (dict[task.userId] || 0) + (task.completed ? 1 : 0);
  });

  console.log(dict);
});
