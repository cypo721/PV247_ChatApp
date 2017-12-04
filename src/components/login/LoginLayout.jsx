import * as React from 'react';
import * as routes from '../../constants/routes';
import {LoginForm} from '../../containers-redux/login/LoginForm.jsx';
import {Loader} from '../../containers-redux/shared/Loader.jsx';
// import {Errors} from '../../containers-redux/shared/Errors.jsx';


class LoginLayout extends React.PureComponent {
    constructor(props) {
        super(props);
    }

    render() {
        const originalLocation = { pathname: routes.ROOT };
        return(
            <div className="container" key="form">
                <div className="row">
                    <div
                        className="jumbotron col-xs-12 col-md-8 col-md-push-2 col-lg-8 col-lg-push-2 text-center" height="70%">
                        <Loader stateLoadingSelector={state => state.shared.isAuthenticating}>
                            <h1>PV247 - 422612 ChatApp</h1>
                            <div>
                                <LoginForm from={originalLocation}/>
                            </div>
                        </Loader>
                        <br/>
                        <p className="modal-footer">2017</p>
                    </div>
                </div>
                {/*<div className="row">*/}
                    {/*<div className="col-sx-push-3 col-sx-6 col-md-8 col-md-push-2 col-lg-6 col-lg-push-3">*/}
                        {/*<Errors key="errors" />*/}
                    {/*</div>*/}
                {/*</div>*/}

            </div>
        );
    }
}

export {LoginLayout};
// const LoginLayout = ({ from }) => {
//     const originalLocation = from || { pathname: routes.ROOT };
//
//     return (
//         <div className="container" key="form">
//             <div className="row">
//                 <div
//                     className="jumbotron col-xs-10 col-xs-push-1 col-md-6 col-md-push-3 col-lg-4 col-lg-push-4 text-center">
//                     <Loader stateLoadingSelector={state => state.shared.isAuthenticating}>
//                         <h1>PV247</h1>
//                         <p>2017</p>
//                         <div>
//                             <LoginForm from={originalLocation}/>
//                         </div>
//                     </Loader>
//                 </div>
//             </div>
//             <div className="row">
//                 <div className="col-sx-push-3 col-sx-6 col-md-8 col-md-push-2 col-lg-6 col-lg-push-3">
//                     <Errors key="errors"/>
//                 </div>
//             </div>
//         </div>
//     );
// };

