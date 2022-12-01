---
title: "JavaScriptmas 2022 - Week 1"
tags:
  [
    "scrimba",
    "javascript",
  ]
published: true
date: "2022-12-05"
---

### JavaScriptmas 2022 - Week 1
(WRITE ARTICLE SECTION)

Tis the season to be coding! JavaScriptmas time is here!

---

### Day 1 challenge
#### Panic function
*Write a PANIC function. The function should take in a sentence and return the same sentence in all caps with an exclamation point (!) at the end. Use JavaScript's built-in string methods. If the string is a phrase or sentence, add a 😱 emoji in between each word.* 

```javascript
function panic(sentence) {
    const splitSentence = sentence.split(' ').join(' 😱 ').toUpperCase() + `!`;
    return splitSentence;
}
```

**Although the solution to this challenge may seem complicated at first glance, it is solved easily using JavaScript methods.**

*By using periods, you can chain JavaScript methods together.*

The [split()](https://www.w3schools.com/jsref/jsref_split.asp) method splits a string into an array of substrings. We get each word of the string by adding a space between the single quotation marks.

The [join()](https://www.w3schools.com/jsref/jsref_join.asp) method returns an array as a string. This method includes a separator argument (the default separator is a comma). I solved this part of the challenge by passing in single quotation marks with an 😱 emoji as the separator argument. I included a space between the single quotation marks.

The [toUpperCase()](https://www.w3schools.com/jsref/jsref_touppercase.asp) method converts a string to uppercase letters. 

Finally, I added the exclamation mark between backticks and used the JavaScript concatenation operator to add it to the end of the string.

***Note:*** *When used on strings, the + operator is called the concatenation operator.*

---

### Day 2 challenge
#### HOLD

---

### Day 3 challenge
#### HOLD

---

### Day 4 challenge
#### HOLD

---