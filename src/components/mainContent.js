import React from 'react'
import 'bulma/css/bulma.min.css';
import {motion} from 'framer-motion'


import {Link, Navigate} from 'react-router-dom';

const mainContent = ({image, topic, breadtext}) => {




    return (
        <motion.div intial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}>


            <section



                className='hero is-fullheight is-family-  secondary'
                style={{
                    backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.7)), url( ./img/' + image + '.avif )',
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    height: "100vh",
                    opacity: "0.5",
                    objectPosition: "100% 0",
                }}>
                <div className='hero-body'>
                    <div className='container'>
                        <h1 className='title has-text-white is-family-secondary'
                            style={{textShadow: "1px 1px 2px black",}}>
                            {topic}
                        </h1>
                        <h2 className='subtitle has-text-white is-family-secondary is-italic'
                            style={{textShadow: "1px 1px 2px black",}}
                        >
                            {breadtext}
                        </h2>
                    </div>

                </div>
                <Link to="/birds" className="btn btn-primary has-text-white is-family-secondary is-italic">Go to birds</Link>
                <Link to="/" className="btn btn-primary has-text-white is-family-secondary is-italic">Go to sakura</Link>
                <Link to="/street" className="btn btn-primary has-text-white is-family-secondary is-italic">Go to street</Link>

            </section>
        </motion.div>
    )
}

export default mainContent