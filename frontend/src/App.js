import "./App.css";
import Navbarr from "./components/Navbarr";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "./components/Form";
import FlightDetails from "./components/FlightDetails";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Chat from "./components/Chat";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbarr />
        <Routes>
          <Route path="/form" element={<Form />} />
          <Route path="/flightDetails" element={<FlightDetails />} />
          <Route path="/chat" element={<Chat />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
