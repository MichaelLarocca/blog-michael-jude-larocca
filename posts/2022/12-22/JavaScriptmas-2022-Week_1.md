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
    const panicSentence = sentence.split(' ').join(' 😱 ').toUpperCase().concat('!');
    return panicSentence;
}
```

**Although the solution to this challenge may seem complicated at first glance, it is solved easily using JavaScript methods.**

*By using periods, you can chain JavaScript methods together.*

The [split()](https://www.w3schools.com/jsref/jsref_split.asp) method splits a string into an array of substrings. This method accepts a separator as an optional parameter. We get each word of the string by adding a space between single quotation marks as a separator.

The [join()](https://www.w3schools.com/jsref/jsref_join.asp) method returns an array as a string. This method includes a separator argument (the default separator is a comma). I solved this part of the challenge by passing in single quotation marks with an 😱 emoji as the separator argument. I included a space between the single quotation marks.

The [toUpperCase()](https://www.w3schools.com/jsref/jsref_touppercase.asp) method converts a string to uppercase letters. 

The [concat()](https://www.w3schools.com/jsref/jsref_concat_string.asp) method joins two or more strings and returns a new string.

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