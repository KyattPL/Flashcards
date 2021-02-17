import React from 'react';

import Card from 'react-bootstrap/Card';

function Flashcard() {
    return (
        <Card>
            <Card.Body>
                <Card.Title>Test</Card.Title>
                <Card.Subtitle>Additional info</Card.Subtitle>
                <Card.Text>Card info</Card.Text>
            </Card.Body>
        </Card>
    )
}

export default Flashcard;