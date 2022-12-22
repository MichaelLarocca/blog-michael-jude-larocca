---
title: "JavaScriptmas 2022 - Issue 4"
tags:
  [
    "scrimba",
    "javascript",
  ]
published: true
date: "2022-12-26"
---

#### The post-JavaScriptmas 2022 post! This article concludes Scrimba's annual 24-day holiday event! I cover the remaining challenges with detailed solutions, more community highlights, and the Livestream!

(WRITE ARTICLE SECTION)

---

![TN-TXG-68](img/12-26-2022/TN-TXG-68.png) 

---

HOLD
(WRITE ARTICLE SECTION)

---

### Community highlights ⬇
(WRITE ARTICLE SECTION)

---

### ❄ Community highlights list ❄
| Highlight |      Name    | Scrim |
| ------------- | :-----------: | ------------- |
| 1  | [Gina Russo](https://www.linkedin.com/in/gina-p-russo/) | [Panic function](https://scrimba.com/scrim/cJPD3Lu2?pl=p67LBHv) |
| 2  | [Michaella Rodriguez](https://www.linkedin.com/in/michaella-rodriguez/) | [Whispering function](https://scrimba.com/scrim/coc924780a45744007a4c1c66) |
| 3  | [Matt](https://twitter.com/mattemmmmm) | [Panic function ](https://scrimba.com/scrim/co2884c13af5c29b1f9c396d7) |
| 4  | [Jolene Kearse](https://twitter.com/FromJolene) | [Taco Tray](https://scrimba.com/scrim/cob664c889972afe30dc69916) |
| 5  | Daniel Beck Rose | [Taco Tray](https://scrimba.com/scrim/coea541eeafbc701b1b7c607f) |
| 6  | [Dheeraj Purohit](https://twitter.com/the_indianyoga) | [Alternating Caps ](https://scrimba.com/learn/javascriptmas/fork-of-alternating-caps-dheeraj-co3764a0d8f0b3f9fd34cb1a1) |
| 7  | [Daniel Nagaoka](https://www.linkedin.com/in/daninagaoka/) | [Pumpkin's Prizes](https://scrimba.com/scrim/co5e04457ab5f4ce8e3982c65) |
| 8  | Carla | [Emojify](https://scrimba.com/learn/javascriptmas/fork-of-emojify-co1544d709da17c8e24fd6dcc) |
| 9  | [Zarau baidu](https://twitter.com/Zarau47902847) | [Panic function ](https://zeerau.hashnode.dev/scrimba-javascriptmas-challenge) |
| 10 | [HOLD]() | |
| 11 | [HOLD]() | |
| 12 | [HOLD]() | |

---

### Scrimba JavaScriptmas Grand Finale

<iframe width="956" height="538" src="https://www.youtube.com/embed/--ujdY7Qdgk" title="Scrimba JavaScriptmas Grand Finale" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

---

### Announcing the winners
(WRITE ARTICLE SECTION)

---

### My JavaScript code challenge solutions ⬇
(WRITE ARTICLE SECTION)

---

### Day 19 challenge
#### Century From Year

---

### Day 20 challenge
#### Find Free Podcasts

---

### Day 21 challenge
#### Definitely Not FizzBuzz

---

### Day 22 challenge
#### Ready Tables

*- Topic: Return a Function*
*Our restaurant has 20 tables and the staff serves 2 tables at a time. They need to know which tables are ready to serve. Let's fix this with what we learned about returning a function inside of another function.*

1. Create a function called displayTables.
2. displayTables should map over the array of ready tables 
returned from getReadyTables to generate the html we 
need to render our display for the staff. One div should 
be generated for each table value. Here is an example: 
`<div class="table">TABLE VALUE HERE</div>`. 
3. Remember to remove the commas after applying map()
4. Fetch the tables <section> from the DOM 
5. Set the innerHTML content of the tables <section> 
to the displayTables function call.

**This challenge provides all the HTML & CSS; we just need to write the JavaScript. We will write a new function called displayTables that calls the provided function getReadyTables to solve this problem.**

**Inside the displayTables function, we will write three variables:**
* **tables** to fetch the HTML tables `<section>` from the DOM 
* **readyTables** to call the provided function
* **outPut** to set the innerHTML content of the tables

```javascript
function displayTables() {
    const tables = document.getElementById("tables");
    const readyTables = getReadyTables();
    let outPut = ``;
}
```

As instructed, we will use the JavaScript [map()](https://www.w3schools.com/jsref/jsref_map.asp) method to loop over the ready tables returned from getReadyTables function.

While iterating over the readyTables array, we add an HTML div element for every item ( table ) in the array, and add it to the outPut variable as follows: 
```javascript
    readyTables.map(tabel => {
        outPut += `<div class="table">${tabel}</div>`;
    });
```

We solve the challenge by returning the outPut variable.

Here is the completed function:
```javascript
function displayTables() {
    const tables = document.getElementById("tables");
    const readyTables = getReadyTables();
    let outPut = ``;

    readyTables.map(tabel => {
        outPut += `<div class="table">${tabel}</div>`;
    });
    
    tables.innerHTML = outPut;
}
```

🔗 [My solution for day 22](https://scrimba.com/scrim/cof064557b12f601700e24091)

---

### Day 23 challenge
#### HOLD

---

### Day 24 challenge
#### HOLD

---

### My JavaScriptmas Submissions 💻

**Below is my list of each day's completed JavaScriptmas challenges. ⬇**

*I hope that "**Scrimba Claus**" checks it twice!* 🎄

---

![Christmas](img/12-26-2022/Christmas-Computer-2.png)
###### *Pixabay: Illustration by Mohamed Hassan* 

---

### ❄ My JavaScriptmas submissions ❄
| Date          |      Scrim    |
| ------------- | :-----------: |
| 12/01/2022    | [Panic function](https://scrimba.com/scrim/co9a34c2898498bcea9f6ecd6) | 
| 12/02/2022    | [Totally Private Data Farm](https://scrimba.com/scrim/coc5544d981fd75aeb4ef0b50) |
| 12/03/2022    | [Favorite Foods](https://scrimba.com/scrim/cob19441da8d65e3f62055ed0) |
| 12/04/2022    | [Whispering function ](https://scrimba.com/scrim/co41d48089c3b9230ecf9ca3a) |
| 12/05/2022    | [Candy Sale](https://scrimba.com/scrim/co6d84464bcc4a8a9ea71fb4b) |
| 12/06/2022    | [Taco Tray](https://scrimba.com/scrim/coc8e45a187d6f095ff231931) |
| 12/07/2022    | [Alternating Caps](https://scrimba.com/scrim/codc84e3689c8014085ccdde2) |
| 12/08/2022    | [Valid Time](https://scrimba.com/scrim/co6304bd2ba53d34a83486cee) |
| 12/09/2022    | [toTitleCase](https://scrimba.com/scrim/co660469dadaf9bee14baf739) |
| 12/10/2022    | [Sort by length](https://scrimba.com/scrim/cofd24b83981281d36e1e8b8d) |
| 12/11/2022    | [Decode an Alien Message](https://scrimba.com/scrim/cob4e48959616f7a6f04ab267) |
| 12/12/2022    | [Breakfast Menu](https://scrimba.com/scrim/coe6d404f9ded6ede77611415) |
| 12/13/2022    | [Emojify](https://scrimba.com/scrim/co78b48fcaa8ee36684bb3559) |
| 12/14/2022    | [Count Vowel Consonant](https://scrimba.com/scrim/co4c54238bbff17b8c7f50a52) |
| 12/15/2022    | [Palindromes](https://scrimba.com/scrim/cod394a7c91f7987142755176) |
| 12/16/2022    | [Insert Dashes](https://scrimba.com/scrim/co63a4e4c82106e6cef1a20c7) |
| 12/17/2022    | [Pumpkin's Prizes](https://scrimba.com/scrim/coacd4756b7fa2610ca92b5f6) |
| 12/18/2022    | [Candies](https://scrimba.com/scrim/co5c04fc7b969ba7c7980ace6) |
| 12/19/2022    | [HOLD]() |
| 12/20/2022    | [HOLD]() |
| 12/21/2022    | [HOLD]() |
| 12/22/2022    | [HOLD]() |
| 12/23/2022    | [HOLD]() |
| 12/24/2022    | [HOLD]() |

---

#### *If you would like to learn more about my journey with Scrimba and how learning with them may help you, you can read my article: [How Scrimba is helping me and many others to become confident, well-prepared web developers](https://selftaughttxg.com/2021/06-21/06-07-21/)*

---

**I continue to have wonderful experiences with Scrimba, and I highly recommend learning with them! You can read my full [Scrimba review](https://selftaughttxg.com/2020/12-20/Review-Scrimba/) on my 12/13/2020 post.**

![Per Harald Borgen Quote](img/PerHaraldBorgen-Quote.png)

#### *"That&#39;s one of the best Scrimba reviews I&#39;ve ever read, <a href="https://twitter.com/MikeJudeLarocca?ref_src=twsrc%5Etfw">@MikeJudeLarocca</a>. Thank you! 🙏 "*
###### &mdash; Per Harald Borgen, CEO of Scrimba <a href="https://twitter.com/perborgen/status/1338462544143540227?ref_src=twsrc%5Etfw">December 14, 2020</a></blockquote>

---

### Conclusion
(WRITE ARTICLE SECTION)


---

**Let's connect! I'm active on [LinkedIn](https://www.linkedin.com/in/michaeljudelarocca/) and [Twitter](https://twitter.com/MikeJudeLarocca).**

---

###### *HOLD* 

---