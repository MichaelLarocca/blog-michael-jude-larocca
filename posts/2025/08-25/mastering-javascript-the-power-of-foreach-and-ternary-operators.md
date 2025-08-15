---
title: "Mastering JavaScript: The Power of forEach and Ternary Operators"
tags:
  [
    "javascript",
    "tutorial",
    "scrimba",
    "freecodecamp",
  ]
published: true
date: "2025-08-18"
---

#### This article explores how to effectively use JavaScript's forEach method in combination with the ternary operator, enhancing your understanding of the underlying code while writing it more efficiently!

---

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1755105031209/12a1c778-3cfd-4890-880d-0af923826cae.png align="center")

###### *Image credit: Star Wars character © Lucasfilm Ltd. & TM. All Rights Reserved. Coca-Cola can © The Coca-Cola Company. Used under fair use for educational purposes.*

---

### Introduction

Using JavaScript's [forEach](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach) method in conjunction with the [ternary](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_operator) operator can increase your coding efficiency. Learning how to integrate different methods like this will enable you to write cleaner, more efficient code, enhancing readability and functionality.

**Throughout the article, we will discuss key JavaScript concepts, including:**

* **Objects:** Understanding how to structure and utilize objects to organize data.
    
* **Arrays:** Learning how arrays can store multiple values and how to manipulate them.
    
* **forEach Method:** Discovering how to iterate over arrays efficiently using this built-in method.
    
* **Iterating and Modifying Object Arrays:** Exploring techniques to update object properties within arrays.
    
* **Ternary Operator:** Mastering this concise alternative to traditional if-else statements for decision-making.
    

---

### JavaScript Objects

An [object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object) in JavaScript is a collection of related data and functionality, organized as key-value pairs. Objects help you organize related information, making managing and accessing data in your code easier.

**The following code defines a JavaScript object named Anakin. This object contains several key-value pairs that describe his attributes:**

```javascript
const Anakin = {
  name: "Anakin Skywalker",
  ForcePath: "light",
  affiliation: "Jedi",
  homePlanet: "Tatooine",
  lightsaberColor: "blue",
  mentor: "Obi-Wan Kenobi",
  apprentice: "Ahsoka Tano",
  knownAs: "The Chosen One"
};
```

---

### JavaScript Array

A JavaScript [array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) is a special type of object used to store multiple values in a single variable. Arrays are like lists that can hold a collection of items, such as numbers, strings, or even other objects. Each item in an array has a specific position, called an index, starting from zero. This makes accessing, adding, or modifying items using their index easy.

**We can create two new Star Wars character objects, and then add them to an array as follows:**

```javascript
const characters = [Anakin, ObiWan, Dooku];
```

---

### JavaScript forEach Method

The [forEach](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach) method in JavaScript is a built-in function used to execute a specific function once for each element in an array. It's a convenient way to loop through all the items in an array without having to write a traditional [for](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration#for_statement) loop.

When you use forEach, you provide a function that will be called for each element in the array. This function can perform any operation you need, such as logging values to the console, updating elements, or performing calculations.

While iterating over the array with forEach, you can access the values of an object's properties using dot notation. Dot notation allows you to easily retrieve or update the value associated with a specific key in an object.

*We can iterate over the Star Wars characters array and console log each character*’*s* ***name***, ***ForcePath***, and ***affiliation*** *as follows:*

```javascript
characters.forEach(character => {
  console.log(`Name: ${character.name}`);
  console.log(`Force Path: ${character.ForcePath}`);
  console.log(`Affiliation: ${character.affiliation}`);
});
```

---

### Iterating and Modifying Object Arrays

Now that we have an understanding of a JavaScript object, an array, and the forEach Method: Let’s write code to iterate and modify the object arrays’ **affiliation** values based on each character's **ForcePath** value.

If the character has a value of “**light**“ for their **ForcePath**, then their **affiliation** value is **“Jedi**.**“** If the character has a value of “**dark**“ for their **ForcePath**, then their **affiliation** value is **“Sith**.**“**

