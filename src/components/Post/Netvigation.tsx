import React, { ReactElement } from 'react';
import { Row, Col } from 'react-bootstrap';
import Link from 'next/link';
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
        <Link href={`/post/${post.id}`}>
        <Col md={3} sm={12} className="d-flex flex-column" style={style}>
            
                <Text color={'blue'}>{children}</Text>
                <div>{post.title}</div>
            
        </Col>
        </Link>
    );
}