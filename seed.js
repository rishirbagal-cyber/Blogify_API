const mongoose = require('mongoose');
require('dotenv').config();

const User = require('./src/models/users.models');
const Post = require('./src/models/post.models');

const mockPosts = [
  {
    "title": "Nam dui.",
    "content": "Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis."
  },
  {
    "title": "Pellentesque viverra pede ac diam.",
    "content": "Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus."
  },
  {
    "title": "Maecenas tristique, est et tempus semper",
    "content": "In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo."
  },
  {
    "title": "Fusce congue, diam id ornare imperdiet",
    "content": "Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus."
  },
  {
    "title": "Vivamus metus arcu, adipiscing molestie",
    "content": "Curabitur donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum."
  }
];

async function seedDatabase() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('Connected to MongoDB');

    // Clear existing posts
    await Post.deleteMany({});
    console.log('Cleared existing posts');

    let user = await User.findOne();
    if (!user) {
      console.log('No user found, creating a default one...');
      user = await User.create({ name: 'Rishikesh Bagal', email: 'test@example.com', password: 'password123' });
    }

    const postsToInsert = mockPosts.map(post => ({
      ...post,
      author: user._id
    }));

    await Post.insertMany(postsToInsert);
    console.log(`Successfully seeded ${postsToInsert.length} posts`);

    process.exit(0);
  } catch (error) {
    console.error('Error seeding data:', error);
    process.exit(1);
  }
}

seedDatabase();
