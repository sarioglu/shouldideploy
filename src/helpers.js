const {
  REASONS_TO_DEPLOY,
  REASONS_TO_NOT_DEPLOY,
  REASONS_FOR_FRIDAY_AFTERNOON,
  REASONS_FOR_AFTERNOON,
  REASONS_FOR_WEEKEND
} = require("./reasons");

const D = new Date();
const HOURS = D.getHours();
const DAY = D.getDay();

const IS_FRIDAY = DAY === 5;
const IS_AFTERNOON = HOURS >= 16;
const IS_FRIDAY_AFTERNOON = IS_FRIDAY && IS_AFTERNOON;
const IS_WEEKEND = DAY > 5;

const getRandom = function(list) {
  return list[Math.floor(Math.random() * list.length)];
};

function dayHelper() {
  if (IS_FRIDAY_AFTERNOON) {
    throw REASONS_FOR_FRIDAY_AFTERNOON;
  }
  if (IS_FRIDAY) {
    throw REASONS_TO_NOT_DEPLOY;
  }
  if (IS_AFTERNOON) {
    throw REASONS_FOR_AFTERNOON;
  }
  if (IS_WEEKEND) {
    throw REASONS_FOR_WEEKEND;
  }
  return REASONS_TO_DEPLOY;
}

module.exports = {
  getRandom,
  dayHelper
};
