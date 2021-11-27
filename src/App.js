import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import './App.css';
import About from "./Pages/Home/About/About";
import Home from "./Pages/Home/Home/Home";
import NavigationBar from "./Pages/Shared/NavigationBar/NavigationBar";

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home/>}>
        <Route path="home" element={<NavigationBar></NavigationBar>}></Route>
        <Route path="about" element={<About></About>}></Route>
        <Route path="login" element={<About></About>}></Route>
      </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
