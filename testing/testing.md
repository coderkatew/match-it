
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
* Enter a player name and click 'Play!'.
* Game screen is displayed.
* Click or Tap on cards to find matches.
* When the countdown timer has reached 0 or when all cards have been matched, the game feedback screen is displayed.
* Click to play again. New game screen is presented.


- Result: Game works as expected. There is delay with playing the audio when cards are clicked in quick succession - this is more obvious on mobile where it is easier to tap many cards quickly.
The audio file has been trimmed but this needs a more permanent fix. The full card grid is not displayed on some larger screens so the user has to scroll, this needs to be fixed.<br>

2. *As a player, I want to know how playing memory games can improve memory skills.*<br>

**Test and Result**
* Open the [Match It website](https://coderkatew.github.io/match-it/).
* Enter a player name and click 'Play!'.
* Game screen is displayed.
Method 1: Click or tap on About at the top of the page (or the 'i' icon for mobile). The view will jump to the About section of the page. The About section contains some information about memory games and imrpoving memory skills.
Method 2: Scroll down the page to the About section. The About section contains some information about memory games and imrpoving memory skills.

- Result: Both methods work as described. There's no interaction with the text section iself but the navigation is working correctly.<br>

3. *As a player I want to see my score so that I can see if I am making progress.*<br>

**Test and Result**
* Open the [Match It website](https://coderkatew.github.io/match-it/).
* Enter a player name and click 'Play!'.
* Game screen is displayed.
* Countdown timer is displayed at the top left of the gameboard.
* Turn counter is displayed at the top right of the gameboard.
* Click or Tap on cards to find matches.
* When the countdown timer has reached 0 or when all cards have been matched, the game feedback screen is displayed.
* The final game score is displayed on the feedback screen.

- Result: This works as described. The current player's score is highlighted on the scoreboard for comparison against the rest of the scores. 
The scoreboard is displayed at the bottom of the screen for some narrower screen sizes but as new game scores are added the scoreboard fills the screen.<br>

4. *As a player I want a game that is intuitive and easy to use so that I can learn how to use it quickly.*<br>

**Test and Result**
Note: The result of this test may vary for different users so the goal for this test is to determine that the game works correctly and provides a consistent and smooth user experience.
* Open the [Match It website](https://coderkatew.github.io/match-it/).
* Enter a player name and click 'Play'.
* Game screen is displayed.
* Click or Tap on cards to find matches.
* When the countdown timer has reached 0 or when all cards have been matched, the game feedback screen is displayed.
* Click to play again. New game screen is presented.
* Consider: Is the game experience smooth or are some features difficult to use?
* Consider: Is it clear how the game works?
* Consider: Are the game features and interactions consistent in style and design?

- Result: The game works as described, UI elements are clearly laid out and colors used for association between similar features. 
The green glow color fills the 'Play! button in Firefox and on mobile so it doesn't match the intended design but otherwise the game displays and functions the same way in both browsers.<br>

5. *As a player I want a game that is quick to play and mobile-friendly so that I can play it on my smartphone during my commute.*<br>

**Test and Result**
* Open the [Match It website](https://coderkatew.github.io/match-it/).
* Enter a player name and click 'Play'.
* Game screen is displayed.
* Click or Tap on cards to find matches.
* When the countdown timer has reached 0 or when all cards have been matched, the game feedback screen is displayed.
* Click to play again. New game screen is presented.
* Note the length of time taken to play the game.
* Note any display or navigation issues.

- Result: The duration of the game is short at 120 seconds and scores are stored after each game so the user will see their previous score the next time they play the game (unless they have been knocked out of the scoreboard). 
The game works as described on mobile and most games finish before the time is up.

6. *As the game creator and site owner, I want to build my subscriber list so that I can promote new games that I make.*<br>
Note: The form on the site is not currently set up to post the details submitted so this test is to determine that the subscribe form is easy to find and clearly presented on screen.<br>

**Test and Result**
* Open the [Match It website](https://coderkatew.github.io/match-it/).
* Enter a player name and click 'Play'.
* Game screen is displayed.
Method 1: Click or tap on Subscribe at the top of the page (or the 'i' icon for mobile). The view will jump to the Subscribe section of the page. Enter an email address in the email address field. Click or tap Subscribe. A confirmation message will be displayed.
Method 2: Scroll down the page to the Subscribe  section. Enter an email address in the email address field. Click or tap Subscribe. A confirmation message will be displayed.

- Result: This works as described for both methods. The message 'Thank you. You are now subscribed!' is displayed when the form has been submitted.<br>

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
* Solution: Restructured the gameboard so the game info (time and turns) and cards could be targeted separately and added the gameFinished function to remove the first set of cards when the game ended.


## Unresolved Bugs

**Issue 1**
* Problem: Partial card grid is display on screen for some screens wider than 2500px.
* Cause: CSS formatting and media queries.
* Solution: Extend the media queries section in the CSS file to include more device sizes.

**Issue 1**
* Problem: 'Pop' sound effect overlaps or seem to delay and play seconds later when cards are clicked in quick succession.
* Cause: The audio files are queued as the user clicks on them.
* Solution: Stop each file from playing as soon as another card is clicked and play the audio for that card only.

<br><br><br>