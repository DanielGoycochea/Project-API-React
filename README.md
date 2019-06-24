# Project-React-Stefanini

The application will initially display a list of publications sorted by date in descending order.
Each publication must have a title, a description and a date. In turn, publications will be
associated to an author, who will have a first name, last name and email address. The author’s
information must be displayed as part of the publication.
The list of publications must be paginated, limiting the number of entries to a maximum of 10 at
a time.
The user should be able to invert the order of publications showing the oldest ones first.
All the authors should be listed in a sidebar, and the user should be able to click on one of them
to see a list of their publications.

## Installation
Fork this Repo.

Clone this Repo.

https://github.com/DanielGoycochea/Project-API-React

A series of step-by-step examples that tell you what you need to run to have a development environment running


Install  JSON Server

```bash
npm install -g json-server
```
Start JSON Server
```bash
json-server --watch server/db.json
```
Install  npm inside the folder /projectstefanini

```bash
npm install
```
Start React app

```bash
npm start
```


## Built with

* [React js](https://reactjs.org/)- JavaScript library for building user interfaces  
* [json-server](https://www.npmjs.com/package/json-server)- Back-end 
* [React Bootstrap](https://react-bootstrap.github.io/)- front-end framework
