# ACBM Server

A Node.js/Express.js server application for ACBM. This server handles authentication, student registration, and contact form emails.

## Features

- **Authentication**: Password hashing and comparison using `bcrypt`.
- **Student Management**: Register students with MongoDB storage.
- **Email Service**: Send contact emails using `nodemailer` (Gmail).
- **REST API**: Clean API structure with dynamic routing.

## Prerequisites

- Node.js (v14 or higher recommended)
- MongoDB (local or Atlas)

## Installation

1.  **Clone the repository:**
    ```bash
    git clone <repository-url>
    cd <repository-directory>
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Configure Environment Variables:**
    Create a `.env` file in the root directory and add the following:
    ```env
    PORT=8000
    DATABASE_URI=<your-mongodb-connection-string>
    # Add other variables if necessary
    ```
    > Note: Email credentials are currently hardcoded in `utils/mail.js`. See `FUTURE_PLAN.md` for details.

## Usage

### Development Mode
To run the server with `nodemon` for hot-reloading:
```bash
npm start
```

### Server Endpoints

All API routes are prefixed with `/api`.

#### Auth
- `POST /api/register` - (Placeholder) Returns `{ register: true }`.

#### Student
- `POST /api/student/register` - Registers a new student.
    - **Body**:
        ```json
        {
          "name": "John Doe",
          "email": "john@example.com",
          "contact": 1234567890,
          "password": "securepassword",
          "college": "Example College",
          "course": "Computer Science"
        }
        ```

#### General
- `GET /` - Health check. Returns `{ success: true }`.
- `POST /contact` - Sends a contact email.
    - **Body**:
        ```json
        {
          "subject": "Inquiry",
          "name": "Jane Doe",
          "email": "jane@example.com",
          "message": "Hello, I have a question."
        }
        ```

## Project Structure

- `controllers/`: Request handlers.
- `models/`: Mongoose schemas.
- `routes/`: API route definitions.
- `utils/`: Utility functions (Auth, Mail).
- `server.js`: Application entry point.

## License

ISC
