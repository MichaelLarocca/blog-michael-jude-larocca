---
title: "LinkFree: More Than Just Your Links, It’s a Social Tech Platform"
tags:
  [
    "opensource",
    "github",
    "networking",
  ]
published: true
date: "2023-01-02"
---

#### (WRITE ARTICLE SECTION) More than just links, it's a tech social platform!

---

![TN-TXG-73](img/01-30-23/TN-TXG-73-FINAL.png)

---

### About Eddie
(WRITE ARTICLE SECTION)

---

### What is LinkFree?

What is LinkFree? LinkFree is a FREE, open-source platform that allows you to connect to your audience with a single link, similar to services like Linktree.

---

### Why use LinkFree?

**If you are a developer, content creator, writer, or learning in public, creating a LinkFree account will benefit you for several reasons:**
* Comparatively small user base
* Niche tech social platform
* Advertise your products
* Share your accomplishments
* Give and receive testimonials
* Share upcoming events your attending
* And more!

#### **Comparatively small user base**
LinkFree is a newer platform with just over 1,000 active users/profiles. 

Creating a LinkFree account in its early stages will allow you to stand out significantly on the platform, making it easier for you to grow your online presence.

#### **Niche tech social platform**
In addition to a smaller user base compared to other platforms, currently, LinkFree consists of like-minded tech individuals.

#### **Advertise your products**
Do you have a book, course, or other product to sell? You can add links to them along with descriptions on your LinkFree profile!

#### **Share your accomplishments**
You can share your significant achievements in your "Milestones" section. 

#### **Give and receive testimonials**
Testimonials on LinkFree profiles are an excellent way for others to learn about each other at a glance.

You can let others know how they've helped you by writing testimonials. Additionally, others can also write testimonials about you!

#### **Share upcoming events your attending**
Are you attending upcoming conferences, meetups, virtual, or similar events?

Let others know what upcoming events you're attending in your LinkFree events section.

#### **And more!**
LinkFree is an open-source project that is just getting started. Enhancements already in the works include login authorization, enhanced search features, and a more beginner-friendly user interface.

*What is the best part about LinkFree? As it is an open-source project, ***YOUR*** ideas, opinions, and contributions matter in making the platform the best it can be!*

---

![LinkFree-advert](img/01-30-23/LinkFree-advert.png)

---

### Features
(WRITE ARTICLE SECTION)

* Your Bio, Social links & Stats
* Search by Tags
* Your QR code
* Your Links
* Your Milestones
* Your Testimonials
* Your Events
* Community Events

#### **Your Bio, Social links & Stats**

In this section, you can provide a short bio and add social links via icons.

