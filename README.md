<img src="assets/images/logo.png" style="margin: 0;">

# Match It
[Play Match It here!](https://coderkatew.github.io/match-it/)<br></br>
Match It is a card matching game for improving memory skills. Players can race against the countdown timer and keep track of their scores to see how well their memory skills are improving. 
The game is short and mobile-friendly so it's ideal for playing on your commute or for short brain training sessions during the day. This game would be the first in a range of memory games and games for language learning.


<br>

# Project Outline

2. [UX](#ux)

3. [Features](#features)

4. [Deployment](#deployment)

<br><br>

## UX <br><br>
### Who is this website for?
* People who wish to improve their memory skills
* People who wish to play a short online game that is easy to use
* Game creators who wish to showcase the games they have created<br><br>

### User Stories
1. As a player I want to play a game that involves using my memory so that I can improve my memory skills.
- This user can play the game in the Play section.

2. As a player, I want to know how playing memory games can improve memory skills.
- This user can find some information about the benefits of memory games for improving memory skills in the About section.

3. As a player I want to see my score so that I can see if I am making progress.
- This user can keep track of their score by watching the timer and turn count while they're playing the game, and see their final score on the feedback screen at the end of the game.

4. As a player I want a game that is intuitive and easy to use so that I can learn how to use it quickly.
- The structure of the site and game has been designed to include minimal elements on the page so that the game is the main focus, and there is a consistent experience throughout the first game and each replay game so that the user can quickly become familiar with how it works.

5. As a player I want a game that is quick to play and mobile-friendly so that I can play it on my smartphone during my commute.
- This user will see a mobile version of the game when they open it on their smartphone. The game time is 120 seconds so it can be completed in a very short amount of time and then replayed as often as the user wishes.

6. As the game creator and site owner, I want to build my subscriber list so that I can promote new games that I make.
- There is a form in the Subscribe section for users to submit their email address if they wish to hear about new games. The site owner can use this feature to build out their email list and share the site link publicly to gain new subscribers. Note:The form on the site is not currently set up to post the details submitted but I would like to include this in the next phase of the project.<br><br>

### Wireframes
The desktop and mobile wireframes for this project are located in the 'wireframe' folder:
* [Match It Wireframe](wireframe/match-it.pdf)
<br><br>

## Features
<br><br>

### Existing Features
**Start Game Screen** - This is the first screen presented to the user. The user is prompted (with onscreen text instructions) to enter their name and then click the Start Game button to start the game.

**Navbar** - There are two version of the navbar (one for desktop and one for mobile) that were created using Bootstrap. The navigation panel allows users to jump quickly to specific sections on the page.

**Main Gameboard** - The gameboard displays 16 cards (with the backs of the cards visible to the user). The game timer on the top left of the gameboard counts down from 120 seconds and the 'Turns' counter increases by +1 each time the user clicks on a card. When the user clicks on a card, the card turns and the picture side of the card is presented.

**About Section** - The about section is text only and includes some information on the benefits of playing memory games.

**Subscribe Section** - This is a simple form for the user to submit their email address in order to subscribe to emails about new games. The form on the site is not currently set up to post the details submitted but I would like to include this in the next phase of the project.

**Feedback screen** - A feedback screen is shown to the user at the end of the game (when they've either matched all pairs or the countdown has finished). They are presented with their final score and the option to play again.
<br><br>

## Features Left to Implement
**Live Play** - I'd like to add functionality to allow users to interact and compete with friends or other players with features like a real-time scoreboard and the option to send invites and challenges to other players.

**Variation of Themes**  - The current theme of the site is geared more towards children than adults, so I'd like create multiple themes so that users can select a theme when they first arrive on the site and their preference would be saved for the next time they visit. I'd also like to add customizable user profiles to give users a more personalized experience.

**Audio and Text Versions** - I'd like to incorporate different media such as audio, text and sound effects into the cards so that the game template could be repurposed for language games. For example, the user selects Card1 which is an audio card with a spoked word or sound effect and has to match it with a text or picture card.

**More Levels of Difficulty** - I'd like to give users the option to adjust the length of time and/or number or cards for a game (or simply choose different levels) so that they can increase the difficulty level as their memory skills improve, or make it easier if they are finding it too difficult.
<br><br>


## Technologies Used
The following languages and frameworks were used to build this project:

**HTML** -
This project uses HTML to structure the pages and website.

**CSS** -
This project uses CSS to style the game and page.

**Google Fonts** -
This project uses Google Fonts to style fonts throughout the game.

**Javascript** -
This project uses Javascript to create and control dynamic content in the game.

**Gitpod IDE** -
Gitpod was used as an IDE to build this project.
https://www.gitpod.io/

**GitHub and GitHub Pages** -
This project is stored on GitHub and has been deployed to GitHub Pages. 
https://github.com/

**Bootstrap** -
The project uses Bootstrap to improve navigation on the site.
https://getbootstrap.com/

**Font Awesome** -
The project uses Font Awesome to present icons throughout the site.
https://fontawesome.com/
<br>

<br><br><br>



## Deployment
This project was developed in GitPod IDE, committed to git and pushed to GitHub.

The following steps were taken to deploy Match it to GitHub Pages from the GitHub repository:‰

* Log in to GitHub.
* Select coderkatew/match-it from the list of repositories.
* From the repository menu, select 'Settings'.
* Scroll down the 'Options' page (it opens on this page by default) to the 'GitHub Pages' section.
* Under 'Source' select 'master branch' from the drop-down menu.
* This updates the page and deploys the website.
* Scroll down to the GitHub Pages section again to view the link to the deployed website (https://coderkatew.github.io/match-it/).<br>
The Master Branch is the branch used for development of this project.<br><br>


To clone this Match It from GitHub to run it locally:
* Go to the Match It repository here: coderkatew/match-it
* Click on the green 'Clone' button under the repository menu.
* Copy the clone URL.
* Open your local IDE.
* Open the terminal and change the current working directory to the location where you want to store the cloned directory.
* Using 'git clone', paste the clone URL into the terminal and click the return key.<br>
This creates a local clone of the project.<br><br>