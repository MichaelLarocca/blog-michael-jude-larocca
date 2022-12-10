---
title: "JavaScriptmas 2022 - Issue 2"
tags:
  [
    "scrimba",
    "javascript",
  ]
published: true
date: "2022-12-12"
---

#### ❄ JavaScriptmas continues! I cover the event in this article series by completing each daily challenge providing detailed solutions, and featuring others' works in the community highlights section! ❄

---

![TN-TXG-66](img/05-12-2022/TN-TXG-66.png)

---

### Intro

Grab your favorite holiday drink, put on some festive music, and get ready to code! 🍹

JavaScriptmas is a 24-day coding challenge event where you can win prizes, regardless of your skill level, by submitting valid solutions and helping others by recording code reviews of their work. 🎄

In this article series, I'm completing each challenge and stepping through and documenting in detail how I solve each one. If you are new to coding or just curious about my solution approach, you may find it helpful for your code-learning journey! 💻

I will also be highlighting others' outstanding works as I come across them during this wonderful festive event! 🎉

---

### Prize rules

From December 1st to the 24th, new coding challenges will be released daily. All valid solutions submitted in their Discord JavaScriptmas channel act as a raffle ticket. So the more valid solutions you enter, the more chances you have to win! Two winners will be drawn during their YouTube Livestream on December 24th and receive $1000 cash plus a lifetime Scrimba Pro membership!

The first winner will be chosen randomly from the daily coding challenge submissions (on Discord).

The second winner is randomly chosen from their submitted code reviews (on Discord). Each submitted coding review acts as a single raffle ticket, so the more you help others, the more chances you have to win a prize!

***Note:*** *You must enter each daily coding challenge submission by midnight (GMT), and it must be a working solution for your entry to be valid.*

--- 

### What are code reviews?

What are the code reviews? A code review is when YOU record a scrim reviewing another person's JavaScriptmas solution, providing constructive feedback.

