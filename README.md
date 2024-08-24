# course-api-frontend

## Overview

This repository contains the frontend for the Course Management System, built using React.js. The frontend interacts with the backend REST API to manage courses and course instances.

## Features

- **Course Listing**: View all available courses.
- **Course Details**: View detailed information about each course.
- **Course Instances Management**: Manage and view course instances for specific semesters.
- **Responsive Design**: User interface adapts to different screen sizes.

## Technologies Used

- **React.js**: JavaScript library for building user interfaces.
- **Axios**: For making HTTP requests to the backend API.
- **Bootstrap**: For responsive design and styling.
- **Docker**: Containerization of the frontend application for consistent deployment.

## Prerequisites

- Docker and Docker Compose installed on your local machine.

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/course-api-frontend.git
cd course-api-frontend
```
### 2. Install Dependencies
If you need to run the application locally without Docker, install the dependencies:
```
npm install
```
### 4. Build and Run with Docker
```
docker-compose up -d --build
```
### 5. Access the Application
The frontend application will be running on **http://localhost:3001**.
