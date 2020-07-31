import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { Card, CardHeader, CardBody, CardFooter, Row, Col } from 'reactstrap'

function PostSingle() {
    const [post, setPost] = useState({})
    const [comments, setComments] = useState([])
    const { id } = useParams()
    const getData = () => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(res => setPost(res.data))

        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
            .then(res => setComments(res.data))
    }
    useEffect(() => { getData() }, [])
    return (
        <div>
            <Card>
                <CardHeader>
                    <h2>
                        {post.title}
                    </h2>
                </CardHeader>

                <CardBody>
                    <p>
                        {post.body}
                    </p>
                </CardBody>

                <CardFooter>
                    {post.userId}
                </CardFooter>
            </Card>

            <Row>

                {
                    comments.map(comment =>
                        <Col key={comment.id} xs={12} className='p-3 border'>
                            <div>
                                Comment by: {comment.name}
                            </div>

                            <div>
                                Email: {comment.email}
                            </div>

                            <div>
                                Email: {comment.body}
                            </div>
                        </Col>
                    )

                }

            </Row>
        </div>
    )
}

export default PostSingle
