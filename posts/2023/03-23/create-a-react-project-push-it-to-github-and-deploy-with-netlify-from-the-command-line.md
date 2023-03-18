---
title: "Create a React Project, Push It to GitHub, and Deploy With Netlify, From the Command Line"
tags:
  [
    "tutorial",
    "javascript",
  ]
published: true
date: "2023-03-20"
---

#### This article covers creating a React project, pushing it to GitHub, and deploying it with Netlify from the command line, which is excellent for getting your projects up and running quickly and easily!

---

![TN-TXG-80](https://github.com/MichaelLarocca/blog-michael-jude-larocca/blob/main/posts/2023/03-23/img/03-20-23/TN-TXG-80.png?raw=true)

---

### Introduction
In the last article, we covered how to create a local React environment with Vite to provide a practical approach to practicing React. In this article, I take it a step further by showing you how to create a GitHub repo, push it to GitHub, and deploy it with Netlify, all from the command line. 

Step by step in instructions for installing the Netlify CLI and the GitHub CLI is provided in this article. The GitHub CLI is an excellent method for getting your React projects up and running quickly and easily!

---

**Here is a checklist of what is needed:**

### Checklist
* [Visual Studio Code](https://code.visualstudio.com/)
* [Node.js](https://nodejs.org/en)
* [Node Package Manager](https://www.npmjs.com/)
* [Vite](https://vitejs.dev/guide/)
* [GitHub CLI](https://github.com/cli/cli#installation)
* [Netlify CLI](https://docs.netlify.com/cli/get-started/)

---

*This command line checklist will reveal what you need to install; If the item is installed, a corresponding version number displays.* 

#### Command line install checks:
```
node -v
npm -v
winget -v
ntl -v
```

---

***TIP:*** *To copy code in the bash terminal,  first select the code with the mouse by holding down left-click. Then, CTRL+SHIFT+C. to copy, and CTRL+SHIFT+V to paste.*

---

**Here is a list of the steps we will take:**

### Steps
1. Open the VS Code Bash terminal
2. Create a folder
3. Create a Vite project
4. Install the GitHub CLI
5. Initiate a GitHub repo with the GitHub CLI
6. Install the Netlify CLI
7. Deploy with Netlify 

---

***Note:*** *After creating a Vite project, you can skip to the "Create a GitHub repo from the command line" sections if you already have the GitHub CLI installed.*

---

### Bash terminal
We will be using the Bash terminal in VS Code. First, open up a new window in VS Code ( you can right-click the VS Code icon and choose new window ).

Next, click on view in the VS Code top menu and choose terminal ( shortcut: CTRL+~).

*If Bash is not your default, select the **down icon** located on the right side ( launch profile ), and choose Git Bash.*

![Bash](https://github.com/MichaelLarocca/blog-michael-jude-larocca/blob/main/posts/2023/03-23/img/03-20-23/Bash.png?raw=true)

**Bash terminal commands we will use:**
* ls - list files and directories
* cd - change directory
* mkdir - create a new directory

### Create a folder 
First, use the list files and directories command (ls) to see what's in your current directory.

Next, use the change directory command (cd) to navigate to a directory of your choosing to create a new folder.

*The cd command is used to change directories in the terminal. Here's a brief tutorial on how to use it:*

**Using "cd" to change directories:**
1. Open your terminal.
2. Type cd followed by the directory path you want to navigate to. For example, if you want to navigate to a directory called "Documents" that's located in your home directory, you would type cd ~/Documents and press Enter.
3. To navigate up one directory, use cd .. For example, if you're currently in the "Documents" directory and you want to navigate up to your home directory, you would type cd .. and press Enter.
4. To navigate to your home directory, simply type cd and press Enter.
5. To navigate to the root directory, type cd / and press Enter.

That's it! With these simple commands, you can easily navigate around your file system using the terminal.

**Once you are in a suitable directory of your choosing, create a new folder and name it using the make directory command (mkdir).**
```
mkdir yourfoldername
```

After creating your new folder, use the change directory command (cd) to enter it. 
```
cd yourfoldername
```

---

***TIP:*** *To clear the bash terminal, use CTRL+L. To cycle through your past commands/entries, use the UP ARROW and the DOWN ARROW.*

---

### Create a Vite project
We will use Vite to create a React project. 

What is Vite? Vite is a tool that helps you build JavaScript applications for the web quickly and efficiently. It works well with modern web development frameworks and offers features that simplify development, like hot module replacement and optimized production builds. If you are starting out with web development, Vite is a great tool to help you get started!

To create a new Vite project, type in the following:
```
npm create vite@latest
```

You may see the following message. Choose "y" to proceed.
```
Need to install the following packages:
  create-vite@4.2.0
Ok to proceed? (y)
```

You will now be asked to name the project ( the default is vite-project ).
```
? Project name: » vite-project
```

Next, using the arrow keys, select React for the framework.
```
? Select a framework: » - Use arrow-keys. Return to submit.
React
``` 

Then, using the arrow keys, select JavaScript.
```
? Select a variant: » - Use arrow-keys. Return to submit.
JavaScript
```

That's it! You should see a Scaffolding project in your chosen directory with your chosen name.
```
Scaffolding project in C:\Users\larocca\Desktop\github\solo-project-pro-digital-business-card\solo-project-pro-digital-business-card...

Done. Now run:

  cd solo-project-pro-digital-business-card
  npm install
  npm run dev

```

1. Next, following the instructions, we will change to the projects directory ( your projects name )
```
cd solo-project-pro-digital-business-card
```

2. Type npm install.
```
npm install
```

3. Type npm run dev
```
npm run dev
```

If successful, your Vite project is now ready, and it can be viewed by hovering over the URL and CRTL+LEFT CLICK.

```
  VITE v4.2.0  ready in 509 ms

  ➜  Local:   http://127.0.0.1:5173/
  ➜  Network: use --host to expose
  ➜  press h to show help
```

---

**After viewing your site, we must run a build command before proceeding.** 

A shortcuts menu will appear by pressing "h" in the bash terminal.
```
Shortcuts
  press r to restart the server
  press u to show server url   
  press o to open in browser   
  press c to clear console     
  press q to quit
```

Now, press "q" to quit so we can proceed with running the build command ( your preview site will stop running ).

**Let's look at what is currently in your project folder using the (ls) list command.**
```
$ ls
index.html  node_modules/  package.json  package-lock.json  public/  src/  vite.config.js
```

Now, we will run the build command.
```
$ npm run build
```

Let's look again and see what is now in your project folder using the (ls) list command.
```
$ ls
dist/       node_modules/  package-lock.json  src/                                            test-create-from-terminal-02        
index.html  package.json   public/            vite.config.js
```

As you see, we now have a **dist** folder. In React, the "dist" folder is created when you run the build command. This folder contains the optimized and minified production code that is ready to be deployed to the web.

*Remember to run the build command before each deployment! If you forget to run the build command after making changes to your project, the deployed version of the site will not show the updates!*

#### *If you would like step-by-step instructions to remove the default boilerplate, create simple React components, and add basic CSS styling, check out my article: [How to Create a Local React Environment with Vite](https://selftaughttxg.com/2023/03-23/how-to-create-a-local-react-environment-with-vite/)*

---

### GitHub CLI
The GitHub CLI tool allows you to interact with your GitHub repositories directly from your command line interface. This means you can create a new repository, add collaborators, and open pull requests without leaving your terminal. 

The GitHub CLI helps streamline your workflow by allowing you to perform these tasks quickly and easily from one central location.

---

***Note:*** *If you already installed the GitHub CLI, skip to the "Create a GitHub repo from the command" line section.*

---

To install the [GitHub CLI](https://github.com/cli/cli#installation) on Windows, in the bash terminal, run the following command ( you will be asked to agree to their terms ):
```
$ winget install --id GitHub.cli
```

After installing, you must close and restart your terminal/VS Code.

***Note:*** *The Windows installer modifes your PATH. When using Windows Terminal, you will need to open a new window for the changes to take affect. (Simply opening a new tab will not be sufficient.)*

#### Getting started with GitHub CLI
To get started with GitHub CLI, you will need to run the following command:
```
$ gh auth login
```
Then choose:
* GitHub.com
* HTTPS
* Yes (Authenticate Git with your GitHub credentials)
* Login with a web browser
* Then, copy your one-time code, and press "Enter"

A new window will open. Paste in your one-time code, continue, and click "Authorize github."

If successful, you will be prompted with "Congratulations, you're all set! Your device is now connected."

![Congrats](https://github.com/MichaelLarocca/blog-michael-jude-larocca/blob/main/posts/2023/03-23/img/03-20-23/Congrats.png?raw=true)

---

#### Create a GitHub repo from the command line
First, we need to initiate your project as a GitHub repository.
```
$ git init
```

Next, to create a GitHub repo from the command line, run the following command:
```
$ gh repo create
```
When prompted, choose:
```
Push an existing local repository to GitHub
```

Choose the default path (.) by pressing enter:
```
? Path to local repository (.) 
```

Then the repository name :
```
? Repository name
```

You can add a description:
```
?  Description
```
Then, choose "Public" when prompted for visibility:
```
> Public
```

Finally, choose yes to add a remote:
```
? Add a remote (Y/n)
```

Leave the default as **origin**.

Below is a screenshot of the entire process:

![gh-repo-create](https://github.com/MichaelLarocca/blog-michael-jude-larocca/blob/main/posts/2023/03-23/img/03-20-23/gh-repo-create.png?raw=true)

---

### Commit
Now it's time to commit our changes and push our repo up to GitHub.

We can add all of our changes with one command as follows:
```
$ git add .
```

warning: in the working copy of 'vite-project/.gitignore', LF will be replaced by CRLF the next time Git touches it 

***Note:*** *If you see a similar warning, it will not negatively affect your project. The issue concerns how Git handles line feeds (LF) and carriage returns (CR). Unix systems use (LF) and Windows uses (CR), thus (CRLF).*

---

Next, we will commit with the following command:
```
$ git commit -m "Initial"
```

Finally, we will push the repo to GitHub with the following command:
```
$ git push --set-upstream origin master
```

**Congrats! You will now see your repo on GitHub in your repository folder.**

---

### Netlify

#### How to install the [Netlify CLI](https://docs.netlify.com/cli/get-started/)
To install the Netlify CLI, run the following command:
```
$ npm install -g netlify-cli
```

Once the Netlify CLI is installed, run the following command:
```
$ ntl init
```

When prompted, choose to create & create a new site:
```
> Create & configure a new site
```

You will now be asked to choose a Netlify team ( you might only have one ):
```
$ Team: (Use arrow keys)
```

Next, you as asked to create a site name ( you can leave it blank and choose a name later):
```
$ Site name:
```

Then you may be asked to configure Webhooks and Deploy Keys. Choose the default:
```
> Authorize with GitHub through app.netlify.com
```
You will now be redirected to the Netlify website to continue. You will be asked to sign in to Netlify CLI by choosing a Git provider. Choose GitHub.

![Connect-Git-Provider](https://github.com/MichaelLarocca/blog-michael-jude-larocca/blob/main/posts/2023/03-23/img/03-20-23/Connect-Git-Provider.png?raw=true)

Finally, click the Authorize netlify button.

You will now be asked to log in with your GitHub password. Once successful, you will see the notification in the screenshot below:

![LoggedIn Netlify CL](https://github.com/MichaelLarocca/blog-michael-jude-larocca/blob/main/posts/2023/03-23/img/03-20-23/LoggedIn-Netlify-CLI.png?raw=true)

Next, you will be asked for your build command. Use vite build:
```
vite build
```

Then, choose to deploy from the dist directory:
```
dist
```

If you are prompted with "no netlify.toml detected," choose "Y" to proceed with creating the build:
```
? No netlify.toml detected. Would you like to create one with these build settings? (Y/n)
```

**Congratulations! The Netlify CI/CD is configured.**

![Netlify init process](https://github.com/MichaelLarocca/blog-michael-jude-larocca/blob/main/posts/2023/03-23/img/03-20-23/Netlify-init-process.png?raw=true)

#### Commit all of the changes
Now it is time to commit all of the changes:
```
$ git add .
```
Then commit:
```
$ git commit -m "Added Netlify deploy files"
``` 
Finally, we push to repo up to GitHub:
```
$ git push origin master
```

**Then, after committing all of the changes, run the netlify open site command.**

To view the site, type in the following command:
```
$ netlify open:site
```

Hover over the provided URL and "CTRL+LEFT-CLICK" to open the external website ( if prompted, click open ).  

*Your site is now live! You may need to update the Netlify toml file if there is a build error. The instructions to update the Netlify toml file are listed in the next section.*

---

### Netlify.toml
To ensure everything is being deployed correctly, we may need to uncomment code in the netlify.toml file.

#### Nano (WRITE ARTICLE SECTION)

***Note:*** *The # symbol is used for comments.*

Open the netlify.toml file and uncomment lines 9 through 12 (the redirects section) as follows:
```md
  ## Uncomment to use this redirect for Single Page Applications like create-react-app.
  ## Not needed for static site generators.
  [[redirects]]
    from = "/*"
    to = "/index.html"
    status = 200
```

***Make sure to save the netlify.toml file!***

#### Commit all of the changes
Now it is time to commit all of the changes:
```
$ git add .
```
Then commit:
```
$ git commit -m "Added Netlify deploy files"
``` 
Finally, we push to repo up to GitHub:
```
$ git push origin master
```

We can now see the site by running the following command:
```
$ netlify open:site
```
Hover over the site URL and "CTRL+ LEFT-CLICK" the mouse to follow the link. 

**Congrats! Your site is now live!**

![Vite-React-netlify-app](https://github.com/MichaelLarocca/blog-michael-jude-larocca/blob/main/posts/2023/03-23/img/03-20-23/Vite-React-netlify-app.png?raw=true)

---

#### *You may find my related article helpful: [How to Create a Local React Environment with Vite](https://selftaughttxg.com/2023/03-23/how-to-create-a-local-react-environment-with-vite/)*

---

### Conclusion
This article is an excellent resource for anyone looking to create a React project, push it to GitHub, and deploy it with Netlify. Following the step-by-step instructions, you can get your projects up and running quickly and easily. 

Don't be intimidated by the technical jargon! With the help of the tools like Vite, GitHub CLI, and Netlify CLI, you can create professional-grade projects you can be proud of.

So, go ahead and give it a try! The process may seem daunting initially, but after everything is installed, by using the command line, you will get your projects up and running by using the command line in no time!

---

**Let's connect! I'm active on [LinkedIn](https://www.linkedin.com/in/michaeljudelarocca/) and [Twitter](https://twitter.com/MikeJudeLarocca).**

---

###### ***Are you now confident using the command line to initialize your React projects? Do you have a different method that works better for you? Please share the article and comment!***