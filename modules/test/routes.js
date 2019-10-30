'use strict';

/*
 * Copyright (c) 2016 TopCoder, Inc. All rights reserved.
 */

/**
 * Contains all routes.
 */

const constants = require('../../constants');

const { UserRole } = constants;
const jwtAuth = constants.Passports.jwt;

module.exports = {
  '/tests': {
    post: {
      auth: jwtAuth,
      access: [UserRole.USER],
      controller: 'TestController',
      method: 'createTest'
    },
    get: {
      auth: jwtAuth,
      access: [UserRole.USER],
      controller: 'TestController',
      method: 'getTests'
    }
  },
  '/tests/:id': {
    get: {
      auth: jwtAuth,
      access: [UserRole.USER],
      controller: 'TestController',
      method: 'getTestById'
    },
    put: {
      auth: jwtAuth,
      access: [UserRole.USER],
      controller: 'TestController',
      method: 'updateTest'
    },
    delete: {
      auth: jwtAuth,
      access: [UserRole.USER],
      controller: 'TestController',
      method: 'deleteTest'
    }
  }
};
