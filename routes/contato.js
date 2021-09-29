var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('contato',{ title: 'Fale Conosco' });
});

/*Post das informações */
router.post('/', function(req, res, next) {
    res.render('',{ title: 'Estoque OnLine' });
  });
module.exports = router;