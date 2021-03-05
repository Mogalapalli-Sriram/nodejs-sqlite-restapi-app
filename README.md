# nodejs-sqlite-restapi-app

## About the App
This application is about making CRUD operations for the cars.

<br>

## Prerequisites
* Node js
* [SQLite browser](https://sqlitebrowser.org/)(optional)
  

<br>

## Setup
1. Clone the repository.
```bash
git clone https://github.com/Mogalapalli-Sriram/nodejs-sqlite-restapi-app.git <nodejs-sqlite>
```
2. Change over to nodejs-sqlite directory.
```bash
cd nodejs-sqlite
```
3. Install dependencies.
```bash
npm install
```
<br>

## How to run the app
1. Start the server.
```bash
node server.js
```
2. You can access the app at http://localhost:3000

<br>

## API's

### Get all the bikes
```bash
curl http://localhost:3000/bikes
```
```json
{
    "getBikes": [
        {
            "Id": 1,
            "Name": "Royal Enfield",
            "Model": "650cc cruiser bike",
            "Year": 2020
        },
        {
            "Id": 2,
            "Name": "Honda Activa",
            "Model": "6G",
            "Year": 2020
        }
    ]
}
```
<br>

### Create a bike
```bash
curl -X POST  http://localhost:3000/bikes 
-H "Content-type : application/json" 
-H "accept : application/json" 
-d "{\"Id\" : \"3\" , \"Name\" : \"Yamaha\" , \"Model\" : \"Mt-15 \", \"Year\" : \"2020\" }"
```
```json
{
    "success": true,
    "data": {
        "Id": "3",
        "Name": "Yamaha",
        "Model": "Mt-15 ",
        "Year": "2020"
    }
}
```
<br>

### Get a bike by Id
```bash
curl http://localhost:3000/bikes/3
```
```json
{
    "data": [
        {
            "Id": 3,
            "Name": "Yamaha",
            "Model": "Mt-15 ",
            "Year": 2020
        }
    ]
}
```
<br>

### Update a bike by Id
```bash
curl -X PATCH  http://localhost:3000/bikes/1 
-H "Content-type : application/json" 
-H "accept : application/json" 
-d "{\"Model\" : \"300cc cruiser\",\"Year\": \"2018 \" }"
```

```json
{
    "success": "updated bike with id number 1"
}
```
<br>

### Remove a bike by Id
```bash
curl -X DELETE http://localhost:3000/bikes/3
```

```json
{
    "success": true
}
```

<br>

## Other tools used

* Used [Postman](https://www.postman.com/downloads/) for generating http requests to the server and got responses through [knex-npm](https://www.npmjs.com/package/knex).

## Things I have learnt
* Knex which is a special package manager of node use to build queries for the database engines such as PostgreSQL,MySQL,SQLite,etc.It enables us to connect the server to the SQLite database and add write the queries for SQLite.

* Javascript Async and await for returning the promise.

* SQLite database browser  for persisting the data.

<br>

Courtesy and followed the video on [Youtube](https://youtu.be/cr3pX6fSUpc)
