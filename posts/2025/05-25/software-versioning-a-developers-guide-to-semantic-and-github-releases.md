---
title: "Software Versioning: A Developer's Guide to Semantic and GitHub Releases"
tags:
  [
     "gis",
     "project",
    "tutorial",
  ]
published: true
date: "2025-05-12"
---

#### In this article, we explore versioning in software development. You'll learn about Semantic Versioning, GitHub releases, and practical steps to manage updates, enhancing your project management skills!

---

![TN-TXG-136](img/05-12-25/TN-TXG-136.png)

---

### Versioning

Versioning in software development is a systematic method of assigning unique version numbers to different states of a software product. This practice helps developers and users track changes, improvements, and bug fixes over time.

By using version numbers, teams can efficiently manage software updates, ensure compatibility, and maintain a clear history of the software's evolution. Versioning is crucial for collaboration, as it allows multiple developers to work on the same project without conflicts and provides users with a clear understanding of the software's progression and stability.

---

### Semantic Versioning

In versioning, particularly Semantic Versioning (SemVer), version numbers are typically structured as three-part identifiers: major, minor, and patch. Here's what each part represents:

1. **Major Version (X)**: This number is incremented when there are incompatible changes that may break backward compatibility. It signifies significant updates or overhauls to the software.
    
2. **Minor Version (Y)**: This number is incremented when new features are added in a backward-compatible manner. It indicates enhancements and improvements that do not disrupt existing functionality.
    
3. **Patch Version (Z)**: This number is incremented for backward-compatible bug fixes. It addresses issues and errors without adding new features or breaking existing ones.
    

**Additional characters and symbols used in versioning:**

* **Caret (^)**: In dependency management, the caret symbol is used to specify compatible versions. For example, ^1.2.3 allows updates to versions that do not change the leftmost non-zero digit (e.g., 1.x.x).
    
* **Tilde (~)**: Similar to the caret, the tilde specifies a range of acceptable versions, but it is more restrictive. For example, ~1.2.3 allows updates to versions that do not change the middle digit (e.g., 1.2.x).
    
* **Pre-release Identifiers**: These are appended to version numbers to indicate versions that are not yet stable, such as alpha, beta, or release candidate (e.g., 1.0.0-alpha).
    
* **Build Metadata**: This is additional information about a build, appended after a plus sign (e.g., 1.0.0+build.1). It does not affect version precedence.
    

***These conventions help developers manage dependencies and ensure compatibility across different versions of software.***

The chart below, based on information from [Wikipedia](https://en.wikipedia.org/wiki/Software_versioning), shows how software versions are named during development stages. In early stages, like alpha or beta, a zero in the major version shows that development is still happening. Semantic Versioning uses suffixes like -alpha to show the status, while numeric status uses numbers in the sequence. The numeric 90+ scheme, used by older projects, puts a large number at the end to mark pre-releases, helping users understand how stable the software is.

| Development Stage | Semantic Versioning | Numeric Status | Numeric 90+ |
| --- | --- | --- | --- |
| Alpha | 1.2.0-a.1 | 1.2.0.1 | 1.1.90 |
| Beta | 1.2.0-b.2 | 1.2.1.2 | 1.1.93 |
| Release Candidate (RC) | 1.2.0-rc.3 | 1.2.2.3 | 1.1.97 |
| Release | 1.2.0 | 1.2.3.0 | 1.2.0 |
| Post-release Fixes | 1.2.5 | 1.2.3.5 | 1.2.5 |

---

### Releases

You'll find a section labeled 'Releases' on the main GitHub repository page for the [Elecretanta](https://github.com/LetsGetTechnical/elecretanta) project by the Gridiron Survivors team I am on. This section is where the project maintainers publish official versions of the software. Each release typically includes a version number, release notes, and downloadable assets like source code or compiled binaries.

*So far, we have three release tags in the Elecretanta project's GitHub repository that show how the software has developed. These tags help track the project's progress and understand the changes made over time.*

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1746806900422/c240a951-e07a-40c7-afd6-e3a7acd6381e.png align="center")

The Elecretanta project has three alpha release tags, each representing a different stage of development. The latest, 0.3.0-alpha, includes new features and improvements still being tested. The 0.2.0-alpha tag shows earlier development progress with foundational updates, while 0.1.0-alpha marks the initial release, introducing the software's basic functions. All releases are available for download in zip and tar.gz formats, and they share the same commit identifier, indicating they were part of a rapid development cycle.

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1746807308029/e92e1ac0-e06e-4012-94ca-e40166a1831c.png align="center")

---

### Steps Taken to Update to Version 3

Our team lead, Shashi, upgraded the Elecretanta project from version 2 to version 3 during a Livestream. Although it wasn't recorded, he provided a detailed step-by-step guide on the update process, which we will now review.

**Update process steps:**

* Create **PR** from **develop** into **main**.
    
* Modify **package.json** version number.
    
* Merge both changes together towards **main**.
    
* Go to GitHub repo's homepage and click on **Releases**.
    
* Click on **Draft a new release**.
    
* Create a new tag that matches the version number.
    
* Target is **main** branch.
    
* Click **generate release notes**.
    
* This will combine all the **PRs** that are being released into the **main** branch compared to the previous release notes.
    

*Shashi followed a structured process on GitHub to update the Elecretanta project from version 2 to version 3. First, a pull request (PR) was created from the develop branch to the main branch. The package.json file was then updated to reflect the new version number. After merging these changes into main, Shashi navigated to the GitHub repository's homepage and selected "Releases." He drafted a new release, creating a tag that matched the updated version number, targeting the main branch. By generating release notes, all PRs merged into main since the last release were automatically compiled, providing a comprehensive overview of the updates.*

