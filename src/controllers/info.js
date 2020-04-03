import * as questionService from "../services/questionService";

/**
 * Get randomized five question.
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */
export function fetchCompanyInformation(req, res, next) {
  questionService
    .getCompanyName()
    .then(data => res.json({ data }))
    .catch(err => next(err));
}
