---
title: "How to Make a Best Dice Roll React Component"
tags:
  [
    "tutorial",
    "javascript",
    "react",
  ]
published: true
date: "2023-07-10"
---


#### HOLD

---

![TXG-95](https://github.com/MichaelLarocca/blog-michael-jude-larocca/blob/main/posts/2023/07-23/img/07-10-2023/TN-TXG-95.jpg?raw=true)

---

### Introduction

In this article, we create a React component that counts and then stores the best dice rolls in a game in local storage. To be clear, the best dice rolls are the least amount of rolls it takes to complete the game.

I intend to use this component in an upcoming React Tenzi game, along with a [best-time React component](https://selftaughttxg.com/2023/07-23/how-to-make-a-best-time-react-component/) I created.

---

***Notes:*** *For the best dice roll React component, I created a variable named ***yourAwesomeGameName***. The purpose of this variable is to differentiate the best dice rolls that are stored in local storage. For example, you will set the value of the variable ***yourAwesomeGameName*** to the name ***Tenzi*** for a Tenzi game, ***Yahtzee*** for a Yahtzee game, and ***Farkle*** for a Farkle game.*

```javascript
const yourAwesomeGameName = "yourAwesomeGameName";
```

The **saveBestDiceRoll** function saves your best dice roll for each game you use this component for, respectively.

```javascript
    function saveBestDiceRoll(bestDiceRoll) {
      localStorage.setItem(`${yourAwesomeGameName}-BestDiceRoll`, bestDiceRoll);
    }
```

Here is an example of what each **yourAwesomeGameName** variable would look like in local storage when using it in three different React apps:

```
KEY
Tenzi-BestDiceRoll
Yahtzee-BestDiceRoll
Farkle-BestDiceRoll
```

---

***Note:*** *We will be focusing on learning React code, not CSS. However, feel free to clone the project or copy the CSS code.*

---

### Start, Roll Dice, and End buttons

We use the **Start**, **Roll Dice**, and **End** buttons to simulate the actions within the game you are using the component for. When this component is integrated into your React game app, these buttons are not to be rendered. These actions will be controlled in the main JSX app and passed to the component using props.

---

### Setting up the environment

First, we need to set up our coding environment.

#### The React environment

For this project, I used the VS Code editor to create a React app with Vite. Afterward, I converted it into a GitHub repository and deployed it on Netlify.

**If you would like to learn how to set up a local React development environment, I wrote the following two beginner-friendly articles:**

* [Create a React Project, Push It to GitHub, and Deploy With Netlify, From the Command Line](https://selftaughttxg.com/2023/03-23/create-a-react-project-push-it-to-github-and-deploy-with-netlify-from-the-command-line/)
    
* [How to Create a Local React Environment with Vite](https://selftaughttxg.com/2023/03-23/how-to-create-a-local-react-environment-with-vite/)
    

---

### Building the Best Low Dice Roll component

At the top of the App JSX file, we will import the necessary hooks:

* useState
    
* useEffect
    

```javascript
import { useState, useEffect } from "react";
```

---

### Best Low Dice Roll function

#### We will be writing our code inside of a function called BestLowDiceRoll, which is located in the components folder ( which is inside of the src folder).

*The ***gameStarted***, ***gameEnded***, ***setGameStarted***, ***setGameEnded***, are props that are passed in from the main App.jsx file.*

```javascript
export default function BestLowDiceRoll({ gameStarted, gameEnded, setGameStarted, setGameEnded }) {
  
  });
```

#### **Inside the App function, we initially set up the variables.**

**Variables initialized:**

* **currentDiceRoll:** The number of dice rolls in the current game
    
* **gameEndDiceRoll:** The number of dice rolls when the game ends
    
* **gameBestDiceRoll:** The lowest number of dice rolls to complete the game
    
* **yourAwesomeGameName:** The name of the game to differentiate best dice rolls in local storage
    

```javascript
    const [currentDiceRoll, setCurrentDiceRoll] = useState(0);
    const [gameEndDiceRoll, setGameEndDiceRoll] = useState(0)
    const [gameBestDiceRoll, setGameBestDiceRoll] = useState(0);
    const yourAwesomeGameName = "yourAwesomeGameName";
```

---

### The reset dice function

The resetDice function sets the **currentDiceRoll** variable back to **0**, which means it resets the number of dice rolls in the current game.

```javascript
   function resetDice() {
        setCurrentDiceRoll(0);
    }
```

---


---

### HOLD

(WRITE ARTICLE SECTION)

---

### Here is the complete best low dice roll component

```javascript
import { useState, useEffect } from "react";

function BestLowDiceRoll({ gameStarted, gameEnded, setGameStarted, setGameEnded }) {
    const [currentDiceRoll, setCurrentDiceRoll] = useState(0);
    const [gameEndDiceRoll, setGameEndDiceRoll] = useState(0)
    const [gameBestDiceRoll, setGameBestDiceRoll] = useState(0);
    const yourAwesomeGameName = "yourAwesomeGameName";

    function resetDice() {
        setCurrentDiceRoll(0);
    }
    
    function rollDiceCounter() {
        setCurrentDiceRoll(prev => prev + 1);
    }

    function getBestDiceRoll() {
      const storedBestDiceRoll = localStorage.getItem(`${yourAwesomeGameName}-BestDiceRoll`);
      return storedBestDiceRoll ? parseInt(storedBestDiceRoll, 10) : Infinity;
    }

    function saveBestDiceRoll(bestDiceRoll) {
      localStorage.setItem(`${yourAwesomeGameName}-BestDiceRoll`, bestDiceRoll);
    }

    function updateBestDiceRoll() {
      if (gameEndDiceRoll < gameBestDiceRoll && gameEndDiceRoll !== 0) {
        setGameBestDiceRoll(gameEndDiceRoll);
        saveBestDiceRoll(gameEndDiceRoll);
      }
    }

    function startGame() {
      setGameStarted(true);
      setGameEnded(false);
    }

    function endGame() {
      if (!gameEnded) {
        setGameEnded(true);
        setGameStarted(false);
        setGameEndDiceRoll(currentDiceRoll);
        const bestDiceRoll = getBestDiceRoll();

        if (currentDiceRoll < bestDiceRoll) {
          saveBestDiceRoll(currentDiceRoll);
          setGameBestDiceRoll(currentDiceRoll);
        }
      }
    }

    useEffect(() => {
      const bestDiceRoll = getBestDiceRoll();
      setGameBestDiceRoll(bestDiceRoll);
    }, []);
  
    useEffect(() => {
      if (gameStarted) {
        resetDice();
      } else if (gameEnded) {
        updateBestDiceRoll();
      }
    }, [gameStarted, gameEnded]);

    return (
      <>
      <section className="best-low-dice-roll">
        <div className="best-low-dice-roll-inner-border">
          <div>Dice Rolls: {currentDiceRoll}</div> 
        </div>
        <div className="best-low-dice-roll-inner-border">
          <div>Best Rolls: {gameBestDiceRoll === Infinity ? '---' : gameBestDiceRoll}</div>
        </div>
      </section>

      <button onClick={startGame} disabled={gameStarted}>
        Start
      </button>
      <button onClick={rollDiceCounter} disabled={!gameStarted || gameEnded}>
        Roll Dice
      </button>
      <button onClick={endGame} disabled={!gameStarted || gameEnded}>
        End
      </button>
    </>
    )
  }

  export default BestLowDiceRoll;
```

---

### Here is the complete App.jsx file

```javascript
import { useState } from 'react'
import BestLowDiceRoll from '../src/components/BestLowDiceRoll';
import './App.css'

function App() {
  const [gameStarted, setGameStarted] = useState(false);
  const [gameEnded, setGameEnded] = useState(false);

  return (
      <BestLowDiceRoll 
        gameStarted={gameStarted}
        gameEnded={gameEnded}
        setGameStarted={setGameStarted}
        setGameEnded={setGameEnded}
      />
  )
}

export default App
```

---

### **The finished project**

**Here are the links to the finished project:**

* [GitHub repo](HOLD)
    
* [Netlify deployed project](HOLD)
    
---

![Best Low Dice Roll component](https://github.com/MichaelLarocca/blog-michael-jude-larocca/blob/main/posts/2023/07-23/img/07-10-2023/IMG_6249.jpg?raw=true)

---

### **My other related articles**
* [How to Make a Best Time React Component](https://selftaughttxg.com/2023/07-23/how-to-make-a-best-time-react-component/)

* [Understanding and Implementing Unique Keys in React](https://selftaughttxg.com/2023/05-23/understanding-and-implementing-unique-keys-in-react/)

* [Building a Stopwatch App with React and date-fns](https://selftaughttxg.com/2023/06-23/building-a-stopwatch-app-with-react-and-date-fns/)
    
* [How to Make a Countdown App with React and date-fns](https://selftaughttxg.com/2023/06-23/how-to-make-a-countdown-app-with-react-and-date-fns/)
    
* [Learn Local Storage in React: Create a Light and Dark Theme Switcher Application](https://selftaughttxg.com/2023/05-23/learn-local-storage-in-react-create-a-light-and-dark-theme-switcher-application/)
    
* [Using React useState Hook to Manage Object Props](https://selftaughttxg.com/2023/04-23/using-react-usestate-hook-to-manage-object-props/)
    
* [Creating a True/False Toggle in React with useState Hook for Beginners](https://selftaughttxg.com/2023/04-23/creating-a-true-false-toggle-in-react-with-usestate-hook-for-beginners/)
    
---

### Conclusion


---

**Let's connect! I'm active on** [**LinkedIn**](https://www.linkedin.com/in/michaeljudelarocca/) **and** [**Twitter**](https://twitter.com/MikeJudeLarocca)**.**

---

###### *? ? Please share the article and comment!*

---
