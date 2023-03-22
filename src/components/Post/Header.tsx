import React, { ReactElement } from 'react'
import type {Post} from "src/types/Post"
import Head from 'next/head';
interface Props {
    post:Post
}

export default function Header({post}: Props): ReactElement {
    const oriLink = post.link
    const content = ""
    return <></>
}


