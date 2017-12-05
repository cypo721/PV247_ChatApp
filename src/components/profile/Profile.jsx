import * as React from 'react';
import * as PropTypes from 'prop-types';
import {Avatar} from '../../containers-redux/profile/Avatar.jsx';
import {Details} from '../../containers-redux/profile/Details.jsx';
import {Loader} from '../../containers-redux/shared/Loader.jsx';
import Header from '../app/Header.jsx';
import {Link} from 'react-router-dom';

class Profile extends React.PureComponent {
    constructor(props) {
        super(props);
    }

    static propTypes = {
        fetchDetails: PropTypes.func.isRequired,
    };

    componentWillMount() {
        this.props.fetchDetails();
    }

    render() {
        return (
            <div>
                <Header email={localStorage.getItem('loggedUserEmail')}/>
                <div className="container">
                    <div className="col-xs-12 col-md-4" key="picture">
                        <Loader stateLoadingSelector={state => state.profile.isFetchingAvatar}>
                            <Avatar/>
                        </Loader>
                    </div>
                    <div className="col-xs-12 col-md-8" key="details">
                        <Loader stateLoadingSelector={state => state.profile.isFetchingDetails}>
                            <Details/>
                        </Loader>
                    </div>
                    <button className="col-xs-offset-5 col-xs-2 btn btn-alert center"><Link to="/"> Back to chat! </Link></button>
                </div>
            </div>
        );
    }
}

export {Profile};