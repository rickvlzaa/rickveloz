import React from 'react';

export default class Home extends React.Component {
    render() {
        return (
            <div>
                <section>
                    <h2>Full-Stack JavaScript</h2>
                    <p>Hello, My name's Rick. I'm a web developer from Chicago. I design, build and operate full-stack web applications.</p>
                </section>
                <section>
                    <h2>Tech</h2>
                    <article>
                        <h3>languages, libraries and frameworks</h3>
                        <ul>
                            <li>JavaScript</li>
                            <li>Node.js</li>
                            <li>React</li>
                            <li>Redux</li>
                            <li>Express</li>
                            <li>Vue.js</li>
                        </ul>
                    </article>
                    <article>
                        <h3>Databases and Storage</h3>
                        <ul>
                            <li>MongoDB</li>
                            <li>Redis</li>
                            <li>MySQL</li>
                        </ul>
                    </article>
                    <article>
                        <h3>Other</h3>
                        <ul>
                            <li>Webpack</li>
                            <li>Git</li>
                        </ul>
                    </article>
                </section>
                <section>
                    <h2>Recent Work</h2>
                </section>
            </div>
        );
    }
}
