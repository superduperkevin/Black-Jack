/* eslint-disable prefer-const */
function game() {
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
    const playerScore = playerHandGenerator()[0].value + playerHandGenerator;
    const dealerScore = dealerHandGenerator()[0].value;
    // playerHand[0].value;
    if (playerScore > dealerScore) {
      console.log();
    }
  }
  //   function dealCard() {
  //     return tempDeck.pop();
  //   }

  //   let result = scoreCalculator();
  //   function handleDisplay() {
  //     // let result = [];
  //     if (dealer.value > player.value) {
  //       console.log('Dealer WINS !!!');
  //       console.log(
  //         `Dealer Hand: ${dealer.hand[0].value} and ${dealer.hand[1].value}\n Total : ${dealer.value}`
  //       );
  //       console.log(
  //         `Player Hand: ${playerHand[0].value} and ${player.hand[1].value}\n Total : ${player.value}`
  //       );
  //     } else if (player.value > dealer.value) {
  //       console.log('Player WINS !!!');
  //       console.log(
  //         `Dealer Hand: ${dealer.hand[0].value} and ${dealer.hand[1].value}\n Total : ${dealer.value}`
  //       );
  //       console.log(
  //         `Player Hand: ${player.hand[0].value} and ${player.hand[1].value}\n Total : ${player.value}`
  //       );
  //     } else if (player.value === dealer.value) {
  //       console.log('Tie...');
  //       console.log(
  //         `Dealer Hand: ${dealer.hand[0].value} and ${dealer.hand[1].value}\n Total : ${dealer.value}`
  //       );
  //       console.log(
  //         `Player Hand: ${player.hand[0].value} and ${player.hand[1].value}\n Total : ${player.value}`
  //       );
  //     }
  //   }
  //   let result = handleDisplay();
  console.log(playerHand[0].value);
}

game();
