import React from "react";
import ReactDOM from "react-dom";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    useParams
} from "react-router-dom";

function BlogPost() {
    let { slug } = useParams();
    return <div>Now showing post {slug}</div>;
}

export default function Test() {
    return (
        <Router>
            <Switch>
                <Route path="/blog/:slug">
                    <BlogPost />
                </Route>
            </Switch>
        </Router>
    );
}