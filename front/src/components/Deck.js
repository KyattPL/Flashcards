import React from 'react';

import CardDeck from 'react-bootstrap/CardDeck';

import Flashcard from './Flashcard.js';

function Deck() {
    return (
        <CardDeck>
            <Flashcard />
            <Flashcard />
            <Flashcard />
            <Flashcard />
        </CardDeck>
    );
}

export default Deck;