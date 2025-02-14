const crypto = require('crypto');

exports.generateNonce = () => {
  return crypto.randomBytes(16).toString('hex');
};