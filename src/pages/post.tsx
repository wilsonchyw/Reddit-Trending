import Link from 'next/link';
import { Button, Col, Container, Image, Row } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Text from 'src/components/Text';
import type { Post } from 'src/types/Post';
import he from 'he';

interface Props {
    posts?: Post[];
    notFound?: boolean;
}

function parseDate(date) {
    const month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const _date = new Date(date);
    return _date.getDate() + ' ' + month[_date.getMonth()];
}

export default function BlogPost({ posts, notFound }: Props) {
    //const post = posts.at(-1)
    return (
        <Container className="my-5">
            <Hero />
            <Row id="blog-content">
                <Col md={12}>
                    {posts.map((post: Post) => (
                        <Card className="my-3 zoom" style={{ boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)' }}>
                            <Row className="no-gutters">
                                <Col lg={3} md={4} sm={6}>
                                    {post._embedded['wp:featuredmedia'] && (
                                        <Image
                                            fluid
                                            rounded
                                            style={{ objectFit: 'cover', minWidth: '100%', minHeight: '100%' }}
                                            src={post._embedded['wp:featuredmedia'][0].source_url.replace(
                                                'http://api.rtrend.site:4000',
                                                'https://api.rtrend.site/wordpress'
                                            )}
                                            alt={post.slug}
                                        />
                                    )}
                                </Col>
                                <Col lg={9} md={8} sm={6}>
                                    <Card.Body>
                                        <Card.Title>
                                            <Text fontSize="1.2rem" fontWeight={700} color="#2a2058">
                                                <Link href={`/post/${post.id}`}>{he.decode(post.title.rendered)}</Link>
                                            </Text>
                                        </Card.Title>
                                        <Card.Text className="small text-muted">
                                            Posted on {new Date(post.date).toDateString()} {/* <Tags tags={post.tags} /> */}
                                        </Card.Text>
                                        <Card.Text
                                            className="blog-frame mb-0"
                                            dangerouslySetInnerHTML={{ __html: he.decode(post.excerpt.rendered.replace('[&hellip;]', '...'))/* .replace('[&hellip;]', '') */ }}
                                        ></Card.Text>
                                        <Card.Text className="blog-readmore">
                                            <Link href={`/post/${post.id}`}>Read more →</Link>
                                        </Card.Text>
                                    </Card.Body>
                                </Col>
                            </Row>
                        </Card>
                    ))}
                </Col>
            </Row>
        </Container>
    );
}

function Hero() {
    return (
        <Container className="my-5">
            <Row>
                <Col md={6}>
                    <Row className="d-flex align-items-center h-100">
                        <div className="">
                            <Text fontSize="1.2rem" fontWeight={700} color="#47888a">
                                STAY AHEAD OF THE MARKET
                            </Text>
                            <br />
                            <Text fontSize="2.5rem" fontWeight={700} color="#2a2058">
                                Discover Financial Trends on Reddit
                            </Text>
                            <br />
                            <Text fontSize="1rem" fontWeight={500}>
                                Keep up-to-date with the latest financial trends on Reddit. Our website tracks the top financial subreddits so you can
                                stay informed and make better investment decisions.
                            </Text>
                            <p />
                            <BigRoundButton onClick={() => document.querySelector('#blog-content').scrollIntoView()} text="Read latest article">
                                Read blog
                            </BigRoundButton>
                        </div>
                    </Row>
                </Col>
                <Col md={6}>
                    <Image
                        fluid
                        rounded
                        style={{ objectFit: 'cover', minWidth: '100%', maxHeight: '90%' }}
                        src="blog.jpg"
                        alt="financial trends blog"
                    />
                </Col>
            </Row>
        </Container>
    );
    return (
        <div className="bg-primary text-white text-center mb-0 jumbotron">
            <h1 className="display-3 mb-3">Discover Financial Trends on Reddit</h1>
            <p className="lead mb-4">
                Stay ahead of the game and keep up-to-date with the latest financial trends on Reddit. Our website tracks the top financial subreddits
                so you can stay informed and make better investment decisions.
            </p>
            <Link href="/trends" className="btn btn-light btn-lg mb-4">
                Explore Trends
            </Link>
            <p className="mb-0">
                <small>
                    Don't have an account? <Link href="/">Sign Up</Link>
                </small>
            </p>
        </div>
    );
}
function BigRoundButton(props) {
    const { text, onClick } = props;

    return (
        <Button
            style={{ background: 'linear-gradient(81.62deg, #313860 2.25%, #151928 79.87%)' }}
            className="rounded-pill p-3"
            size="lg"
            onClick={onClick}
        >
            <Text fontSize="1rem">{text}</Text>
        </Button>
    );
}

/* export default function Summary({ posts, notFound }: Props): ReactElement {
    if (notFound) return <div>Error</div>;
    const isMobile = useAgent();
    return (
        <div>
            {!isMobile && <TagCloud />}
            <div className="p-3">
                {posts.map(post => (
                    <Col md={8} sm={11} className="mx-auto my-3 ">
                        <Card border="light" style={{ boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)' }}>
                            <Card.Body>
                                <h1>
                                    <Link href={`/post/${post.id}`}>{post.title.rendered}</Link>
                                </h1>
                                <div className="bg-light text-dark p-2 my-3">
                                    Posted on {new Date(post.date).toDateString()} <Tags tags={post.tags} />
                                </div>
                                <Card.Text
                                    className="blog-content"
                                    dangerouslySetInnerHTML={{ __html: post.excerpt.rendered.replace('[&hellip;]', '') }}
                                ></Card.Text>
                                <Card.Text className="blog-readmore">
                                    <Link href={`/post/${post.id}`}>Read more →</Link>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </div>
        </div>
    );
} */

function Introduction() {
    return (
        <Container className="my-5">
            <Row>
                <Col md={8}>
                    <h2 className="mb-3">Welcome to Our Financial Trends Blog</h2>
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
                    <Image
                        fluid
                        rounded
                        style={{ objectFit: 'cover', minWidth: '100%', minHeight: '100%' }}
                        src="blog.jpg"
                        alt="financial trends blog"
                    />
                </Col>
            </Row>
        </Container>
    );
}

function Footer() {
    return (
        <footer className="bg-dark text-white py-4">
            <Container>
                <Row>
                    <Col md={4}>
                        <h5>About Us</h5>
                        <p className="text-muted mb-4">
                            We are a team of financial experts who are passionate about helping people make better investment decisions. Our website
                            tracks the top financial subreddits on Reddit so you can stay informed and stay ahead of the game.
                        </p>
                    </Col>
                    <Col md={4}>
                        <h5>Recent Posts</h5>
                        <ul className="list-unstyled">
                            <li>
                                <a href="#">How to Build a Sustainable Investment Portfolio</a>
                            </li>
                            <li>
                                <a href="#">The Top Five Renewable Energy Stocks to Watch</a>
                            </li>
                            <li>
                                <a href="#">The Future of Cryptocurrency: Opportunities and Risks</a>
                            </li>
                        </ul>
                    </Col>
                    <Col md={4}>
                        <h5>Contact Us</h5>
                        <p className="text-muted mb-4">
                            Have a question or comment? Contact us at info@financialtrends.com or follow us on social media:
                        </p>
                        <ul className="list-inline mb-0">
                            <li className="list-inline-item">
                                <a href="#">
                                    <i className="fab fa-facebook fa-2x"></i>
                                </a>
                            </li>
                            <li className="list-inline-item">
                                <a href="#">
                                    <i className="fab fa-twitter fa-2x"></i>
                                </a>
                            </li>
                            <li className="list-inline-item">
                                <a href="#">
                                    <i className="fab fa-instagram fa-2x"></i>
                                </a>
                            </li>
                        </ul>
                    </Col>
                </Row>
            </Container>
            <div className="bg-secondary py-2">
                <Container>
                    <p className="text-center mb-0">&copy; 2022 Financial Trends. All rights reserved.</p>
                </Container>
            </div>
        </footer>
    );
}

function Tags({ tags }: { tags: string[] }) {
    if (!tags.length) return null;
    return tags.map(tag => (
        <span key={tag} classname="badge badge-secondary">
            {tag}
        </span>
    ));
}

export async function getStaticProps(context) {
    return fetch('https://api.rtrend.site/wordpress/wp-json/wp/v2/posts?_embed')
        .then(response => response.json())
        .then(posts => {
            return {
                props: {
                    posts
                } // will be passed to the page component as props
            };
        })
        .catch(err => {
            console.log(err)
            return {
                notFound: true // will be passed to the page component as props
            };
        });
}
