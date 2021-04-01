const express = require('express');
const router = express.Router();

const { signup, signin, question, authenticated, verifyJWT, findAll, deleteQuiz, findOne, findAllQ, findAllAnsweredQuizzes, findStats, groupStats, submitTeacherForm } = require('../controllers/auth.controller');
// const { submitTeacherForm, login, saySomething }= require('../controllers/controllers');


router.post('/signup', signup);
router.post('/signin', signin);
router.post('/question', question);
router.get('/findAll', findAll);
router.get('/findAllQ', findAllQ);
router.delete('/delete/:id', deleteQuiz);
router.get('/findOne/:id', findOne);
router.get('/findAllAnswered', findAllAnsweredQuizzes);
router.get('/findStats/:id', findStats);
router.get('/groupStats', groupStats);


// router.get('/test/all', saySomething);
// router.post('/auth/signin', login);
router.post('/postform/submit', submitTeacherForm);


// router.get('/authenticated', verifyJWT, authenticated);

module.exports = router;