*For a deep-dive into learning how to create Scrimba screencasts, I wrote this detailed article on the topic: [How to create Scrimba screencasts and turn them into a Scrimba course](https://selftaughttxg.com/2021/02-21/CreateAScrimbaScreencast/)*

---

### Community highlights ⬇

#### Jolene Kearse

![scrim screenshot](img/05-12-2022/JoleneKearse.png)

If you're curious about what a code review providing constructive feedback looks like, [Jolene Kearse](https://twitter.com/FromJolene) just set the standard!

In a short four-minute review, Jolene starts by reviewing the code and complimenting the student on their approach to solving the problem and confirms with them that to code works perfectly.

Going over the student's code, she then explains that adding unnecessary variables is not a good idea because of memory (space complexity), which we learn in data structures and algorithms.

Jolene then refactors the code to be more succinct, optimizing for space complexity using less memory.

Finally, Jolene goes over the refactored code, explaining how each code challenge requirement is complete while complementing the student on their approach to solving it!

🔗[Link to the scrim](https://scrimba.com/scrim/cob664c889972afe30dc69916)

---

#### Daniel Beck Rose

![scrim screenshot]()

Daniel turned the day six coding change of creating a random number of tacos into a game! 

(WRITE ARTICLE SECTION)

🔗[Link to the scrim]()

---

#### Dheeraj Purohit

![scrim screenshot]()

Creatively combining what he has learned, Dheeraj turned the day seven challenge into a function that simulates a typewriter!

(WRITE ARTICLE SECTION)

🔗[Link to the scrim]()

---

### My JavaScript code challenge solutions ⬇

---

### Day 5 challenge
#### Candy Sale
*It's the day after Halloween 🎃 and all the candy is on sale!*

*To buy up all the candy, use map() and filter() to put all the candy into a 'shoppingCart' array.* 

*The new array should contain only the item and the price, like this:*
```javascript
Expected output: 
[
    {item: "🍭", price: 2.99},
    {item: "🍫", price: 1.99}, 
    {item: "🍬", price: 0.89}
]
```    

**This challenge instructs us to solve it using filter() and map().**

The [filter()](https://www.w3schools.com/jsref/jsref_filter.asp) method creates a new array filled with elements that pass a test provided by a function.

With [map()](https://www.w3schools.com/jsref/jsref_map.asp), we can perform an action on each element in a collection and then gather the results into a new array.

Let's take a look at just the first record in the products array to see what we are working with:

```javascript
console.log(products[0]);
{item: "🍭", price: 2.99, type: "sweet"}
```

So, first, we need to check each record (object) in the products array to see if its value for type equals sweet. Using filter, we can set just these records to a new array declared "filterProducts" as follows:
```javascript
const filterProducts = products.filter(product => product.type === "sweet");
```

We can console logs to see the results: 
```javascript
console.log(filterProducts);
[{item: "🍭", price: 2.99, type: "sweet"}, {item: "🍫", price: 1.99, type: "sweet"}, {item: "🍬", price: 0.89, type: "sweet"}]
```

Now, let's see how map works separately. We will use map to return a new array declared "mapProducts," with only the key-value pairs introduced by the challenge as follows:
```javascript
const mapProducts = products.map(product => ({item: product.item, price: product.price})); 
```

We can console logs to see the results of using map: 
```javascript
console.log(mapProducts);
[{item: "🍭", price: 2.99}, {item: "🍫", price: 1.99}, {item: "🥫", price: 1.99}, {item: "🍬", price: 0.89}, {item: "🥦", price: 3.99}, {item: "🍖", price: 3.99}]
```

Great! We got both filter and map working separately. Now, before we write a function to solve the challenge, let's see how we can chain both methods to get the results we want:  
```javascript
const chain = products.filter(product => product.type === "sweet").map(product => ({item: product.item, price: product.price})); 
```

Once again, let's see the results by using a console log:
```javascript
console.log(chain);
[{item: "🍭", price: 2.99}, {item: "🍫", price: 1.99}, {item: "🍬", price: 0.89}]
```

Now that we know how to use the filter and map methods, we can write a function to solve the challenge. By chaining the methods, we can create a new array declared "shoppingCart" with one succinct line of code.
```javascript
function getSaleItems(products){
    
    const shoppingCart = products.filter(product => product.type === "sweet").map(product =>({item: product.item, price: product.price}));

    return shoppingCart;
};
```

***🔗 [My solution for day 5](https://scrimba.com/scrim/co6d84464bcc4a8a9ea71fb4b)***

---

### Day 6 challenge
#### Taco Tray

*Make this function return an array that contains between one and ten taco emojis 🌮 Use the following JavaScript concepts:*
* Math.random()
* Math.floor()
* new Array()
* Array.fill()

**We will use the four JavaScript concepts as instructed to solve this challenge.**

**Random numbers in JavaScript** 

Ah, yes, creating random numbers in JavaScript. If you haven't already done so, you will often create random numbers in your coding projects.

The [Math.random()](https://www.w3schools.com/jsref/jsref_random.asp) method returns a random number from 0 (inclusive) up to but not including 1 (exclusive).

So, to get a number between 0 and 10, we need to use the Math.random() method and multiply it by ten as follows:
```javascript
let x = Math.random() * 10;
console.log(x)
4.420535959639502
```

We can eliminate the decimal places using [Math.floor()](https://www.w3schools.com/jsref/jsref_random.asp):
```javascript
console.log(Math.floor(x));
4
```

To create a random number between 1 and 10, after we multiply by 10, we add 1, utilizing Math.floor():
```javascript
let randomNumber = Math.floor(Math.random()*10)+1;
```

Now, let's create an array name tacos with 3 undefined elements using the JavaScript keyword [new Array()](https://www.w3schools.com/js/js_arrays.asp):
```javascript
const tacos= new Array(3); 
console.log(tacos);  
[undefined, undefined, undefined]
```

We can now assign a taco emoji to all of the undefined elements using the [fill()](https://www.w3schools.com/jsref/jsref_fill.asp) method:
```javascript
tacos.fill('🌮');
console.log(tacos); 
["🌮", "🌮", "🌮"]
```

Now we have covered everything we need to solve the challenge. 

**We can create a variable named tray with one succinct line of code by chaining the JavaScript methods, and the add it to the provided function as follows:**
```javascript
function getRandomNumberOfTacos() {        
    const tray = new Array(Math.floor(Math.random()*10)+1).fill('🌮').join(' ');    
    return [tray];
}
```

***Note:*** *We use the [join(' ')](https://www.w3schools.com/jsref/jsref_join.asp) method to remove the commas between the taco emojis.*

---

### Day 7 challenge
#### Alternating Caps 
*Write a function that takes in a string of letters and returns a sentence in which every other letter is capitalized.*

*Example input: "I'm so happy it's Monday"*
*Example output: "I'M So hApPy iT'S MoNdAy"*

---

### Day 8 challenge
#### HOLD

---

### Day 9 challenge
#### HOLD

---

### Day 10 challenge
#### HOLD

---

For me, Scrimba is much more than an online platform to learn how to code. 

(WRiTE ARtICLe SECTION)

[How Scrimba is helping me and many others to become confident, well-prepared web developers](https://selftaughttxg.com/2021/06-21/06-07-21/)

---

**I continue to have wonderful experiences with Scrimba, and I highly recommend learning with them! You can read my full [Scrimba review](https://selftaughttxg.com/2020/12-20/Review-Scrimba/) on my 12/13/2020 post.**

![Per Harald Borgen Quote](img/PerHaraldBorgen-Quote.png)

#### *"That&#39;s one of the best Scrimba reviews I&#39;ve ever read, <a href="https://twitter.com/MikeJudeLarocca?ref_src=twsrc%5Etfw">@MikeJudeLarocca</a>. Thank you! 🙏 "*
###### &mdash; Per Harald Borgen, CEO of Scrimba <a href="https://twitter.com/perborgen/status/1338462544143540227?ref_src=twsrc%5Etfw">December 14, 2020</a></blockquote>

---

### Conclusion

Scrimba's JavaScriptmas annual FREE event is a wonderful way to commit to coding daily. It is a fun and festive event where all participants have an equal opportunity to win prizes, regardless of their skill level.

By completing all 24 coding challenges and submitting them daily by midnight (GMT) time, each submission acts as a raffle ticket, so you will have up to 24 chances to win prizes, plus unlimited more chances with submitting coding reviews!

---

**Let's connect! I'm active on [LinkedIn](https://www.linkedin.com/in/michaeljudelarocca/) and [Twitter](https://twitter.com/MikeJudeLarocca).**

---

###### *Are you now interested in participating in this year's Scrimba's JavaScriptmas? Have you already participated in last year's Scrimba's JavaScriptmas? Please share the article and comment!* 

---
