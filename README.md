# MERN Chat Application

## Overview
This is a real-time chat application built using the MERN (MongoDB, Express, React, Node.js) stack. It allows users to send text messages, share images, and communicate in real time. The application also features user authentication using JSON Web Tokens (JWT).

## Features
- **User Authentication**: Secure authentication system using JSON Web Tokens (JWT). Users can register, log in, and log out of their accounts.
- **Real-Time Messaging**: Messages are sent and received in real-time using WebSockets, allowing for instant communication between users.
- **Text and Image Messaging**: Users can send text messages as well as images. Uploaded images are handled by Cloudinary.
- **Online Status**: Displays online status of users in real time.
- **Responsive Design**: The application is fully responsive and works well on both desktop and mobile devices.
  
## Technologies Used
- **Frontend**: React.js, Tailwind CSS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: JSON Web Token (JWT)
- **Real-Time Communication**: Socket.IO
- **Media Storage**: Cloudinary

## Usage

- **Register and Login**:

   New users can sign up with a unique username and password.
   Existing users can log in using their credentials.

- **Sending Messages**:

    Type a message in the input field and press Enter or click the send button to send a text message.
    To send an image, click on the image upload button and select an image from your device.

- **Real-Time Communication**:

    The application updates the chat in real time, displaying messages as they are sent and received.

- **Logging Out**:

   Click on the "Logout" button to securely log out of the application.

## Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/mern-chat-app.git
   cd mern-chat-app
   # Install server dependencies
cd server
npm install

# Install client dependencies
cd ../client
npm install

PORT=5000
MONGO_URI=your_mongo_database_uri
JWT_SECRET=your_jwt_secret_key
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret