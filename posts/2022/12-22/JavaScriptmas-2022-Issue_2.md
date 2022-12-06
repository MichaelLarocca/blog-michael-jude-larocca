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

### HOLD
(WRITE ARTICLE SECTION)

---

### Prize rules

From December 1st to the 24th, new coding challenges will be released daily. All valid solutions submitted in their Discord JavaScriptmas channel act as a raffle ticket. So the more valid solutions you enter, the more chances you have to win! Two winners will be drawn during their YouTube Livestream on December 24th and receive $1000 cash plus a lifetime Scrimba Pro membership!

The first winner will be chosen randomly from the daily coding challenge submissions (on Discord).

The second winner is randomly chosen from their submitted code reviews (on Discord). Each submitted coding review acts as a single raffle ticket, so the more you help others, the more chances you have to win a prize!

***Note:*** *You must enter each daily coding challenge submission by midnight (GMT), and it must be a working solution for your entry to be valid.*

--- 

HOLD

---

### Community highlights ⬇

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
#### HOLD

---

### Day 7 challenge
#### HOLD

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
