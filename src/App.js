import React, {useEffect, useState} from 'react';
import 'bulma/css/bulma.min.css';
import './index.css'
import {Route, Routes, useLocation, useNavigate} from 'react-router-dom'
import {AnimatePresence} from 'framer-motion'


import MainContent from "./components/mainContent";


function App() {
    const location = useLocation()

    const pages = ['/', '/birds', '/street']
    const [currentPage, setPage] = useState(0)

    const navigate = useNavigate()


    useEffect(function subscribeToWheelEvent() {
        const updateScroll = function (e) {

            //first get the current loaded page
            let pageIndex = (pages.indexOf(location.pathname))

            if (e.deltaY > 0) {
                // console.log("scroll down move one up in the index")

                // if we are on the last page move back to the first page
                if (pageIndex === pages.length - 1) {
                    navigate(pages[0])
                } else {
                    navigate(pages[pageIndex + 1])
                }

            } else {
                // console.log("scroll up move one down in the index")

                // if we are on the first page move back to the last
                if (pageIndex === 0) {
                    navigate(pages[pages.length - 1])
                } else {
                    navigate(pages[pageIndex - 1])
                }
            }


        }
        window.addEventListener('mousewheel', updateScroll);
        return function () {
            window.removeEventListener('mousewheel', updateScroll);
        }
    }, [currentPage, navigate, pages])


    return (


        <AnimatePresence>


            <Routes location={location} key={location.pathname}>
                <Route path="/" element={
                    <MainContent image={"sakura"}
                                 topic={"Lorem ipsum primus"}
                                 breadtext={
                                     "Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut\n" +
                                     "labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation\n" +
                                     "ullamco laboris nisi ut aliquid ex ea commodi consequat. Quis aute iure reprehenderit in\n" +
                                     "voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat\n" +
                                     "cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                                 }
                    />

                }/>

                <Route path="birds" element={
                    <MainContent image={"birds"}
                                 topic={"Lorem ipsum secundus"}
                                 breadtext={
                                     "Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut\n" +
                                     "labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation\n" +
                                     "ullamco laboris nisi ut aliquid ex ea commodi consequat. Quis aute iure reprehenderit in\n" +
                                     "voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat\n" +
                                     "cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                                 }
                    />
                }/>

                <Route path="street" element={
                    <MainContent image={"street"}
                                 topic={"Lorem ipsum tertius"}
                                 breadtext={
                                     "Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut\n" +
                                     "labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation\n" +
                                     "ullamco laboris nisi ut aliquid ex ea commodi consequat. Quis aute iure reprehenderit in\n" +
                                     "voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat\n" +
                                     "cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                                 }
                    />
                }/>

            </Routes>

        </AnimatePresence>
    );
}

export default App;
