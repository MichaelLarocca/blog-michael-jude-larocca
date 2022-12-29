---
title: "How to Write a Recursive Function in JavaScript for Beginners"
tags:
  [
    "javascript",
  ]
published: true
date: "2023-01-02"
---

Intro
(Write article section)

---

Reduce
(Write article section)

If else
(Write article section)

IsArray
(Write article section)

Push
(Write article section)

Spread operator
(Write article section)

---

Intro to Dan’s article
(Write article section)

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
  const array = [1, 2, [3, 4]];
  const newArray = [];
  for (const item of array) {
    if (Array.isArray(item)) newArray.push(...item);
    else newArray.push(item);
  }
  return newArray;
}

// [1, 2, 3, 4];
console.log(flatten(newArray));
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

Conclusion
(Write article section)

---

**Let's connect! I'm active on [LinkedIn](https://www.linkedin.com/in/michaeljudelarocca/) and [Twitter](https://twitter.com/MikeJudeLarocca).**

---

###### *HOLD* 