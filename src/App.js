
import './App.css';

import NavBar from "./component/nav/NavBar";

import Contact from "./component/Contact/Contact";

import WebRouter from "./component/route/Web";


function App() {
  return (
    <div className="App">
      <main>
        <Contact />
      <div className="main-content">
        <NavBar />
        {/*<About />*/}


        <WebRouter />
      </div>
    </main>
    </div>
  );
}

export default App;
