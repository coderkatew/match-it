
describe('Build array function', function () {
    beforeEach(function () {
        cardDeck = [
            "castle.jpg",
            "cat.jpg",
            "dragon.jpg",
            "frog.jpg",
            "gingerbread.jpg",
            "owl.jpg",
            "rabbit.jpg",
            "rainbow.jpg",
        ];
    });
    it('should return new array with 2 of each item in cardDeck array', function () {
        const allCards = cardDeck.concat(cardDeck);

        expect((allCards).length).toEqual(16);
    });
});

describe('Adding card to matchedCards array', function () {
    beforeEach(function () {
        matchedCards = ["castle.jpg",
            "cat.jpg",
            "dragon.jpg"];
 });
        it('should return the above array with owl.jpg added', function () {
            matchedCards.push("owl.jpg");

            expect((matchedCards).length).toEqual(4);
    });
});

