// function Cards(suit, value) {
//   this.suit = suit || 0;
//   this.value = value || 0;
// }

const suitArr = ['♠', '🖤', '🍀', '♦'];
const valueArr = [2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, 11];
const deck = [];
for (let i = 0; i < suitArr.length; i++) {
  for (let j = 0; j < valueArr.length; j++) {
    const card = {
      suit: suitArr[i],
      value: valueArr[j],
    };
    deck.push(card);
  }
}
// console.log(deck);
function blackJack() {
  const dealer = {
    hand: [],
    value: 0,
  };

  const player = {
    hand: [],
    value: 0,
  };

  // Generating random card and putting it into each hand.

  for (let looper2 = 0; looper2 < 2; looper2++) {
    player.hand.push(deck[Math.floor(Math.random() * deck.length)]);
  }
  // player.value = player.hand;

  for (let looper = 0; looper < 2; looper++) {
    dealer.hand.push(deck[Math.floor(Math.random() * deck.length)]);
  }

  const playercard1 = player.hand[0];
  const playercard2 = player.hand[1];

  player.value = playercard1.value + playercard2.value;

  const dealercard1 = dealer.hand[0];
  const dealercard2 = dealer.hand[1];

  dealer.value = dealercard1.value + dealercard2.value;

  //   console.log(`Dealer Hand: ${dealer.value}`);
  //   console.log(`Player Hand: ${player.value}`);

  if (dealer.value > player.value) {
    console.log('Dealer Wins!!!');
    console.log(`Dealer Hand: ${dealer.hand[0].value} and ${dealer.hand[1].value} total : ${dealer.value}`);
    console.log(`Player Hand: ${player.hand[0].value} and ${player.hand[1].value} total : ${player.value}`);
  } else if (player.value > dealer.value) {
    console.log('Player Wins!!!');
    console.log(`Dealer Hand: ${dealer.hand[0].value} and ${dealer.hand[1].value} total : ${dealer.value}`);
    console.log(`Player Hand: ${player.hand[0].value} and ${player.hand[1].value} total : ${player.value}`);
  } else if (player.value === dealer.value) {
    console.log('Tie...');
    console.log(`Dealer Hand: ${dealer.hand[0].value} and ${dealer.hand[1].value} total : ${dealer.value}`);
    console.log(`Player Hand: ${player.hand[0].value} and ${player.hand[1].value} total : ${player.value}`);
  }
}

blackJack();
