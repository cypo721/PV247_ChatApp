import ReactDom from 'react-dom';
import React from 'react';

class MyComponent extends React.Component {
    render() {
        return (<h1>It works!</h1>)
    }
}

ReactDom.render(<MyComponent/>, document.getElementById('app'))