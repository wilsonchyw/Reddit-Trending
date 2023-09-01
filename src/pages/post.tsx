import he from 'he';
import * as _Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { Button, Col, Container, Image, Row } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Pagination_ from 'src/components/home/Pagination';
import Text from 'src/components/Text';
import type { Post } from 'src/types/Post';

import { useSelector } from 'react-redux';
import { RootState } from 'src/store';

interface Props {
    posts?: Post[];
    notFound?: boolean;
}

export default function BlogPost({ posts, notFound }: Props) {
    const [itemsPerPage, setItemPerPage] = useState<number>(5);
    const [activePage, setActivePage] = useState(1);

    const { currentPage } = useSelector((state: RootState) => state.setting);
    // calculate the current page data
    const lastItem = currentPage * itemsPerPage;
    const firstItem = lastItem - itemsPerPage;

    const handlePageChange = pageNumber => {
        setActivePage(pageNumber);
    };

    return (
        <Container className="my-5">
            <Hero />
            <Row id="blog-content">
                <Col md={12}>
                    {posts.slice(firstItem, lastItem).map((post: Post) => (
                        <Card
                            key={post.id}
                            className="my-3 zoom"
                            style={{ boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)', overflow: 'hidden' }}
                        >
                            <Row className="no-gutters " style={{ maxHeight: '230px' }}>
                                <Col lg={3} md={4} sm={6} className="" style={{ maxHeight: '230px', minHeight: '100%', position: 'relative' }}>
                                    {post._embedded['wp:featuredmedia'] && (
                                        <_Image
                                            layout="fill"
                                            //style={{ objectFit: 'fill', minWidth: '100%', height: '-webkit-fill-available', maxHeight: '230px' }}
                                            src={(
                                                post._embedded['wp:featuredmedia'][0].media_details.sizes.medium ||
                                                post._embedded['wp:featuredmedia'][0].media_details.sizes.thumbnail
                                            ).source_url.replace('http://api.reddittrend.com:4000', 'https://api.reddittrend.com/wordpress')}
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
                                            className="mb-0 blog-frame"
                                            dangerouslySetInnerHTML={{
                                                __html: he.decode(post.excerpt.rendered.replace('[&hellip;]', '...')) /* .replace('[&hellip;]', '') */
                                            }}
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
            <Row className="mx-1">
                <Col className="d-flex justify-content-center">
                    <Pagination_ total={Math.ceil(posts.length / itemsPerPage)} />
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
                        //src="/blog.jpg"
                        src="/logos/logo-svg.svg"
                        alt="financial trends blog"
                    />
                </Col>
            </Row>
        </Container>
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

export async function getStaticProps(context) {
    return fetch('https://api.reddittrend.com/wordpress/wp-json/wp/v2/posts?_embed&per_page=100')
        .then(response => response.json())
        .then(posts => {
            posts = posts.map(post => {
                const { yoast_head, id, title, slug, date, excerpt } = post;
                return {
                    id,
                    //yoast_head,
                    title,
                    slug,
                    date,
                    excerpt,
                    _embedded: {
                        'wp:featuredmedia': post._embedded['wp:featuredmedia']
                    }
                };
            });
            return {
                props: {
                    posts
                }, // will be passed to the page component as props
                revalidate: 43200
            };
        })
        .catch(err => {
            console.log(err);
            return {
                notFound: true // will be passed to the page component as props
            };
        });
}
