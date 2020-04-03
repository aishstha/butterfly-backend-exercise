import Boom from '@hapi/boom';

import APP from '../constants/questions';

/**
 * Get a questions.
 *
 * @param {String}  moodId
 *
 * @returns {Promise}
 */
export async function getRandomQuestions(moodId) {
  try {
    let questions = APP.QUESTIONLIST;

    let message = getMessage(moodId);

    return { questions: shuffle(questions), message, company: 'Demo Inc.' };
  } catch (err) {
    throw Boom.notFound('Question not found');
  }
}

/**
 * Shuffle array
 *
 * @param {Array} questions
 */
function shuffle(questions) {
  for (let index = questions.length - 1; index > 0; index--) {
    const temp = Math.floor(Math.random() * (index + 1));
    [questions[index], questions[temp]] = [questions[temp], questions[index]];
  }

  return questions;
}

/**
 * Get message according to mood
 *
 * @param {String} moodId
 */
function getMessage(moodId) {
  let message;

  switch (moodId) {
    case '1':
      message = 'Oops, something needs to change.';
      break;

    case '2':
      message = 'Mmmmh, things should improve.';
      break;

    case '3':
      message = 'OK… things could be better.';
      break;

    case '4':
      message = 'Great!';
      break;

    case '5':
      message = 'Awesome!';
      break;

    default:
      message = 'Oops';
  }

  return message;
}

/**
 * Get company name.
 *
 * @param {String}  moodId
 *
 * @returns {Promise}
 */
export async function getCompanyName() {
  try {
    return { company: 'Demo Inc.' };
  } catch (err) {
    throw Boom.notFound('Question not found');
  }
}
