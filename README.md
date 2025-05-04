# Store Rater

A modern web application for rating stores with role-based access control (Admin, Store Owner, User). Built with Express.js, React, and MySQL.

## Tech Stack
- **Backend**: Express.js + MySQL
- **Frontend**: React.js with Material-UI
- **Authentication**: JWT (JSON Web Tokens)
- **Database**: MySQL
- **API**: RESTful architecture

## Features
- **User Management**
  - Role-based access (Admin, Store Owner, User)
  - Secure authentication with JWT
  - User profile management
  - Password hashing and security

- **Store Management**
  - Store creation and management by Store Owners
  - Store details and information
  - Store search and filtering
  - Store location tracking

- **Rating System**
  - 1-5 star rating system
  - Rating submission and tracking
  - Rating statistics and analytics
  - Rating history per user

- **Dashboard**
  - Role-specific dashboards
  - Analytics and statistics
  - User activity tracking
  - Store performance metrics

## Database Schema

```sql
-- Users Table
CREATE TABLE Users (
    id INT PRIMARY KEY AUTO_INCREMENT,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    name VARCHAR(255) NOT NULL,
    role ENUM('admin', 'store_owner', 'user') NOT NULL,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Stores Table
CREATE TABLE Stores (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    address TEXT,
    ownerId INT,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (ownerId) REFERENCES Users(id)
);

-- Ratings Table
CREATE TABLE Ratings (
    id INT PRIMARY KEY AUTO_INCREMENT,
    rating INT NOT NULL CHECK (rating BETWEEN 1 AND 5),
    comment TEXT,
    userId INT,
    storeId INT,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (userId) REFERENCES Users(id),
    FOREIGN KEY (storeId) REFERENCES Stores(id)
);
```

## Setup Instructions

1. **Clone the Repository**
   ```bash
   git clone [repository-url]
   cd store-rating-app
   ```

2. **Install Dependencies**
   ```bash
   # Install backend dependencies
   cd backend
   npm install

   # Install frontend dependencies
   cd ../frontend
   npm install
   ```

3. **Configure Environment Variables**
   Create `.env` files in both backend and frontend directories:

   Backend `.env`:
   ```
   DB_HOST=localhost
   DB_USER=your_username
   DB_PASSWORD=your_password
   DB_NAME=store_rating_db
   JWT_SECRET=your_jwt_secret
   PORT=5000
   ```

   Frontend `.env`:
   ```
   REACT_APP_API_URL=http://localhost:5000
   ```

4. **Database Setup**
   ```bash
   # Create database
   mysql -u root -p
   CREATE DATABASE store_rating_db;
   exit;

   # Run migrations
   cd backend
   npm run migrate
   ```

5. **Start the Application**
   ```bash
   # Start backend server
   cd backend
   npm run dev

   # Start frontend development server
   cd frontend
   npm start
   ```

## Default Accounts
- **Admin**: admin@storerating.com / Admin@123
- **Store Owner**: owner1@example.com / Owner@123
- **User**: user1@example.com / User@123

## API Endpoints

### Authentication
- POST /api/auth/register - Register new user
- POST /api/auth/login - User login
- GET /api/auth/me - Get current user

### Users
- GET /api/users - Get all users (Admin only)
- GET /api/users/:id - Get user by ID
- PUT /api/users/:id - Update user
- DELETE /api/users/:id - Delete user

### Stores
- GET /api/stores - Get all stores
- POST /api/stores - Create store (Store Owner only)
- GET /api/stores/:id - Get store by ID
- PUT /api/stores/:id - Update store
- DELETE /api/stores/:id - Delete store

### Ratings
- GET /api/ratings - Get all ratings
- POST /api/ratings - Create rating
- GET /api/ratings/:id - Get rating by ID
- PUT /api/ratings/:id - Update rating
- DELETE /api/ratings/:id - Delete rating


