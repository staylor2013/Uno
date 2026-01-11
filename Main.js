 function generateUnoDeck() {
    const colors = ['Red', 'Green', 'Blue', 'Yellow'];
    const numbers = [...Array(10).keys()]; // 0-9
    const specialCards = ['Skip', 'Reverse', 'Draw Two'];
    const deck = [];
    let players = [
      {
        name:bot1;
    hand:[];
      }
      {
        name:bot2;
        hand:[];
      }
    {
      name:bot3;
      hand:[];
      }
    {
      name:you;
      hand:[];
    }
    ];

    // Add numbered cards
    for (color in colors){
        for (number in numbers){
          deck.push({color, type: 'Number', value: number});
          deck.push({color, type: 'Number', value: number});
        };
    }

        // Add special cards (Skip, Reverse, Draw Two) - 2 of each per color
        specialCards.forEach(special => {
            deck.push({color, type: special});
            deck.push({color, type: special});
        });
    });

    // Add wild cards
    for (let i = 0; i < 4; i++) {
        deck.push({color: 'Wild', type: 'Wild'});
        deck.push({color: 'Wild', type: 'Wild Draw Four'}); // +4
    }

    // Add shuffle cards (Wild Shuffle) - only 1 copy
    deck.push({color: 'Wild', type: 'Wild Shuffle'});

    // Shuffle the deck using Fisher-Yates algorithm
    for (let i = deck.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [deck[i], deck[j]] = [deck[j], deck[i]];
    }

    return deck;
}
function dealCards(array=deck){
  for (player in players) {
    
  }
}

const unoDeck = generateUnoDeck();
alert(unoDeck);
alert("Total cards:", unoDeck.length);
