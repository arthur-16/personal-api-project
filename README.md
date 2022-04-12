# personal-api-project

Mini Pokemon API
Overview
================

JSON API following the CRUD standard, (Create Read Update Delete). Technologies utilized include Node, MongoDB, Mongoose and Express. API includes a small selection of Pokemon.

Getting Started
========================

Installation
========================
npm install npm@latest -g


git clone https://github.com/arthur-16/personal-api-project.git


npm install 


npm run db:seed


npm run start



API Reference
=====================

Using a GUI program like Postman or for CLI users HTTPIE or CURL, you can create, read, update and delete documents in the database's collection.

http://localhost:3000/api/pokemon/

Get all Pokemon with a GET request:

localhost:3000/api/pokemon/

Create a new Pokemon and add to the list with a POST request:

localhost:3000/api/pokemon/

Update a Pokemon with a PUT request:

localhost:3000/api/pokemon/:id

Delete a Pokemon with a DELETE request:

localhost:3000/api/pokemon/:id

Deployed on Heroku!

Link to deployed app:

https://art-heroku-app.herokuapp.com/api

Enjoy!
