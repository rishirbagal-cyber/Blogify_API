// Aggregation pipeline: find the most active users by number of playlists
const userActivityPipeline = [
  {
    $group: {
      _id: '$owner',
      playlistCount: { $sum: 1 },
    },
  },
  {
    $sort: { playlistCount: -1 },
  },
  {
    $limit: 10,
  },
  {
    $lookup: {
      from: 'users',
      localField: '_id',
      foreignField: '_id',
      as: 'userInfo',
    },
  },
  {
    $unwind: { path: '$userInfo', preserveNullAndEmptyArrays: true },
  },
  {
    $project: {
      _id: 1,
      playlistCount: 1,
      name: '$userInfo.name',
      email: '$userInfo.email',
    },
  },
];

module.exports = userActivityPipeline;
