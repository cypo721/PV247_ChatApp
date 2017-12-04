import * as React from 'react';
import * as PropTypes from 'prop-types';
import {uuid} from '../../utils/uuidGenerator';

class LoginForm extends React.PureComponent {
    static propTypes = {
        onSubmit: PropTypes.func.isRequired,
        onSubmitRegistration: PropTypes.func.isRequired,
    };

    componentWillMount() {
        this.setState(() => ({componentId: uuid(), email: ''}));
    }

    onChangeHandler = (event) => { this.setState({email: event.target.value}); }

    render() {
        const {componentId} = this.state;
        const loginId = `${componentId}_login`;

        return (
            <form>
                <div className="form-group">
                    <label
                        className="sr-only"
                        htmlFor={loginId}
                    >
                        E-mail
                    </label>
                    <div className="input-group">
                        <div className="input-group-addon">
                            <span className="glyphicon glyphicon-envelope" aria-hidden="true"></span>
                        </div>
                        <input
                            className="form-control"
                            type="email"
                            id={loginId}
                            placeholder="undefined@null.zero"
                            value={this.state.email}
                            onChange={this.onChangeHandler}
                        />
                    </div>
                </div>
                <button
                    type="button"
                    className="btn btn-success btn-lg"
                    onClick={this.onSubmit}
                >
                    Log in
                </button>
                &nbsp;&nbsp;&nbsp;
                <button
                    type="button"
                    className="btn btn-success btn-lg"
                    onClick={this.onSubmitRegistration}
                >
                    Register new account
                </button>
            </form>
        );
    }

    onSubmit = () => { this.props.onSubmit(this.state.email); }
    onSubmitRegistration = () => { this.props.onSubmitRegistration(this.state.email); }
}

export {LoginForm};