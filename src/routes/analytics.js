const express = require('express');
const router = express.Router();

const authenticate = require('../middleware/authenticate');
const authorize = require('../middleware/authorize');

const Song = require('../models/Song');
const Playlist = require('../models/Playlist');

const topArtistsPipeline = require('../aggregations/top-artists');
const userActivityPipeline = require('../aggregations/user-activity');

// Route 1: GET /api/v1/analytics/top-artists
// PROTECTED - Only 'admin' role can access this
router.get(
  '/top-artists',
  authenticate,         // 1. Check if logged in
  authorize('admin'),   // 2. Check if Admin
  async (req, res) => {
    try {
      const results = await Song.aggregate(topArtistsPipeline);
      res.status(200).json({ success: true, data: results });
    } catch (error) {
      res.status(500).json({ success: false, error: error.message });
    }
  }
);

// Route 2: GET /api/v1/analytics/most-active-users
// PROTECTED - Only 'admin' role can access this
router.get(
  '/most-active-users',
  authenticate,         // 1. Check if logged in
  authorize('admin'),   // 2. Check if Admin
  async (req, res) => {
    try {
      const results = await Playlist.aggregate(userActivityPipeline);
      res.status(200).json({ success: true, data: results });
    } catch (error) {
      res.status(500).json({ success: false, error: error.message });
    }
  }
);

module.exports = router;
