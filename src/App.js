import React, {useEffect, useState} from 'react';
import 'bulma/css/bulma.min.css';
import './index.css'
import {Route, Routes, useLocation, useNavigate} from 'react-router-dom'
import {AnimatePresence} from 'framer-motion'


import MainContent from "./components/mainContent";


function App() {

    const location = useLocation()
    const [pages] = useState(['/', '/birds', '/street'])
    const navigate = useNavigate()

    useEffect(function subscribeToWheelEvent() {
        const updateScroll = function (e) {

            //first get the current loaded page
            const pageIndex = (pages.indexOf(location.pathname))

            let touchValue = 0
            let scrollValue = 0

            //TODO (maybe...) choose direction by touch

            /*if (window.TouchEvent) {
                        touchValue = e.changedTouches[0].pageY
                        console.log("touch event")
                    }*/

            console.log("scroll event")
            scrollValue = e.deltaY

            console.log(scrollValue)

            if ((scrollValue > 0) || (!touchValue)) {
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
        window.addEventListener("touchend", updateScroll, false);
        window.addEventListener('wheel', updateScroll);
        return function () {
            window.removeEventListener('wheel', updateScroll);
            window.removeEventListener('touchend', updateScroll);
        }
    }, [location.pathname, navigate, pages])


    const pageIndex = (pages.indexOf(location.pathname))
    let downButtonPage
    let upButtonPage

    if (pageIndex === 0) {
        upButtonPage = (pages[pages.length - 1])
    } else {
        upButtonPage = (pages[pageIndex - 1])
    }

    if (pageIndex === pages.length - 1) {
        downButtonPage = (pages[0])
    } else {
        downButtonPage = (pages[pageIndex + 1])
    }

    return (


        <AnimatePresence>


            <Routes location={location} key={location.pathname}>
                <Route path="/" element={
                    <MainContent image={"sakura"}
                                 topic={"Hello"}
                                 breadtext={
                                     "Navigate using one of the following: touchscreen, scroll-wheel, or arrow buttons. \n" +
                                     "Very inclusive."
                                 }
                                 upButtonLink={upButtonPage}
                                 downButtonLink={downButtonPage}
                    />

                }/>

                <Route path="birds" element={
                    <MainContent image={"birds"}
                                 topic={"Technologies!"}
                                 breadtext={
                                     "This website is powered by React and Bulma, and Fontawesome icons that are integrated into Bulma.\n" +
                                     "Bulma automatically makes websites optimized for any kind of device: desktop pcs, mobile phones and tables, "+
                                     "might even look fancy on your IoT fridge!"
                                 }
                                 upButtonLink={upButtonPage}
                                 downButtonLink={downButtonPage}
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
                                 upButtonLink={upButtonPage}
                                 downButtonLink={downButtonPage}
                    />
                }/>

            </Routes>

        </AnimatePresence>
    );
}

export default App;