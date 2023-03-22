import parse from 'html-react-parser';
import Head from 'next/head';
import { ReactElement } from 'react';
import { Col } from 'react-bootstrap';
import buildCache from 'src/build';
import Divider from 'src/components/Divider';
import Netvigation from 'src/components/Post/Netvigation';
import Text from 'src/components/Text';
import type { Post } from 'src/types/Post';

interface Props {
    post: Post;
    pre: { id: string; title: string } | null;
    next: { id: string; title: string } | null;
}

export default function PostContent({ post, pre, next }: Props): ReactElement {
    return (
        <>
            <Head>{parse(post.yoast_head)}</Head>
            <Col md={6} sm={10} className="mx-auto mt-3  p-3">
                <h1>{post.title.rendered}</h1>
                <Divider />
                <Text color="grey">Posted on {new Date(post.date).toDateString()}</Text>
                <Divider />
                <div dangerouslySetInnerHTML={{ __html: post.content.rendered }}></div>
                {/* <div>
                    Share this:
                    <TwitterButton link={post.link} />
                </div> */}
                <Divider />
                <div className="d-flex justify-content-between">
                    <Netvigation post={pre}>Previous</Netvigation>
                    <Netvigation post={next} style={{ marginLeft: 'auto', marginRight: 0, textAlign: 'end' }}>
                        Next
                    </Netvigation>
                </div>
            </Col>
        </>
    );
}

export async function getStaticProps({ params }) {
    const newUrl = `https://reddittrend.com/post/${params.id}/`;
    let { post, pre, next } = await buildCache.get(params.id as string);
    if (!post){
        const response = await fetch(`http://api.rtrend.site:4000/wp-json/wp/v2/posts?id=${params.id}`);
        post = await response.json();        
    }
    
    const preUrl = post.link;
    post.yoast_head = post.yoast_head.replaceAll(preUrl, newUrl);
    return {
        props: { post, pre, next }
    };
}

export async function getStaticPaths() {
    const response = await fetch('http://api.rtrend.site:4000/wp-json/wp/v2/posts');
    const posts = await response.json();
    await buildCache.set(posts);
    const paths = posts.map((post: Post) => ({
        params: { id: String(post.id) }
    }));
    return {
        paths,
        fallback: false
    };
}
