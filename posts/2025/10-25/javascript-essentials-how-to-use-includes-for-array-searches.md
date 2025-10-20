---
title: "JavaScript Essentials: How to Use .includes() for Array Searches"
tags:
  [
    "javascript",
    "tutorial",
  ]
published: true
date: "2025-10-20"
---
#### In this article, we explore JavaScript's .includes() method for searching arrays, including practical implementations in game development. You'll learn coding techniques to enhance your own projects!

---

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1760978852671/998b929e-2e5a-4a05-a78b-ad394424dfc5.png align="center")

---

### .includes()

What is .includes()? [Array.prototype.includes()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes) is a built-in JavaScript array method that checks if an array contains a specific element. It returns true if the element is found, and false otherwise.

**Syntax:**

* **element:** The value to search for.
    
* f**romIndex (optional)**: The position in the array to start searching.
    

```javascript
array.includes(element, fromIndex)
```

---

### What You Can Do With .includes()

The `.includes()` method is excellent for checking if an array contains a specific value—it even works with emojis! For a simple demonstration, here’s how I use `.includes()` in my Pac-Man project to check for particular fruits. As you can see, the apple returns `true` because it is included in the array (in fact, there are two apples), and the watermelon returns `false` because it is not in the `fruitBonus` array.

```javascript
// Example from my Pac-Man project
const fruitBonus = ['🍒','🍓','🍊','🍊','🍎','🍎','🍈','🍈','🚀','🔔','🔑'];

console.log(fruitBonus.includes('🍎')); // true
console.log(fruitBonus.includes('🍉')); // false
```

---

⚠ **Important:** There are limitations to using `.includes()`. While it works perfectly for primitive values like numbers, strings, and emojis, it does not perform deep checks for nested arrays or objects. Using `.includes()` with arrays or objects will only return `true` if the reference matches exactly—not if the contents are the same. You’ll need a different approach for deep comparisons, such as using `.some()` with a custom comparison function.

---

### Putting .includes() to Good Use

I successfully used `.includes()` to improve ghost movement in my JavaScript Pac-Man game! I created an array containing all the intersection indices on the game board, and used `.includes()` to detect when a ghost enters an intersection. This allows the ghost to change direction at the correct spots, just like in the original arcade game.

**The intersectionIndices array:**

```javascript
export const intersectionIndices = [
    34, 49,
    141, 146, 149, 152, 155, 158, 161, 166,
    230, 245,
    320, 323,
    377, 378,
    398, 401, 410, 413,
    485, 494,
    566, 569, 578, 581,
    650, 653, 656, 659, 662, 665,
    731, 752,
    824, 827
];
```

---

### Adding the Intersections

During board construction, squares whose index is listed in `intersectionIndices` are assigned the 'intersection' class. This visually and logically marks those squares as intersections for game logic.

```javascript

export function buildTheBoard() {
  for(let i = 0; i < 868; i++) {
    let div = document.createElement("div");
    gameGrid.appendChild(div);  
    squares.push(div);
    squares[i].classList.add('game-board-square');  

    if (intersectionIndices.includes(i)) {
      squares[i].classList.add('intersection');
    }    
  }    
}
```

Below, you can see every intersection included in the `intersectionIndices` array, courtesy of the ‘intersection‘ class:

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1760563986547/b889272b-569e-4063-8b6c-f2a7e635e9f1.png align="center")

---

### Helper Intersection function

Here is a simple helper function, used for game logic, that takes an index as a parameter, uses `.includes()`, and returns `true` if the specified index is an intersection:

```javascript
// Helper function to check if a given index is an intersection
function isIntersection(index) {
  return intersectionIndices.includes(index);
}
```

---

### Improved Ghost Movement using .includes()

Now that I have a function that detects intersections, I can use it to see if a ghost’s current index includes one. Once a ghost enters an intersection, I trigger a direction change—making the ghosts smarter!

**How It Works: Each ghost moves automatically on a timer. At every step, the code checks if the ghost is on an intersection square (using isIntersection and .includes()). If the ghost is at an intersection:**

* The code figures out which directions are possible (not blocked by walls or other ghosts).
    
* It avoids making the ghost immediately turn around (no U-turns unless stuck).
    
* It randomly picks one of the valid directions and updates the ghost’s movement.
    

