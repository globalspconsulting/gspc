import React, {Component} from 'react';
import logo from './logo.png';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="header">
                    <div className="container">
                        <ul id="menu">
                            <li className="site_name"><a href="index.html">GSPC</a></li>
                            <li className="link"><a href="#">&raquo; Services</a></li>
                            <li className="link"><a href="#">&raquo; Projects</a></li>
                            <li className="link"><a href="#">&raquo; Contact us</a></li>
                            <li className="link"><a href="#">&raquo; About us</a></li>
                        </ul>
                    </div>
                </header>
                <article className="content">
                    <div className="container">
                        <h1>
                            Global SP Consulting
                        </h1>
                        <p>Connecting education to technology </p>
                        <p> Site under construction </p>
                    </div>
                </article>
                <footer className="footer">
                    <p>Posted by: Pooja Upadhyay Email us: <a href="mailto:globalspconsulting2019@gmail.com">
                        globalspconsulting2019@gmail.com</a>.</p>
                </footer>
            </div>
        );
    }
}

export default App;
