
# Project Testing

1. [Automated Testing](#Automated)

2. [Manual Testing](#Manual)

3. [User Stories](#User)

4. [Bugs](#Bugs)



## Automated Testing

### Validation Programs
* The project HTML file been tested using [W3C Markup Validator](https://validator.w3.org/). See results [here]().
* The project CSS file has been tested using [Jigsaw CSS Validator](https://jigsaw.w3.org/css-validator/). See results [here]().
* The project Javascript file has been tested using [JSHint](https://jshint.com/). See results [here]().

### Jasmine Testing
The files used to carry out Jasmine testing for this project can be found here:
* [Testing Folder](https://github.com/coderkatew/match-it/tree/master/testing/jasmine)
* [Jasmine HTML Boilerplate](https://github.com/coderkatew/match-it/blob/master/testing/jasmine/jasmine-boilerplate.html)
* [Jasmine Testing Spec](https://github.com/coderkatew/match-it/blob/master/testing/jasmine/spec/spec.js)<br>
To run the Jasmine tests for Match It:
* Clone the project to your local repository (see steps for cloning a repository in [Deployment section](#Deployment) below).
* Open the [Jasmine HTML Boilerplate file](https://github.com/coderkatew/match-it/blob/master/testing/jasmine/jasmine-boilerplate.html).
* Run a preview of the file to view the test results.<br>
I'd like to run more extensive Jasmine testing for the next phase of this project.

## Manual Testing
This project has been tested manually on desktop and mobile in Chrome and Firefox.

All images are under 5MB to ensure they load quickly.

## User Stories
Here are the steps and results from the testing carried based on the project user stories to determine that the game and functionalty are fit for purpose:
1. *As a player I want to play a game that involves using my memory so that I can improve my memory skills.*<br><br>

**Test and Result**
* Open the [Match It website](https://coderkatew.github.io/match-it/).
* Enter a player name and click 'Start Game'.
* Game screen is displayed.
* Click or Tap on cards to find matches.
* When the countdown timer has reached 0 or when all cards have been matched, the game feedback screen is displayed.
* Click to play again. New game screen is presented.


- Result: TBC

2. *As a player, I want to know how playing memory games can improve memory skills.*<br>

**Test and Result**
* Open the [Match It website](https://coderkatew.github.io/match-it/).
* Enter a player name and click 'Start Game'.
* Game screen is displayed.
Method 1: Click or tap on About at the top of the page (or the 'i' icon for mobile). The view will jump to the About section of the page. The About section contains some information about memory games and imrpoving memory skills.
Method 2: Scroll down the page to the About section. The About section contains some information about memory games and imrpoving memory skills.

- Result: TBC<br>

3. *As a player I want to see my score so that I can see if I am making progress.*<br>

**Test and Result**
* Open the [Match It website](https://coderkatew.github.io/match-it/).
* Enter a player name and click 'Start Game'.
* Game screen is displayed.
* Countdown timer is displayed at the top left of the gameboard.
* Turn counter is displayed at the top right of the gameboard.
* Click or Tap on cards to find matches.
* When the countdown timer has reached 0 or when all cards have been matched, the game feedback screen is displayed.
* The final game score is displayed on the feedback screen.

- Result: TBC<br>

4. *As a player I want a game that is intuitive and easy to use so that I can learn how to use it quickly.*<br>

**Test and Result**
Note: The result of this test may vary for different users so the goal for this test is to determine that the game works correctly and provides a consistent and smooth user experience.
* Open the [Match It website](https://coderkatew.github.io/match-it/).
* Enter a player name and click 'Start Game'.
* Game screen is displayed.
* Click or Tap on cards to find matches.
* When the countdown timer has reached 0 or when all cards have been matched, the game feedback screen is displayed.
* Click to play again. New game screen is presented.
* Consider: Is the game experience smooth or are some features difficult to use?
* Consider: Is it clear how the game works?
* Consider: Are the game features and interactions consistent in style and design?

- Result: TBC<br>

5. *As a player I want a game that is quick to play and mobile-friendly so that I can play it on my smartphone during my commute.*<br>

**Test and Result**
* Open the [Match It website](https://coderkatew.github.io/match-it/).
* Enter a player name and click 'Start Game'.
* Game screen is displayed.
* Click or Tap on cards to find matches.
* When the countdown timer has reached 0 or when all cards have been matched, the game feedback screen is displayed.
*Click to play again. New game screen is presented.
* Note the length of time taken to play the game.
* Note any display or navigation issues.
- Result: TBC

6. *As the game creator and site owner, I want to build my subscriber list so that I can promote new games that I make.*<br>
Note: The form on the site is not currently set up to post the details submitted so this test is to determine that the subscribe form is easy to find and clearly presented on screen.<br>

**Test and Result**
* Open the [Match It website](https://coderkatew.github.io/match-it/).
* Enter a player name and click 'Start Game'.
* Game screen is displayed.
Method 1: Click or tap on Subscribe at the top of the page (or the 'i' icon for mobile). The view will jump to the Subscribe section of the page. Enter an email address in the email address field. Click or tap Subscribe. The button text value will change to 'Success!'.
Method 2: Scroll down the page to the Subscribe  section. Enter an email address in the email address field. Click or tap Subscribe. The button text value will change to 'Success!'.

- Result: TBC<br>

## Bugs

## Resolved Bugs
I encountered the following bugs during development of this project:

**Issue 1**
* Problem: Game cards were displayed at a very small size and the grid didn't seem to resize to fit them.
* Cause: Card image sizes were not specified.
* Solution: Added card image max-height and max-width properties.

**Issue 2**
* Problem: The first card selected after every match was ignored.
* Cause: The first card selected after a match was checked against the first card of that previous match, rather than taking the position of card1 for the next match.
* Solution: Added 'this.checkCard = null;' to reset the card matcher after each new match.

**Issue 3**
* Problem: Card grid from the previous game persisted on screen and a new set of cards were added below it each time a new game was started.
* Cause: The card grid was not cleared before a new game was started.
* Solution:  TBC
<br><br><br>