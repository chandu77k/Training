const express = require('express');
const router = express.Router();
const User = require('../models/User');

router.post('/', async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await User.findOne({
      where: {
        username,
        password
      }
    });

    if (!user) {
      return res.status(400).json({ error: 'Invalid credentials' });
    }

    res.status(200).json({ message: 'Validation successful' });
  } catch (err) {
    console.error('Error querying user:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;
