const _ = require('lodash');

module.exports = function(ctx) {
  ctx.params = _.omit(ctx.params, [
    'createdAt',
    'extUserId',
    'provider'
  ]);
  if(ctx.params.displayName) {
    ctx.params.displayName = ctx.params.displayName.trim()
  }
  return ctx;
}
