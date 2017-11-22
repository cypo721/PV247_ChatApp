import '../node_modules/bootstrap/dist/css/bootstrap.css';

import ReactDom from 'react-dom';
import React from 'react';

class MyComponent extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-xs-12">
                        <h1>TODO List</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-12">To be implemented</div>
                </div>
                <div className="row">
                    <div className="col-xs-12">
                        <h5>PV247{' '}
                            <small>2017</small>
                        </h5>
                    </div>
                </div>
            </div>
        );
    }
}

ReactDom.render(<MyComponent/>, document.getElementById('app'));