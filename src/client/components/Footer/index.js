import React from 'react';

export default class Footer extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <footer>
                <nav>
                    <ul>
                        <li>Twitter</li>
                        <li>GitHub</li>
                        <li>GitLab</li>
                    </ul>
                </nav>
            </footer>
        );
    }
}