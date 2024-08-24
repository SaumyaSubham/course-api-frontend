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

### Pull Docker Image from Docker Hub

If you prefer to run the Docker image directly from Docker Hub:

```
docker pull saumyasubham/course-api-frontend:latest
docker run -p 3001:80 saumyasubham/course-api-frontend:latest
```

### CI/CD Workflow
This repository uses GitHub Actions for CI/CD. Docker images are automatically built and pushed to DockerHub upon merging changes to the main branch.

### GitHub Actions Workflow
The .github/workflows/docker-image.yml file is set up to automate the building and pushing of Docker images. Here's what it does:

- **Build the Docker Image:** The image is built based on the Dockerfile in the repository.
- **Push to DockerHub:** The image is then pushed to your DockerHub repository.

### Contributions
Feel free to fork this repository as contributions are always welcome!
