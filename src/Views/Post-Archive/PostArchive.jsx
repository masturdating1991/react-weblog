import React, { useEffect, useState } from 'react'
import axios from 'axios'
import PostCard from '../../Components/PostCard/PostCard'
import { Row, Col } from 'reactstrap'

function PostArchive() {
    const [posts, setPosts] = useState([])
    const getPosts = () => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(res => setPosts(res.data))
    }
    useEffect(() => { getPosts() }, [])
    return (
        <div className='mt-3'>
            <Row xs={1} >
                {
                    posts.map(post =>
                        <Col className='mt-3' key={post.id}>
                            <PostCard  post={post} />
                        </Col>
                    )
                }

            </Row>
        </div>
    )
}

export default PostArchive
