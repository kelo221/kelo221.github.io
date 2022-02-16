import React from 'react';
import 'bulma/css/bulma.min.css';
import './index.css'

import MainContent from "./components/mainContent";


function App() {
    return (
        <React.Fragment>

            <div>
                <section
                    className='hero is-fullheight is-family-  secondary'
                    style={{
                        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.7)), url("./img/sakura.avif")',
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        height: "100vh",
                        opacity: "0.5",
                        objectPosition: "100% 0",
                    }}>
                    <div className='hero-body'>
                        <div className='container'>
                            <h1 className='title has-text-white is-family-secondary'>
                                Lorem ipsum
                            </h1>
                            <h2 className='subtitle has-text-white is-family-secondary is-italic'>
                                Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquid ex ea commodi consequat. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </h2>
                        </div>
                    </div>
                </section>

                <section className='section section--gradient'>
                    <div className='container'>
                        <div className='columns'>


                        </div>
                    </div>
                </section>
            </div>


        </React.Fragment>
    );
}

export default App;

