# Welcome to Intent!

Intent is a web application inspired by Brainscape, but with a twist. The intent of Intent is to allow learners to effectively learn steps in a sequence, procedure, or task. 

* [Click here to view Intent](https://intent-co.herokuapp.com/)

Please see below links to the Project Wiki: 

* [Database Schema and Backend Routes](https://github.com/coucode/intent/wiki/Database-Schema-and-Backend-Routes)
* [MVP Feature List](https://github.com/coucode/intent/wiki/MVP-Feature-List)
* [User Stories](https://github.com/coucode/intent/wiki/User-Stories)
* [Wireframes](https://github.com/coucode/intent/wiki/Wireframes)

This project is built with: 

![Python](https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54)![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)![Flask](https://img.shields.io/badge/flask-%23000.svg?style=for-the-badge&logo=flask&logoColor=white)![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)![Redux](https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white)![Docker](https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white)

# Directions for Features
## Splash Page: 
Here you can view the splash page for Intent, visit the my Github and LinkedIn profiles, as well as log in or sign up for Intent.
<img width="1423" alt="image" src="https://user-images.githubusercontent.com/103226832/194428470-a41cb950-1465-4a02-9430-ddf62d0e331b.png">

## Log In:
If you have an account, you can enter your credentials and press Login. You can also login as a Demo user by clicking the "Sign in as Demo user" button.
<img width="1423" alt="image" src="https://user-images.githubusercontent.com/103226832/194429507-3def2365-d0a1-455a-a359-d5c7da03ff0a.png">

## Sign Up:
You can sign up for Intent by clicking the Get Started button
<img width="1420" alt="image" src="https://user-images.githubusercontent.com/103226832/194429589-36026e0f-5240-406f-aafb-c5bca483f090.png">

## Landing Page: 
Once you log in, you are directed to the landing page that displays a navigation bar with your categories as well as an overview of the website. 
<img width="1433" alt="image" src="https://user-images.githubusercontent.com/103226832/194429721-a068cba2-1d04-484f-9625-b128c7bcb608.png">


## View, Edit, or Delete a Category: 
You can click on a category listed on the navigation bar to view details about the category, as well as topics associated with the category. You can also Edit or Delete the category by clicking the associated buttons.
<img width="1438" alt="image" src="https://user-images.githubusercontent.com/103226832/194429858-f9e470b7-a4ff-4655-a025-4916e88768a3.png">

## Create a Category: 
You can create a category by clicking on the `Create Category` button in the navigation bar. This will open a form that allows you to create a category. 
<img width="1433" alt="image" src="https://user-images.githubusercontent.com/103226832/194429950-cc41718a-5429-47a8-84f5-e646759cf891.png">

## View All Topics: 
You can view all of the topics associated with a Category by clicking on topics. 
<img width="1436" alt="image" src="https://user-images.githubusercontent.com/103226832/194430075-eca5ea85-647a-4f1b-99c5-c349eab72a3b.png">

## View, Edit, or Delete One Topic: 
When you click on a topic, you can click on buttons to edit or delete the topic, as well as view, create, edit, and delete steps associated with the topic. 
<img width="1436" alt="image" src="https://user-images.githubusercontent.com/103226832/194430161-0c55ae55-9342-42a7-b0e1-1d15e7362ed1.png">

## View Steps
While in the topic page, you can view a carousel of the steps associated with the topic. The Summary and Description fields are greyed out until the user clicks on them to reveal the answer. 
<img width="1425" alt="image" src="https://user-images.githubusercontent.com/103226832/194430373-6f2117c8-83d3-419a-8718-d186b0922d70.png">

## Create, Edit, or Delete Steps
While in the topic page, you can click on edit steps to create, edit or delete steps for this topic. 
<img width="1423" alt="image" src="https://user-images.githubusercontent.com/103226832/194430439-346c8d39-c45c-44b3-a8f7-c39b2be2ecbd.png">


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
