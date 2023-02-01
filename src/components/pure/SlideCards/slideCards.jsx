import React from "react";
import { Card } from "react-bootstrap";
import "./slideCards.scss";

const SlideCards = ({ cardImg, cardDate, cardText, cardTitle }) => {
    return (
        <div className="slide-card col-md">
            <Card style={{ width: "20rem" }}>
                <Card.Img variant="top" src={cardImg} />
                <Card.Body>
                    <Card.Title>{cardTitle}</Card.Title>
                    <Card.Subtitle className="mb-2 card-subtitle">
                        {cardDate}
                    </Card.Subtitle>
                    <Card.Text>{cardText}</Card.Text>
                    <Card.Link href="#" className="card-link">
                        Read More +
                    </Card.Link>
                </Card.Body>
            </Card>
        </div>
    );
};

export default SlideCards;
