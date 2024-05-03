import "./App.css";
import TitleDisplay from "./components/Title";
import Main from "./pages/Main";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">    
      <Router>
        <TitleDisplay />
        <Routes>
          <Route path = "/" element = {<Main/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
