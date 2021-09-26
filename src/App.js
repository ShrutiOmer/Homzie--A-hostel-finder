// import './App.css';
// import React,{useState} from "react";
// import Navbar from './Components/Navbar/Navbar';
// import Dropdown from './Pages/HomePage/Dropdown';
// import HomePage from './Pages/HomePage/HomePage';
// // import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
// // import HomePage from "./Pages/HomePage/HomePage";
// // import NotFoundPage from "./Pages/NotFoundPage/NotFoundPage";
// // import Navbar from "./Components/Navbar/Navbar";
// // import Footer from "./Components/Footer/Footer";


// function App() {
  
//    return(
//     <div>
//       <Navbar/>
//       <Dropdown/>
//       <HomePage/>
//     </div>
     

     

     
     
//    );
// };



// export default App;
import './App.css';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import HomePage from "./Pages/HomePage/HomePage";
import NotFoundPage from "./Pages/NotFoundPage/NotFoundPage";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Steps from './Components/Steps/Steps';

function App() {
  return (
    <Router>
      <Navbar />
      <Steps />

      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route component={NotFoundPage} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;