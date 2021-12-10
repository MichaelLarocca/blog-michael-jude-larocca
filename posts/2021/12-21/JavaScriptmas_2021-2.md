---
title: "Scrimba: JavaScriptmas 2021 - Issue 2"
tags:
  [
    "scrimba",
    "javascript",
  ]
published: true
date: "2021-12-13"
---


---

![TXG-54-Thumbnail](img/12-13-21/TXG-54-Thumbnail.png)

---


--- 

### Below are my coding solutions to the JavaScriptmas challenges 5 through 11!

---

### Challenge 5

#### Christmas Card Writer

**Task:** *Write a function to display a random greeting in the card.*

Okay, I tripped on this challenge right out of the starting gate. You may also receive this error, and I will explain why.

As I usually do, I started with a console log to see what I was dealing with; This time, the console log was for the greetings array.

```javascript
console.log(greetings);
```

**I immediately received this error message:**

```
Reference Error: writeGreeting is not defined (index.js:4)
```

**The error happened because Scrimba provided already written code for us to start with, including a call to a function that does not exist yet.**

---

*Debugging is an essential skill for a developer. Utilizing tools, including reading error logs, will help you resolve errors in the code.*  

---

Reading the "**Reference Error**," we know the error is in the **index.js on line 4**. The error message also informs us that "**writeGreeting**" is not defined.

Examining the prewritten code that Scrimba provided us, we can see that an event listener was created targeting a button. When the button is clicked, the function "**writeCreeting**" is called.

```javascript
btn.addEventListener("click", writeGreeting)
```

To resolve the error and move on with the challenge, I created a function called "**writeCreeting**" to write my code.

```javascript
function writeGreeting() {
    
}
```

---

**Now it's time to write the function.**

We need to create a random number generator that equals the length of the "**greetings**" array. With this method, we have the flexibility to add and take away messages from the array.

```javascript
const randomGreetingNumber = Math.floor(Math.random() * greetings.length);
```

---

*If you are new to creating random numbers in JavsScript, I recommend reading the information on [www.w3schools.com](https://www.w3schools.com/jsref/jsref_random.asp) on the topic.*

---

**Now that we have a random number in the range of the greetings array, we need to create a variable that sets a random greeting to a string.**

```javascript
const randomGreeting = greetings[randomGreetingNumber];
```

Finally, we need to display the random greeting string in the HTML paragraph with the id "**greetingDisplay**." 

```javascript
greetingDisplay.innerText = randomGreeting; 
```

---

**To style the page, I added:**

* Text shadow
* Box shadow
* Transparent background
* Background image (from pixabay.com)

---

![Challenge05](img/12-13-21/Challenge05.png)

---

### Final code

#### Challenge 5

**Link to the solution:** [scrimba.com/scrim](https://scrimba.com/scrim/co7204e0b987eed3efa96a0ba)

```JavaScript
const greetingDisplay = document.getElementById("greeting-display")
const btn = document.getElementById("btn")

btn.addEventListener("click", writeGreeting)

const greetings = [
    "Santa Claus is coming to town!",
    "We wish you a Merry Christmas!",
    "Happy holidays!",
    "Ho, ho, ho! Merry Christmas!",
    "Jingle all the way!",
]

function writeGreeting() {
    const randomGreetingNumber = Math.floor(Math.random() * greetings.length);
    const randomGreeting = greetings[randomGreetingNumber];
    
    greetingDisplay.innerText = randomGreeting;  
}
```

---