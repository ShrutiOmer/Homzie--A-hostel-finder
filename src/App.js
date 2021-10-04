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
//import Navbar from "./Components/Navbar/Navbar";
// import Footer from "./Components/Footer/Footer";

import LoginPage from "./Pages/LoginPage/Login";
import RegisterPage from "./Pages/RegisterPage/Register";
import ResetPage from "./Pages/ResetPage/ResetPage"
import FindPage from "./Pages/FindPage/findpage"
import RecomPage from "./Pages/RecomPage/RecomPage"
import HostelPage from "./Pages/HostelPage/HostelPage"

function App() {
  return (
    <Router>
      {/* <Navbar /> */}
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/reset" component={ResetPage} />
        <Route exact path="/register" component={RegisterPage} />
        <Route exact path="/findpage" component={FindPage} />
        <Route exact path="/recompage" component={RecomPage} />
        <Route exact path="/hostelpage" component={HostelPage} />
        <Route component={NotFoundPage} />
      </Switch>
      {/* <Footer /> */}
    </Router>
  );
}

export default App;