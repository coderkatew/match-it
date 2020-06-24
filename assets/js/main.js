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
const allCards = cardDeck.concat(cardDeck);

/*-------- Timer ------*/

let time = setInterval(startCountdown, 1000);

function startCountdown() {
  var d = new Date();
  document.getElementById("timer").innerHTML = d.toLocaleTimeString();
}

class BoardGame {
  constructor() {
    this.matchedCards = [];
    this.totalTurns = 0;
    this.turns = document.getElementById("turns");
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
      this.onSubmitPlayerFormHandler.bind(this)
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
      li.textContent = `<span>${score.playeName}</span><span>${score.flips}</span><span>${score.time}</span>`;
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
    const addCard = document.getElementById("main-gameboard");

    allCards.forEach((imageName) =>
      addCard.insertAdjacentHTML(
        "beforeend",
        `<div class="card">
             <div class="card-back all-cards">
            <img src="assets/images/card-back.jpg"
                class="card-img">
            </div> 
            <div class="card-picture all-cards">
            <img class="card-value card-img"
                src="assets/images/${imageName}">
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
    this.fullDeck = cards;
  }

  beginGame() {
    this.checkCard = null;
    this.totalTurns = 0;
    this.allCards = [];
    this.cardDeck = [];
    this.matchedCards = [];
    this.busy = true;
    this.buildCards();
    this.shuffleDeck();
    setTimeout(() => {
      this.countDown = this.startCountDown();
      this.busy = false;
    }, 1000);
    this.turns.innerText = this.totalTurns;
    this.showBoardPanel();
  }

  startCountDown() {
    return setInterval(() => {
      this.timeRemaining--;
      this.timer.innerText = this.timeRemaining;
    }, 1000);
  }

  hideCard() {
    this.allCards.forEach((card) => {
      card.getElementsByClassName("card-back", "card-picture")
      card.classList.remove("visible");
    });
  }

  turnCard(card) {
    if (this.turnCardYes(card)) {
      this.totalTurns++;
      this.turns.innerText = this.totalTurns;
      card.classList.add("visible");
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
      console.log("NO MATCH");
    }
  }

  cardMatcher(card1, card2) {
    this.matchedCards.push(card1);
    this.matchedCards.push(card2);
    this.hideCard(card1);
    this.hideCard(card2);
    if (this.matchedCards.length === this.allCards.length)
      console.log("END OF GAME");
  }

  notAMatch(card1, card2) {
    this.busy = true;
    setTimeout(() => {
      card1.classList.remove("visible");
      card2.classList.remove("visible");
      this.busy = false;
    }, 600);
  }
    
  checkCardType(card) {
    return card.getElementsByClassName("card-value")[0].src;
  }
  

  shuffleDeck() {
    for (let i = this.cardDeck.length - 1; i > 0; i--) {
      let randomIndex = Math.floor(Math.random() * (i + 1));
      this.cardDeck[randomIndex].style.order = i;
      this.cardDeck[1].style.order = randomIndex;
      console.log("SHUFFLE");
    }
  }

  turnCardYes(card) {
    return (
      !this.busy && !this.matchedCards.includes(card) && card !== this.checkCard
    );
  }
}

const game = new BoardGame();
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
