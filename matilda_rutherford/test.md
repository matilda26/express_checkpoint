# Node/Express Test

### Question 1

What is `module.exports` and why do we use it?

"The module.exports or exports is a special object which is included in every JS file in the Node.js application by default. module is a variable that represents current module and exports is an object that will be exposed as a module. So, whatever you assign to module.exports or exports, will be exposed as a module."

### Question 2

Write one Express route for each of the four CRUD actions.

Then, make each route respond with a one-word string containing the RESTful action that would most likely be associated with this route.

```js
var express = require("express")
var app = express()

app.route('/home')
  .get(function (req, res) {
    res.send('GET')
  })
  .post(function (req, res) {
    res.send('POST')
  })
  .put(function (req, res) {
    res.send('PUT')
  })
  .delete(function (req, res) {
    res.send('DELETE')
  })

```

### Question 3

Describe the differences between Express and Rails as backend frameworks.

```text
Express is JS, Rails is Ruby. Express is unopinionated, ruby is very opinionated. Express is asynchronous.
```

### Question 4

What do the following lines of code do?

```js
var bodyParser = require("body-parser")
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
```

```text
This is handling the HTTP request. The body-parser module parses the JSON, buffer, string and URL encoded data submitted using HTTP POST request. If extended is set to true, it means URL-encoded data will be parsed with the qs library, meaning that it allows you to create a nested object from your query string. 
```

### Question 5

For this exercise you will be creating an es6 BankAccount class.

It will have the following properties...
* `type` (e.g., "checking"), which should be determined by some input
* `balance`, which should start out as `0`

It should have the following methods...
* `withdraw`, which should decrease the balance by some input
* `deposit`, which should increase the balance by some input
* `showBalance`, which should print the balance in the bank to the console.

The `BankAccount` class has a `transactionHistory` property which keeps track of the withdrawals and deposits made to the account.
* Make sure to indicate whether the transaction increased or decreased the amount of money in the bank.

```text
Your answer...
```

Create an instance of the BankAccount class

```text
Your answer...
```