---

### What is New in Version 3?

In version 3 of our project, we focused on refining the codebase and enhancing the overall quality of the application. A significant portion of this release involved addressing and resolving numerous ESLint errors across various components, such as forms, alert dialogues, text areas, and avatar components. This effort was crucial in improving code quality and ensuring consistency throughout the project.

Additionally, we made some user experience improvements, like adding a "back to dashboard" link for easier navigation and ensuring that users are properly redirected to the dashboard after completing the onboarding flow. We also created unit tests for specific components, such as labels and avatar images, to enhance the reliability and maintainability of the code.

Compared to version 2, which introduced major features like the GiftExchange system and user onboarding, version 3 primarily focused on polishing the existing features and ensuring a smoother, more reliable user experience. This release also welcomed new contributors, who played a vital role in addressing these improvements and ensuring the project's continued success!

---

### Understanding Auto-Generated Release Notes on GitHub

After our tech lead, Shashi, completed the update from version 2 to 3, he utilized a GitHub feature to generate automatic release notes. This process streamlines the creation of release notes, making it particularly effective for tracking changes and contributions. By leveraging the naming conventions of branches and pull requests (PRs), this feature automatically compiles a comprehensive overview of updates for each release.

#### How It Works

1. **Branch Naming Conventions**: By adhering to a consistent naming convention for branches, such as including issue numbers or descriptive titles, GitHub can link these branches directly to their corresponding PRs. This practice not only organizes the workflow but also facilitates the automatic generation of release notes.
    
2. **Pull Requests and Commits**: Each PR, when merged, is associated with specific commits that detail the changes made. These are often linked to issues or tasks, providing context and traceability. For example, a branch named `Julianna/257-ESLint-Errors-Form` indicates that the work addresses ESLint errors in a form component, linked to issue #257.
    
3. **Auto-Generated Notes**: When drafting a new release, GitHub can automatically generate release notes by compiling all merged PRs since the last release. This includes details such as the PR title, author, and a brief description of the changes. The notes also highlight new contributors, acknowledging their first contributions to the project.
    
4. **Benefits**: This automated process saves time and ensures accuracy in documenting changes. It provides a clear and organized summary of what has been updated, fixed, or added, making it easier for team members and users to understand the progression of the project.
    

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1746818925031/8842b850-f049-40c1-ba1b-e4b58a9b6564.png align="center")

*By utilizing these features, teams can maintain a well-documented history of their project's development, enhancing collaboration and transparency!*

---

### About Us

#### What is Gridiron Survivor?

[*Gridiron Survivor*](https://www.htmlallthethings.com/blog-posts/bridging-the-skills-gap-empowering-junior-developers-through-apprenticeship-programs) *is an apprenticeship program created by Shashi Lo, a Senior UX Engineer at Microsoft. It aims to provide developers entering the tech industry with vital work experience. The program focuses on practical training in project management, coding practices, and team collaboration, offering mentorship and skills essential for success in their initial tech roles.*

#### What is the Elfgorithm App?

[*Elfgorithm*](https://github.com/LetsGetTechnical/elecretanta) *is an AI-driven Secret Santa app set to launch in winter 2025. It streamlines gift exchanges by removing the guesswork from Secret Santa activities. The app manages gift-giving details and provides personalized gift suggestions, ensuring you find the perfect presents for everyone.*

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1746822066474/f4885573-cda7-4148-8baf-df596b93a282.png align="center")

### Gridiron Survivor Sponsors

**A very special thanks to our sponsors!**

* [GitKraken](https://www.gitkraken.com/): *A popular Git client that provides a graphical interface to manage Git repositories. It is known for its user-friendly design and features that simplify version control, making it easier for developers to collaborate and manage their code.*
    
* [Frontend Mentor](https://www.frontendmentor.io/): *An online platform that offers front-end coding challenges. It helps developers improve their skills by providing real-world projects to work on, along with a supportive community for feedback and learning.*
    
* [Vercel](https://vercel.com/): *A cloud platform for static sites and serverless functions. It is designed to optimize the workflow of developers by providing tools for building, deploying, and scaling modern web applications with ease. Vercel is known for its seamless integration with frameworks like Next.js.*
    

---

### My other related articles

* [Gridiron Survivor's Elfgorithm: Introduction and Team Installation](https://selftaughttxg.com/2025/04-25/gridiron-survivor's-elfgorithm-introduction-and-team-installation/)
    
* [Bridging the Skills Gap: Empowering Junior Developers Through Apprenticeship Programs](https://www.htmlallthethings.com/blog-posts/bridging-the-skills-gap-empowering-junior-developers-through-apprenticeship-programs)
    
* [Shashi Lo: UI Design Fundamentals](https://selftaughttxg.com/2022/02-22/ShashiLo/)
    

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

Software versioning is a fundamental practice that allows us to track changes, manage updates, and ensure compatibility in our projects. By understanding version numbers, which consist of major, minor, and patch components, you can effectively manage software updates and monitor your project's evolution.

In our team's Elecretanta project, recently updated to version 3 by our team lead, Shashi, we focused on refining the codebase, improving user experience, and enhancing code quality. The update process utilized Semantic Versioning principles and GitHub's automatic release notes feature, simplifying the creation of release notes and helping track changes and contributions. This release also highlighted the importance of collaboration and welcoming new contributors to ensure the project's ongoing success.

By leveraging software versioning and tools like GitHub, you can keep your projects organized and efficient, encouraging continuous innovation and opportunities for success in your development efforts!

---

###### *Do you now feel confident in managing software versioning with Semantic Versioning and GitHub Releases? Have you discovered new strategies for effective version control? Please share the article and comment!*

---
