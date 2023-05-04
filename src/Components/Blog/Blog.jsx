import React from 'react';
import './Blog.css';
import PDF from '../PDF/PDF';
import { PDFDownloadLink } from '@react-pdf/renderer';

const Blog = () => {
    return (
        <>
            <h1 className="title">Question and Answers</h1>
            <div className="container main-content text-start">
                <h4>1. difference between uncontrolled and controlled components - </h4>
                <p>Ans: In React, a controlled component is a component that is controlled by React state, while an uncontrolled component is a component that maintains its own internal state.

                Controlled components are used when we want to have more control over the form elements. They are used when we want to validate the input data before submitting it to the server.

                Uncontrolled components are used when we want to have less control over the form elements. They are used when we don’t need to validate the input data before submitting it to the server.

                </p>

                <h4>2. How to validate React props using PropTypes?</h4>
                <p>Ans: We can use PropTypes to validate the props passed to a component. PropTypes is a package that comes with React and it allows you to specify the type of each prop that your component is expecting. We can also specify whether a prop is required or not. we’re can use <code>PropTypes.string</code> to specify that the message prop should be a string. We’re can also use <code>.isRequired</code>  to specify that the message prop is required</p>
                
                <h4>3. The difference between nodejs and express js - </h4>
                <p>Ans: Node.js is a platform for building server-side applications using JavaScript. It is built on top of Google’s V8 JavaScript engine and provides an event-driven, non-blocking I/O model that makes it lightweight and efficient.
                Express.js is a framework based on Node.js that provides a set of features for building web applications and APIs. It provides a simple interface for handling HTTP requests and responses, as well as support for middleware that can be used to add functionality to your application.</p>

                <h4>4. Custom hook - </h4>
                <p>Ans: Custom hook is a javaScript function that is customly called and written by ourselves, when we want to share logic between other JavaScript functions.  According to the rules of hooks, you can’t call a hook (like useState) inside a regular function</p>
                <PDFDownloadLink
                    document={<PDF></PDF>}
                    style={{ textDecoration:"none", color: "black" }}
                > 
                
                <button className="download-btn my-3">Download this as PDF</button>
                
                </PDFDownloadLink>
               
            </div>
        </>
    );
};

export default Blog;