# Future Plan (Phase 2)

This document outlines the planned enhancements and features for Phase 2 of the ACBM Server project. Phase 1 focused on setting up the core structure and documentation.

## Security Improvements

### 1. Environment Variables for Sensitive Data
- **Current Issue**: Email credentials (`user` and `pass`) are hardcoded in `utils/mail.js`.
- **Plan**: Move these credentials to the `.env` file and access them via `process.env`.
- **Action**:
    - Add `MAIL_USER` and `MAIL_PASS` to `.env`.
    - Update `utils/mail.js` to use these variables.

### 2. JWT Implementation
- **Current Issue**: Authentication routes exist but full JWT implementation for protecting routes is pending (implied by `jsonwebtoken` dependency).
- **Plan**: Implement JWT generation on login/registration and create middleware to verify tokens for protected routes.

### 3. Input Validation
- **Current Issue**: Basic validation exists, but it's not comprehensive.
- **Plan**: Use a library like `joi` or `express-validator` to robustly validate all incoming request bodies.

## Feature Enhancements

### 1. Complete Authentication Flow
- Implement `login` controller and route.
- Implement `logout` functionality (if using cookies) or client-side token management guidelines.

### 2. Student Management
- Add endpoints for:
    - `GET /api/students`: List all students (admin only).
    - `GET /api/student/:id`: Get student details.
    - `PUT /api/student/:id`: Update student profile.
    - `DELETE /api/student/:id`: Remove a student.

### 3. Error Handling
- Create a centralized error handling middleware to ensure consistent error responses across the application.

## Code Quality & Infrastructure

### 1. Unit & Integration Tests
- Set up a testing framework (e.g., Jest, Mocha/Chai).
- Write tests for controllers, utils, and routes.

### 2. Refactoring
- Review `routes` loading mechanism in `server.js` to ensure it scales well.
- Consider moving the `POST /contact` route from `server.js` to its own route file/controller.
