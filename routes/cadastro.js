var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('cadastro',{ title: 'Cadastre-se' });
});

/*Post das informações */
router.post('/', function(req, res, next) {
  res.render('',{ title: 'Estoque OnLine' });
});
module.exports = router;