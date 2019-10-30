'use strict';

/*
 * Copyright (c) 2016 TopCoder, Inc. All rights reserved.
 */

/**
 * This controller exposes database REST action.
 */
const TestService = require('../services/TestService');

/**
 * Create test
 * @param req the request
 * @param res the response
 */
function* createTest(req, res, next) {
  try {
    const test = yield TestService.createTest(req.body);
    res.status(200).json(test);
  } catch (ex) {
    next(ex);
  }
}

/**
 * Update test by id
 * @param req the request
 * @param res the response
 */

function* updateTest(req, res, next) {
  try {
    const tests = yield TestService.updateTest(req.body, req.params.id);
    res.status(200).json(tests);
  } catch (ex) {
    next(ex);
  }
}

/* delete test by id
 * @param req the request
 * @param res the response
 */

function* deleteTest(req, res, next) {
  try {
    const tests = yield TestService.deleteTest(req.params.id);
    res.status(200).json(tests);
  } catch (ex) {
    next(ex);
  }
}

/**
 * get test by id
 * @param req the request
 * @param res the response
 */
function* getTestById(req, res, next) {
  try {
    const tests = yield TestService.findTestById(req.params.id);
    res.status(200).json(tests);
  } catch (ex) {
    next(ex);
  }
}

/**
 * get all test
 * @param req the request
 * @param res the response
 */
function* getTests(req, res, next) {
  try {
    const tests = yield TestService.findTests(req.query);
    res.status(200).json(tests);
  } catch (ex) {
    next(ex);
  }
}

module.exports = {
  createTest,
  getTests,
  getTestById,
  updateTest,
  deleteTest
};
