# 🚀 Blogify API

> A professional RESTful API for a modern blogging platform.

**Repository:** [Your GitHub Repo URL]  
**Live Demo:** [Your Deployed URL]

![Node.js](https://img.shields.io/badge/Node.js-v18-green)
![Express.js](https://img.shields.io/badge/Express.js-v4-blue)
![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-green)
![JWT](https://img.shields.io/badge/Auth-JWT-orange)
![Cloudinary](https://img.shields.io/badge/Cloudinary-Media-blue)
![Stripe](https://img.shields.io/badge/Stripe-Payments-blueviolet)

## 📖 Project Description

Blogify API is a robust backend service designed to power a full-featured blogging platform. It provides secure user authentication, complete CRUD operations for blog posts, file uploads to the cloud, and payment processing capabilities. Built with Node.js and Express, it uses MongoDB Atlas for cloud database storage and integrates with third-party services like Cloudinary (for media) and Stripe (for payments).

## ✨ Features

- **User Authentication:** Registration, login, and secure route protection using JSON Web Tokens (JWT).
- **Post Management:** Create, read, update, and delete blog posts with cursor-based pagination.
- **Media Uploads:** Secure image uploads using Cloudinary integration.
- **Payment Processing:** Create and confirm payments using Stripe.
- **Order Management:** Comprehensive system for tracking user orders.
- **Cloud Database:** Hosted on MongoDB Atlas for scalability and high availability.

## 🛠️ Tech Stack

- **Runtime:** Node.js
- **Framework:** Express.js
- **Database:** MongoDB with Mongoose ODM
- **Authentication:** JWT (JSON Web Tokens)
- **File Storage:** Cloudinary
- **Payment Processing:** Stripe
- **Cloud Database:** MongoDB Atlas

## 📋 Prerequisites

Before running this project locally, ensure you have:

- Node.js installed (v16.x or higher recommended)
- MongoDB Atlas account (or local MongoDB database)
- Cloudinary account for secret keys
- Stripe developer account for API keys

## ⚙️ Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/blogify-api-backend.git
   cd blogify-api-backend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env` file in the root directory (refer to the [Environment Variables](#-environment-variables) section).

4. **Start the development server**
   ```bash
   npm run dev
   ```

## 🔐 Environment Variables

Create a `.env` file in the root directory with the following variables:

```env
# Server
PORT=5000

# Database
MONGO_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/Blogify?retryWrites=true&w=majority

# JWT Authentication
JWT_SECRET=your_jwt_secret_key

# Cloudinary Integration
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret

# Stripe Payments
STRIPE_SECRET_KEY=your_stripe_secret
```

## 📡 API Endpoints

### Authentication
| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| `POST` | `/api/auth/register` | Register new user | No |
| `POST` | `/api/auth/login` | User login | No |

### Posts
| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| `GET`  | `/api/posts` | Get all posts (with cursor pagination) | No |
| `GET`  | `/api/posts/:id` | Get single post | No |
| `POST` | `/api/posts` | Create post | Yes |
| `PUT`  | `/api/posts/:id` | Update post | Yes |
| `DELETE`| `/api/posts/:id` | Delete post | Yes |

### Media / File Uploads
| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| `POST` | `/api/upload` | Upload image to Cloudinary| Yes |

### Payments
| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| `POST` | `/api/payments/create-payment-intent`| Create Stripe payment | Yes |
| `POST` | `/api/payments/confirm-payment` | Confirm payment | Yes |

### Orders
| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| `POST` | `/api/orders` | Create order | Yes |
| `GET`  | `/api/orders/my-orders` | Get user orders | Yes |
| `GET`  | `/api/orders/:id` | Get order details | Yes |

## 🚀 Running the Project

To start the server in development mode (using nodemon, if configured):
```bash
npm run dev
```

To start the server in production mode:
```bash
npm start
```

## 📂 Project Structure

```text
├── src
│   ├── controllers    # Request handlers and business logic
│   ├── middlewares    # Custom middlewares (e.g., auth, error handler)
│   ├── models         # Mongoose database schemas
│   ├── routes         # API route definitions
│   └── index.js       # Main server file
├── .env               # Environment configuration file
├── package.json       # Project dependencies and scripts
└── README.md          # Project documentation
```

## 🤝 Contributing

Contributions are always welcome! 

1. Fork the project
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.