```javascript
characters.forEach(character => {
  if (character.ForcePath === "dark") {
    character.affiliation = "Sith";
  }
});
```

***Now, changing Anakin’s ForcePath to dark changes his character affiliation to Sith!***

---

### Ternary Operator

The [ternary](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_operator) operator in JavaScript is a shorthand way of writing an [if-else](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else) statement. It allows you to make a quick decision between two values based on a condition. The ternary operator uses the `?` and `:` symbols and follows this basic structure:

`condition ? valueIfTrue : valueIfFalse`

Here's how it works: if the condition is true, the operator returns the value before the colon (`:`); if the condition is false, it returns the value after the colon. It's a concise way to assign values or execute expressions based on a condition, making your code shorter and often easier to read.

**We can revise the if statement code inside the forEach loop to a ternary operator for better readability and concise code:**

```javascript
characters.forEach(character => character.ForcePath === "dark" ? character.affiliation = "Sith" : character.affiliation = "Jedi");
```

---

### **CodePen Demonstration**

To see the code in action, check out the complete implementation on CodePen [**here**](https://codepen.io/Michael_Larocca/pen/azvVzgp?editors=0112). Make sure to open the console log to view the results.

---

### My Personal Use Case

As a personal project, I am working on a JavaScript Pac-Man game based on Ania Kubów’s [1-hour Pac-Man in JavaScript YouTube tutorial](https://www.youtube.com/watch?v=q2ViNbRwr5U). This tutorial was featured both on Scrimba and freeCodeCamp, and it’s a really fun way to learn JavaScript!

#### 🔗 Here is a [link](https://codepen.io/Michael_Larocca/project/full/ZvpWdE) to my JavaScript Pac-Man game, which is in progress.

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1754949308618/0535686e-7868-4553-ad77-c7d4aff0d9cd.png align="left")

**I added levels to my game. When each level is completed, I increase the speed of Pac-Man and all the ghosts.**

Following Ania’s tutorial, I created the four ghosts using a JavaScript **Ghost** class stored in a **ghosts** array. After completing each game level, I needed to update each ghost's **speed** value to achieve the desired result.

*As a quite comical glitch, as the levels progress, the ghosts' speed increases so much that the gameplay becomes unplayable; they zip by so fast that avoiding them is impossible!*

```javascript
export class Ghost {
  constructor (className, startIndex, speed, size, color, eyes) {
    this.className = className;
    this.startIndex = startIndex;
    this.speed = speed;
    this.size = size;
    this.color = color;
    this.eyes = eyes;
    this.currentIndex = startIndex;
    this.isScard = false;
    this.timerId = NaN;
  }
}

export const ghosts = [
  new Ghost ('blinky', 321, 225,`ghost-${ghostSize}`, 'ghost-red', `ghost-look-left-${eyeSize}`),
  new Ghost ('inky', 376, 275,`ghost-${ghostSize}`, 'ghost-blue', `ghost-look-up-${eyeSize}`),
  new Ghost ('pinky', 377, 250,`ghost-${ghostSize}`, 'ghost-pink', `ghost-look-down-${eyeSize}`),
  new Ghost ('clyde', 378, 300,`ghost-${ghostSize}`, 'ghost-orange', `ghost-look-right-${eyeSize}`),
];
```

**The ghosts' speeds are initially set to different values in milliseconds, which determine how quickly they move. After each level is completed, the speed of each ghost is increased by reducing the time interval by 25 milliseconds. This makes the ghosts move faster, adding to the challenge of the game as players progress through the levels.**

*Using all of the JavaScript concepts covered in this article, I wrote the following code to “cap“ each ghost's speed at 100 milliseconds, which solved the issue of the ghost moving at an unplayable rate.*

```javascript
 ghosts.forEach(ghost => ghost.speed !== 100 ? ghost.speed -= 25 : ghost.speed = ghost.speed)
```

---

### My other related articles

* [**JavaScript: Understanding the Set and Clear Interval Methods**](https://selftaughttxg.com/2025/06-25/javascript-understanding-the-set-and-clear-interval-methods/)
    
* [**Mastering JavaScript Fundamentals: Unleashing Your Framework Readiness**](https://www.htmlallthethings.com/blog-posts/mastering-javascript-fundamentals-unleashing-your-framework-readiness)
    
* [**JavaScript: How to Use the Star Wars API for Beginners**](https://selftaughttxg.com/2022/04-22/starwarsapi-01/)
    
* [**Developing a Dynamic Hamburger Menu in React: A Step-by-Step Guide**](https://selftaughttxg.com/2024/02-24/developing-a-dynamic-hamburger-menu-in-react-a-step-by-step-guide/)
    
* [**How to Build a Star Wars Language Translator in React**](https://selftaughttxg.com/2025/05-25/how-to-build-a-star-wars-language-translator-in-react/)
    

---

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1740168177634/1ff578a9-5d03-4800-9c0c-9092e4e60c4f.png align="center")

### [**Be sure to listen to the HTML All The Things Pod**](https://selftaughttxg.com/2025/05-25/how-to-build-a-star-wars-language-translator-in-react/)**cast!**

#### 📝 *I also write articles for the HTML All The Things Podcast, which you can read on their website:* [*https://www.htmlallthethings.com/*](https://www.htmlallthethings.com/)*.*

#### **Be sure to check out HTML All The Things on socials!**

* [Twitter](https://twitter.com/htmleverything)
    
* [LinkedIn](https://www.linkedin.com/company/html-all-the-things/)
    
* [TikTok](https://www.tiktok.com/@htmlallthethings)
    
* [Instagram](https://www.instagram.com/htmlallthethings/)
    

---

### Affiliate & Discount Links!

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1740168473785/c85789c9-1594-4000-aa2f-43e842f9825f.jpeg align="center")

**With CodeMonkey, learning can be all fun and games!** CodeMonkey transforms education into an engaging experience, enabling children to evolve from tech consumers to creators. Use CodeMonkey's **FREE trial** to unlock the incredible potential of young tech creators!

*With a structured learning path tailored for various age groups, kids progress from block coding to more advanced topics like data science and artificial intelligence, using languages such as CoffeeScript and Python. The platform includes features for parents and teachers to track progress, making integrating coding into home and classroom settings easy.*

Through fun games, hands-on projects, and community interaction, CodeMonkey helps young learners build teamwork skills and receive recognition for their achievements. It fosters a love for coding and prepares children for future career opportunities in an ever-evolving tech landscape.

***To learn more about CodeMonkey, you can read my detailed*** [***review article***](https://selftaughttxg.com/2025/02-25/inspiring-young-coders-how-codemonkey-turns-kids-into-tech-creators/)***!***

**Affiliate Links:**

* [Sign Up for Parents](https://codemonkey.sjv.io/c/5987452/919057/12259)
    
* [Sign Up for Teachers](https://codemonkey.sjv.io/c/5987452/919060/12259)
    

---

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1740169191630/ac8c5360-d1c5-4c85-8504-18b9c755841e.png align="center")

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

To become a better JavaScript developer, it's important to learn and understand the underlying logic of your code. This provides you with the skill to revise it using built-in methods, resulting in cleaner and more efficient code. For example, once you understand the logic and how to write a for loop, you can alternatively use JavaScript’s forEach method.

Another example of code revision is using a ternary operator instead of an if-else statement. Combining shorthand operators and built-in methods further helps you to create more concise and readable code.

Most importantly, enjoy the process of coding! I created objects featuring Star Wars characters to illustrate the concepts discussed. I then used these concepts to revise the code in my JavaScript Pac-Man game! What entertainment genres do you enjoy? Do you find coding games fun as well? Customize your learning experience to make it enjoyable and become a better developer!

---

**Let’s connect! I’m active on** [**LinkedIn**](https://www.linkedin.com/in/michaeljudelarocca/) **and** [**Twitter**](https://twitter.com/MikeJudeLarocca).

![Logo-White-Slogan](../../../src/images/Logo-White-Slogan.jpg)

---

###### *Are you now confident in using JavaScript's forEach method and ternary operators to write more efficient code? Do you have other tips for mastering these JavaScript concepts? Please share the article and comment!*

---
