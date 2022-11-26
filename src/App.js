import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
// import About from "./components/About";

import React, { useState } from "react";
import Alerts from "./components/Alerts";
// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "grey";
      showAlert("Dark Mode has been enabled. ", "success");
      document.title = "TextConverter- Dark Mode";

      // Change the title dynamically    // setInterval(() => {
      //   document.title = "TextConverter is amazing";
      // }, 2000);
      // setInterval(() => {
      //   document.title = "Install TextConverter";
      // }, 1500);
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode has been enabled. ", "success");
      document.title = "TextConverter- Light Mode";
    }
  };
  return (
    // <Router>
    <>
      <Navbar title="MySite" mode={mode} toggleMode={toggleMode} />
      <Alerts alert={alert} />
      <div className="container my-3">
        {/* <Routes> */}
        {/* <Route */}
        {/* path="/" */}
        {/* element={ */}
        <TextForm
          showAlert={showAlert}
          heading="Enter the text to analyze below"
          mode={mode}
        />
        {/* }
          {/* // ></Route> */}
        {/* <Route
            path="/about"
            element={<About toggleMode={toggleMode} />}
          ></Route>
        </Routes>
        </Router> */}
      </div>
    </>
  );
}

export default App;
