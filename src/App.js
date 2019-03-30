import React, {Component} from 'react';
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
                <main>
                    <div className="intro">
                    <h1 className="headline">
                        Global SP Consulting
                    </h1>
                    <p className="tagline">
                        We connect from education to technology...
                    </p>
                    </div>
                    <div className="subintro">
                        <div className="subdesc"><a  href="#">START YOUR PROJECT WITH US</a></div>
                        <div className="subdesc"><a  href="#">HIRE PART-TIME/REMOTE ENGINEER</a></div>
                        <div className="subdesc"><a  href="#">CONSULTATION ON CAREER</a></div>
                    </div>
                </main>
                <footer className="footer">
                    <p>Posted by: Pooja Upadhyay Email us: <a href="mailto:globalspconsulting2019@gmail.com">
                        globalspconsulting2019@gmail.com</a>.</p>
                </footer>
            </div>
        );
    }
}

export default App;
