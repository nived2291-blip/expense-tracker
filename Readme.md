Expense Tracker Web Application

1. Project Overview

The Expense Tracker Web Application is a user-centric web app designed to help users record, monitor, and visualize their income and expenses. The application supports user registration and login, stores data securely in the cloud, and provides real-time charts for better financial insights.

This project is developed as a minor project and demonstrates modern web development practices such as modular architecture, cloud database integration, and data visualization.


---

2. Objectives

To build a real-time expense tracking web application

To implement secure user authentication

To store user-wise data using a cloud database

To visualize income and expense data using charts

To deploy the application online



---

3. Features

User registration and login (Firebase Authentication)

User-wise expense storage

Add and delete income/expense transactions

Real-time balance calculation

Income vs Expense chart visualization

Responsive and clean UI

Cloud-based data persistence



---

4. Technology Stack

Frontend: HTML, CSS, JavaScript

Database: Firebase Firestore

Authentication: Firebase Authentication

Charts: Chart.js

Deployment: GitHub Pages



---

5. Folder Structure

expense-tracker/
│
├── index.html          (Login page)
├── register.html       (Registration page)
├── dashboard.html      (Main application)
│
├── css/
│   └── style.css
│
├── js/
│   ├── auth.js         (Authentication logic)
│   ├── app.js          (Application logic)
│   └── db.js           (Database configuration)
│
└── README.md


---

6. System Architecture

The application follows a modular client-side architecture:

HTML handles structure and layout

CSS manages styling and responsiveness

JavaScript manages logic and interactivity

Firebase handles authentication and database services



---

7. Data Flow Diagram (DFD)

User → Login/Register → Firebase Authentication → Dashboard

Dashboard → Add/Delete Transaction → Firestore Database → UI Update → Chart Update


---

8. ER Diagram (Conceptual)

User

userId (Primary Key)

email


Transaction

transactionId (Primary Key)

text

amount

type

createdAt


Relationship:

One User → Many Transactions



---

9. Security Considerations

User authentication handled via Firebase Auth

User-wise data isolation using UID

Firestore rules can restrict access to authenticated users only



---

10. Future Enhancements

Monthly and yearly reports

Category-wise expense tracking

Export data as PDF/Excel

Dark mode support



---

11. Conclusion

The Expense Tracker Web Application successfully demonstrates a full-stack web solution using modern tools and cloud services. It is scalable, secure, and suitable for academic submission as well as resume showcasing.


---

12. Developed By

Name: NIVED ASHOK
Course: COMPUTER ENGINEERING
Institution: MODEL POLYTECHNIC COLLEGE , VADAKARA