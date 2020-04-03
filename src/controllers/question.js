import * as questionService from "../services/questionService";

/**
 * Get randomized five question.
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */
export function fetchQuestions(req, res, next) {
  questionService
    .getRandomQuestions(req.query.v)
    .then(data => res.json({ data }))
    .catch(err => next(err));
}
