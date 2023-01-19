import React, { useState } from "react";
import Navbar from "./Components/Navbar";
import News from "./Components/News";
import LoadingBar from "react-top-loading-bar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  const apiKey = process.env.REACT_APP_NEWS_API;

  let [progress, setProgresss] = useState(10);

  const setProgress = (prog) => {
    setProgresss((progress = prog));
  };

  return (
    <div>
      <Router>
        <Navbar />
        <LoadingBar color="#f11946" progress={progress} />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                key={"general"}
                pagesize={6}
                country={"us"}
                category={"general"}
              />
            }
          />
          <Route
            exact
            path="/home"
            element={
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                key={"general"}
                pagesize={6}
                country={"us"}
                category={"general"}
              />
            }
          />
          <Route
            exact
            path="/general"
            element={
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                key={"general"}
                pagesize={6}
                country={"us"}
                category={"general"}
              />
            }
          />
          <Route
            exact
            path="/business"
            element={
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                key={"business"}
                pagesize={6}
                country={"us"}
                category={"business"}
              />
            }
          />
          <Route
            exact
            path="/technology"
            element={
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                key={"technology"}
                pagesize={6}
                country={"us"}
                category={"technology"}
              />
            }
          />
          <Route
            exact
            path="/science"
            element={
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                key={"science"}
                pagesize={6}
                country={"us"}
                category={"science"}
              />
            }
          />
          <Route
            exact
            path="/entertainment"
            element={
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                key={"entertainment"}
                pagesize={6}
                country={"us"}
                category={"entertainment"}
              />
            }
          />
          <Route
            exact
            path="/health"
            element={
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                key={"health"}
                pagesize={6}
                country={"us"}
                category={"health"}
              />
            }
          />
          <Route
            exact
            path="/sports"
            element={
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                key={"sports"}
                pagesize={6}
                country={"us"}
                category={"sports"}
              />
            }
          />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
