'use strict';

/*
 * Copyright (c) 2016 TopCoder, Inc. All rights reserved.
 */

/**
 * Register JWT passport strategy.
 */
// eslint-disable-line import/no-dynamic-require

const jwt = require('jsonwebtoken');
const config = require('config');
const BearerStrategy = require('passport-http-bearer');
const constants = require('../constants');
const { UnauthorizedError } = require('../common/errors');

/**
 * Export jwt passport strategy
 * @param passport the passport
 */
module.exports = (passport) => {
  passport.use(
    constants.Passports.jwt,
    new BearerStrategy((token, done) => {
      jwt.verify(token, config.authSecret, (err, decoded) => {
        if (err) {
          done(new UnauthorizedError('Failed to authenticate jwt token.', err));
        } else if (decoded) {
          done(null, decoded);
        } else {
          done(null, false);
        }
      });
    })
  );
};
