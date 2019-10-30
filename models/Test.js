'use strict';

/*
 * Copyright (c) 2016 TopCoder, Inc. All rights reserved.
 */

/**
 * The User model
 */
const mongoose = require('mongoose');

const { Schema } = mongoose;

const TestSchema = new Schema({
  handle: { type: String, required: true, unique: true }
});

module.exports = mongoose.model('Test', TestSchema);
