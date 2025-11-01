# quiz-app-
Online Exam and Contest Platform

This project is a web application for an online examination and contest system, built using React and TypeScript.

Components

This section details the core components of the application.

Sign Up Page

Files:

SignUp.tsx: The React component logic for the user registration page.

SignUp.css: The stylesheet for the registration page.

Description:
The Sign Up page provides a clean, modern interface for new users to create an account on the platform. It features a centered card layout that is responsive and easy to use.

Features:

User input fields for:

Full Name

Email Address

Password

Confirm Password

Client-side validation (e.g., checking if passwords match).

A "Create account" button to submit the form.

A link for existing users to navigate to the "Log in" page.

A consistent logo element that links back to the homepage.

Styling (SignUp.css):
The styling for this component is handled entirely by SignUp.css and follows a modern, maintainable approach:

CSS Variables: The file defines a robust set of CSS variables (e.g., --primary-color, --text-primary, --shadow-lg) in the :root. This allows for easy theme management and ensures visual consistency across the application.

Font: It imports the 'Inter' font from Google Fonts for a clean, sans-serif typography.

Layout: Uses Flexbox to center the sign-up card vertically and horizontally on the page, ensuring it looks good on all screen sizes.

Form Elements: Inputs are styled with clear focus states (input:focus) to improve accessibility and user experience.

BEM-like Naming: Uses descriptive class names (e.g., .signup-card, .input-group) to keep the CSS modular and easy to understand.
