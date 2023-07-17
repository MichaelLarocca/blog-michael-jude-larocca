---
title: "How to Make a Confetti React Custom Hook"
tags:
  [
    "tutorial",
    "javascript",
    "react",
  ]
published: true
date: "2023-07-17"
---

### In this week's article, we build a confetti React custom hook! You will learn state management, hooks, and the js-confetti library, equipping you with transferable skills for your original projects!

---

![TXG-96](https://github.com/MichaelLarocca/blog-michael-jude-larocca/blob/main/posts/2023/07-23/img/07-17-2023/TN-TXG-96.jpg?raw=true)

---

### Introduction

In this tutorial, you will learn how to create a confetti React custom hook that adds engaging animations to your projects while learning state management, hooks, and the js-confetti library.

In addition to implementing this hook in your own projects, it is designed to be compatible with my previous two custom components: the Best Time React component and the Best Dice Roll React component.

---

### Overview of this project

In this project, you control the best time and best dice roll values in the main App component. You then pass these values and their update functions to the custom confetti React hook, which will take care of the confetti animations.

With this method, the main App component manages the React state data, while the custom hook function handles the appropriate confetti animation to return.

---

### **Setting up the environment**

First, we need to set up our coding environment.

#### The React environment

For this project, I used the VS Code editor to create a React app with Vite. Afterward, I converted it into a GitHub repository and deployed it on Netlify.

**If you would like to learn how to set up a local React development environment, I wrote the following two beginner-friendly articles:**

* [Create a React Project, Push It to GitHub, and Deploy With Netlify, From the Command Line](https://selftaughttxg.com/2023/03-23/create-a-react-project-push-it-to-github-and-deploy-with-netlify-from-the-command-line/)
    
* [How to Create a Local React Environment with Vite](https://selftaughttxg.com/2023/03-23/how-to-create-a-local-react-environment-with-vite/)
    

#### Install the js-confetti library

To install the js-confetti library using npm, open your terminal and run:

```javascript
npm install js-confetti
```

*The* [*js-confetti library*](https://www.npmjs.com/package/js-confetti) *is a lightweight JavaScript package that allows you to add confetti animations to your web applications easily. With just a few lines of code, you can create a fun and engaging confetti effect that enhances the user experience!*

---

***Note:*** *We will be focusing on learning React code, not CSS. However, feel free to clone the project or copy the CSS code.*

---

### The confetti function

#### **We will be writing our code inside of the useConfetti function, which is located in the** `useConfetti` **file in the** `hooks` **folder ( which is inside of the** `src` **folder).**

```javascript
-src
    -hooks
        -useConfetti.jsx
```

---

### The useConfetti JSX file

#### **Building the custom** confetti React custom hook

**At the top of the useConfetti file, we will import the necessary hooks and library:**

* useRef
    
* useEffect
    

```javascript
import { useRef, useEffect } from 'react';
import JSConfetti from 'js-confetti';
```

---

### Values passed into the use confetti function

The function **useConfetti** receives an object with four properties: **bestTime**, **setBestTime**, **bestDiceRoll**, and **setBestDiceRoll**. These properties represent the best time and best dice roll values, along with their corresponding setter functions for updating the values. The **useConfetti** function deals with handling confetti animations when a new best time or best dice roll is achieved.

```javascript
function useConfetti({ bestTime, setBestTime, bestDiceRoll, setBestDiceRoll }) {

}
```

---

### The useRef hook

The **useRef** hook is a built-in React hook that allows you to create and manage a reference to a value or an element. It helps you preserve a value across renders without causing a re-render, unlike state variables managed by the useState hook. useRef is especially useful when you need to interact with DOM elements, access previous values, or store a mutable variable that persists throughout the component's lifecycle.

In this project, the **useRef** hook is used to create a reference to the JSConfetti library's instance. This reference allows the addConfetti function to be called across different renders of the component. By using useRef, the reference is maintained throughout the component's lifecycle, ensuring that the confetti effect works consistently whenever it's triggered.

```javascript
const jsConfetti = useRef(null);
```

***This code creates a reference called jsConfetti, with an initial value of null, that can be used to store and access a value or element across multiple renders without causing the component to re-render.***

---

### Return confetti logic

**To return the desired confetti based on the outcome of the game, we write three functions:**

* newBestGame
    
* newBestTime
    
* newBestDiceRoll
    

The new best time function returns **time** ⏱ confetti, the new best dice roll function returns **dice** 🎲 confetti, and the new best game function returns **trophy** 🏆 confetti.

---

### The new best time function

The **newBestTime** function sets the **bestTime** state to **true** and the **bestDiceRoll** state to **false**.

```javascript
    function newBestTime() {
        setBestTime(true);
        setBestDiceRoll(false);
    }
```

---

### The new best dice roll function

The **newBestDiceRoll** function sets the **bestDiceRoll** state to **true** and the **bestTime** state to **false**.

```javascript
    function newBestDiceRoll() {
        setBestDiceRoll(true);
        setBestTime(false);
    }
```

---

### The new best game function

The **newBestGame** function sets both the **bestTime** and **bestDiceRoll** states to **true**.

```javascript
    function newBestGame() {
        setBestTime(true);
        setBestDiceRoll(true);
    }
```

---

### The confetti function

The confetti function creates a confetti animation with different emojis based on the conditions: if both **bestTime** and **bestDiceRoll** are **true**, it shows a *trophy emoji* 🏆; if only **bestTime** is **true**, it shows a *timer emoji* ⏱; and if only **bestDiceRoll** is **true**, it shows a *dice emoji* 🎲.

*The confetti function uses an if-else statement to check the conditions. Based on the conditions, it calls the* ***jsConfetti.current.addConfetti*** *method twice, once for confetti colors and once for emojis. The* ***commonOptions*** *object contains shared properties for both confetti animations. The spread operator* ***...*** *is used to include the* ***commonOptions*** *properties in each confetti animation.*

```javascript
    function confetti() {
        const commonOptions = {
            confettiRadius: 5,
            confettiNumber: 100,
            };
        
        if (bestTime && bestDiceRoll) {
            jsConfetti.current.addConfetti({
            ...commonOptions,
            confettiColors: ['#ff3838', '#ff9d00', '#fffb00', '#48ff00', '#00ffd5', '#0090ff', '#7e00ff'],
        });
            jsConfetti.current.addConfetti({
            ...commonOptions,
            emojis: ['🏆'],
            emojiSize: 25,
        });
        } else if (bestTime) {
            jsConfetti.current.addConfetti({
            ...commonOptions,
            confettiColors: ['#ff3838', '#ff9d00', '#fffb00', '#48ff00', '#00ffd5', '#0090ff', '#7e00ff'],
        });
            jsConfetti.current.addConfetti({
            ...commonOptions,
            emojis: ['⏱'],
            emojiSize: 25,
        });
        } else if (bestDiceRoll) {
            jsConfetti.current.addConfetti({
            ...commonOptions,
            confettiColors: ['#ff3838', '#ff9d00', '#fffb00', '#48ff00', '#00ffd5', '#0090ff', '#7e00ff'],
        });
            jsConfetti.current.addConfetti({
            ...commonOptions,
            emojis: ['🎲'],
            emojiSize: 25,
        });
        }
    }
```

---

### The useEffect hook

The useEffect hook sets up a *side effect* in the component, which runs after the component renders. In this case, it initializes the **JSConfetti** instance and assigns it to **jsConfetti.current**. The empty array **\[\]**, as the second argument, ensures that the effect runs only once on the component mount and does not re-run on updates.

*Side effects are actions or operations that occur outside the scope of the component's render cycle, such as API calls, timers, event listeners, or DOM manipulations.*

```javascript
    useEffect(() => {
    jsConfetti.current = new JSConfetti();
    }, []);
```

---

### The return statement

**The return statement returns an object containing four functions:**

* confetti
    
* newBestTime
    
* newBestDiceRoll
    
* newBestGame
    

*These functions can be used by the component that calls this custom hook to trigger confetti animations and update the best time and best dice roll values.*

```javascript
return { confetti, newBestTime, newBestDiceRoll, newBestGame };
```

---

### Export the custom hook

The **export default** exports the **useConfetti** function as the default export from the module.

```javascript
export default useConfetti;
```

---

### **The completed useConfetti jsx file**

```javascript
import { useRef, useEffect } from 'react';
import JSConfetti from 'js-confetti';

function useConfetti({ bestTime, setBestTime, bestDiceRoll, setBestDiceRoll }) {
    
    const jsConfetti = useRef(null);

    function newBestTime() {
        setBestTime(true);
        setBestDiceRoll(false);
    }

    function newBestDiceRoll() {
        setBestDiceRoll(true);
        setBestTime(false);
    }

    function newBestGame() {
        setBestTime(true);
        setBestDiceRoll(true);
    }

    function confetti() {
        const commonOptions = {
            confettiRadius: 5,
            confettiNumber: 100,
            };
        
        if (bestTime && bestDiceRoll) {
            jsConfetti.current.addConfetti({
            ...commonOptions,
            confettiColors: ['#ff3838', '#ff9d00', '#fffb00', '#48ff00', '#00ffd5', '#0090ff', '#7e00ff'],
        });
            jsConfetti.current.addConfetti({
            ...commonOptions,
            emojis: ['🏆'],
            emojiSize: 25,
        });
        } else if (bestTime) {
            jsConfetti.current.addConfetti({
            ...commonOptions,
            confettiColors: ['#ff3838', '#ff9d00', '#fffb00', '#48ff00', '#00ffd5', '#0090ff', '#7e00ff'],
        });
            jsConfetti.current.addConfetti({
            ...commonOptions,
            emojis: ['⏱'],
            emojiSize: 25,
        });
        } else if (bestDiceRoll) {
            jsConfetti.current.addConfetti({
            ...commonOptions,
            confettiColors: ['#ff3838', '#ff9d00', '#fffb00', '#48ff00', '#00ffd5', '#0090ff', '#7e00ff'],
        });
            jsConfetti.current.addConfetti({
            ...commonOptions,
            emojis: ['🎲'],
            emojiSize: 25,
        });
        }
    }

    useEffect(() => {
    jsConfetti.current = new JSConfetti();
    }, []);

    return { confetti, newBestTime, newBestDiceRoll, newBestGame };
}

export default useConfetti;
```

---

### The App JSX file

**At the top of the App.jsx file, we will import the necessary hook, library, and CSS file:**

```javascript
import React, { useState } from 'react';
import useConfetti from './hooks/useConfetti';
import './App.css'
```

---

### The main App function

#### **We will be writing our code inside of the** App **function**

```javascript
function App() {

}
```

---

#### **Inside the App function, we initially set up the variables.**

The following code creates two state variables along with their setter functions:

* **bestTime**: initially set to false
    
* **bestDiceRoll**: initially set to false
    

```javascript
  const [bestTime, setBestTime] = useState(false);
  const [bestDiceRoll, setBestDiceRoll] = useState(false);
```

The next code block calls the **useConfetti** *custom hook* with an object containing state variables **bestTime** and **bestDiceRoll**, along with their *setter functions*.

**The custom hook returns an object containing the four functions we defined in the useConfetti JSX file:**

* confetti
    
* newBestTime
    
* newBestDiceRoll
    
* newBestGame
    

*These functions are then destructured and assigned to their respective variables for future use within the component.*

```javascript
const { confetti, newBestTime, newBestDiceRoll, newBestGame } = useConfetti({ bestTime, setBestTime, bestDiceRoll, setBestDiceRoll });
```

### The return statement

***Note: This whole return statement is for temporary control of the React confetti custom hook. When you incorporate it into your React project, the state variables newBestTime and newBestDiceRoll will trigger the confetti when they change.***

This return statement renders a section with the className "confetti," and inside this section, various conditional renderings occur:

1. If both **bestTime** and **bestDiceRoll** are false, it shows a message "Choose a React state, and click celebrate!".
    
2. If both **bestTime** and **bestDiceRoll** are **true**, it displays "🏆New Best Game!🏆".
    
3. If only **bestDiceRoll** is **true**, it displays "🎲New Best Dice Roll!🎲".
    
4. If only **bestTime** is **true**, it displays "⏱New Best Time!⏱".
    

**It also renders four buttons that trigger the functions newBestTime, newBestDiceRoll, newBestGame, and confetti when clicked.**

```javascript
  return (
    <section className="confetti">
    {!bestTime && !bestDiceRoll && <h1>Choose a React state, and click celebrate!</h1>} 

    {bestTime && bestDiceRoll ? (
    <h1>🏆New Best Game!🏆</h1>
    ) : bestDiceRoll ? (
    <h1>🎲New Best Dice Roll!🎲</h1>
    ) : bestTime ? (
    <h1>⏱New Best Time!⏱</h1>
) : null}

      <div>
        <button onClick={newBestTime}>newBestTime</button>
        <button onClick={newBestDiceRoll}>newBestDiceRoll</button>
        <button onClick={newBestGame}>newBestGame</button>
      </div>
        <button onClick={confetti}>Celebrate!</button>
    </section>
  );
};
```

---

### Export the App function

Finally, we export the App component making it available for other modules to import and utilize in their code.

```javascript
export default App;
```

---

### The completed App JSX file

```javascript
import React, { useState } from 'react';
import useConfetti from './hooks/useConfetti';
import './App.css'

function App() {
  const [bestTime, setBestTime] = useState(false);
  const [bestDiceRoll, setBestDiceRoll] = useState(false);
  const { confetti, newBestTime, newBestDiceRoll, newBestGame } = useConfetti({ bestTime, setBestTime, bestDiceRoll, setBestDiceRoll });

  return (
    <section className="confetti">
    {!bestTime && !bestDiceRoll && <h1>Choose a React state, and click celebrate!</h1>} 

    {bestTime && bestDiceRoll ? (
    <h1>🏆New Best Game!🏆</h1>
    ) : bestDiceRoll ? (
    <h1>🎲New Best Dice Roll!🎲</h1>
    ) : bestTime ? (
    <h1>⏱New Best Time!⏱</h1>
) : null}

      <div>
        <button onClick={newBestTime}>newBestTime</button>
        <button onClick={newBestDiceRoll}>newBestDiceRoll</button>
        <button onClick={newBestGame}>newBestGame</button>
      </div>
        <button onClick={confetti}>Celebrate!</button>
    </section>
  );
};

export default App;
```

---

### **The finished project**

**Here are the links to the finished project:**

* [GitHub repo](https://github.com/MichaelLarocca/react-useconfetti-custom-hook)
    
* [Netlify deployed project](https://react-useconfetti-custom-hook.netlify.app/)
    

---

![HOLD](https://github.com/MichaelLarocca/blog-michael-jude-larocca/blob/main/posts/2023/07-23/img/07-17-2023/ConfettiCustomHook.jpg?raw=true)

---

### **My other related articles**

* [How to Make a Best Dice Roll React Component](https://selftaughttxg.com/2023/07-23/how-to-make-a-best-dice-roll-react-component/)

* [How to Make a Best Time React Component](https://selftaughttxg.com/2023/07-23/how-to-make-a-best-time-react-component/)
 
* [Building a Stopwatch App with React and date-fns](https://selftaughttxg.com/2023/06-23/building-a-stopwatch-app-with-react-and-date-fns/)
    
* [How to Make a Countdown App with React and date-fns](https://selftaughttxg.com/2023/06-23/how-to-make-a-countdown-app-with-react-and-date-fns/)
    
* [Learn Local Storage in React: Create a Light and Dark Theme Switcher Application](https://selftaughttxg.com/2023/05-23/learn-local-storage-in-react-create-a-light-and-dark-theme-switcher-application/)
    
* [Using React useState Hook to Manage Object Props](https://selftaughttxg.com/2023/04-23/using-react-usestate-hook-to-manage-object-props/)
    
* [Creating a True/False Toggle in React with useState Hook for Beginners](https://selftaughttxg.com/2023/04-23/creating-a-true-false-toggle-in-react-with-usestate-hook-for-beginners/)
    

---

### Conclusion

In this tutorial article, you learned how to create a custom confetti React hook to incorporate into your own projects. You also acquired valuable transferable skills, such as state management, hooks, and working with a preexisting library, the js-confetti library.

You also learned how to manage the custom hook from the main App component by passing properties, which helps you organize your code and maintain a clear separation of concerns, making your React app easier to understand and maintain.

In an upcoming article, I will demonstrate how to integrate this custom confetti React hook with the custom best time component and best dice roll component I previously created. Until then, it's time to apply these newly acquired skills to your original projects and create captivating user experiences!

---

**Let's connect! I'm active on** [**LinkedIn**](https://www.linkedin.com/in/michaeljudelarocca/) **and** [**Twitter**](https://twitter.com/MikeJudeLarocca)**.**

---

###### *Are you now confident in using the confetti React custom hook and its integration with state management, hooks, and local storage? Are you ready to create engaging animations in your projects using the js-confetti library? Please share the article and comment!*

---

