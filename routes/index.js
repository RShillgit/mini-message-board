var express = require('express');
var router = express.Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Mini Message Board', messages: messages });
});

/* GET form. */
router.get('/new', function(req, res, next) {
  res.render('form');
});

/* POST form. */
router.post('/new', function(req, res, next) {
  messages.push({text: req.body.messageText, user: req.body.name, added: new Date()});

  res.redirect('/');
});


module.exports = router;
