// generateRandomData.js

function generateRandomName(length) {
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

  function getRandomLetter() {
    return letters.charAt(Math.floor(Math.random() * letters.length));
  }

  let randomName = "";
  for (let i = 0; i < length; i++) {
    randomName += getRandomLetter();
  }

  return randomName;
}

module.exports = { generateRandomName };
