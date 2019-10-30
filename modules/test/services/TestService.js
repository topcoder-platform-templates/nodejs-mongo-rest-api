'use strict';

/*
 * Copyright (c) 2016 TopCoder, Inc. All rights reserved.
 */

/**
 * This service will provide database operation.
 */
const Joi = require('joi');
const logger = require('../../../common/logger');
const Test = require('../../../models/Test');

/**
 * Create new Test
 * @param {Object} test the new test
 */
function* createTest(test) {
  const testObj = yield Test.create(test);
  return testObj;
}

createTest.schema = {
  test: Joi.object({
    handle: Joi.string().required()
  })
};

/**
 * Get all Tests
 * @param {Object} testQuery
 */
function* findTests(testQuery) {
  const test = yield Test.find(testQuery);
  return test;
}

findTests.schema = {
  testQuery: Joi.object({
    handle: Joi.string()
  })
};

/**
 * Get By Test Id
 * @param {Object} id
 */
function* findTestById(id) {
  const test = yield Test.findById(id);
  return test;
}

/**
 * Update Test
 * @param {*} test
 * @param {*} id
 */
function* updateTest(test, id) {
  const testObj = yield Test.updateOne({ _id: id }, test);
  return testObj;
}

updateTest.schema = {
  test: Joi.object({
    handle: Joi.string().required()
  }),
  id: Joi.string()
};

/**
 * Update Test by id
 * @param {*} test
 * @param {*} id
 */
function* deleteTest(id) {
  const testObj = yield Test.deleteOne({ _id: id });
  return testObj;
}

module.exports = {
  createTest,
  findTests,
  findTestById,
  updateTest,
  deleteTest
};

logger.buildService(module.exports);
