
const cardDeck = ['assets/images/castle.jpg', 'assets/images/cat.jpg', 'assets/images/dragon.jpg', 'assets/images/frog.jpg', 'assets/images/gingerbread.jpg', 'assets/images/owl.jpg', 'assets/images/rabbit.jpg', 'assets/images/rainbow.jpg'];
const allCards = cardDeck.concat(cardDeck);

let playername = localStorage.getItem('name');
function player() {
    console.log(playername);
}

class PlayGame {
    constructor() {
    this.allCards = [];
    this.matchedCards = [];
    this.totalTurns = 0;
    this.turns = document.getElementById('turns');
    
}


buildCards() {
    const addCard = document.getElementById('main-gameboard');

    allCards.forEach(
      (href) => addCard.insertAdjacentHTML('beforeend',
        `<div class="card">
             <div class="card-back all-cards">
            <img src="assets/images/card-back.jpg"
                class="card-img">
            </div> 
            <div class="card-picture all-cards">
            <img class="card-value card-img"
                src="${href}">
            </div>
            </div>`,)
        );

    let cards = Array.from(document.getElementsByClassName('card'));
    
         cards.forEach((card) => {
            card.addEventListener('click', () => {
                this.turnCard(card);
            });
        });
    this.fullDeck = cards;
}

beginGame() {
    this.checkCard = null;
    this.totalTurns = 0;
    this.matchedCards = [];
    this.busy = true;
    this.hideCards();
    this.buildCards();
    this.shuffleDeck();
  
    this.turns.innerText = this.totalTurns;
    
}

hideCard() {
        this.allCards.forEach((card) => {
            card.classList.remove('visible');
            card.classList.remove('matched');
        });
    }

turnCard(card) {
    if (this.turnCardYes(card)) {
            this.totalTurns++; 
            this.turns.innerText = this.totalTurns;
            card.classList.add('visible'); 
            if (this.checkCard) {
                this.checkForMatch(card);
                console.log("CHECK MATCH");
            } else {
                this.checkCard = card;
                this.checkForMatch();
                console.log("CHECK MATCH2");
            }
        }
    }

checkForMatch(card) {
        if (this.checkCardType(card) === this.checkCardType(this.checkCard)) {
            this.cardMatcher(card, this.checkCard);
        } else {
            this.notAMatch(card, this.checkCard);
            this.checkCard = null;
            console.log('NO MATCH')}
    }

cardMatcher(card1, card2) {
        this.matchedCards.push(card1);
        this.matchedCards.push(card2);
        if (this.matchedCards.length === this.allCards.length)
            console.log("END OF GAME");
    }

notAMatch(card1, card2) {
        this.busy = true;
        setTimeout(() => {
            card1.classList.remove('visible');
            card2.classList.remove('visible');
            this.busy = false;
        }, 900);
    }

shuffleDeck(allCards) { 
        for (let i = this.allCards.length - 1; i > 0; i--) {
            let randomIndex = Math.floor(Math.random() * (i + 1));
            this.allCards[randomIndex].style.order = i; 
            this.allCards[1].style.order = randomIndex;
            console.log("SHUFFLE");
        }
    }
    
checkCardType(card) {
        return card.getElementsByClassName('card-value')[0].src;
        console.log("CARD TYPE");
}

turnCardYes(card) {
        return !this.busy && !this.matchedCards.includes(card) && card !== this.checkCard;
    };
};


function begin() {
    const overlay = Array.from(document.getElementsByClassName('overlay-text'));
    /*--const button = document.getElementById('submit');--*/
    const newGame = new PlayGame(); 

  overlay.forEach((overlay) => {
    overlay.addEventListener('click', () => {
      overlay.classList.remove('visible');
      newGame.buildCards();
    });
  });
}

function closeForm() {
  document.getElementById("username").style.display = "none";
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', begin());
} else {
    begin();
}