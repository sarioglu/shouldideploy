const { getRandom, dayHelper } = require("./src/helpers");

function shouldideploy() {
  try {
    console.log("Should I deploy?:", getRandom(dayHelper()));
    return true;
  } catch (error) {
    console.error("Should I deploy?:", getRandom(error));
    return false;
  }
}

module.exports = shouldideploy;
