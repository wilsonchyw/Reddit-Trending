import { Button, Col, Container, Row } from 'react-bootstrap';
export default function Footer() {
    return (
        <footer
            className="bg-primary text-white py-4"
            style={{ background: 'linear-gradient(81.62deg, rgb(49, 56, 96) 2.25%, rgb(21, 25, 40) 79.87%)' }}
        >
            <Container>
                <Row>
                    <Col md={12}>
                        <h5>About Us</h5>
                        <p className="text-light mb-2">
                            We are passionate about helping people make better investment decisions. Our website tracks the top financial subreddits
                            on Reddit so you can stay informed and stay ahead of the game.
                        </p>
                    </Col>
                </Row>
            </Container>
            <div className="py-2">
                <Container>
                    <p className="text-center mb-0 text-white">&copy; 2022 Reddit Trending. All rights reserved.</p>
                </Container>
            </div>
        </footer>
    );
}
