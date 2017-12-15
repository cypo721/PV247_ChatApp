import * as PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { LoginForm } from '../../components/login/LoginForm.jsx';
import { authenticateUser } from '../../actions/shared';
import {registerUserAccount} from '../../actions/shared/registerUser';

const mapDispatchToProps = (dispatch, ownProps) => ({
    onSubmit: (email) => dispatch(authenticateUser(ownProps.from, email)),
    onSubmitRegistration: (email) => dispatch(registerUserAccount(email))
});

const enhancer = connect(undefined, mapDispatchToProps);
const connectedComponent = enhancer(LoginForm);

connectedComponent.propTypes = {
    from: PropTypes.object.isRequired,
};

export { connectedComponent as LoginForm };
