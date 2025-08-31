# School Management Project

This is a full-stack web application built with React, Node.js, Express, and MySQL. It allows users to add school data via a form and view a list of all schools.

---

## Live Demo Links

* **Frontend (Vercel):** `[Your Vercel Project URL]`
* **Backend (Replit):** `[Your Replit Project URL]`

**Important Note:** The live hosted version is for UI demonstration purposes only. The database is hosted locally, so the live site cannot connect to it. To see the fully functional application, please follow the local setup instructions below.

---

## How to Run Locally

To run this project on your own machine, please follow these steps:

**Prerequisites:**
* Node.js
* A MySQL server (like XAMPP)

**Setup:**
1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/JeeveshRajan/school-project.git](https://github.com/JeeveshRajan/school-project.git)
    cd school-project
    ```
2.  **Install backend dependencies:**
    ```bash
    cd server
    npm install
    ```
3.  **Install frontend dependencies:**
    ```bash
    cd ../client
    npm install
    ```
4.  **Set up the database:**
    * Make sure your MySQL server is running.
    * Create a new database named `schooldb`.
    * Run the following SQL query to create the `schools` table:
        ```sql
        CREATE TABLE schools (
            id INT AUTO_INCREMENT PRIMARY KEY,
            name TEXT NOT NULL,
            address TEXT NOT NULL,
            city VARCHAR(255) NOT NULL,
            state VARCHAR(255) NOT NULL,
            contact BIGINT,
            image VARCHAR(255),
            email_id VARCHAR(255)
        );
        ```
5.  **Start the servers:**
    * In the `/server` directory, run: `node index.js`
    * In the `/client` directory, run: `npm run dev`

The application will be running and fully functional.
