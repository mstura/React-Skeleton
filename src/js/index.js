import React from 'react';
import ReactDOM from 'react-dom';

class Layout extends React.Component {
    render(){
        return (
            <p>Hello World</p>
        );
    }
}

const app = document.getElementById('app');

ReactDOM.render(<Layout />, app);