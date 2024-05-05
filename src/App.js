import "./App.css";
import Main from "./pages/Main";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">    
      <Router>
        <Routes>
          <Route path = "/" element = {<Main/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
