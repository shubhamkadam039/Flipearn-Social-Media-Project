# FlipEarn

### Social Media Account Marketplace

FlipEarn is a full-stack marketplace platform that allows users to list, discover, purchase, and manage social media accounts/handles through a secure web application.

The project is being developed as a **Final Year BCA Project** and is also being progressively evolved into a **DevOps-focused portfolio project** using industry-oriented development, deployment, and automation practices.

---

## Project Overview

Buying and selling social media accounts can be difficult to manage through informal platforms because of issues such as trust, communication, account information, payments, and transaction management.

FlipEarn aims to provide a structured marketplace where:

- Sellers can create and manage listings.
- Buyers can browse available listings.
- Users can communicate regarding listings.
- Payments can be processed through an integrated payment gateway.
- Users can manage their purchases and listings.
- Administrators can manage and monitor the platform.

The application is being developed using the **PERN stack** with additional services for authentication, payments, media management, and background processing.

---

## Features

### User Features

- User authentication and authorization
- User profile management
- Browse available listings
- Search and explore listings
- View detailed listing information
- Create listings
- Edit and manage listings
- Purchase listings
- View purchased accounts
- User orders
- Chat functionality
- Add account credentials where required
- Payment integration
- Featured listings

### Admin Features

- Admin authentication
- Manage user listings
- Approve/reject listings
- Manage listing status
- Delete listings
- Manage featured listings
- Monitor marketplace activity

---

## Tech Stack

### Frontend

- React.js
- Vite
- Tailwind CSS
- Redux Toolkit
- React Router DOM
- Axios
- Clerk Authentication
- Lucide React

### Backend

- Node.js
- Express.js
- REST APIs
- Prisma ORM
- Clerk Authentication Middleware

### Database

- PostgreSQL

### Third-Party Services

- Clerk – Authentication and user management
- Stripe – Payment processing
- ImageKit – Media/image management
- Inngest – Background jobs and event-driven processing

### Development & Version Control

- Git
- GitHub
- Visual Studio Code
- npm
- Postman

### Planned DevOps Technologies

- Docker
- Docker Compose
- Linux
- AWS EC2
- Nginx
- GitHub Actions
- CI/CD
- Kubernetes

---

## Architecture

The current application follows a client-server architecture.

```text
                    ┌─────────────────────┐
                    │       User          │
                    └──────────┬──────────┘
                               │
                               ▼
                    ┌─────────────────────┐
                    │   React Frontend    │
                    │       + Vite        │
                    └──────────┬──────────┘
                               │
                         REST API / Axios
                               │
                               ▼
                    ┌─────────────────────┐
                    │   Express Backend   │
                    │      Node.js        │
                    └──────────┬──────────┘
                               │
              ┌────────────────┼────────────────┐
              │                │                │
              ▼                ▼                ▼
       ┌────────────┐   ┌────────────┐   ┌────────────┐
       │ PostgreSQL │   │   Clerk    │   │   Stripe   │
       │  Database  │   │    Auth    │   │  Payments  │
       └────────────┘   └────────────┘   └────────────┘
                               │
              ┌────────────────┴────────────────┐
              ▼                                 ▼
       ┌────────────┐                    ┌────────────┐
       │  ImageKit  │                    │  Inngest   │
       │   Media    │                    │ Background │
       └────────────┘                    │   Jobs     │
                                         └────────────┘
