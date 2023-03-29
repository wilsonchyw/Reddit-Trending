import Link from 'next/link';
import React, { ReactElement } from 'react';
import { Col } from 'react-bootstrap';
import Text from 'src/components/Text';
interface Props {
    post: { id: string; title: string } | null;
    children?: React.ReactNode;
    style?: any;
    //children: any
    //content: string;
}

export default function Netvigation({ post, children, style }: Props): ReactElement {
    if (!post) return <div style={style}></div>;
    return (
        <Link href={`/post/${post.id}`} passHref>
            <Col md={3} sm={12} className="d-flex flex-column" style={style}>
                {children}

                <div>
                    <Text fontWeight={500} fontSize={'1rem'}>
                        {post.title}
                    </Text>
                </div>
            </Col>
        </Link>
    );
}
