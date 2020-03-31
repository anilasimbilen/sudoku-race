var express = require('express');
var router = express.Router();
const SudokuGenerator = require("js-sudoku-generator").SudokuGenerator;

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});



module.exports = router;
