---
title: "Understanding and Implementing Unique Keys in React"
tags:
  [
    "tutorial",
    "javascript",
    "react",
  ]
published: true
date: "2023-05-22"
---

#### This article unravels the mystery behind the "unique key" warning message often appearing in React projects. It discusses its importance and demonstrates how to add and create unique keys effectively!

---

![TN-TXG-89](img/05-22-2023/TN-TXG-89.png)

---

### Introduction

While learning React and creating projects, I keep running into the following warning message pertaining to unique keys: **Warning: Each child in a list should have a unique “key” prop.**

To address this issue, I researched the [React docs](https://react.dev/learn/rendering-lists#keeping-list-items-in-order-with-key) to learn more about it. In this article, I cover what this warning means, the importance of unique keys, and how to add and create them.

---

### What this warning means

When creating a list in your React project, React requires a key value for each item that uniquely identifies it among other items in that array.

If you do not provide a unique key value for each React list item, your project will still work! So what's the problem? Let's now take a closer look.

---

### The importance of unique keys

React uses the unique key value of each list item to keep track of it. **If you neglect to add them, React uses the index value of each item as a default.** Although this sounds like a logical solution, the React docs explain that this can lead to performance issues and confusing bugs.

---

### How to add and create unique keys

#### Add a unique key

First, let's see the React syntax for adding a key:

```xml
<li key={person.id}>...</li>
```

For each list item, assign a variable to the "key" attribute. In this example from the React documentation, an object array containing five people is iterated over, with each person having a unique numerical ID ranging from 0 to 5.

*In a recent project that I created, I retrieved data from the [Star Wars API](https://selftaughttxg.com/2023/05-23/react-how-to-use-the-star-wars-api-for-beginners/) and rendered planet, starship, and vehicle card components. Surprisingly, the data does not include an "ID" key. So I decided to use the "name" value as the unique “key” prop, and it works fine.*

---

***Tip:*** *JSX elements directly inside a map() call always need keys!*

---

#### Create a unique key

So, when would you need to create a unique key? I believe a good example of a use case would be for a "to-do list."

With a to-do list, you will have a varying number of list items and most likely include the ability to rearrange the items and delete them in no particular order.

To create a unique key, the React documentation recommends using the UUID library, which can be easily installed in your projects using the Node Package Manager.

**The UUID** [**quickstart**](https://www.npmjs.com/package/uuid) **provides the following instructions:**

#### Install

```javascript
npm install uuid
```

#### Create a UUID

```javascript
import { v4 as uuidv4 } from 'uuid';
uuidv4(); // ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'
```

**Here is an example of how to set UUID key values to list items in a React project:**

```javascript
import React from 'react';
import { v4 as uuidv4 } from 'uuid';

const ListWithUUIDKeys = ({ items }) => {
  return (
    <ul>
      {items.map(item => (
        <li key={uuidv4()}>{item}</li>
      ))}
    </ul>
  );
};
```

---

### **Rules of keys**

The key values must be unique among siblings, but you can use the same keys for JSX nodes in different arrays.

For example, if you create a React pizza app, you can create UUID codes for the toppings. Suppose the UUID code for pepperoni is 123; you can use it throughout your project, as each individual pizza would be in separate arrays. However, in this example, you cannot use the same topping twice on a single pizza.

Also, the UUID value must remain constant, so avoid assigning it in a way that would cause regeneration, such as using a random number function. This is why we use a React library like UUID. The syntax **key={uuidv4()}** merely generates a unique identifier upon creating the element, and it remains the same throughout the component's lifecycle.

---

### My other related React articles

* [How to Create a Local React Environment with Vite](https://selftaughttxg.com/2023/03-23/how-to-create-a-local-react-environment-with-vite/)
    
* [Create a React Project, Push It to GitHub, and Deploy With Netlify, From the Command Line](https://selftaughttxg.com/2023/03-23/create-a-react-project-push-it-to-github-and-deploy-with-netlify-from-the-command-line/)
    

---

### Conclusion

Assigning unique keys to list elements is essential for maintaining the performance and stability of React applications. They enable React to track a component's life cycle effectively.

Unique keys in React can be assigned manually, chosen from an array, generated using a library like UUID, or created by combining existing data with a unique identifier.

By understanding the importance of unique keys and implementing them appropriately, you can create more reliable and responsive user interfaces for your applications.

---

**Let's connect! I'm active on** [**LinkedIn**](https://www.linkedin.com/in/michaeljudelarocca/) **and** [**Twitter**](https://twitter.com/MikeJudeLarocca)**.**

---

###### ***Are you now well-versed in understanding and implementing unique keys in React? Have you discovered any other useful tips for managing keys in your projects? Please share the article and comment***