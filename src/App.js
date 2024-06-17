import logo from "./logo.svg";
import "./App.css";
import Body from "./components/Body";
import { Provider } from "react-redux";
import {
  Routes,
  Route,
  BrowserRouter as Router,
  RouterProvider,
} from "react-router-dom";
import store from './utils/store'
import MainContainer from "./components/MainContainer";
import Watchpage from "./components/Watchpage";
import SearchResultContainer from "./components/SearchResultContainer";


const App = () =>{
 return (
  <Provider store={store}>

  <Router>
     <Routes>
          <Route path="/" element={<Body/>}>
          <Route path="/" element={<MainContainer/>}></Route>
          <Route path="/watch" element={<Watchpage/>}></Route>
          <Route path="/results" element={<SearchResultContainer/>}></Route>
          
          </Route>

     </Routes>
  </Router>
  </Provider>
 )

}


export default App;
