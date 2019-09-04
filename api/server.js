const express = 'express';

const server = express();

// Global Middleware
server.use(express.json());

// Local Middleware
server.use('/products', productsRouter)
server.use('/suppliers', suppliersRouter)

// Route Handler
server.get('/', (req, res) => {
  res.send(`<h2>Let's write some middleware!</h2>`)
});

//Custom Middleware

function logger(req, res, next) {
// logs to the console the following information
//request method, request url, and a timestamp
};

function validateUserId(req, res, next) {
// Validates the user id on every request that expects a 
//user id parameter
};

function validateUser(req, res, next) {
// validates the body on a request to create a new user
};

function validatePost(req, res, next) {
// validates the body on a request to create a new post
};

module.exports = server;
