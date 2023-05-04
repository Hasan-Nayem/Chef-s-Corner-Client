import React from 'react';
import {Page, Text, View, Document, StyleSheet} from '@react-pdf/renderer';
const styles = StyleSheet.create({
    body: {
        paddingTop: 35,
        paddingBottom: 65,
        paddingHorizontal: 35
    },
    title: {
        fontSize: 24,
        textAlign: "center"
    },
    text: {
        margin: 12,
        fontSize: 14,
        textAlign: "justify",
        fontFamily: "Times-Roman"
    },
    image: {
        marginVertical: 15,
        marginHorizontal: 100
    },
    header: {
        fontSize: 12,
        marginBottom: 20,
        textAlign: "center",
        color: "grey"
    },
    pageNumber: {
        position: "absolute",
        fontSize: 12,
        bottom: 30,
        left: 0,
        right: 0,
        textAlign: "center",
        color: "grey"
    }
});

const PDF = () => {
    return (
        <Document>
            <Page style={styles.body}>
                <Text style={styles.header} fixed="fixed"></Text>
                <Text style={styles.text}>
                    1. difference between uncontrolled and controlled components - 
                    Ans: In React, a controlled component is a component that is controlled by React state, while an
                    uncontrolled component is a component that maintains its own internal state.
                    Controlled components are used when we want to have more control over the form
                    elements. They are used when we want to validate the input data before
                    submitting it to the server. Uncontrolled components are used when we want to
                    have less control over the form elements. They are used when we don’t need to
                    validate the input data before submitting it to the server. {"\n"}{"\n"}
                    2. How to validate React props using PropTypes? 
                    Ans: We can use PropTypes to validate the props
                    passed to a component. PropTypes is a package that comes with React and it
                    allows you to specify the type of each prop that your component is expecting. We
                    can also specify whether a prop is required or not. we’re can use
                    PropTypes.string to specify that the message prop should be a string. We’re can
                    also use .isRequired to specify that the message prop is required. {"\n"} {"\n"}
                    3. The difference between nodejs and express js - Ans: Node.js is a platform for
                    building server-side applications using JavaScript. It is built on top of
                    Google’s V8 JavaScript engine and provides an event-driven, non-blocking I/O
                    model that makes it lightweight and efficient. Express.js is a framework based
                    on Node.js that provides a set of features for building web applications and
                    APIs. It provides a simple interface for handling HTTP requests and responses,
                    as well as support for middleware that can be used to add functionality to your
                    application. {"\n"} {"\n"}
                    4. Custom hook - 
                    Ans: Custom hook is a javaScript function that is called and written by ourselves, when we want to share logic between other JavaScript functions. According to the rules of hooks, you can’t call a
                    hook (like useState) inside a regular function

                </Text>
                <Text
                    style={styles.pageNumber}
                    render={({pageNumber, totalPages}) => `${pageNumber} / ${totalPages}`
}/>
            </Page>
        </Document>
    );
};

export default PDF;