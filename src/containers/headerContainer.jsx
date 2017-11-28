import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as PropTypes from 'prop-types';
//import { channelFetch } from '../actions/channelActionCreators';
import Header from '../components/app/Header.jsx';

class HeaderContainer extends Component {
    constructor(props) {
        super(props);
        //this.onClick = this.onClick.bind(this);
    }

    // onClick() {
    //     this.props.channelFetch();
    // }

    render() {
        return (
            <div>
                <Header email={this.props.email}/>
            </div>
        );
    }
}

HeaderContainer.propTypes = {
    email: PropTypes.string.isRequired
};

function mapStateToProps(state) {
    return {
        email: state.shared.email
    };
}

export default connect(mapStateToProps, {
})(HeaderContainer);