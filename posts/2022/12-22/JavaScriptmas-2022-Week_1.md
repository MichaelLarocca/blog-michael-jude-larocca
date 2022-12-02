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

***ℹ Note:*** *By using periods, you can chain JavaScript methods together.*

The [split()](https://www.w3schools.com/jsref/jsref_split.asp) method splits a string into an array of substrings. This method accepts a separator as an optional parameter. We get each word of the string by adding a space between single quotation marks as a separator.

The [join()](https://www.w3schools.com/jsref/jsref_join.asp) method returns an array as a string. This method includes a separator argument (the default separator is a comma). I solved this part of the challenge by passing in single quotation marks with an 😱 emoji as the separator argument. I included a space between the single quotation marks.

The [toUpperCase()](https://www.w3schools.com/jsref/jsref_touppercase.asp) method converts a string to uppercase letters. 

The [concat()](https://www.w3schools.com/jsref/jsref_concat_string.asp) method joins two or more strings and returns a new string. We add the exclamation point at the end by passing it in between single quotes as a parameter.

---

### Day 2 challenge
#### Totally Private Data Farm
*Write a function that maps through the current data and returns a new array of objects with only two properties: fullName and birthday. Each result in your array should look like this when you're done:* 
```javascript
{
    fullName: "Levent Busser", 
    birthday: "Fri Aug 20 1971"
}
```

**In this challenge, we must format information from the provided array and return it.**

Here is the first record in the provided array: 
```javascript
      {
         "name":{
            "title":"Mr",
            "first":"Levent",
            "last":"Busser"
         },
         "dob":{
            "date":"1971-08-21T01:08:00.099Z",
            "age":51
         }
      }
```

Let's look at the first record by using the console log as follows:
```javascript
console.log(data[0]);
{name: {title: "Mr", first: "Levent", last: "Busser"}, dob: {date: "1971-08-21T01:08:00.099Z", age: 51}}
```

We can retrieve the first and last names as follows:
```javascript
console.log(data[0].name.first);
console.log(data[0].name.last);
Levent
Busser
```

To create the full name:
```javascript
const fullName = `${data[0].name.first} ${data[0].name.last}`;
console.log(fullName);
Levent Busser
```

Now we retrieve the date as follows:
```javascript
console.log(data[0].dob.date)
1971-08-21T01:08:00.099Z
```

To format the date as specified by the challenge:
```javascript
const date = new Date (data[0].dob.date)
console.log(date.toDateString())
Fri Aug 20 1971
```

Now that we understand how to format the data, we can use a [forEach()](https://www.w3schools.com/jsref/jsref_foreach.asp) loop for cycling through the provided data array and then push the formatted data into a new array called totallyPrivateDataArray to return.

```javascript
function transformData(data) {
  const totallyPrivateDataArray = [];

  const records = data.forEach((record) => {
      const fullName = `${record.name.first} ${record.name.last}`;    
      const birthDate = new Date(record.dob.date);    
          
      const newRecord = {
              fullName: fullName,
              birthday: birthDate.toDateString()
          };
          totallyPrivateDataArray.push(newRecord);
      });
      
  return totallyPrivateDataArray;
  }
```

For each iteration of the for loop, we create a variable for each record's full name and birthday. We assign the fullName variable by concatenating the first and last name. 

Then, we assign the birthday variable by creating a [new Date()](https://www.w3schools.com/js/js_dates.asp). We pass in the current record and format it using the [toDateString()](https://www.w3schools.com/jsref/jsref_todatestring.asp) method.

Now that we have new variables with the proper format, we create an object called newRecord and assign them with key-value pairs.

---


---

### Day 3 challenge
#### HOLD

---

### Day 4 challenge
#### HOLD

---