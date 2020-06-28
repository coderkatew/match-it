/*This array contains the image source links for the cards so that they can be retrieved and inserted into the HTML 
when the cards are created below*/
const cardDeck = [
    "castle.jpg",
    "cat.jpg",
    "dragon.jpg",
    "frog.jpg",
    "gingerbread.jpg",
    "owl.jpg",
    "rabbit.jpg",
    "rainbow.jpg",
];

class BoardGame {
    constructor(totalTime) {
        this.fullDeck = [];
        this.totalTurns = 0;
        this.totalTime = totalTime;
        this.timeLeft = totalTime;
        this.turns = document.getElementById("turns"); 
        this.timer = document.getElementById("time-left"); 
        this.configuration = null;
        this.playerPanel = document.getElementById("playerPanel");
        this.boardPanel = document.getElementById("main-gameboard");
    }

    start() {
        this.addListeners();
        this.loadConfiguration();
        this.showPlayerPanel();
    }

    addListeners() {
        let playerForm = document.getElementById("playerForm");
        playerForm.addEventListener(
            "submit",
            this.onSubmitPlayerFormHandler.bind(this) // Returns bound function that will be invoked later
        );
    }

    loadConfiguration() {
        this.configuration = localStorage.getItem("board-game");
        if (!this.configuration) {
            // Set configuration to the default value
            this.configuration = {
                playerName: "",
                scores: [],
            };
        } else {
        }
    }

    showPlayerPanel() {
        document.getElementById("playerName").value = this.configuration.playerName;
        this.renderScores();
        this.boardPanel.classList.toggle("d-none", true);
        this.playerPanel.classList.toggle("d-none", false);
    }

    showBoardPanel() {
        this.playerPanel.classList.toggle("d-none", true);
        this.boardPanel.classList.toggle("d-none", false);
    }

    renderScores() {
        let scoresContainer = document.getElementById("scores");
        let list = document.createElement("ul");
        this.configuration.scores.forEach((score, index) => {
            let li = document.createElement("li");
            li.textContent = `<span>${score.playerName}</span><span>${score.flips}</span><span>${score.time}</span>`;
            list.appendChild(li);
        });
        scoresContainer.appendChild(list);
    }

    onSubmitPlayerFormHandler(event) {
        event.stopImmediatePropagation();
        event.preventDefault();

        this.configuration.playerName = event.target[0].value;

        this.beginGame();
        console.log(event);
    }


    buildCards() {
        const allCards = cardDeck.concat(cardDeck); // Creates a new array by adding the cardDeck array to itself so there is a duplicate of each image and the cards can be matched.
        const addCard = document.getElementById("main-gameboard");
        //addCard.innerHTML = ""; removes cards but need to keep timer and turn counts
        //insertAdjacentHTML inserts the following HTML for each item in the concatenated allCards array using the appropriate image file
        allCards.forEach((imageName) =>
            addCard.insertAdjacentHTML(
                "beforeend",
                `<div class="card">
             <div class="card-back all-cards">
            <img src="assets/images/card-back.jpg"
                class="card-img" alt="Hidden card">
            </div> 
            <div class="card-picture all-cards">
            <img class="card-value card-img"
                src="assets/images/${imageName}" alt="Picture card">
            </div>
            </div>`
            )
        );

        let cards = Array.from(document.getElementsByClassName("card"));
        
        cards.forEach((card) => {
            card.addEventListener("click", () => {
                this.turnCard(card);
            });
        });
        this.fullDeck = cards; //This new array of HTML cards is used by the game action functions 
    }

    beginGame() {
        this.checkCard = null;
        this.totalTurns = 0;
        this.timeLeft = this.totalTime;
        this.matchedCards = [];
        this.busy = true;
        setTimeout(() => {
            this.shuffleDeck(this.fullDeck);
            this.countDown = this.startCountDown();
            this.busy = false;
        }, 700);
        this.hideCard();
        this.timer.innerText = this.timeLeft;
        this.turns.innerText = this.totalTurns;
        this.showBoardPanel();
        this.buildCards();
        this.subscribeButton();
    }
//Used button here temporarily rather than input as input caused the page to refresh and the game to restart
subscribeButton() {
        document.getElementById("email-subscribe").addEventListener("click", function(){ 
        let button = document.getElementById('subscribe-submit');
        button.value = 'Success!';
        button.disabled = true;
        });
    }

    startCountDown() {
        return setInterval(() => {
            this.timeLeft--;
            this.timer.innerText = this.timeLeft;
            if (this.timeLeft === 0)
                this.gameOver();
        }, 1000);
    }

    gameOver() {
        clearInterval(this.countDown);
        
        document.getElementById('game-over').classList.add('visible');
        this.showPlayerPanel();
       
        //need to clear cards and hide form when overlay is displayed
    }

    gameWin() {
        clearInterval(this.countDown);
        document.getElementById('game-win').classList.add('visible');
         this.showPlayerPanel();
    }

    hideCard() {
        this.fullDeck.forEach((card) => {
            card.classList.remove('visible');
        });
    }

    turnCard(card) {
        if (this.turnCardYes(card)) {
            this.totalTurns++;
            this.turns.innerText = this.totalTurns;
            card.classList.add('visible');
            if (this.checkCard) {
                this.checkForMatch(card);
            } else {
                this.checkCard = card;
            }
        }
    }

    checkForMatch(card) {
        if (this.checkCardType(card) === this.checkCardType(this.checkCard)) {
            this.cardMatcher(card, this.checkCard);
        } else {
            this.notAMatch(card, this.checkCard);
            this.checkCard = null;
        }
    }

    cardMatcher(card1, card2) {
        this.matchedCards.push(card1);
        this.matchedCards.push(card2);
        setTimeout(() => {
            card1.classList.add("invisible");
            card2.classList.add("invisible");
        }, 100);
        this.checkCard = null;
        if (this.matchedCards.length === this.fullDeck.length)
            this.gameWin();
    }

    notAMatch(card1, card2) {
        this.busy = true;
        setTimeout(() => {
            card1.classList.remove("visible");
            card2.classList.remove("visible");
            this.busy = false;
        }, 500);
    }

    checkCardType(card) {
        return card.getElementsByClassName("card-value")[0].src;
    }

    shuffleDeck() {
        for (let i = this.fullDeck.length - 1; i > 0; i--) {
            let randomIndex = Math.floor(Math.random() * (i + 1));
            this.fullDeck[randomIndex].style.order = i;
            this.fullDeck[1].style.order = randomIndex;
        }
    }

    turnCardYes(card) {
        return (
            !this.busy && !this.matchedCards.includes(card) && card !== this.checkCard
        );
    }
}

const game = new BoardGame(18);
game.start();




/*------ BUBBLE SORT
let bubbleSort = (yourArray) => {
   let arrSize = yourArray.length; //this will give you the first N
   let swapped;
   do {
      swapped = false;
      for(let i = 0; i < arrSize; i++){
          if(yourArray[i] > yourArray[i + 1]){
            //where the swap happens
            let tmp = yourArray[i];
             yourArray[i] = yourArray[i+1];
             yourArray[i+1] = tmp;
             swapped = true;
          }
      }
   } while(swapped);
   return yourArray;
} -----*/
