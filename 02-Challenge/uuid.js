// https://www.npmjs.com/package/uuid

// use link for reference 

module.exports = () =>
  Math.floor((1 + Math.random() * 0x10000))
        .toString(16)
        .substring(1);

// https://www.w3resource.com/javascript-exercises/javascript-math-exercise-23.php

