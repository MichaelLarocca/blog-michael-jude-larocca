---
title: "Ania Kubow: Building Tetris with JavaScript"
tags:
  [
    "javascript",
    "project",
    "freecodecamp",
    "tutorial",
  ]
published: true
date: "2022-03-21"
---

#### This article covers Ania Kubow's Tetris, consisting of HTML, CSS, and JavaScript, with no frameworks. The simple styling and gameplay leave plenty of room for enhancements, which I took to the max! 

---

![TN-TXG-62](img/03-21-22/TN-TXG-62.jpg)

---

### About Ania Kubow

Ania Kubow is a software developer that teaches others how to code by building retro games and projects. She is also part of the core team at [freeCodeCamp](https://www.freecodecamp.org/).

Ania was born in Poland and raised in the UAE, and graduated from Dubai College, majoring in Math, Physics, and DesignTech before moving to the UK to attend University.

---

### Building Tetris with JavaScript

Ania's [FREE YouTube course](https://www.youtube.com/watch?v=rAUn1Lom6dw&t=135s) teaches you how to make a Tetris game in JavaScript with basic functionality and styling.

**In this game of Tetris Ania covers the following JavaScript methods:** 

* addEventListener() 
* querySelector() 
* querySelectorAll() 
* keyCode() 
* Math.floor() 
* Math.random() 
* length 
* forEach() 
* splice() 
* clearInterval()
* setInterval() 
* some() 
* innerHTML() 
* every() 
* add() 
* remove() 
* contains() 

---

<iframe width="956" height="538" src="https://www.youtube.com/embed/rAUn1Lom6dw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

---

### Ania Kubow's Completed Game

Ania Kubow's Tetris JavaScript tutorial is brilliant, and I can highly recommend it to anyone interested in learning JavaScript.

Not only do you learn how to make a game to add to your portfolio, you learn fundamental JavaScript programming in a fun and engaging way!

The simplicity of the Tetris JavaScript project allows you to create a working game rather quickly and leaves plenty of room for customization, which I took to the max!

---

***Note:*** *There is a known issue of rotating the Tetrominoes at the edge of the board; half of the rotated Tetromino displays on both the left and right edges of the gameboard.*

*This issue was addressed by Ania and can be resolved by adding additional code found in her GitHub repo.*

 ***///FIX ROTATION OF TETROMINOS A THE EDGE*** 

---

![AniaKubow-Tetris](img/03-21-22/AniaKubow-Tetris.jpg)

---

### My enhancements

Like many people, I have spent countless hours playing Tetris on numerous platforms.

In an effort to pay homage and capture the essential essence of the Tetris game, I added the following enhancements:

**My Enhancements**

* Styling
* Sounds
* Line Counting
* Levels
* Bonus Points
* Status Window
* Speed Increase
* Touch Controles
* Game Restart

---

#### *Here is a link to my completed Tetris game: [tetris-laroccade](https://tetris-laroccade.netlify.app/)*

---

![Tetris-LaRocCade](img/03-21-22/Tetris-LaRocCade.jpg)

---

### Styling

For the font, I used [Redressed](https://fonts.google.com/specimen/Redressed?query=redress) from [fonts.google.com](https://fonts.google.com/).

I had some trouble with the "TETRIS" logo; I wanted to reverse the "R" in TETRIS, as seen in some of the various game ports.

I realized that the CSS **transform** was not working with an HTML `<span>` tag. I resolved this issue using an HTML `<div>` tag as follows:

```html
  <!--  Title  -->
  <div id="title">
      <div>TET</div>
      <div class="text-flip">R</div>
      <div>IS</div>
  </div>
```

```css
  .text-flip {
    transform: rotateY(180deg);
    border: none;
    color: rgb(223,0,31);
  }
```

Finally, I used [Flexbox](https://www.w3schools.com/css/css3_flexbox.asp) on the "title" to display all the letters on one line.

---

For the game's background image, I used Saint Basil's Cathedral, as seen in various versions of the Tetris game.

For the game grids, I created a semi-transparent background. I decided to use gray borders on the grid divs for visual assistance and easier gameplay for the users.
   
```css
  #grid {
    background-color: rgba(0,0,0,.5);
  }

    div {
      border: 1px solid gray;
    }
```

---

For the Tetrominoes design, I used a Google Chrome "[color picker](https://chrome.google.com/webstore/detail/colorpick-eyedropper/ohcpnigalekghcmgcdcenkpelffpdolg?hl=en)" to get the hexadecimal colors found on the following picture:

---

![Tetris-Blocks](img/03-21-22/Tetris-Blocks.jpg)

---

**Below is the code for the orange Tetromino:**

```css
  .orange {
    border-top: 5px solid #FFB56C;
    border-right: 5px solid #DB852E;
    border-bottom: 5px solid #DB852E;
    border-left: 5px solid #FFB56C;
    background-color: #FF9934;
  }
  ```

---

I came up with a desktop and mobile-friendly design for the game layout. I positioned the game information on the left side of the game grid and placed the game controller on the bottom of both.

For learning how to create design layouts in CSS, I highly recommend learning from [Kevin Powell](https://www.kevinpowell.co/). 

---

***To learn more about Kevin Powell and how he has helped me, you can read my following articles:***

* [Teacher Feature: Kevin Powell](https://selftaughttxg.com/2021/05-21/TeacherFeature-KevinPowell/)
* [What's new in CSS - With Kevin Powell](https://selftaughttxg.com/2021/06-21/06-14-21/)
* [Hacktoberfest 2021: Issue IV "A New Approach"](https://selftaughttxg.com/2021/11-21/Hacktoberfest2021Issue4/)

---

### Sounds

I created several mp3 files from this YouTube video for the game's sound effects: [Tetris - Sound Effects Collection](https://www.youtube.com/watch?v=Xm9O2iJLWxY).

For the game's music, I created an mp3 from the following YouTube video: [Original Tetris theme (Tetris Soundtrack)](https://www.youtube.com/watch?v=NmCCQxVBfyM). This music is from the Nintendo Gameboy port.

To create the mp3's I used the free, open-source, cross-platform audio software [Audacity](https://www.audacityteam.org/). 

To capture the audio playing from the YouTube videos, I configured my computer following the steps in this informative article: [How to Record Sound from Computer directly without a Microphone?](https://codegena.com/record-sound-from-computer-without-microphone/), by [Shan Eapen Koshy](https://codegena.com/author/shaneapen/).

---

### Line Counting

I created a variable to count how many rows (lines) the player completed. The total lines completed are displayed underneath the game score.

I also created a count down to the next level variable. For every ten lines completed, the game level increments. This is displayed beneath the level.

---

### Levels

I created levels for the game by creating a level variable. The level variable is incremented by one for every ten lines completed by the player.

---

### Score and Bonus Points

I came up with a simple scoring system for the game's score that incrementally rewards the player as they progress through the levels.

I created a "currentLineScore" variable set by the current level times ten.

```javascript
currentLineScore = level * 10;
```

For the bonus points, if a player completes a combo of two, three, or four lines in one move, the bonus points equal the current line score times the number of rows completed. The total bonus and the current line score are displayed in the status window.

```javascript
  if(counterRow > 1) {
    let bonusPoints = currentLineScore * counterRow;
    score += bonusPoints;
    display.textContent = `Bonus! +${bonusPoints}`;

    setTimeout(function(){
      display.textContent = `Score +${bonusPoints}`;
    }, 2500);  
    
    setTimeout(function(){
      display.textContent = ``;
    }, 5000);
  }   
```

---

### Status Window
(WRITE ARTICLE SECTION)

---

### Speed Increase
(WRITE ARTICLE SECTION)

---

### Touch Controles
(WRITE ARTICLE SECTION)

---

### Game Restart
(WRITE ARTICLE SECTION)

---

### Mobil View
(WRITE ARTICLE SECTION)

---

![Mobil View](img/03-21-22/IMG_3514.PNG)

---

### My Other freeCodeCamp Articles

* [Free Code Camp's July 2021 Summit](https://selftaughttxg.com/2021/07-21/FreeCodeCampsJuly2021Summit/)
* [Learn to code and earn a certification for free](https://selftaughttxg.com/2021/02-21/Earn_a_certification/)
* [There and Back Again](https://selftaughttxg.com/2021/01-21/ThereAndBackAgain/)
* [Teacher Feature: Dylan Israel](https://selftaughttxg.com/2020/12-20/12-06-2020_TeacherFeature-Dylan_Israel/)

---

***Note:*** *If you can financially afford to, please consider a monthly contribution to Free Code Camp. Free Code Camp accepts monthly donations of $5 to help their non-profit organization run.*

---

### Ania Kubow Links
(WRITE ARTICLE SECTION)


---

### Conclusion
(WRITE ARTICLE SECTION)


---

##### **Let's connect! I'm active on [LinkedIn](https://www.linkedin.com/in/michaeljudelarocca/) and [Twitter](https://twitter.com/MikeJudeLarocca).**

---
