const express = require('express');
const genres = require("../routes/genres");
const customers = require('../routes/customers');
const users = require('../routes/users');
const auth = require('../routes/auth');
const returns = require('../routes/returns');
const error = require('../middleware/error');

module.exports = function(app){
app.use(express.json());
app.use('/api/genres',genres);
app.use('/api/customers',customers);
app.use('/api/users',users);
app.use('/api/auth',auth);
app.use('/api/returns',returns);
app.use(error);
}