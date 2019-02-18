// Higher Oder Component (HOC) - A component that renders another component
import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => {
    return(
        <div>
            <h1>Info</h1>
            <p>The info is: {props.info}</p>
        </div>
    );
};

const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAdmin && <p>This is a private info. Please dont share!</p>}
            <WrappedComponent {...props} />
        </div>
    );
};

const requireAunthentication = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAuthenticated ? (
                <WrappedComponent {...props}/>
            ) : (
                <p>Please Login to view the info</p>
            )}
            <WrappedComponent {...props} />
        </div>
    );
};

// require Authentication
const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAunthentication(Info);

// ReactDOM.render(<AdminInfo isAdmin={true} info="These are the details" />, document.getElementById('app'));
ReactDOM.render(<AuthInfo isAuthenticated={false} info="These are the details" />, document.getElementById('app'));