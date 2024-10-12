const express = require('express');
const multer = require('multer');
const axios = require('axios');
require('dotenv').config();

const app = express();
const upload = multer({ dest: 'uploads/' });
const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
  try {
    res.json({ success: true, message: 'Welcome to the NFT Metadata Manager' });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});