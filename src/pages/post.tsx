import Link from 'next/link';
import { ReactElement } from 'react';
import { Col } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import TagCloud from 'src/components/TagCloud';
import useAgent from 'src/lib/useAgent';

interface Props {
    posts?: any;
    notFound?: boolean;
}

function parseDate(date) {
    const month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const _date = new Date(date);
    return _date.getDate() + ' ' + month[_date.getMonth()];
}

export default function Summary({ posts, notFound }: Props): ReactElement {
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
    return fetch('http://api.rtrend.site:4000/wp-json/wp/v2/posts')
        .then(response => response.json())
        .then(posts => {
            return {
                props: {
                    posts
                } // will be passed to the page component as props
            };
        })
        .catch(err => {
            return {
                notFound: true // will be passed to the page component as props
            };
        });
}
