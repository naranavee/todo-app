
## Table of Contents

- [Introduction](#introduction)
- [Demo](#demo)
- [Run](#run)
- [Technology](#technology)
- [Features](#features)
- [Redux State Management](#redux-state-management)
- [Color Palette](#colors)


## Introduction

To-Do List App is a React application designed to help users manage their tasks. It allows users to add, delete, update, and filter tasks, using React Hooks for state management and Redux for managing the application's state.

## Demo

![Screenshot 2024-08-18 095150](https://github.com/user-attachments/assets/e76e1f57-a4bd-4869-b00d-51e0674f6cd8)

![Screenshot 2024-08-18 095227](https://github.com/user-attachments/assets/d469dfd5-1f5a-4d7b-9c62-ce4fa2271ee4)

![Screenshot 2024-08-18 095248](https://github.com/user-attachments/assets/1aae3d00-2eb0-456f-8578-d17eb54786d4)

![Screenshot 2024-08-18 095314](https://github.com/user-attachments/assets/0b312cdc-d8c0-4a4b-95c1-d9b6dfa3ba95)



The app displays a list of tasks with their titles, descriptions, and completion statuses. You can add new tasks, edit existing ones, mark them as completed, and filter them based on their status.

## Run
1. **Clone the repository**:
   ```bash
   https://github.com/naranavee/todo-app.git

2. **Navigate to project directory**:
   ```bash
   cd todo-app

3. **Install Dependencies**:
   ```bash
   npm install

4. **Start the development server**:
   ```bash
   npm start


## Technology
The application is built with:

React
React Hooks
Redux for state management
React-Redux for connecting Redux with React
HTML/CSS for styling

## Features
The application provides the following features:

Add Tasks: Implement a form where users can input the title and description of a task. Each task should have a unique ID, title, description, and completion status.
Display Tasks: Display the list of tasks in the order they were added, including the title, description, and a checkbox to mark tasks as completed.
Update Tasks: Allow users to edit the title and description of existing tasks.
Delete Tasks: Implement functionality to remove tasks from the list.
Filter Tasks: Provide options to filter tasks based on their completion status: All Tasks, Completed Tasks, Incomplete Tasks.

## CRUD Operations:
Create: Add new todos with a title and description.
Read: View a list of todos with their current status.
Update: Edit the title, description, and priority of existing todos.
Delete: Remove todos from the list.
Completion Filters:


## Redux State Management
State Management: Use Redux to manage the state of the tasks.
Actions and Reducers: Implement actions and reducers to handle adding, updating, deleting, and filtering tasks.
React-Redux Hooks: Use useSelector and useDispatch hooks to connect components to the Redux store.

## Color Palette
Below is the color palette used in this application:

 #478ba2
