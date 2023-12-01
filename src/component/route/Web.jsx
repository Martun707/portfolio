import {Route, Routes} from "react-router-dom";
import About from "../About/About";
import Portfolio from "../Paje/Portfolio";

import ContactMap from "../Paje/ContactMap";

export default function WebRouter(){
    return(
        <>
            <Routes path="/">
                <Route path="/" element={<About />}/>
                <Route path="/portfolio" element={<Portfolio />}/>

                <Route path="/contact" element={<ContactMap />}/>
            </Routes>
        </>
    )
}