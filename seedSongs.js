const mongoose = require('mongoose');
require('dotenv').config();

const Song = require('./src/models/Song');

const mockSongs = [
  { title: "Song 1", artist: "Artist A", album: "Album X", duration: 180 },
  { title: "Song 2", artist: "Artist B", album: "Album Y", duration: 200 },
  { title: "Song 3", artist: "Artist C", album: "Album Z", duration: 210 },
  { title: "Song 4", artist: "Artist D", album: "Album W", duration: 190 },
  { title: "Song 5", artist: "Artist E", album: "Album V", duration: 220 }
];

async function seedSongs() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('Connected to MongoDB');

    await Song.deleteMany({});
    console.log('Cleared existing songs');

    await Song.insertMany(mockSongs);
    console.log(`Successfully seeded ${mockSongs.length} songs`);

    process.exit(0);
  } catch (error) {
    console.error('Error seeding songs:', error);
    process.exit(1);
  }
}

seedSongs();
