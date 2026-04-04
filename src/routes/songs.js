const express = require('express');
const router = express.Router();

const { getSongsCursor } = require('../controllers/songController');

router.get('/', (req, res) => {
  // Add a base route check if necessary, but assignment asks for /api/songs
});

// The assignment says: router.get('/songs', getSongsCursor);
// BUT if we mount this in routes/index.js as router.use('/songs', songsRouter), 
// then the path inside here should be just '/' to match /api/v1/songs or /api/songs.
// Let me look at the assignment again.
// Assignment text:
// router.get('/songs', getSongsCursor);
// Wait, if it says `router.get('/songs', ...)`, then the route path will be `/songs`. So if it is mounted to `/api`, it becomes `/api/songs`.

router.get('/songs', getSongsCursor);

module.exports = router;
