import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function Introduction() {
    return (
        <Container className="my-5">
            <Row>
                <Col md={8}>
                    <h2 className="mb-3">Welcome to Our Financial Trends Tracker</h2>
                    <p className="lead">
                        In today's rapidly-changing financial landscape, it can be difficult to keep up with the latest trends and developments.
                        That's where our blog comes in. We provide you with up-to-date information on the hottest financial topics, so you can stay
                        ahead of the curve and make informed decisions about your investments.
                    </p>
                    <p className="lead">
                        Our team of experienced financial analysts and bloggers is dedicated to bringing you the most accurate and relevant
                        information. Whether you're a seasoned investor or just starting out, our blog is the perfect resource for staying informed
                        and making smart financial choices.
                    </p>
                </Col>
                <Col md={4}>
                    <img src="https://via.placeholder.com/300x300" alt="financial trends blog" className="img-fluid rounded-circle" />
                </Col>
            </Row>
        </Container>
    );
}

export default Introduction;
