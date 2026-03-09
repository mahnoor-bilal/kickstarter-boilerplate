Kickstarter Boilerplate (MVC)

Project Description
This project is a basic backend boilerplate for a Kickstarter-like crowdfunding platform.
It follows the MVC (Model-View-Controller) architecture and provides basic API routes for projects.
The goal is to demonstrate the project structure and routing system for a crowdfunding application where creators can launch projects and investors can fund them.

MVC Architecture
The project follows the MVC design pattern:

Model
Handles database schemas and data logic.
Example: User, Project, Investment models.

Controller
Contains the business logic of the application.
Handles requests and sends responses.

Routes
Defines API endpoints and connects them with controllers.

App
Main server file that initializes the application.


Project Structure
kickstarter-boilerplate
  config
     db.js
  models
    User.js
    Project.js
    Investment.js
  controllers
    projectController.js
  routes
    projectRoutes.js
  app.js
  package.json
  README.md

API Endpoints
Create Project
POST /api/projects/create
Description: Creates a new project.

Get All Projects
GET /api/projects/all
Description: Retrieves all projects.

Root Route
GET /
Description: Test route to check if server is running.

Technologies Used
Node.js
Express.js
MongoDB
Mongoose
Git & GitHub

Running the Project
Install dependencies
npm install
Run server
npm run dev
Server will run at
http://localhost:5000
