---
title: "How to Write a Recursive Function in JavaScript for Beginners"
tags:
  [
    "javascript",
  ]
published: true
date: "2023-01-02"
---

#### Whether you're preparing for a coding interview or would like to learn about recursion, in this article, Full Stack Developer Daniel Nagaoka teaches us how to write a recursive function in JavaScript!

---

![TN-TXG-69](img/TN-TXG-069-NEW.png)

---

**This article aims to break down and step through the recursive JavaScript function to learn and understand how it works.**

The recursive JavaScript function featured in this article is only several lines of code. 

When I first saw it, I didn't quite understand how it worked, so I reached out to Daniel, who was kind enough to elaborate.

Taking it a step further, I broke down all of the JavaScript used in the recursive function to make this article beginner friendly.

*Depending on your JavaScript level, feel free to skip around this article. If you are new to JavaScript, I recommend reading the whole article, as the topics covered will lead to writing the recursive function (think of it as learning prerequisites).*

**Here is the completed  recursive JavaScript function covered in this article:**
```javascript
function flattenRecursive(arr) {
    return arr.reduce(
        (consolidated, child) => {
            if (Array.isArray(child)) {
                consolidated.push(...flattenRecursive(child));
            } else {
                consolidated.push(child);
            }
            return consolidated;
        },
        [], 
    );
}

const yay = [1, 2, [3, [4, [5, [6, [[[[[7], [8, 9]]]]]]], 10]]];
  console.log(flattenRecursive(yay));
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
```

---

### About Daniel Nagaoka

Dan has experience in both Frontend and Full Stack Development. He graduated from the Universidade Paulista in São Paulo, Brazil, with a Bachelor's degree in Computer Science.

---

### What is recursion 


