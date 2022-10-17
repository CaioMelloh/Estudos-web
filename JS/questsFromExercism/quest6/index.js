
function removeItemFromTop(cards) {
  cards.pop();
return cards;
}

function insertItemAtBottom(cards, newCard) {
 cards.unshift(newCard)
 return cards;
}


function removeItemAtBottom(cards) {
 cards.shift();
 return cards;
}


function checkSizeOfStack(cards, stackSize) {
 return stackSize == cards.length;
}