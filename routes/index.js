const express = require('express');
const app = express();
const router = express.Router();
const mongoose = require('mongoose');
const userRouter = require('./user');
const albumRouter = require ('./album');


app.use(express.json());
router.use('/users', userRouter);
router.use('/albums', albumRouter);

module.exports = router;