```javascript
// Ghost movement logic uses isIntersection to trigger intersection behavior
export function moveGhost(ghost) {
  const directions = [-1, 1, 28, -28];
  let direction = ghost.direction || directions[Math.floor(Math.random() * directions.length)];
  
  ghost.timerId = setInterval(function() {
    // ...existing movement logic...

    // At intersections, choose a new direction
    if (isIntersection(ghost.currentIndex)) {
      const reverseDir = ghost.previousIndex - ghost.currentIndex;
      let validDirections = directions.filter(dir => {
        if (dir === reverseDir) return false;
        const nextIndex = ghost.currentIndex + dir;
        return (
          !squares[nextIndex].classList.contains('ghost') &&
          !squares[nextIndex].classList.contains('lairText') &&
          !squares[nextIndex].classList.contains('wall') &&
          !(dir === 28 && squares[nextIndex].classList.contains('lairWall')) &&
          (nextIndex !== 375) &&
          (nextIndex !== 380)
        );
      });

      if (validDirections.length === 0) {
        validDirections = [reverseDir];
      }
      
      if (validDirections.length > 0) {
        direction = validDirections[Math.floor(Math.random() * validDirections.length)];
        ghost.direction = direction;
      }
    }

    // ...rest of movement logic...
  }, ghost.speed);
}
```

***By checking for intersections with JavaScript’s .includes(), I ensure ghosts only change direction at the right spots. This brings my project closer to the original arcade experience and creates more authentic, challenging gameplay!***

---

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1760980644997/fe2c9dee-0b78-4e55-8d1c-92302a40bf34.png align="center")

### JS Pac-Man Project Links:

🔗 [Link to the deployed project](https://pac-man-javascript-laroccade.netlify.app/)

🔗 [Link to GitHub](https://github.com/MichaelLarocca/pac-man-javascript-laroccade)

🔗 [Link to the sprint board](https://github.com/users/MichaelLarocca/projects/1)

##### ***Note:*** *Since I’m following team development practices and pushing updates to the develop branch, some of the changes I describe in this article may not be live in the deployed version of the game yet.*

---

### My other related articles

* [JavaScript: Array Iteration and DOM Manipulation in Game Development](https://selftaughttxg.com/2025/10-25/javascript-array-iteration-and-dom-manipulation-in-game-development/)
    
* [JavaScript Game Timing: How Independent Intervals Can Cause Missed Collisions](https://selftaughttxg.com/2025/10-25/javascript-game-timing-how-independent-intervals-can-cause-missed-collisions/)
    
* [What Is “State” in JavaScript, and How to Use It in Your Projects](https://selftaughttxg.com/2025/09-25/what-is-state-in-javascript-and-how-to-use-it-in-your-projects/)
    
* [Mastering JavaScript: The Power of forEach and Ternary Operators](https://selftaughttxg.com/2025/08-25/mastering-javascript-the-power-of-foreach-and-ternary-operators/)
    
* [JavaScript: Understanding the Set and Clear Interval Methods](https://selftaughttxg.com/2025/06-25/javascript-understanding-the-set-and-clear-interval-methods/)
    

---

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1740168177634/1ff578a9-5d03-4800-9c0c-9092e4e60c4f.png align="center")

### **Be sure to listen to the HTML All The Things Podcast!**

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

The JavaScript `.includes()` method checks whether an array contains a specific element, returning `true` if it does and `false` if it doesn't. It’s great for verifying if an array has a particular value, but it does have limitations. While it works well for simple values like numbers, strings, or (in my project’s case) emojis, it doesn’t check inside nested arrays or objects.

By utilizing `.includes()` in the function that controls the ghosts in my Pac-Man game, I can determine when a ghost’s current index enters an intersection and trigger a direction change. This makes the ghosts smarter and brings my project closer to the original arcade experience!

Just as I used `.includes()` with an array of intersections to improve game logic, you can also find creative ways to combine this method with your own data structures. Explore how `.includes()` can simplify checks and enhance features in your projects—experiment and see what smart solutions you can build!

---

**Let’s connect! I’m active on** [**LinkedIn**](https://www.linkedin.com/in/michaeljudelarocca/) **and** [**Twitter**](https://twitter.com/MikeJudeLarocca).

![](https://miro.medium.com/v2/resize:fit:700/0*WkkMi-AgjubeODf8.jpeg align="left")

---

###### *Do you now feel confident using JavaScript's .includes() for array searches? Have you applied similar techniques in your projects? Please share the article and comment*

---
