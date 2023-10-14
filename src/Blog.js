import React from "react";
import App from './App';
import Admin from './adminPannel.js';
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";

function Blog(){
    return(
        <Router>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/Admin" element={<Admin />} />
            </Routes>
        </Router>
    )
}
export default Blog