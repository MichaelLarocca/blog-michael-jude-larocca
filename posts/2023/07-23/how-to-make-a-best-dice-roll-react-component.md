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

#### In this article, we build a React best dice roll game component. From your main App file, you will learn how to pass game start and end props to control it and gain skills for your original projects!

---

![TXG-95](img/07-10-2023/TN-TXG-95.jpg)

---

### Introduction

In this article, we create a React component that counts and then stores the best dice rolls in a game in local storage. To be clear, the best dice rolls are the least amount of rolls it takes to complete the game.

I intend to use this component in an upcoming React Tenzi game, along with a [best-time React component](https://selftaughttxg.com/2023/07-23/how-to-make-a-best-time-react-component/) I created.

---

**Notes:** For the best dice roll React component, I created a variable named **yourAwesomeGameName**. The purpose of this variable is to differentiate the best dice rolls that are stored in local storage. For example, you will set the value of the variable **yourAwesomeGameName** to the name **Tenzi** for a Tenzi game, **Yahtzee** for a Yahtzee game, and **Farkle** for a Farkle game.

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
  function BestLowDiceRoll({ gameStarted, gameEnded, setGameStarted, setGameEnded }) {
  
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

### The roll dice counter function

The **rollDiceCounter** function increases the **currentDiceRoll** by 1 each time it's called, updating the number of dice rolls in the current game.

```javascript
    function rollDiceCounter() {
        setCurrentDiceRoll(prev => prev + 1);
    }
```

---

### The get best dice roll function

The **getBestDiceRoll** function retrieves the best dice roll (lowest number of rolls to complete the game) from local storage for the specified game and returns it as an integer. If no best dice roll is stored, it returns Infinity.

```javascript
    function getBestDiceRoll() {
      const storedBestDiceRoll = localStorage.getItem(`${yourAwesomeGameName}-BestDiceRoll`);
      return storedBestDiceRoll ? parseInt(storedBestDiceRoll, 10) : Infinity;
    }
```

---

### The save best dice roll function

The **saveBestDiceRoll** function saves the best dice roll (lowest number of rolls to complete the game) to local storage for the specified game.

```javascript
    function saveBestDiceRoll(bestDiceRoll) {
      localStorage.setItem(`${yourAwesomeGameName}-BestDiceRoll`, bestDiceRoll);
    }
```

---

### The update best dice roll function

The **updateBestDiceRoll** function compares the **gameEndDiceRoll** with the current **gameBestDiceRoll**. If the **gameEndDiceRoll** is less than the **gameBestDiceRoll** and not equal to **0**, it updates the **gameBestDiceRoll** state and saves it to local storage using the **saveBestDiceRoll** function.

```javascript
    function updateBestDiceRoll() {
      if (gameEndDiceRoll < gameBestDiceRoll && gameEndDiceRoll !== 0) {
        setGameBestDiceRoll(gameEndDiceRoll);
        saveBestDiceRoll(gameEndDiceRoll);
      }
    }
```

---

### The start game function

The **startGame** function sets the **gameStarted** state to true and the **gameEnded** state to false, indicating that a new game has begun.

```javascript
    function startGame() {
      setGameStarted(true);
      setGameEnded(false);
    }
```

---

### The end game function

The **endGame** function sets the **gameEnded** state to true and **gameStarted** state to false, indicating that the game has ended. It then updates the **gameEndDiceRoll** state with the **currentDiceRoll** value. The function checks if the **currentDiceRoll** is less than the **bestDiceRoll**, and if so, saves the **currentDiceRoll** as the new **bestDiceRoll** in local storage and updates the **gameBestDiceRoll** state.

```javascript
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
```

---

### The useEffect Hooks

This useEffect Hook retrieves the best dice roll from local storage when the component mounts and sets the **gameBestDiceRoll** state with that value. The empty dependency array ensures this effect runs only once.

```javascript
    useEffect(() => {
      const bestDiceRoll = getBestDiceRoll();
      setGameBestDiceRoll(bestDiceRoll);
    }, []);
```

This useEffect Hook listens for changes in the **gameStarted** and **gameEnded** state variables. If **gameStarted** becomes true, it calls the **resetDice** function to reset the **currentDiceRoll** to **0**. If **gameEnded** becomes true, it calls the **updateBestDiceRoll** function to compare and update the best dice roll if the current game's dice roll count is lower.

```javascript
    useEffect(() => {
      if (gameStarted) {
        resetDice();
      } else if (gameEnded) {
        updateBestDiceRoll();
      }
    }, [gameStarted, gameEnded]);
```

---

### Render the Component

This rendered element displays the **currentDiceRoll** and **gameBestDiceRoll** values in a section, and three buttons (Start, Roll Dice, and End) to control the game flow.

When the game starts, the **currentDiceRoll** is reset to **0**. The Roll Dice button increments the **currentDiceRoll** count, and the *End* button compares and updates the **gameBestDiceRoll** if the current game's dice roll count is lower. The *Start* and *Roll* Dice buttons are disabled when the game is not active, and the *End* button is disabled when the game is active or not yet started.

```javascript
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
```

---

### Export the best dice roll React component

Finally, we export the best dice roll React component so that we can import it into the App.jsx file.

```javascript
export default BestLowDiceRoll;
```

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

* [GitHub repo](https://github.com/MichaelLarocca/react-best-low-dice-roll-component)
    
* [Netlify deployed project](https://react-best-low-dice-roll-component.netlify.app/)
    
---

![Best Low Dice Roll component](img/07-10-2023/IMG_6249.jpg)

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

In this article, we learned how to create a "best low-roll" dice React component that you can use in your projects. By importing this React component from the components folder into your main App file, you are able to control it by passing game start and end props.

By using local storage, you can save the user's best dice roll for multiple React game projects by utilizing the "yourAwesomeGameName" variable, which distinguishes each one saved in local storage.

We also created various functions and learned how to use the useState and useEffect React hooks, as well as how to render the component. All of these are essential skills needed for React development!

Now it's time to roll the dice! Enjoy enhancing your React projects by incorporating this component and creating your own unique components using the newly acquired React skills you've gained!

---

**Let's connect! I'm active on** [**LinkedIn**](https://www.linkedin.com/in/michaeljudelarocca/) **and** [**Twitter**](https://twitter.com/MikeJudeLarocca)**.**

---

###### *Are you now skilled in creating a "best low-roll" dice React component for your projects? Have you created similar components using useState and useEffect hooks in your React development? Please share the article and comment!*

---
