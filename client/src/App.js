import React from "react";
import { BrowserRouter as Router, Routes, Route, Outlet } from "react-router-dom";





import Home from "./containers/Home";
import About from "./containers/About";
import Contact from "./containers/Contact";
import Apply from "./containers/Apply";
import Listen from "./containers/Listen";
import Schedule from "./containers/Schedule";
import Frequency from "./containers/Frequency";
import NoMatch from "./containers/NoMatch";

import Header from "./components/Header";
import Footer from "./components/Footer";

import "./App.css";





function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/apply" element={<Apply />} />
            <Route path="/listen" element={<Listen />} />
            <Route path="/schedule" element={<Schedule />} />
            <Route path="/frequency" element={<Frequency />} />
            {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
            <Route path="*" element={<NoMatch />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;


function Layout() {



  return (
    <div>
      {/* A "layout route" is a good place to put markup you want to
          share across all the pages on your site, like navigation. */}
      <Header />


      {/* An <Outlet> renders whatever child route is currently active,
          so you can think about this <Outlet> as a placeholder for
          the child routes we defined above. */}
      <Outlet />


      <Footer />
    </div>
  );
}


