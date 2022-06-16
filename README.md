# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Steps to install project

1. Clone the repo using git clone https://github.com/piyusha1807/infracloud.git
2. use node(v14.16.0) and npm(6.14.11)
3. npm install
4. npm start
5. Open http://localhost:3000 to view it in the browser.

## Project contains

1. Taking username first time using modal and store in session storage.
2. Making a get call to get list of post and sending username in request headers.
3. Storing the reponse of posts api in redux store and show in posts table.
4. If user wants to see comments of any posts have to click on view button and comments drawer will open.
5. At the time of clicking on view button comments api will call using posts id and store in redux store.
6. Comments component will call the state and show data in comments table.

## Folder structure inside src

1. compoents => This folder contains a MUI grid Table component that is using inside posts and comments component.
2. layout => This folder is default layout of page that contains navbar and modal for taking username.
3. pages => This folder contains post and comments component.
4. redux => This folder containes actions, reducers, services and store.
5. uitls => utils have axios interpreter.
