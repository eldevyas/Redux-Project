import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { connect, useSelector, useDispatch } from 'react-redux';
import * as Pages from "./utils/Pages"
import Menu from './utils/Menu';


const Interface = () => {
  return (
    <BrowserRouter>
        <div className="Countries">
            <h1>
                Countries
            </h1>
                <Menu/>
                <div className='Pages'>
                    <Routes>
                        <Route path="/" element={<Pages.P1 />} />
                        <Route path="/P1" element={<Pages.P1 />} />
                        <Route path="/P2" element={<Pages.P2 />} />
                        <Route path="/P3" element={<Pages.P3 />} />
                        <Route path="/P4" element={<Pages.P4 />} />
                        <Route path="*" element={<>No Page Inside.</>} />
                    </Routes>
                </div>
        </div>
    </BrowserRouter>
  )
}

export default Interface;