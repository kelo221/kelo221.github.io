import React, {useEffect, useState} from 'react';
import 'bulma/css/bulma.min.css';
import './index.css'
import {Route, Routes, useLocation,useNavigate } from 'react-router-dom'
import {AnimatePresence} from 'framer-motion'



import MainContent from "./components/mainContent";



function App() {
    const location = useLocation()

    const pages = ['/', 'birds', 'street' ]
    const [currentPage, setPage] = useState(0)
    const [clickCheck, setClickCheck] = useState(false)


    const navigate = useNavigate()

    // Negative= Up, Positive = Down
    function windowClicker(delta) {

      if (!clickCheck){
          setClickCheck(true)
          if (currentPage === 0){
              setPage( 1)
          }else if ( currentPage === 1){
              setPage( 0)
          }

          console.log(currentPage)
          navigate(pages[currentPage])
      }

        setClickCheck(false)
    }

  /*  window.addEventListener('click', windowClicker, false);*/


    return (


        <AnimatePresence>



            <Routes location={location}   key={location.pathname}>
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
