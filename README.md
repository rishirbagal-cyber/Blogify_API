# Blogify API Backend

A robust and secure backend service for the Blogify application, built with Node.js, Express, and MongoDB.

## Features
- **User Authentication**: Secure signup and login using JWT and cookies.
- **Role-Based Access Control**: Manage permissions for editors and administrators.
- **RESTful API**: Clean and documented endpoints for managing blog posts and users.
- **Security Pillars**: Implementation of secure headers, password hashing, and input validation.
- **Pagination & Sorting**: Efficient data retrieval with custom queries.

## Tech Stack
- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB Atlas (Mongoose ODM)
- **Security**: Bcrypt.js, JsonWebToken, Cookie-parser, CORS

## Installation

```bash
# Clone the repository
git clone https://github.com/rishirbagal-cyber/Blogify_API.git

# Install dependencies
npm install

# Start development server
npm run dev
```

## Environment Variables
Create a `.env` file in the root directory and add the following:
- `MONGO_URI`: Your MongoDB Atlas connection string.
- `JWT_SECRET`: Your secret key for JWT signing.
- `PORT`: (Optional) Local port (defaults to 5000).

## Deployment
This API is production-ready and can be deployed to Render.

### Render Configuration
1. **Web Service**: Connect this GitHub repository.
2. **Build Command**: `npm install`
3. **Start Command**: `npm start`
4. **Environment Variables**: Add `MONGO_URI`, `JWT_SECRET`, and `NODE_ENV=production`.
