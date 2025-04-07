const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
  const { username, password } = req.body;

  const usernamePattern = /^[a-zA-Z0-9_]+$/;
  const passwordPattern = /^[a-zA-Z0-9!@#$%^&*()_+]+$/;

  if (!usernamePattern.test(username)) {
    return res.status(400).json({ error: 'Invalid username' });
  }

  if (!passwordPattern.test(password)) {
    return res.status(400).json({ error: 'Invalid password' });
  }

  res.status(200).json({ message: 'Validation successful' });
});

module.exports = router;
