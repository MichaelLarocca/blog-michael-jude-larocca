---
title: "JavaScript: How to Use the Chuck Norris API for Beginners"
tags:
  [
    "javascript",
    "html",
    "css",
  ]
published: true
date: "2023-02-14"
---

#### Does Chuck Norris speak about himself in the third person? Well, he does when he hands out Valentine's Day cards! In this article, we learn how to use the Chuck Norris API by making hilarious VD cards!

---

![TXG-75](HOLD)

---

Into
(WRITE ARTICLE SECTION)

---

### Card one

Below is the simplest version of the function. 🔽
```javascript
async function fetchJoke() { 
  const results = await fetch(`https://api.chucknorris.io/jokes/random`);
  const data = await results.json();
      console.log(data.value);
} 
fetchJoke();
```

To try it out, copy or rewrite the code into a JavaScript file and check the console log. You can use [CodePen](https://codepen.io/), a FREE online code editor.

Now, let's take a closer look at this simple function and learn how it works.

**The fetch joke is an asynchronous function. Asynchronous functions return a promise, an object that provides methods to handle the eventual success or failure of the operation.**

Here is an excellent article on the topic from MDN Web Docs: [How to use promises](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Promises)

In simple terms, we are trying to retrieve data, in this case, a Chuck Norris joke. We do not know how long it will take, and we do not know if there will be some errors.

---

**Let's break down the function with the help of MDN Web Docs. We are dealing with the following:**
* async 
* await 
* promise
* fetch
* .json()

The [async](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function) declaration declares an async function.

We use the [await](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await) operator to wait for a Promise and get its fulfillment value.

The [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

The Fetch API provides a JavaScript interface for accessing and manipulating parts of the protocol, such as requests and responses. It also provides a global [fetch()](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch) method that provides an easy, logical way to fetch resources asynchronously across the network.

The [json()](https://developer.mozilla.org/en-US/docs/Web/API/Response/json) method of the Response interface takes a Response stream and reads it to completion. It returns a promise which resolves by parsing the body text as JSON. Note that despite the method being named json(), the result is not JSON but is instead the result of taking JSON as input and parsing it to produce a JavaScript object.

---

**Now that we better understand how an asynchronous function works, let's tighten up the fetch joke function by adding code to handle errors. We will use a try/catch statement.**

We will first add a try block to the fetch joke. If we are unsuccessful in fetching a joke, we will use a catch block to throw an error.

```javascript
async function fetchJoke() {

	try {
        const results = await fetch(`https://api.chucknorris.io/jokes/random`);
        const data = await results.json();
            console.log(data.value);
	} catch (error) {
		console.error(error);
	}
}
fetchJoke();
```

A simple way to test if the catch error works is to turn off your internet connection. Check out the message I got in the console log!
```
GET https://api.chucknorris.io/jokes/random net::ERR_INTERNET_DISCONNECTED
```

This is great! However, the catch block will not work for a 404 error. We will get a 404 error if the URL is incorrect! Look at what happens when I add 123 to the end of the URL.
```
GET https://api.chucknorris.io/jokes/random123 404
```

To handle a 404 error, we add an if statement to the results variable. If the results are not ok, we throw an error.
```javascript
async function fetchJoke() {

	try {
		const results = await fetch(`https://api.chucknorris.io/jokes/random`);
    
		if (!results.ok) {
			throw new Error("Request failed.");
		}    
    
		const data = await results.json();
            console.log(data.value);
	} catch (error) {
		console.error(error);
	}
}
fetchJoke();
```

Now that we have written code to handle errors let's have some fun and add a custom error message. In the style of the Chuck Norris jokes, I came up with the following:
```javascript
const errorMessage = `"DO NOT DISTURB!" Chuck Norris is currently entertaining guests in his hotel room.`;
```

Let's add the custom error message to the function.
```javascript
async function fetchJoke() {
const errorMessage = `"DO NOT DISTURB!" Chuck Norris is currently entertaining guests in his hotel room.`;
  
	try {
		const results = await fetch(`https://api.chucknorris.io/jokes/random`);
  
		if (!results.ok) {
            console.log(errorMessage);
			throw new Error("Request failed.");
		}    
    
		const data = await results.json();
             console.log(data.value);
	} catch (error) {
        console.log(errorMessage);
		console.error(error);
	}
}
fetchJoke();
```

Finally, let's modify the fetch joke function to add content to a paragraph tag in HTML instead of the console log.

Add this code to the HTML page ( using CodePen is easiest ).
```html
<p id="display-joke"></p>
```

Add this code to JavaScript above the fetch joke function, not in it ( using CodePen is easiest ).
```javascript
const displayJoke = document.getElementById("display-joke");
```

Here is the final JavaScript function:
```javascript
console.clear();

const displayJoke = document.getElementById("display-joke");

async function fetchJoke() {
const errorMessage = `"DO NOT DISTURB!" Chuck Norris is currently entertaining guests in his hotel room.`;
  
	try {
		const results = await fetch(`https://api.chucknorris.io/jokes/random`);
  
		if (!results.ok) {
            displayJoke.textContent = errorMessage;
			throw new Error("Request failed.");
		}    
    
		const data = await results.json();
        displayJoke.textContent = data.value;
            console.log(data.value);
	} catch (error) {
        displayJoke.textContent = errorMessage;
		console.error(error);
	}
}
fetchJoke();
```

***Since I wanted to focus on the JavaScript aspects and keep this article beginner-friendly, feel free to copy my HTML and CSS code to complete the Valentine's Day card.***

🔗 Here is a link to the GitHub repo: [Chuck-Norris-API-VD-Card-01](https://github.com/MichaelLarocca/Chuck-Norris-API-VD-Card-01)

🔗 Here is a link to the CodePen: [Chuck Norris VD Card one](https://codepen.io/Michael_Larocca/pen/MWBdyZb?editors=0011)

🔗 Here is a link to the finished project: [chuck-norris-api-vd-card-one.netlify.app](https://chuck-norris-api-vd-card-one.netlify.app/)

---