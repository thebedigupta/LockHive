// routes/user.route.js

const express = require('express');
const { body, validationResult } = require('express-validator');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('index');
});
router.get('/register', (req, res) => {
  res.render('register');
});
router.post(
  '/register',
  [
    body('email').isEmail().withMessage('Invalid email'),
    body('password')
      .isLength({ min: 6 })
      .withMessage('Password must be at least 6 characters'),
  ],
  (req, res) => {
    // Handle validation result
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      console.log(errors);
      return res.status(400).json({ errors: errors.array() });
    }
  }
);

module.exports = router;
