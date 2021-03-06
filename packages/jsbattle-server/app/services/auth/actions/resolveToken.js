const { ValidationError } = require("moleculer").Errors;
const _ = require('lodash');
const jsonwebtoken = require("jsonwebtoken");

module.exports = function(ctx) {
  if(!ctx.params.token) {
    throw new ValidationError('token parameter is required', 400);
  }
  let user = jsonwebtoken.verify(ctx.params.token, this.settings.jwtSecret);
  return _.pick(user, this.settings.jwtFields);
}
