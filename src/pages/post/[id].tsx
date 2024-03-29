import he from 'he';
import parse from 'html-react-parser';
import Head from 'next/head';
import { ReactElement } from 'react';
import { Col, Image } from 'react-bootstrap';
import buildCache from 'src/build';
import Divider from 'src/components/Divider';
import Netvigation from 'src/components/Post/Netvigation';
import Text from 'src/components/Text';
import type { Post } from 'src/types/Post';
import { useRouter } from 'next/router';

interface Props {
    post: Post;
    pre: { id: string; title: string } | null;
    next: { id: string; title: string } | null;
}

export default function PostContent({ post, pre, next }: Props): ReactElement {
    const router = useRouter();
    if (router.isFallback) {
        return <div>This page is in constructing...</div>;
    }



    return (
        <>
            <Head>{parse(post.yoast_head)}</Head>

            <Col md={6} sm={10} className="mx-auto mt-3  p-3">
                <Image
                    fluid
                    rounded
                    style={{ objectFit: 'cover', width: '100%', maxHeight: '30vh' }}
                    src={post._embedded['wp:featuredmedia'][0].source_url.replace('http://api.reddittrend.com:4000', 'https://api.reddittrend.com/wordpress')}
                    className="mx-auto"
                    alt={post.slug}
                />
                <Text fontWeight={700} fontSize={'2.5rem'}>
                    {post.title.rendered}
                </Text>
                <Divider />
                <Text color="grey">Posted on {new Date(post.date).toDateString()}</Text>
                <Divider />
                <div dangerouslySetInnerHTML={{ __html: he.decode(post.content.rendered) }}></div>
                {/* <div>
                    Share this:
                    <TwitterButton link={post.link} />
                </div> */}
                <Divider className="my-4" />
                <div className="d-flex justify-content-between">
                    {pre && (
                        <Netvigation post={pre}>
                            <Text fontWeight={700} fontSize="1.2rem" color="#313860">
                                ◄Previous
                            </Text>
                        </Netvigation>
                    )}
                    {next && (
                        <Netvigation post={next} style={{ marginLeft: 'auto', marginRight: 0, textAlign: 'end' }}>
                            <Text fontWeight={700} fontSize={'1.2rem'} color="#313860">
                                Next►
                            </Text>
                        </Netvigation>
                    )}
                </div>
            </Col>
        </>
    );
}

export async function getStaticProps({ params }) {
    //const newUrl = `https://reddittrend.com/post/${params.id}/`;
    let { post, pre, next } = await buildCache.get(params.id as string);
    if (!post) {
        console.log('Fetch post from API');
        const response = await fetch(`https://api.reddittrend.com/wordpress/wp-json/wp/v2/posts/${params.id}?_embed`);
        post = await response.json();
    }

    if (!post.id) {
        return {
            redirect: {
                destination: '/',
                permanent: false
                // statusCode: 301
            }
        };
    }
    console.log(post)
    if (!pre) pre = null;
    if (!next) next = null;
    //const preUrl = post.link;
    //post.yoast_head = post.yoast_head.replaceAll(preUrl, newUrl);
    return {
        props: { post, pre, next }
    };
}

export async function getStaticPaths() {
    const response = await fetch('https://api.reddittrend.com/wordpress/wp-json/wp/v2/posts?_embed');
    const posts = (await response.json()).map(post => {
        const { yoast_head, id, title, slug, date, content } = post;
        return {
            id,
            yoast_head,
            title,
            slug,
            date,
            content,
            _embedded: {
                'wp:featuredmedia': post._embedded['wp:featuredmedia']
            }
        };
    });

    try {
        await buildCache.set(posts);
    } catch (e) {
        console.log(e);
    }

    const paths = posts.map((post: Post) => ({
        params: { id: String(post.id) }
    }));
    return {
        paths,
        fallback: 'blocking'
    };
}
