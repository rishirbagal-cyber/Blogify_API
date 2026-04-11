// Aggregation pipeline: group songs by artist, count total songs per artist
const topArtistsPipeline = [
  {
    $group: {
      _id: '$artist',
      totalSongs: { $sum: 1 },
    },
  },
  {
    $sort: { totalSongs: -1 },
  },
  {
    $limit: 10,
  },
];

module.exports = topArtistsPipeline;
