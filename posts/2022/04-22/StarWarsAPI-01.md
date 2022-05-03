---
title: "Javascript: How to Use the Star Wars API for Beginners"
tags:
  [
    "javascript",
    "project",
    "tutorial",
  ]
published: true
date: "2022-05-04"
---

#### May the 4th be with you! In this article, to celebrate Star Wars Day, I learned and stepped through the process of using the Star Wars API to display the information on a vanilla JavaScript website!

---

![TN TXG 63](img/TN-TXG-63.jpg)

---

### Intro

Until now, I've managed to postpone learning how to work with API's during my self-taught coding journey. Since it's Star Wars Day this week, "May the 4th", I decided it was an excellent time to learn how to work with them, starting with using the [Star Wars API](https://swapi.dev/)!

---

### What is an API

[Wikipedia explains](https://en.wikipedia.org/wiki/API), "An application programming interface (API) is a connection between computers or between computer programs."

---

### The Star Wars API

The [Star Wars API](https://swapi.dev/) contains data from the first seven Star Wars films, including Planets, Spaceships, Vehicles, People, Films, and Species.

**The Star Wars API is an open API, meaning it is a publicly available application programming interface, and it does not require authentication to use it.**

Since the Star Wars API is an open API, we do not need an access token, simplifying the connection process.

---

### How to use the Star Wars API

We will be accessing the Star Wars API using the [JavaScript fetch() method](https://developer.mozilla.org/en-US/docs/Web/API/fetch), which returns a [promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) that is fulfilled once the response is available. 

The [response](https://developer.mozilla.org/en-US/docs/Web/API/Response) is an object which we then convert into JSON using the [json() method](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON).

**Once we convert the received object, we can then access the information, set it to variables, and display it for the users to see.**  


---

### Connecting to the Star Wars API

**JSON (JavaScript Object Notation) is the standard data format the Star Wars API provides by default.** 

**Wikipedia defines** *"JSON is an open standard file format and data interchange format that uses human-readable text to store and transmit data objects consisting of attribute–value pairs and arrays."*

**I wrote asynchronous javascript functions to retrieve the JSON data from the Star Wars API.**

*For an in-depth look into working with JSON files, [here is helpful information provided by Mozilla](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/JSON).*

---

### Asynchronous Functions 

**Mozilla defines,** *"An async function is a function declared with the async keyword, and the await keyword is permitted within it. The async and await keywords enable asynchronous, promise-based behavior to be written in a cleaner style, avoiding the need to explicitly configure promise chains."*

**The following code is an async function I wrote as a simple demonstration.**

**Steps:**

* fetch() to fetch the data
* json() to convert the data
* console.log() to view data

```javascript
async function fetchPlanets() { 
  const results = await fetch("https://swapi.dev/api/planets/?page=1");
  const data = await results.json();
    console.log(data);
} 
fetchPlanets();
```

If you copy the code and paste it into a code editor, such as CodePen, you will see the results from the Star Wars API in the "console.log."

**This function retrieves the data from the first page of the "Planets." When they arrive, the results are then stored in the "data" variable and then printed to the console for viewing.**

--- 