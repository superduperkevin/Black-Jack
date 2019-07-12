/* eslint-disable prefer-const */
function game() {
  console.log('=============Welcome to BlackJack!===============');
  function createDeck() {
    const tempDeck = [];
    // Deck generator function
    const suitArr = ['♠', '🖤', '🍀', '♦'];
    const valueArr = [2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, 11];
    for (let i = 0; i < suitArr.length; i++) {
      for (let j = 0; j < valueArr.length; j++) {
        const card = {
          suit: suitArr[i],
          value: valueArr[j],
        };
        tempDeck.push(card);
      }
    }
    return tempDeck;
  }
  let deck = createDeck();
  // Deck Shuffler
  //   function shuffleDeck(deck) {
  //     const newDeck = [...deck];
  //     return newDeck;
  //   }
  function createPlayer() {
    const tempPlayer = {
      hand: [],
      value: 0,
    };
    return tempPlayer;
  }
  let player = createPlayer();
  function createDealer() {
    const tempDealer = {
      hand: [],
      value: 0,
    };
    return tempDealer;
  }
  let dealer = createDealer();

  function playerHandGenerator() {
    let tempPlayerHand = [];
    // const dec = createDeck();
    for (let looper = 0; looper < 2; looper++) {
      tempPlayerHand.push(createDeck()[Math.floor(Math.random() * deck.length)]);
    }
    return tempPlayerHand;
  }
  let playerHand = playerHandGenerator();

  function dealerHandGenerator() {
    let tempDealerHand = [];
    for (let looper2 = 0; looper2 < 2; looper2++) {
      tempDealerHand.push(createDeck()[Math.floor(Math.random() * deck.length)]);
    }
    return tempDealerHand;
  }
  let dealerHand = dealerHandGenerator();

  function scoreCalculator() {
    let result = [];
    result.push(playerHand[0].value + playerHand[1].value);
    console.log(`Player: ${result}`);
    result.push(dealerHand[0].value + dealerHand[1].value);
    console.log(`Dealer: ${result[1]}`);
    if (result[0] > result[1]) {
      return console.log('Player Wins !!!');
    }
    if (result[0] < result[1]) {
      return console.log('Dealer wins !!!');
    }
    return console.log('Tie...');
  }
  scoreCalculator();
}

game();
