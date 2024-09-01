Table of Contents
Introduction
Demo
Run
Technology
Features
Testing
Color Palette
Introduction
The Faculty Management System (FMS) is a React application designed to manage various faculty-related activities within an educational institution. It provides faculty members with tools to manage their profiles, workshops, project journals, and leave applications. Administrators can view, update, delete, and approve these entries through the admin interface. The system is built using React for the frontend and Node.js, Express, and MongoDB for the backend.

Demo








The screenshots above showcase key components of the Faculty Management System. The Faculty Home Page allows faculty members to manage their profiles, workshops, project journals, and leave applications, while the Admin Page provides tools to manage and approve these activities.

Run
Clone the repository:

bash
Copy code
https://github.com/naranavee/fms-app.git
Navigate to the project directory:

bash
Copy code
cd fms-app
Install Dependencies:

bash
Copy code
npm install
Start the development server:

bash
Copy code
npm start
Technology
The Faculty Management System is built with:

React: JavaScript library for building user interfaces.
Node.js: JavaScript runtime for server-side development.
Express.js: Web framework for building RESTful APIs.
MongoDB: NoSQL database for storing faculty-related data.
GraphQL: Query language for efficient data fetching.
Tailwind CSS: Utility-first CSS framework for responsive design.
Bootstrap: CSS framework for building responsive and mobile-first components.
Axios: HTTP client for making API requests.
React Router: For handling navigation and routing within the application.
Features
The Faculty Management System provides the following features:

Faculty Home Page:

Profile: Faculty members can view and update their profiles.
Workshop: Manage workshops, including registering, updating, and deleting workshops.
Project Journals: Add and manage project journals, including details like title, journal name, publisher, and department.
Apply Leaves: Faculty can apply for leave and track leave status.
Logout: Securely log out of the system.
Admin Page:

View Profiles: Administrators can view, update, and delete faculty profiles.
View Workshops: Manage workshops with options to approve, edit, and delete entries.
Journals: Manage project journals, including editing, deleting, and approving journal entries.
View Leaves: Review and approve leave applications submitted by faculty.
CRUD Operations
The system supports the following CRUD operations:

Create: Add new workshops, project journals, leaves, and profiles.
Read: View faculty profiles, workshops, journals, and leave requests.
Update: Edit existing workshops, journals, profiles, and leave statuses.
Delete: Remove workshops, journals, profiles, and leave requests from the system.
Testing
The Faculty Management System employs various testing techniques to ensure the quality and reliability of the application:

Unit Testing: Tests individual functions and components to verify they work as expected.
Integration Testing: Ensures that different components work together correctly.
End-to-End Testing: Simulates user interactions to test the entire application workflow.
Automated Testing: Continuous integration (CI) pipelines run automated tests on code changes.
Manual Testing: Manual testing is conducted to ensure the user interface and experience are as expected.
Color Palette
Below is the color palette used in this application:

#478ba2: Primary color used for consistent styling across the Faculty Management System.
