---
title: "JavaScriptmas 2023 - Week 2"
tags:
  [
    "scrimba",
    "tutorial",
    "javascript",
    "coupon",
  ]
published: true
date: "2023-12-11"
---

#### Tis the season! JavaScriptmas is here again! JavaScriptmas is a FREE annual festive coding event hosted by the online coding school Scrimba, consisting of 24 daily coding challenges, prizes, and more!

---

![TN-TXG-105](img/12-11-2023/TN-TXG-105.png)

---

### JavaScriptmas 2023

#### **What is JavaScriptmas?**

JavaScriptmas is a **FREE** annual event comprising 24 coding challenges hosted by the online coding school [Scrimba](https://scrimba.com/). Most of the coding challenges are JavaScript, but this year, there will be a few CSS challenges, and some using AI tools! 🎄

#### **What level of coder do you need to be to participate?**

Even if you are starting to learn JavaScript, you can participate. For hints, you can tap into the community, and of course, you can always use Google to help you get to your solution. There will also be Discord channels for the challenges, as well as for FAQs. You can also check out the topic in [Scrimba's forum](https://forum.scrimba.com/). 💻

#### **JavaScriptmas prize rules**

1. Each day, you can complete the challenge by midnight UTC, and share your VALID/working solution on Twitter/X for a chance to win a prize! (You can easily post your submission via the share solution button on your Scrim).
    
2. Take part in Santa's Code Review Workshop by picking a JavaScriptmas entry on X/Twitter, doing a code review, and sharing it as a reply post.
    
3. Attend the JavaScriptmas YouTube Livestream on Dec 24 for a chance to win a Mackbook Air M2
    

#### **JavaScriptmas prizes**

The prizes consist of 24 Annual Scrimba Pro subscriptions worth $200, 5 $100 winners for giving a code review of another participant's entry, and a grand prize winner awarded a Mackbook Air M2 worth $1,100! All winners will be announced during the JavaScriptmas YouTube Livestream event on December 24th. 🎁

#### **JavaScriptmas savings**

In addition to prizes, be on the lookout for savings with discount prices on their paid courses! If you're interested in taking a paid course from Scrimba, be sure to use the discount code provided: [https://scrimba.com/pricing?coupon=Michael-Larocca-Discount-2023#join](https://scrimba.com/pricing?coupon=Michael-Larocca-Discount-2023#join). (Valid for an additional 10% off semester and annual plans. Expires on July 31st, 2024) 💸

###### ***Note:*** *Prizes are limited to one per person*

#### **❄Community highlights❄**

In the spirit of the festive holiday season, I enjoy featuring others' works in the community highlights section of my JavaScriptmas articles! I will be searching X/Twitter, LinkedIn, and the Scrimba Discord channel for "outstanding" submissions by fellow participants to feature! 🎉

#### **My solutions**

Throughout the JavaScriptmas event, I will participate in all 24 coding challenges and document my detailed solutions! 💻

---

### **❄Community highlights❄ ⬇**

---

#### (HOLD )

![HOLD ](HOLD )

WRITE ARTICLE SECTION

[***🔗 Link to the scrim***](HOLD )

---

#### (HOLD )

![HOLD ](HOLD )

WRITE ARTICLE SECTION

[***🔗 Link to the scrim***](HOLD )

---

#### (HOLD )

![HOLD ](HOLD )

WRITE ARTICLE SECTION

[***🔗 Link to the scrim***](HOLD )

---

### **My coding solutions ⬇**

---

### **Day 4:**

**Task:**

![HOLD](HOLD)

***🔗*** [***My solution for day 4***](HOLD)

---

### **Day 5:**

**Task:**
    
![HOLD](HOLD)

***🔗*** [***My solution for day 5***](HOLD)

---

### **Day 6: Secret Santa**

**Task:**

Write a function to randomly assign each person in an array a "Secret Santa," who is someone else in the array. No one should be assigned to themselves as their own Secret Santa.

```javascript
{Alice: "Dan", Bob: "Carly", Carly: "Ginny", Dan: "Ed", Ed: "Alice", Ferdinand: "Ginny", Ginny: "Ferdinand"}
```

***🔗*** [***My solution for day 6***](https://scrimba.com/learn/javascriptmas/-day-6-secret-santa-c8p2w3CD)

This function, `generateSecretSantaPairs`, is designed to create pairs for a Secret Santa gift exchange. It accepts an array of people's names as its argument.

1. We start by creating an empty object, `pairs`, to store our final pairs, and a copy of our original array of names.
    
2. We then loop through each name in the original array. For each name, we do the following:
    
    * If there's only one name left in our copied array, we assign the current name from the original array and the last name from the copied array to each other in our `pairs` object. This ensures that the last person in the list also gets assigned a pair.
        
    * If there's more than one name left in our copied array, we generate a random index and check if the name at that index in the copied array is the same as the current name from the original array. If it is, we generate a new random index, until we find a different name.
        
    * We then assign the randomly selected name from the copied array to the current name in the original array in our `pairs` object, and remove the selected name from the copied array.
        
3. Once we've looped through all the names in the original array, we have our final pairs. We print these pairs to the console and return them from the function.
    

**This function ensures that everyone gets a pair and that no one is paired with themselves, making it perfect for organizing a Secret Santa gift exchange!**


```javascript
const people = ["Alice", "Bob", "Carly", "Dan", "Ed", "Ferdinand", "Ginny"]

function generateSecretSantaPairs(arr) {
    let pairs = {};
    let copy = [...arr]; 

    for(let i = 0; i < arr.length; i++) {
        let person = arr[i];
        let index;
        if(copy.length === 1) {
            pairs[person] = copy[0];
            pairs[copy[0]] = person;
            break;
        }

        do {
            index = Math.floor(Math.random() * copy.length);
        } while(copy[index] === person && copy.length > 1)

        pairs[person] = copy[index];
        copy.splice(index, 1);
    }
    console.log(pairs)
    return pairs;
}

generateSecretSantaPairs(people);
```

---
### **Day 7:**

**Task:**

![HOLD](HOLD)

***🔗*** [***My solution for day 7***](HOLD)

---

### **Day 8:**

**Task:**
    
![HOLD](HOLD)

***🔗*** [***My solution for day 8***](HOLD)

---

### **Day 9:**

**Task:**

![HOLD](HOLD)

***🔗*** [***My solution for day 9***](HOLD)

---

### **Day 10:**

**Task:**

![HOLD](HOLD)

***🔗*** [***My solution for day 10***](HOLD)

---

#### ***If you would like to learn more about my journey with Scrimba and how learning with them may help you, you can read my article:*** [***How Scrimba is helping me and many others to become confident, well-prepared web developers***](https://selftaughttxg.com/2021/06-21/06-07-21/)

---

#### **Scrimba has once again impressed and inspired me! You can read my full** [**Scrimba review**](https://selftaughttxg.com/2020/12-20/Review-Scrimba/) **on my 12/13/2020 post.**

![Per Harald Borgen Quote](https://selftaughttxg.com/static/98b62403b09a4ed98dfc3b072da19205/5fd3e/PerHaraldBorgen-Quote.png)

#### ***"That's one of the best Scrimba reviews I've ever read,*** [***@MikeJudeLarocca***](https://twitter.com/MikeJudeLarocca?ref_src=twsrc%5Etfw)***. Thank you! 🙏 "***

###### **— Per Harald Borgen, CEO of Scrimba** [**December 14, 2020**](https://twitter.com/perborgen/status/1338462544143540227?ref_src=twsrc%5Etfw)

---

### **10% Scrimba Discount!**

#### **If you're interested in taking a paid course from Scrimba, be sure to use the discount code provided:** [**https://scrimba.com/pricing?coupon=Michael-Larocca-Discount-2023#join**](https://scrimba.com/pricing?coupon=Michael-Larocca-Discount-2023#join)

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