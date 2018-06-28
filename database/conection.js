const promise = require("bluebird");
const monitor = require("pg-monitor");

let initOptions = {};

if (process.NODE_ENV !== "production") {
    promise.config({
      longStackTraces: true
    });
    initOptions = {
      promiseLib: promise
    };
   }

// Import pg-promise and initialize the library with an empty object.
const pgp = require("pg-promise")(initOptions);

// Prepare the connection URL from the format: ‘postgres://username:password@host:port/database’;
const connectionURL = "postgres://localhost:5432/exampleblog";

// Creating a new database connection with the provided URL.
const db = pgp(connectionURL);

module.exports = db;