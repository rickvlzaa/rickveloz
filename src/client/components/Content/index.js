import React from 'react';

export default class Content extends React.Component {
    constructor(props) {
        super(props);

    }
    render() {
        return (
            <main>
                {this.props.children}
            </main>
            
        );
    }
}