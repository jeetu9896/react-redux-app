# React Redux User Management Application

## Overview
This is a React application that manages user data using Redux for state management. The application features a user list view with search functionality and detailed user profiles.

## Tech Stack
- React (v19.1.0)
- Redux (v4.0.0)
- React Router DOM (v7.4.1)
- Redux Thunk for async actions
- Testing Libraries (Jest and React Testing Library)

## Project Structure
```
src/
├── component/        # Reusable components
│   └── Table/        # Table component for displaying user list
├── pages/            # Page components
│   └── Users/        # User-related pages
├── redux/            # Redux state management
│   ├── action/       # Action creators
│   ├── reducers/     # State reducers
│   └── store.js      # Redux store configuration
└── App.js            # Main application component
```

## Features
1. **User List View**
   - Displays a list of users in a table format
   - Search functionality to filter users by name
   - Clickable rows to view user details

2. **User Detail View**
   - Shows comprehensive user information
   - Displays personal details, contact info, and address
   - Back navigation to user list

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm start
```

3. Run tests:
```bash
npm test
```

## Components

### UserList Component
- Located in `src/pages/Users/index.js`
- Main features:
  - User data fetching using Redux
  - Search functionality
  - Navigation to user details

### UserDetail Component
- Located in `src/pages/Users/UserDetail.js`
- Displays detailed user information
- Responsive design with styled components

### Table Component
- Reusable component for data display
- Supports row click events
- Customizable columns

## State Management
The application uses Redux for state management with the following structure:
- Store configuration in `src/redux/store.js`
- User actions in `src/redux/action/userAction.js`
- User reducer in `src/redux/reducers/userReducer.js`

## Styling
The application uses inline styles with a consistent design system:
- Responsive layouts
- Shadow effects for depth
- Consistent color scheme
- Mobile-friendly design

## Future Improvements
1. Add user creation and editing functionality
2. Implement pagination for the user list
3. Add sorting capabilities to the table
4. Enhance error handling and loading states
5. Add more comprehensive test coverage