**So, what is recursion? [MDN web docs](https://developer.mozilla.org/en-US/docs/Glossary/Recursion) explains,** *"The act of a function calling itself recursion is used to solve problems that contain smaller sub-problems. A recursive function can receive two inputs: a base case (ends recursion) or a recursive case (resumes recursion)."*

---

### When to use recursion 

To quote Dan:

> Recursion really shines when we need to iterate over a structure of **interconnected elements** (called **nodes**) which you need to process, sort or find something in it while having no previous knowledge about its size or depth - most often to perform complex operations that is likely to produce many branches during the execution.

We'll learn more on its applicability further ahead in the article.

---

### How I found Dan's recursive function 

I came across Dan's recursive function while participating in Scrimba's [JavaScriptmas](https://selftaughttxg.com/2022/12-22/JavaScriptmas-2022-Issue_1/) 24-day annual coding event. 

**The day 17 challenge, Pumpkin's Prizes, instructs us to write a function to flatten nested arrays of strings or numbers into a single array.**

By the very nature of the challenge, my initial thought was to use recursion to solve this problem. However, although I understand the concept of recursion, I need to learn how to use it in practical application.

So I was excited when I came across Dan's message in the JavaScriptmas Discord, along with [a link to his elegant solution](https://scrimba.com/scrim/co5e04457ab5f4ce8e3982c65):

![Dan Discord](img/Dan-01.png)

Initially, Dan only had a few lines of code without comments explaining what line of code does.

I reached out to Dan, complimenting his work, and I asked if he could please elaborate on his solution, as it will significantly benefit others learning to code, including myself!

Not only did he add comments to his solution, but Dan also took the time to write a whole article section in [issue 3](https://selftaughttxg.com/2022/12-22/JavaScriptmas-2022-Issue_3/) of my JavaScriptmas 2023 article series.

**The topic of recursion and the article section Dan wrote deserved a separate article, the one you are reading now.** 

---

### Understanding the function 

Before Dan shows us how to create a recursive function, let us first break down and understand all the moving parts.

**As a self-taught developer, I know what it is like to rewrite someone else's code, get it working, and feel great about it. Until you realize you don't actually understand how it works and have difficulty writing the code yourself.**

**Dan's recursive function consists of the following:**
* Reduce method
* Arrow Function
* if and else statements 
* isArray method
* Array push method
* Spread operator
* A JavaScript Array

So before we learn how to write a recursive function, let's understand each part needed to build it.

---

### JavaScript Array reduce()

The MDN web docs explain that the [reduce() method](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce) is an iterative method. It runs a "reducer" callback function over all elements in the array, in ascending-index order, and accumulates them into a single value.

```javascript
const numbers = [1,2,3,4,5];

const numbersReduced = numbers.reduce((total, currentValue) => {
  return total += currentValue;
}, 0);

console.log(numbersReduced);
15
```

In the example above, the numbers 1,2,3,4 and 5 in the numbers array reduce to the value of 15 as follows:

```javascript
1+0 = 1
2+1 = 3
3+3 = 6
4+6 = 10
5+10 = 15
```

In the reduce method, the initial value is optional. In the example above, we set the initial value to 0. 

*Understanding how to set the initial value in the reduce method is essential for Dan's recursive function; he sets the initial value to an empty array.*

---

### Arrow Function

[MDN web docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions) explains that an arrow function expression is a compact alternative to a traditional function expression, with some semantic differences and deliberate limitations in usage:
* Arrow functions don't have their own bindings to this, arguments, or super, and should not be used as methods.
* Arrow functions cannot be used as constructors. Calling them with new throws a TypeError. They also don't have access to the new.target keyword.
* Arrow functions cannot use yield within their body and cannot be created as generator functions.

*The arrow function written in Dan's recursive function is simple, so don't worry. I just want you to understand the syntax if you are unfamiliar with arrow functions.*

**To demonstrate, I wrote two simple greet functions:**
```javascript
function greetOne(name) {
  return "Hello " + name;
}

  console.log(greetOne("Michael"));
"Hello Michael"  
```
**Here is the same function rewritten as an arrow function:**
```javascript
greetTwo = name => "Hello " + name;

  console.log(greetTwo("Michael"));
"Hello Michael"  
```

**By rewriting the greet function as an arrow function, we eliminated the following syntax:**
* function
* parentheses 
* curly brackets
* return

---

### The if and else statements

The [if statement](https://www.w3schools.com/js/js_if_else.asp) specifies a code block to execute if the condition is true, and the [else statement](https://www.w3schools.com/js/js_if_else.asp) specifies a code block to execute if the condition is false.

In the greet function below, if you pass in a name as the parameter, the greeting variable incorporates the name. If you do not pass in a name as the parameter, the greeting variable equals "Hello." 

```javascript
function greet(name) {
  let greeting = "";

  if (name != null) {
    //  Condition is true
    greeting = "Hello, " + name;
  } else {
    //  Condition is false
    greeting = "Hello"
  }
  return greeting;
}  

console.log(greet("Michael"));
"Hello, Michael"

console.log(greet());
"Hello"
```

---

### IsArray

The JavaScript method [IsArray](https://www.w3schools.com/jsref/jsref_isarray.asp) checks if an object is an array. If it is an array, it returns true. If it is not an array, it returns false.    

**In this code block, isArray returns true:**
```javascript
const colors = ["Red", "Yellow", "Green", "Blue"];
let result = Array.isArray(colors);

  console.log(result);
true
```

**In this code block, isArray returns false:**
```javascript
const firstName = "Michael";

  console.log(Array.isArray(firstName));
false
```

---

### JavaScript Array push()

The [push() method](https://www.w3schools.com/jsref/jsref_push.asp) adds new items to the end of an array.

In the example below, we add the color "Orange" to the colors array using the push method.

```javascript
const colors = ["Red", "Yellow", "Green", "Blue"];
colors.push("Orange");

console.log(colors);
["Red","Yellow","Green","Blue","Orange"]
```

---

### Spread operator

**w3schools** explains that the JavaScript [spread operator (...)](https://www.w3schools.com/jsref/jsref_push.asp) allows us to quickly copy all or part of an existing array or object into another array or object.

The example below combines two number arrays into one new number array.

```javascript
const numberSetOne = [1,2,3,4,5];
const numberSetTwo = [6,7,8,9,10];

const numberSetsCombined = [...numberSetOne, ...numberSetTwo];

console.log(numberSetsCombined);
[1,2,3,4,5,6,7,8,9,10]
```

Combining both number arrays without the spread operator, we end up with a nested array (two arrays inside of the outer array), as demonstrated in the example below.

```javascript
const numberSetOne = [1,2,3,4,5];
const numberSetTwo = [6,7,8,9,10];

const numberSetOneAndNumberSetTwo = [numberSetOne, numberSetTwo];

console.log(numberSetOneAndNumberSetTwo);
[[1,2,3,4,5],[6,7,8,9,10]]
```

---

### JavaScript Arrays

MDN web docs tell us the [Array object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array), as with arrays in other programming languages, enables storing a collection of multiple items under a single variable name, and has members for performing common array operations.

As demonstrated below, we can create an array in JavaScript by declaring a variable using const and assigning it to square brackets.

```javascript
const myArray = [];
```

***Note:*** *Arrays are Not Constants. [w3schools](https://www.w3schools.com/js/js_array_const.asp) explains the keyword const is a little misleading.It does NOT define a constant array. It defines a constant reference to an array. Because of this, we can still change the elements of a constant array.*


---

### Dan's article section 

Now that we've covered all of the JavaScript used in Dan's recursive function, it's time for Dan to teach us how to create one. 

Below is Dan's article section previously featured in [JavaScriptmas 2022 - Issue 3](https://selftaughttxg.com/2022/12-22/JavaScriptmas-2022-Issue_3/) on the topic of recursion ⬇

---

First, a few notes on the [`Array.prototype.reduce()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce) method. It's not the main feature of the solution, but it can be quite a handful for beginners, so I'd rather address it, albeit briefly.

In short, the reduce method consolidates the original array into a single value - which can be virtually anything, from a `string` or `number` to a completely new array or an object. To do that, it iterates through its children and processes each of them with a custom function - the _reducer callback function_. The reducer will always receive data about the current iteration as arguments, the most important being:
1. The consolidated (or "accumulated") value that will be expanded upon, then passed on to the next iteration;
2. The current child being processed in this iteration.

**The reduce method itself, therefore, requires:**
1. The reducer callback function, as described above;
2. An initial state for the consolidated value.

*For a hands-on explanation, you can refer to this [really good video by Mosh](https://www.youtube.com/watch?v=g1C40tDP0Bk).* 

Now for the actual usage of recursion.

**Simply put, recursion is just a function that calls itself. That may summarize it, but its applicability can be a little more elusive to beginners.**

Let's start by getting something out of the way: recursion !== looping. It isn't, and if you're using it for this purpose, then you're just building confusing code.

Recursion really shines when we need to iterate over a structure of **interconnected elements** (called **nodes**) which you need to process, sort or find something in it while having no previous knowledge about its size or depth. Stuff such as [tree traversal](https://www.freecodecamp.org/news/binary-search-tree-traversal-inorder-preorder-post-order-for-bst/), [path finding](https://www.freecodecamp.org/news/dijkstras-shortest-path-algorithm-visual-introduction/) and [sorting algorithms](https://www.freecodecamp.org/news/sorting-algorithms-explained-with-examples-in-python-java-and-c/) are common scenarios where recursion is required.

**So why does it apply in our current scenario? Let's say you were to flatten an array using a `for` loop:**
```javascript
function flatten(arr) {
  const newArray = [];
  for (const item of array) {
    if (Array.isArray(item)) newArray.push(...item);
    else newArray.push(item);
  }
  return newArray;
}

const array = [1, 2, [3, 4]];

// [1, 2, 3, 4];
console.log(flatten(array));
```

**Sure, that works, but try a different, more elaborate array structure. Let's say:**
```javascript
const ohnoes = [1, 2, [3, [4, 5]]];
// [1, 2, 3, [4, 5]]
console.log(flatten(ohnoes));
```

**You probably realized that it is utterly unsustainable to nest `n` `for` loops in your code to account for `n` possible layers.**

Thinking recursively, though, is often a daunting task. Let's look at the problem a little closer:
- We want to flatten an array that is likely to have arrays as children;
- The child arrays, though, are not guaranteed to be flattened themselves.

You probably guessed that we now need to call the same function to micromanage each of the array's children as well. Considering that:
- The function should **only** ever reach its `return` expression with a _flattened_ array;
- The recursion path will eventually hit the **bottom node** of the structure - an array without child arrays - and then return it.

All of these stacking function calls are appropriately referred to as the [**call stack**](https://developer.mozilla.org/en-US/docs/Glossary/Call_stack). When our current stack finally resolves itself, we must expect the resulting array to be - ta-dah! Flat as 1 week old soda.

Now all that's left is putting together our recursive function:

```javascript
function flattenRecursive(arr) {
    // loop through the children to see which requires flattening
    return arr.reduce(
        (consolidated, child) => {
            // check if the child is an array itself
            if (Array.isArray(child)) {
                // we need to flatten the array before including its elements in
                // our consolidated array, so we call flattenRecursive recursively
                consolidated.push(...flattenRecursive(child));
            } else {
                // not an array, so just include it in the final array
                consolidated.push(child);
            }
            
            // return the consolidated array
            return consolidated;
        },
        [], // the initial, empty array
    );
}
```

**And now we get:**
```javascript
const yay = [1, 2, [3, [4, [5, [6, [[[[[7], [8, 9]]]]]]], 10]]];
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(flattenRecursive(yay));
```

And that's about it!

> Recursion is a bit too hefty a subject to tackle casually in an article like this and admittedly not something we really use often in our everyday lives as programmers. It is, however, a powerful technique when it comes into play, and definitely a must-have skill for every computer scientist. 

> *- Dan*

---

### Dan’ links

🔗 LinkedIn: [Daniel Nagaoka](https://www.linkedin.com/in/daninagaoka/) 

🔗 Link to Dan's challenge scrim: [Pumpkin's Prizes](https://scrimba.com/scrim/co5e04457ab5f4ce8e3982c65)

---

### Advance your career with a 20% discount on Scrimba Pro using this [affiliate link](https://scrimba.com/?via=MichaelLarocca)!

Become a hireable developer with Scrimba Pro! Discover a world of coding knowledge with full access to all courses, hands-on projects, and a vibrant community. You can [read my article](https://selftaughttxg.com/2021/06-21/06-07-21/) to learn more about my exceptional experiences with Scrimba and how it helps many become confident, well-prepared web developers!

###### ***Important:*** *This discount is for new accounts only. If a higher discount is currently available, it will be applied automatically.*

**How to Claim Your Discount:**
1. Click [the link](https://scrimba.com/?via=MichaelLarocca) to explore the new Scrimba 2.0.
2. Create a new account.
3. Upgrade to Pro; the 20% discount will automatically apply.

##### ***Disclosure:*** *This article contains affiliate links. I will earn a commission from any purchases made through these links at no extra cost to you. Your support helps me continue creating valuable content. Thank you!*

---

### Conclusion

Learning how to write a recursive function helps us to think recursively. Recursive thinking helps us break down complex problems into smaller ones, and gaining this skill will be essential for coding interviews. In addition, Dan tells us that recursion is a powerful technique and a must-have skill for every computer scientist.

When learning how to program, we spend a lot of time coding along with tutorials. Even though our copied code works, it is sometimes difficult to understand how it works and even more difficult to recreate on our own. 

While following these coding tutorials, taking the extra time to break down each line of code to comprehend how it works will ultimately make us better programmers.

---

**Let's connect! I'm active on [LinkedIn](https://www.linkedin.com/in/michaeljudelarocca/) and [Twitter](https://twitter.com/MikeJudeLarocca).**

---

###### *Do you now have a better understanding of recursion? Have you been asked to solve a problem recursively during a coding interview? Please share the article and comment!* 