For my bio, I wrote "Front-End Web Developer | `**Writer**` | Musician" ( since it's Markdown language, I made Writer bold by surrounding it with asterisks).

When people view your profile, the total number is displayed next you your image. As you can see, Eddie used bold on "EddieHub" and "GitHub." 

![Your Bio](img/01-30-23/YourBio.png)

#### **Search by Tags**
(WRITE ARTICLE SECTION)
![Tags](img/01-30-23/Tags.png)

#### **Your QR code**
(WRITE ARTICLE SECTION)

#### **Your Links**
(WRITE ARTICLE SECTION)

![MyLinks](img/01-30-23/MyLinks.png)

#### **Your Milestones**
(WRITE ARTICLE SECTION)

![Milestones](img/01-30-23/Milestones.png)

#### **Your Testimonials**
(WRITE ARTICLE SECTION)

![Testimonials](img/01-30-23/Testimonials.png)

#### **Your Events**
(WRITE ARTICLE SECTION)

![Your Events](img/01-30-23/YourEvents.png)

#### **Community Events**
(WRITE ARTICLE SECTION)

![CommunityEvents](img/01-30-23/CommunityEvents.png)

---

### Discover page
(WRITE ARTICLE SECTION)

* Discover LinkFree Profiles
* Random LinkFree Profiles
* Trending LinkFree Profiles (last 24 hours)
* Popular LinkFree Profiles

![DiscoverProfiles](img/01-30-23/DiscoverProfiles.png)

*Also includes a search page!*

---

### Documentation
(WRITE ARTICLE SECTION)

Here is a selection of our popular documentation guides to help you get started.

**Popular User Guides**
* [QuickStart](https://linkfree.eddiehub.io/docs/quickstart)
* [Links](https://linkfree.eddiehub.io/docs/how-to-guides/links)
* [Bio](https://linkfree.eddiehub.io/docs/how-to-guides/bio)
* [Statistics](https://linkfree.eddiehub.io/docs/how-to-guides/statistics)
* [Events](https://linkfree.eddiehub.io/docs/how-to-guides/events)
* [Milestones](https://linkfree.eddiehub.io/docs/how-to-guides/milestones)

---

<iframe width="900" height="506" src="https://www.youtube.com/embed/05HEeCQSKRE" title="LinkFree Quickstart: How to create YOUR Profile! (Open Source)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

---

#### LinkFree Quickstart: How to create YOUR Profile! (Open Source)

---

### Template

Below is the JSON file I created for my LinkFree profile; the file met the necessary requirements and was successfully merged via pull request. **Feel free to use it as a template and modify it accordingly**.

```json

{
  "name": "Michael Larocca",
  "type": "personal",
  "displayStatsPublic": true,
  "bio": "Front-End Web Developer | **Writer** | Musician",
  "avatar": "https://github.com/MichaelLarocca.png",
  "tags": [
    "frontend",
    "javascript",
    "writing",
    "music"
  ],
  "socials": [
    { "icon": "FaLinkedin", "url": "https://www.linkedin.com/in/michael-larocca-9315a3202/" },
    { "icon": "FaTwitter", "url": "https://twitter.com/MikeJudeLarocca" },
    { "icon": "FaGithub", "url": "https://github.com/MichaelLarocca" }
  ],
  "links": [
    {
      "group": "Business",
      "name": "Website: michaeljudelarocca.com",
      "url": "https://michaeljudelarocca.com/",
      "icon": "FaLink"
    },
    {
      "group": "Socials Primary",
      "name": "Blog: Self-Taught the X Generation",
      "url": "https://selftaughttxg.com/",
      "icon": "FaLink"
    },    
    {
      "group": "Socials Primary",
      "name": "Twitter: @MikeJudeLarocca",
      "url": "https://twitter.com/MikeJudeLarocca",
      "icon": "FaTwitter",
      "color": "#00ACEE"
    },
    {
      "group": "Socials Primary",
      "name": "LinkedIn: Let's connect",
      "url": "https://www.linkedin.com/in/michael-larocca-9315a3202/",
      "icon": "FaLinkedin"
    },
    {
      "group": "Socials Secondary",
      "name": "Discord: Michael Larocca#7221",
      "url": "https://discord.com",
      "icon": "FaDiscord"
    },
    {
      "name": "CodePen: @Michael_Larocca",
      "url": "https://codepen.io/Michael_Larocca",
      "icon": "FaCodepen"
    }
  ],
  "milestones": [
    {
      "title": "Started Freelancing",
      "date": "August 9th, 2022",
      "icon": "FaDollarSign",
      "color": "grey",
      "description": "My first paid article 📝",
      "url": "https://scrimba.com/articles/author/michael/"
    },
    {
      "title": "Started Writing Articles",
      "date": "December 6th, 2020",
      "icon": "FaPencilAlt",
      "color": "grey",
      "description": "Started my blog",
      "url": "https://selftaughttxg.com/"
    },    
    {
      "title": "Earned a Certification",
      "date": "May 2nd, 2020",
      "icon": "FaFreeCodeCamp",
      "color": "green",
      "description": "Earned freeCodeCamps Responsive Web Design Certification",
      "url": "https://www.freecodecamp.org/certification/fccab1f30e2-e3ae-4d33-944a-659978c16159/responsive-web-design"
    }
  ]
}
```

---

![LinkFree-MJL](img/01-30-23/LinkFree-MJL.png) 

---

<iframe width="900" height="506" src="https://www.youtube.com/embed/h3_qNTLx6dI" title="Linkfree - Open Source way to connect to your audience with one link - Eddie Jaoude" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

---

#### Linkfree - Open Source way to connect to your audience with one link - Eddie Jaoude

---

### My other Eddie Jaoude articles:

🔗 [Review: Eddie Jaoude Course - How to customize your GitHub Profile](https://selftaughttxg.com/2021/11-21/ReviewEddieJaoudeGitHubCourse/)

---

### Eddie's links

* 🔗[Website: eddiejaoude](https://www.eddiejaoude.io/)
* 🔗[GitHub: eddiejaoude](https://github.com/eddiejaoude)
* 🔗[EddieHubCommunity](https://github.com/EddieHubCommunity)
* 🔗[YouTube: eddiejaoude](https://www.youtube.com/c/eddiejaoude)
* 🔗[Twitter: eddiejaoude](https://twitter.com/eddiejaoude)

---

### Conclusion
(WRITE ARTICLE SECTION)

---

###### ***HOLD? HOLD? Please share the article and comment!***

---