import React from 'react'
import {
    BrowserRouter,
    Switch,
    Route,
} from "react-router-dom";
import Header from './Header'
import Footer from './Footer'
import PostArchive from '../Views/Post-Archive/PostArchive'
import PostSingle from '../Views/Post-Single/PostSingle'
import { Container } from 'reactstrap';
import Users from '../Views/Users/Users';

function index() {
    return (
        <BrowserRouter>
            <Header />
            <Container>
                <Switch>
                    <Route path='/users/:id'>

                    </Route>

                    <Route path='/posts/:id'>
                        <PostSingle/>
                    </Route>

                    <Route exact path='/posts'>
                        <PostArchive />
                    </Route>

                    <Route exact path='/users'>
                        <Users/>
                    </Route>

                    <Route exact path='/todos'>

                    </Route>

                    <Route exact path='/'>

                    </Route>
                </Switch>
            </Container>
            <Footer />
        </BrowserRouter>
    )
}

export default index
