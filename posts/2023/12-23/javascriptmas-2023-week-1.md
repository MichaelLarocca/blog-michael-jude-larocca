---
title: "JavaScriptmas 2023 - Week 1"
tags:
  [
    "scrimba",
    "tutorial",
    "javascript",
    "coupon",
  ]
published: true
date: "2023-12-04"
---
#### Tis the season! JavaScriptmas is here again! JavaScriptmas is a FREE annual festive coding event hosted by the online coding school Scrimba, consisting of 24 daily coding challenges, prizes, and more!

---

![TN-TXG-104](img/12-04-2023/TN-TXG-104.png)

---

### JavaScriptmas 2023

#### **What is JavaScriptmas?**

JavaScriptmas is a **FREE** annual event comprising 24 coding challenges hosted by the online coding school [Scrimba](https://scrimba.com/). Most of the coding challenges are JavaScript, but this year, there will be a few CSS challenges, and some using AI tools! 🎄

#### **What level of coder do you need to be to participate?**

Even if you are starting to learn JavaScript, you can participate. For hints, you can tap into the community, and of course, you can always use Google to help you get to your solution. There will also be Discord channels for the challenges, as well as for FAQs. You can also check out the topic in [Scrimba's forum](https://forum.scrimba.com/). 💻

#### **JavaScriptmas prize rules**

Each day, you can complete the challenge by midnight UTC, and share your VALID/working solution on Twitter/X for a chance to win a prize! (You can easily post your submission via the share solution button on your Scrim). The prizes consist of 24 Annual Scrimba Pro subscriptions worth $200 and 1 grand prize winner awarded a Mackbook Air M2 worth $1,100! All winners will be announced during the JavaScriptmas YouTube Livestream event on December 24th. 🎁

In addition to prizes, be on the lookout for savings with discount prices on their paid courses! If you're interested in taking a paid course from Scrimba, be sure to use the discount code provided: [https://scrimba.com/pricing?coupon=Michael-Larocca-Discount-2023#join](https://scrimba.com/pricing?coupon=Michael-Larocca-Discount-2023#join). (Valid for an additional 10% off semester and annual plans. Expires on July 31st, 2024) 💸

###### ***Note:*** *Prizes are limited to one per person*

#### **Community highlights**

In the spirit of the festive holiday season, I enjoy featuring others' works in the community highlights section of my JavaScriptmas articles! I will be searching X/Twitter, LinkedIn, and the Scrimba Discord channel for "outstanding" submissions by fellow participants to feature! 🎉

#### **My solutions**

Throughout the JavaScriptmas event, I will participate in all 24 coding challenges and document my detailed solutions! 💻

---

### **Community highlights ⬇**

---

#### **Thea (@highflyer910)**

![Thea](img/12-04-2023/Thea.png)

Thea solved the day 1 challenge Countdown to Christmas challenge in style! She included a festive font and an animated snowing background! With the included Christmas tree emoji, the overall effect reminds me of the famous Charlie Brown Christmas special! Well done, Thea!

[***🔗 Link to the scrim***](https://scrimba.com/scrim/co19f4b00bef2185ecae47e7e)

---

#### **HOLD**

!\[\]()

(WRITE ARTICLE SECTION)

[***🔗 Link to the scrim***](HOLD)

---

#### **HOLD**

!\[\]()

(WRITE ARTICLE SECTION)

[***🔗 Link to the scrim***](HOLD)

---

### **My coding solutions ⬇**

---

### **Day 1 :** Countdown to Christmas

**Task:**

* Get today's date (you only need the day).
    
* Calculate remaining days.
    
* Display remaining days in countdownDisplay.
    

![DAY-01](img/12-04-2023/DAY-01.png)

***🔗*** [***My solution for day 1***](https://scrimba.com/scrim/co80c4e67af8077afdabe0297)

**The** `renderCountdown` **function I wrote calculates the number of days left until Christmas and displays the result in an HTML element with the ID "countdown-display."**

**Steps:**

1. Create a `today` variable, which is the current date and time.
    
2. Extract the current year from `today` and store it in the `currentYear` variable.
    
3. Create a `christmasDay` variable, which is a new Date object representing Christmas Day (December 25) of the current year.
    
4. Calculate the difference between `christmasDay` and `today` in milliseconds, then divide the result by the number of milliseconds in a day (1000 \* 60 \* 60 \* 24) to get the number of days left. The result is rounded up using `Math.ceil()` to ensure it's a whole number.
    
5. Select the HTML element with the ID "countdown-display" and update its innerHTML to display the `daysLeft` value.
    

*The goal is to get the difference between Christmas Day and today in milliseconds, convert it to days, and round up to get a whole number of days left until Christmas.*

```javascript
const countdownDisplay = document.getElementById("countdown-display")

function renderCountdown(){
    const today = new Date();
    const currentYear = today.getFullYear();
    const christmasDay = new Date(currentYear, 11, 25);
    const daysLeft = Math.ceil((christmasDay - today) / (1000 * 60 * 60 * 24));
    
    const countdownDisplay = document.getElementById("countdown-display");
    countdownDisplay.innerHTML = daysLeft;
}
 
renderCountdown()
```

---

### **Day 2 Challenge**

(WRITE ARTICLE SECTION)

!\[\]()

***🔗*** [***My solution for day 2***](HOLD)

---

### **Day 3 Challenge**

(WRITE ARTICLE SECTION)

!\[\]()

***🔗*** [***My solution for day 3***](HOLD)

---

#### ***If you would like to learn more about my journey with Scrimba and how learning with them may help you, you can read my article:*** [***How Scrimba is helping me and many others to become confident, well-prepared web developers***](https://selftaughttxg.com/2021/06-21/06-07-21/)

---

#### **Scrimba has once again impressed and inspired me! You can read my full** [**Scrimba review**](https://selftaughttxg.com/2020/12-20/Review-Scrimba/) **on my 12/13/2020 post.**

![Per Harald Borgen Quote](https://selftaughttxg.com/static/98b62403b09a4ed98dfc3b072da19205/5fd3e/PerHaraldBorgen-Quote.png)

#### ***"That's one of the best Scrimba reviews I've ever read,*** [***@MikeJudeLarocca***](https://twitter.com/MikeJudeLarocca?ref_src=twsrc%5Etfw)***. Thank you! 🙏 "***

###### **— Per Harald Borgen, CEO of Scrimba** [**December 14, 2020**](https://twitter.com/perborgen/status/1338462544143540227?ref_src=twsrc%5Etfw)

---

### **10% Scrimba Discount!**

#### **If you're interested in taking a paid course from Scrimba, be sure to use the discount code provided:** [**https://scrimba.com/pricing?coupon=Michael-Larocca-Discount-2023#join**](https://selftaughttxg.com/2021/06-21/06-07-21/)

###### ***Valid for an additional 10% off semester and annual plans. Expires on July 31st, 2024***

---

### **Conclusion**

Scrimba's annual JavaScriptmas event is a fun, festive way to commit to coding daily. Whether you are a new coder or a seasoned one, you have an opportunity to share your work with the community, make new friends, and even get a chance to win prizes!

If you're interested in continuing learning with Scrimba after the FREE event, be sure to check out their many FREE courses! If you are ready to commit to becoming a hireable front-end web developer, be on the lookout for discounted course rates!

Don't miss out on this exciting coding event! Participate in Scrimba's JavaScriptmas today, share your solutions, connect with fellow developers, and improve your skills while having fun! Merry JavaScriptmas! 🎄

---

**Let's connect! I'm active on** [**LinkedIn**](https://www.linkedin.com/in/michaeljudelarocca/) **and** [**Twitter**](https://twitter.com/MikeJudeLarocca)**.**

---

###### ***Are you now interested in participating in this year's Scrimba's JavaScriptmas? Have you already participated in last year's Scrimba's JavaScriptmas? Please share the article and comment!***