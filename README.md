# Welcome to Intent!

Intent is a web application inspired by Branscape, but with a twist. The intent of Intent is to allow learners to effectively learn steps in a sequence, procedure, or task. 

* [Click here to view Intent](https://intent-co.herokuapp.com/)

Please see below links to the Project Wiki: 

* [Database Schema and Backend Routes](https://github.com/coucode/intent/wiki/Database-Schema-and-Backend-Routes)
* [MVP Feature List](https://github.com/coucode/intent/wiki/MVP-Feature-List)
* [User Stories](https://github.com/coucode/intent/wiki/User-Stories)
* [Wireframes](https://github.com/coucode/intent/wiki/Wireframes)

This project is built with: 

![Python](https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54)![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)![Flask](https://img.shields.io/badge/flask-%23000.svg?style=for-the-badge&logo=flask&logoColor=white)![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)![Redux](https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white)![Docker](https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white)

# Directions for Features


# Local Installation
To run this application locally, you will need Python and NPM. This root folder contains a backend (app) and frontend (react-app) directory. 

### Step 1: Download
Clone the project repository in your terminal
```shell
git clone https://github.com/coucode/intent.git
```

### Step 2: Backend Setup
-  Inside of the root directory, run the following command in the terminal to set up the necessary Python dependencies for running the backend server and database. 
   ```shell
   pipenv install -r requirements.txt
   ```
-  Create a .env file based on the example with proper settings for your development environment
-  Make sure the SQLite3 database connection URL is in the .env file
-  Get into your pipenv, migrate your database, seed your database, and run your Flask app
   ```shell
   pipenv shell
   ```
   ```shell
   flask db upgrade
   ```
   ```shell
   flask seed all
   ```
   ```shell
   flask run
   ```

### Step 3: Frontend Setup
Navigate to the /react-app directory, run the following command to set up the necessary Node.js dependencies and then start the server.
```shell
npm install
npm start
```
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
