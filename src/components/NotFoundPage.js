import React from 'react';
import { Link } from 'react-router-dom';

class NotFoundPage extends React.Component {
    constructor(props){
        super(props);
        this.NotFoundPage = this.NotFoundPage.bind(this);
    }
}

NotFoundPage = () => (
    <div>
        404 - <Link to="/">Go Home</Link>
    </div>
);

export default NotFoundPage;